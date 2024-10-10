import {TextStyle} from '@tiptap/extension-text-style';

export const LineHeightTextStyle = TextStyle.extend({
	addAttributes() {
		return {
			...this.parent?.(),
			lineHeight: {
				default: null,
				parseHTML: (element) => element.style.lineHeight || null,
				renderHTML: (attributes) => {
					if (!attributes.lineHeight) {
						return {};
					}

					return {
						style: `line-height: ${attributes.lineHeight}`,
					};
				},
			},
		};
	},
});
