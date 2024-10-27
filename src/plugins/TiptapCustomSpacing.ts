import { Node, mergeAttributes } from '@tiptap/core';

export const TiptapCustomSpacing = Node.create({
  name: 'customSpacing',

  group: 'block',
  content: 'inline*',// 可以根據需要修改為特定的 inline 元素
  inline: false,
  selectable: true,

  addAttributes() {
    return {
      minHeight: {
        default: null,
        parseHTML: element => element.style.minHeight,
        renderHTML: attributes => {
          return attributes.minHeight ? { style: `min-height: ${attributes.minHeight}px;` } : {};
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes), 0];
  },
});