// 加载幕布 / 页面转场的调度。只负责“什么时候遮住、什么时候拉开”，不触碰任何数据逻辑。
import { nextTick } from 'vue';

let curtain = null;

export function registerCurtain(api) {
  curtain = api;
}

// 需要等 3D 头盔就绪再揭幕的页面
const STAGE_ROUTES = ['home', '404'];

const LABELS = {
  home: 'Lights out',
  Postlist: 'The journal',
  post: 'Reading',
  friends: 'The paddock',
  404: 'Off track',
};

function labelFor(route) {
  if (route.path.startsWith('/admin')) return 'Pit wall';
  return LABELS[route.name] || 'Next stop';
}

function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function waitStage(onProgress, timeout = 7000) {
  return new Promise((resolve) => {
    const onP = (e) => onProgress && onProgress(e.detail);
    const done = () => {
      clearTimeout(timer);
      window.removeEventListener('away:stage-ready', done);
      window.removeEventListener('away:stage-progress', onP);
      resolve();
    };
    const timer = setTimeout(done, timeout);
    window.addEventListener('away:stage-ready', done);
    window.addEventListener('away:stage-progress', onP);
  });
}

function windowLoaded() {
  if (document.readyState === 'complete') return Promise.resolve();
  return new Promise((r) => window.addEventListener('load', r, { once: true }));
}

export function setupTransitions(router) {
  let first = true;

  router.beforeEach(async (to, from) => {
    if (first || to.path === from.path || !curtain) return true;
    await curtain.cover(labelFor(to));
    return true;
  });

  router.afterEach(async (to, from, failure) => {
    if (failure) {
      if (!first && curtain) curtain.reveal();
      return;
    }
    const progress = (p) => curtain && curtain.setProgress(p);
    const needsStage = STAGE_ROUTES.includes(to.name);
    const stage = needsStage ? waitStage((p) => progress(0.55 + p * 0.45)) : Promise.resolve();

    await nextTick();
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (first) {
      first = false;
      const fonts = (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => progress(0.3));
      const loaded = windowLoaded().then(() => progress(0.55));
      await Promise.all([fonts, loaded, stage, delay(1500)]);
    } else {
      await Promise.all([stage, delay(280)]);
    }
    progress(1);
    if (curtain) await curtain.reveal();
  });
}
