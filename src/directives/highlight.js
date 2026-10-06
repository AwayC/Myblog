// v-high —— 还原原站 data-anim-high 的文字出场：
// 每一行先被一块色块盖住、文字从左往右刷出来，再由色块向右收走（逐行错开 0.15s）。
// 只读 DOM 位置、改 clip-path，不移动 Vue 管理的节点，所以绑定在动态文本上也安全。
//
// 用法：v-high                         默认橙色
//       v-high="'soft'"                 颜色：accent | soft | ink
//       v-high="{ color, delay, key }"  delay 毫秒；key 变化时重新播放

const COLORS = {
  accent: 'var(--c-accent)',
  soft: '#34322c',
  ink: 'var(--c-ink)',
};
const DUR = 0.6; // 文字展开
const BLOCK = 0.6; // 色块收走
const STAGGER = 0.15; // 行间错开
const AFTER_CURTAIN = 0.35; // 转场幕布拉开后再开始

const power2Out = (t) => 1 - (1 - t) * (1 - t);
const power2InOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);

const reduced = typeof window !== 'undefined' && window.matchMedia
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let layer = null;
let observer = null;
const running = new Set();
let raf = 0;

function getLayer() {
  if (!layer) {
    layer = document.createElement('div');
    layer.className = 'high-layer';
    layer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(layer);
  }
  return layer;
}

function options(binding) {
  const v = binding.value;
  if (typeof v === 'string') return { color: v, delay: 0, key: undefined };
  return { color: 'accent', delay: 0, key: undefined, ...(v || {}) };
}

// 按“行”收集文字（和图标等叶子元素）的矩形，坐标相对元素自身
function measureLines(el) {
  const box = el.getBoundingClientRect();
  const rects = [];
  const range = document.createRange();
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let node = walker.currentNode;
  while (node) {
    if (node.nodeType === 3) {
      if (node.textContent.trim()) {
        range.selectNodeContents(node);
        for (const r of range.getClientRects()) if (r.width > 0.5 && r.height > 0.5) rects.push(r);
      }
    } else if (node !== el && !node.childNodes.length) {
      // 图标、装饰线这类没有子节点的元素也算进所在行
      const r = node.getBoundingClientRect();
      if (r.width > 0.5 && r.height > 0.5) rects.push(r);
    }
    node = walker.nextNode();
  }

  rects.sort((a, b) => a.top - b.top);
  const lines = [];
  rects.forEach((r) => {
    const mid = (r.top + r.bottom) / 2;
    const line = lines.find((l) => mid > l.top && mid < l.bottom);
    if (line) {
      line.left = Math.min(line.left, r.left);
      line.right = Math.max(line.right, r.right);
      line.top = Math.min(line.top, r.top);
      line.bottom = Math.max(line.bottom, r.bottom);
    } else {
      lines.push({ left: r.left, right: r.right, top: r.top, bottom: r.bottom });
    }
  });
  lines.sort((a, b) => a.top - b.top);
  return lines.map((l) => ({
    x: l.left - box.left,
    y: l.top - box.top,
    w: l.right - l.left,
    h: l.bottom - l.top,
  }));
}

function finish(state) {
  running.delete(state);
  state.blocks.forEach((b) => b.remove());
  state.blocks = [];
  state.el.style.clipPath = '';
  state.done = true;
}

function frame(now) {
  raf = 0;
  running.forEach((state) => {
    const { el } = state;
    if (!el.isConnected) return finish(state);
    const t = (now - state.start) / 1000;
    if (t < 0) {
      raf = raf || requestAnimationFrame(frame);
      return;
    }
    const box = el.getBoundingClientRect();
    const lines = measureLines(el);
    let path = '';
    let allDone = true;

    // 相邻两行（行距很紧时会重叠）在中线处切开，避免下一行提前露出上一行的字
    const last = lines.length - 1;
    const cuts = lines.slice(1).map((l, i) => (lines[i].y + lines[i].h + l.y) / 2);

    lines.forEach((l, i) => {
      const lt = t - i * STAGGER;
      const pad = l.h * 0.2;
      const top = i > 0 ? cuts[i - 1] : l.y;
      const bottom = i < last ? cuts[i] : l.y + l.h;
      const clipTop = i > 0 ? top : top - pad;
      const clipBottom = i < last ? bottom : bottom + pad;
      const c = power2Out(clamp01(lt / DUR));
      const s = 1 - power2InOut(clamp01((lt - DUR / 2) / BLOCK));
      if (lt < DUR / 2 + BLOCK) allDone = false;

      // 文字区（首尾两行上下稍放宽，免得截掉字形的上伸/下伸）
      const shown = l.w * c;
      if (shown > 0) path += `M${l.x - 2} ${clipTop}H${l.x + shown}V${clipBottom}H${l.x - 2}Z`;

      // 色块：从行尾向左收，并且只出现在已展开的部分
      let b = state.blocks[i];
      if (!b) {
        b = document.createElement('div');
        b.className = 'high-block';
        b.style.background = state.color;
        getLayer().appendChild(b);
        state.blocks[i] = b;
      }
      const from = Math.max(l.x, l.x + l.w * (1 - s));
      const to = l.x + shown;
      const w = to - from;
      if (w > 0.5 && s > 0) {
        b.style.display = 'block';
        b.style.transform = `translate3d(${box.left + from}px, ${box.top + top}px, 0)`;
        b.style.width = `${w}px`;
        b.style.height = `${bottom - top}px`;
      } else {
        b.style.display = 'none';
      }
    });
    state.blocks.splice(lines.length).forEach((b) => b.remove());

    if (allDone) return finish(state);
    el.style.clipPath = path ? `path('${path}')` : 'inset(0 100% 0 0)';
    raf = raf || requestAnimationFrame(frame);
  });
}

function play(el) {
  const state = el._high;
  if (!state || state.done || running.has(state)) return;
  const covered = document.documentElement.classList.contains('is-covered');
  if (covered) {
    // 等转场幕布拉开
    if (!state.waitReveal) {
      state.waitReveal = () => {
        window.removeEventListener('away:reveal', state.waitReveal);
        state.waitReveal = null;
        state.extra = AFTER_CURTAIN;
        play(el);
      };
      window.addEventListener('away:reveal', state.waitReveal);
    }
    return;
  }
  state.start = performance.now() + (state.delay / 1000 + (state.extra || 0)) * 1000;
  state.extra = 0;
  running.add(state);
  if (!raf) raf = requestAnimationFrame(frame);
}

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        observer.unobserve(e.target);
        play(e.target);
      });
    }, { rootMargin: '0px 0px -10% 0px' });
  }
  return observer;
}

function arm(el, binding) {
  const opt = options(binding);
  const prev = el._high;
  if (prev) {
    if (prev.waitReveal) window.removeEventListener('away:reveal', prev.waitReveal);
    running.delete(prev);
    prev.blocks.forEach((b) => b.remove());
  }
  el._high = {
    el,
    colorName: opt.color,
    color: COLORS[opt.color] || opt.color,
    delay: opt.delay || 0,
    key: opt.key,
    blocks: [],
    done: false,
  };
  el.style.clipPath = 'inset(0 100% 0 0)';
  getObserver().observe(el);
}

function release(el) {
  const state = el._high;
  if (!state) return;
  if (observer) observer.unobserve(el);
  if (state.waitReveal) window.removeEventListener('away:reveal', state.waitReveal);
  finish(state);
  delete el._high;
}

const enabled = () => !reduced && typeof IntersectionObserver !== 'undefined';

// 给 v-html 渲染出来的元素用（比如文章正文里的标题）
export function highlight(el, value) {
  if (enabled()) arm(el, { value });
}
export { release };

// keep-alive 页面再次进入时，让里面已经播过的文字重新刷一遍
export function replay(root) {
  if (!enabled() || !root || !root.querySelectorAll) return;
  root.querySelectorAll('*').forEach((el) => {
    const state = el._high;
    if (!state || !state.done) return;
    arm(el, { value: { color: state.colorName, delay: state.delay, key: state.key } });
  });
}

export default {
  mounted(el, binding) {
    if (enabled()) arm(el, binding);
  },
  updated(el, binding) {
    if (!el._high) return;
    const key = options(binding).key;
    if (key !== el._high.key) {
      getObserver().unobserve(el);
      arm(el, binding);
    }
  },
  unmounted: release,
};
