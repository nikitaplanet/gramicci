import {Node} from '@tiptap/core';

export const TipTapImageLink = Node.create({
	name: 'imageLink', // 新的 Node 名稱
	group: 'inline', // 依然是 inline 元素
	inline: true,
	atom: true,

	// 定義圖片與連結的 HTML 標籤
	renderHTML({HTMLAttributes}) {
		return [
			'a',
			{href: HTMLAttributes.href, target: '_blank', class: HTMLAttributes.class}, // 包裹圖片的連結
			['img', {...HTMLAttributes, src: HTMLAttributes.src, class: '', alt: HTMLAttributes.alt || 'Image'}],
		];
	},

	// 定義圖片和連結的 schema
	addAttributes() {
		return {
			src: {
				default: null, // 圖片的 URL
			},
			href: {
				default: null, // 連結的 URL
			},
			alt: {
				default: '', // 圖片的替代文字
			},
			class: {
				default: 'image-link-button',
			},
		};
	},

	// 定義在 Tiptap 中如何轉換成內容
	parseHTML() {
		return [
			{
				tag: 'a[href].image-link-button img',
			},
		];
	},

	// 定義可以用的指令，來插入圖片與連結
	addCommands() {
		return {
			insertImageLink:
				(attributes) =>
				({commands}) => {
					return commands.insertContent({
						type: this.name,
						attrs: attributes,
					});
				},
		};
	},
});
