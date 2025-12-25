<template>
  <div class="markdown-renderer">
    <MdPreview
      v-if="content"
      :modelValue="content"
      theme="dark"
      :mdHeadingId="generateHeadingId"
    />
    <div v-else class="loading">Loading...</div>
  </div>
</template>

<script>
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

export default {
  name: 'MarkdownRenderer',
  components: {
    MdPreview
  },
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  methods: {
    generateHeadingId(text, level, index) {
      // Use a simple, reliable index-based ID to ensure consistency
      return `heading-${index}`;
    },
    // Manually add hover anchor links because MdPreview doesn't create them
    addHeadingAnchors() {
        if (!this.$el) return;
        const headings = this.$el.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach(heading => {
            if (heading.querySelector('.header-anchor')) return;
            const id = heading.getAttribute('id');
            if (!id) return;
            const anchor = document.createElement('a');
            anchor.className = 'header-anchor';
            anchor.href = `#${id}`;
            anchor.innerHTML = '#';
            heading.prepend(anchor);
        });
    },
    addCopyButtons() {
      if (!this.$el) return;
      const pres = this.$el.querySelectorAll('pre');
      pres.forEach(pre => {
        if (pre.querySelector('.copy-code-button')) return;
        pre.style.position = 'relative';
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path></svg>`;
        button.addEventListener('click', () => {
          const code = pre.querySelector('code');
          if (code) {
            navigator.clipboard.writeText(code.innerText).then(() => {
              button.style.color = '#bf87ff'; // Light purple
              setTimeout(() => { button.style.color = '#dcdcdc'; }, 1500);
            }).catch(err => {
              console.error('Failed to copy text: ', err);
            });
          }
        });
        pre.appendChild(button);
      });
    },
    handleRender() {
      this.$nextTick(() => {
        if (this.$el) {
          const previewWrapper = this.$el.querySelector('.md-editor-preview-wrapper') || this.$el;
          this.$emit('rendered', previewWrapper);
          this.addCopyButtons();
          this.addHeadingAnchors();
        }
      });
    }
  },
  mounted() {
    this.handleRender();
  },
  updated() {
    this.handleRender();
  }
};
</script>

<style scoped>
.markdown-renderer {
  width: 100%;
  background-color: transparent;
}

/* Deep overrides for MdPreview */
:deep(.md-editor-dark) {
  background-color: rgb(37, 45, 56) !important;
}
:deep(.md-editor-preview-wrapper) {
  padding: 0;
}
:deep(.md-editor-preview) {
  color: rgb(196, 198, 201);
  font-size: 16px;
  line-height: 1.7;
}

:deep(.md-editor-preview h1),
:deep(.md-editor-preview h2),
:deep(.md-editor-preview h3),
:deep(.md-editor-preview h4),
:deep(.md-editor-preview h5),
:deep(.md-editor-preview h6) {
  position: relative;
  color: #9cc5e2;
  border-bottom: 1px solid rgba(156, 197, 226, 0.2);
}

/* FIX: Vertically centered anchor styles */
:deep(.header-anchor) {
  position: absolute;
  left: -1em;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.9em;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  text-decoration: none;
  color: #9cc5e2;
}

:deep(h1:hover .header-anchor),
:deep(h2:hover .header-anchor),
:deep(h3:hover .header-anchor),
:deep(h4:hover .header-anchor),
:deep(h5:hover .header-anchor),
:deep(h6:hover .header-anchor) {
    opacity: 1;
}

:deep(.md-editor-preview hr) {
  border: none;
  height: 1px;
  background-color: #444 !important;
  margin: 2em 0;
}

/* Code block styles */
:deep(.md-editor-preview pre) {
  position: relative;
  background-color: rgb(13, 13, 13) !important;
  border: 1px solid #444 !important;
  border-radius: 6px;
  margin-bottom: 1.5em;
  padding: 0;
}
:deep(.md-editor-code-lang) {
  display: none;
}
:deep(.md-editor-preview pre > code) {
  display: block;
  padding: 1em;
  background-color: transparent !important;
}

/* FIX: Inline code color */
:deep(.md-editor-preview code:not(pre > code)) {
  background-color: rgba(116, 143, 166, 0.2) !important;
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  font-size: 0.9em;
  padding: 0.1em 0.2em;
  border-radius: 4px;
  color: #e0e0e0;
}

/* Alert Styles */
:deep(.md-editor-alert-tip) {
  border-left-color: #2f81f7 !important;
  background-color: rgba(47, 129, 247, 0.1) !important;
}
:deep(.md-editor-alert-tip-title) {
  color: #58a6ff !important;
}

/* Copy Button */
:deep(.copy-code-button) {
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #3a3a3a;
  color: #dcdcdc;
  border: 1px solid #555;
  border-radius: 4px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  padding: 0;
}
:deep(pre:hover .copy-code-button) {
  opacity: 1;
}
:deep(.copy-code-button:hover) {
  background-color: #4a4a4a;
}
</style>
