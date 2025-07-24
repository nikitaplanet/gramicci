import {findChildrenInRange, mergeAttributes, Node, nodeInputRule, Tracker} from '@tiptap/core';

export interface FigureOptions {
	HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
	interface Commands<ReturnType> {
		figure: {
			/**
			 * Add a figure element
			 */
			setFigure: (options: {src: string; alt?: string; title?: string; caption?: string}) => ReturnType;

			/**
			 * Converts an image to a figure
			 */
			imageToFigure: () => ReturnType;

			/**
			 * Converts a figure to an image
			 */
			figureToImage: () => ReturnType;
		};
	}
}

export const inputRegex = /!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/;

export const Figure = Node.create<FigureOptions>({
	name: 'figure',

	addOptions() {
		return {
			HTMLAttributes: {},
		};
	},

	group: 'block',

	content: 'inline*',

	draggable: true,

	isolating: true,

	addAttributes() {
		return {
			src: {
				default: null,
				parseHTML: (element) => element.querySelector('img')?.getAttribute('src'),
			},

			alt: {
				default: null,
				parseHTML: (element) => element.querySelector('img')?.getAttribute('alt'),
			},

			title: {
				default: null,
				parseHTML: (element) => element.querySelector('img')?.getAttribute('title'),
			},
		};
	},

	parseHTML() {
		return [
			{
				tag: 'figure',
				contentElement: 'figcaption',
			},
		];
	},

	renderHTML({HTMLAttributes}) {
		return [
			'figure',
			this.options.HTMLAttributes,
			['img', mergeAttributes(HTMLAttributes, {draggable: false, contenteditable: false})],
			['figcaption', 0],
		];
	},

	addCommands() {
		return {
			setFigure:
				({caption, captionColor, ...attrs}) =>
				({chain, editor}) => {
					console.log('setFigure 接收到的參數:', {caption, captionColor, attrs});

					// 建立 caption 內容，直接包含顏色 mark
					let captionContent = [];

					if (caption) {
						const textNode = {
							type: 'text',
							text: caption,
						};

						// 如果有顏色，添加 textStyle mark
						if (captionColor && editor.schema.marks.textStyle) {
							textNode.marks = [
								{
									type: 'textStyle',
									attrs: {color: captionColor},
								},
							];
						}

						captionContent = [textNode];
					}

					// 插入 figure
					return chain()
						.insertContent({
							type: this.name,
							attrs,
							content: captionContent,
						})
						.command(({tr, commands}) => {
							const {doc, selection} = tr;
							const position = doc.resolve(selection.to - 2).end();
							return commands.setTextSelection(position);
						})
						.run();
				},

			imageToFigure:
				() =>
				({tr, commands}) => {
					const {doc, selection} = tr;
					const {from, to} = selection;
					const images = findChildrenInRange(doc, {from, to}, (node) => node.type.name === 'image');

					if (!images.length) {
						return false;
					}

					const tracker = new Tracker(tr);

					return commands.forEach(images, ({node, pos}) => {
						const mapResult = tracker.map(pos);

						if (mapResult.deleted) {
							return false;
						}

						const range = {
							from: mapResult.position,
							to: mapResult.position + node.nodeSize,
						};

						return commands.insertContentAt(range, {
							type: this.name,
							attrs: {
								src: node.attrs.src,
							},
						});
					});
				},

			figureToImage:
				() =>
				({tr, commands}) => {
					const {doc, selection} = tr;
					const {from, to} = selection;
					const figures = findChildrenInRange(doc, {from, to}, (node) => node.type.name === this.name);

					if (!figures.length) {
						return false;
					}

					const tracker = new Tracker(tr);

					return commands.forEach(figures, ({node, pos}) => {
						const mapResult = tracker.map(pos);

						if (mapResult.deleted) {
							return false;
						}

						const range = {
							from: mapResult.position,
							to: mapResult.position + node.nodeSize,
						};

						return commands.insertContentAt(range, {
							type: 'image',
							attrs: {
								src: node.attrs.src,
							},
						});
					});
				},
		};
	},

	addInputRules() {
		return [
			nodeInputRule({
				find: inputRegex,
				type: this.type,
				getAttributes: (match) => {
					const [, src, alt, title] = match;

					return {src, alt, title};
				},
			}),
		];
	},
});
