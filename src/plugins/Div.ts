import { Node, mergeAttributes } from '@tiptap/core';

export const Div = Node.create({
  name: 'Div',
  group: 'block',
  content: 'inline*', // 可以根據需要修改為特定的 inline 元素
  inline: false,
  selectable: true,

  addAttributes() {
    return {
      className: {
        default: 'custom-spacing-class', // 默認 class
        renderHTML: attributes => {
          return attributes.className ? { class: attributes.className } : {};
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