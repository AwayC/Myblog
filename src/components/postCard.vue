<template>
    <article class="my-card" :class="{ 'has-media': $slots.has_img }" @pointermove="onMove" @pointerleave="onLeave">
        <!-- 切角卡片：外层是描边色，内层(::before)是底色 -->
        <div class="card-inner">
            <div class="card-media">
                <slot v-if="$slots.has_img" name="has_img"></slot>
                <div v-else class="card-cover" aria-hidden="true">
                    <svg class="cover-topo" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice">
                        <path v-for="(d, i) in topo" :key="i" :d="d" />
                    </svg>
                    <span class="cover-num">{{ String(index).padStart(2, '0') }}</span>
                    <span class="cover-glow"></span>
                </div>
                <span class="card-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4">
                        <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                </span>
            </div>

            <div class="card-body">
                <div class="tags">
                    <slot v-if="$slots.tags" name="tags"></slot>
                </div>

                <h2 class="card-title">
                    <slot name="header"></slot>
                </h2>

                <p class="card-summary">
                    <slot></slot>
                </p>

                <div class="card-meta">
                    <span class="meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
                            <circle cx="18" cy="18" r="4"></circle>
                            <path d="M15 3v4"></path>
                            <path d="M7 3v4"></path>
                            <path d="M3 11h16"></path>
                            <path d="M18 16.496v1.504l1 1"></path>
                        </svg>
                        <span class="time"><slot name="time"></slot></span>
                    </span>
                    <span v-if="$slots.views" class="meta-item views">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="12" r="2" />
                            <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                        </svg>
                        <span><slot name="views"></slot></span>
                    </span>
                </div>
            </div>
        </div>

        <!-- 右下角的标签页，原站“名人堂”卡片的造型 -->
        <div class="card-tab">
            <span>N°{{ String(index).padStart(2, '0') }}</span>
            <b v-if="year">{{ year }}</b>
        </div>
    </article>
</template>

<script>
// 用编号做种子，给没有封面的文章生成一张独一无二的等高线封面
function topoPaths(seed) {
    let s = (seed * 9301 + 49297) % 233280;
    const rand = () => (s = (s * 9301 + 49297) % 233280) / 233280;
    const cx = 40 + rand() * 120;
    const cy = 20 + rand() * 80;
    const paths = [];
    for (let k = 1; k <= 9; k++) {
        const r = k * 13;
        const pts = [];
        const wob = 0.18 + rand() * 0.12;
        const ph = rand() * Math.PI * 2;
        for (let a = 0; a <= 24; a++) {
            const t = (a / 24) * Math.PI * 2;
            const rr = r * (1 + Math.sin(t * 3 + ph + k * 0.4) * wob * 0.5 + Math.cos(t * 2 - ph) * wob * 0.3);
            pts.push(`${(cx + Math.cos(t) * rr * 1.3).toFixed(1)},${(cy + Math.sin(t) * rr).toFixed(1)}`);
        }
        paths.push(`M${pts.join(' L')} Z`);
    }
    return paths;
}

export default {
    name: "postCard",
    props: {
        index: { type: [Number, String], default: 0 },
        year: { type: [Number, String], default: '' },
    },
    computed: {
        topo() {
            return topoPaths(Number(this.index) || 1);
        },
    },
    methods: {
        // 轻微的 3D 倾斜，跟随鼠标
        onMove(e) {
            const r = this.$el.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            this.$el.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`);
            this.$el.style.setProperty('--ry', `${(x * 6).toFixed(2)}deg`);
            this.$el.style.setProperty('--gx', `${((x + 0.5) * 100).toFixed(1)}%`);
            this.$el.style.setProperty('--gy', `${((y + 0.5) * 100).toFixed(1)}%`);
        },
        onLeave() {
            this.$el.style.setProperty('--rx', '0deg');
            this.$el.style.setProperty('--ry', '0deg');
        },
    },
}
</script>

<style scoped>
.my-card {
    --tab-w: 132px;
    --tab-h: 30px;
    --cut: 18px;
    --line: rgba(242, 240, 233, 0.16);
    --fill: rgba(17, 17, 14, 0.94);
    position: relative;
    width: 100%;
    padding-bottom: var(--tab-h);
    transform: perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
    transition: transform 0.6s var(--ease-out);
    cursor: pointer;
}

/* 外轮廓（描边色）与内底色共享同一个多边形，内层缩进 1px */
.my-card::before,
.my-card::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    transition: background 0.4s ease;
}

.my-card::before {
    background: var(--line);
    clip-path: polygon(
        0 0, calc(100% - var(--cut)) 0, 100% var(--cut),
        100% 100%,
        calc(100% - var(--tab-w)) 100%,
        calc(100% - var(--tab-w) - var(--tab-h)) calc(100% - var(--tab-h)),
        0 calc(100% - var(--tab-h))
    );
}

.my-card::after {
    background: var(--fill);
    clip-path: polygon(
        1px 1px, calc(100% - var(--cut) - 0.4px) 1px, calc(100% - 1px) calc(var(--cut) + 0.4px),
        calc(100% - 1px) calc(100% - 1px),
        calc(100% - var(--tab-w) + 0.4px) calc(100% - 1px),
        calc(100% - var(--tab-w) - var(--tab-h) + 0.4px) calc(100% - var(--tab-h) - 1px),
        1px calc(100% - var(--tab-h) - 1px)
    );
}

.my-card:hover {
    --line: var(--c-accent);
}

.card-inner {
    position: relative;
    z-index: 1;
    padding: 10px 10px 0;
}

/* ---------- 封面 ---------- */
.card-media {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    border-radius: 6px 6px 6px 6px;
    background: #0d0d0b;
}

.card-media :deep(img) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1) brightness(0.7) contrast(1.05);
    transform: scale(1.02);
    transition: filter 0.6s ease, transform 1s var(--ease-out);
}

.my-card:hover .card-media :deep(img) {
    filter: none;
    transform: scale(1.07);
}

.card-cover {
    position: absolute;
    inset: 0;
}

.cover-topo {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
}

.cover-topo path {
    fill: none;
    stroke: rgba(242, 240, 233, 0.12);
    stroke-width: 0.6;
    transition: stroke 0.6s ease;
}

.my-card:hover .cover-topo path {
    stroke: rgba(255, 128, 0, 0.55);
}

.cover-num {
    position: absolute;
    left: 14px;
    bottom: 4px;
    font-family: var(--f-sans);
    font-weight: 900;
    font-stretch: 125%;
    font-size: clamp(4.5rem, 7vw, 6.5rem);
    line-height: 0.8;
    letter-spacing: -0.05em;
    /* 用投影拼外轮廓，避免可变字体重叠轮廓被分段描边 */
    color: #0d0d0b;
    filter:
        drop-shadow(1px 0 0 rgba(242, 240, 233, 0.3))
        drop-shadow(-1px 0 0 rgba(242, 240, 233, 0.3))
        drop-shadow(0 1px 0 rgba(242, 240, 233, 0.3))
        drop-shadow(0 -1px 0 rgba(242, 240, 233, 0.3));
    transition: color 0.5s ease, filter 0.5s ease;
}

.my-card:hover .cover-num {
    color: var(--c-accent);
    filter: drop-shadow(0 0 18px rgba(255, 128, 0, 0.45));
}

.cover-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255, 128, 0, 0.25), transparent 55%);
    opacity: 0;
    transition: opacity 0.5s ease;
}

.my-card:hover .cover-glow {
    opacity: 1;
}

.card-arrow {
    position: absolute;
    top: 10px;
    right: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 8px;
    background: rgba(12, 12, 10, 0.6);
    color: var(--c-ink);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    transition: all 0.45s var(--ease-out);
}

.my-card:hover .card-arrow {
    background: var(--c-accent);
    color: var(--c-accent-ink);
    transform: rotate(45deg);
}

/* ---------- 文字 ---------- */
.card-body {
    padding: 16px 8px 18px;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    min-height: 22px;
    margin: 0 -0.2em 10px;
}

.card-title {
    margin: 0 0 8px;
    font-family: var(--f-sans);
    font-weight: 800;
    font-size: clamp(1.15rem, 1.6vw, 1.4rem);
    line-height: 1.18;
    letter-spacing: -0.015em;
    color: var(--c-ink);
    transition: color 0.3s;
}

.my-card:hover .card-title {
    color: var(--c-accent);
}

.card-summary {
    margin: 0 0 16px;
    color: var(--c-ink-3);
    font-size: 0.88rem;
    line-height: 1.55;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    font-family: var(--f-mono);
    font-size: 0.68rem;
    letter-spacing: 0.04em;
    color: var(--c-ink-3);
}

.meta-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
}

/* ---------- 标签页 ---------- */
.card-tab {
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 0;
    width: var(--tab-w);
    height: var(--tab-h);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    padding-right: 14px;
    font-family: var(--f-sans);
    font-weight: 700;
    font-size: 0.74rem;
    color: var(--c-ink-2);
}

.card-tab b {
    font-weight: 800;
    color: var(--c-accent);
}

.my-card:hover .card-tab {
    color: var(--c-ink);
}
</style>
