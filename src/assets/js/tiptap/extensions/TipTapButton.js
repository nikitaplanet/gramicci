import {Node} from '@tiptap/core';

export const TipTapButton = Node.create({
	name: 'tiptapButton',

	group: 'inline', // 可以與其他 inline 元素並排出現
	inline: true,
	atom: true,

	// 定義按鈕的 HTML 標籤
	renderHTML({HTMLAttributes}) {
		return ['button', {...HTMLAttributes, class: 'tiptap-button'}, 'Click me'];
	},

	// 定義按鈕的 schema
	addAttributes() {
		return {
			class: {
				default: 'tiptap-button',
			},
		};
	},

	// 定義在 Tiptap 中如何轉換成內容
	parseHTML() {
		return [
			{
				tag: 'button.tiptap-button',
			},
		];
	},
});
