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
			setFigure: (options: {src: string; alt?: string; title?: string; caption?: string; captionColor?: string}) => ReturnType;

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
		const {src, alt, title, ...rest} = HTMLAttributes;

		return [
			'figure',
			this.options.HTMLAttributes,
			['img', mergeAttributes({src, alt, title, draggable: false, contenteditable: false})],
			['figcaption', 0],
		];
	},

	addCommands() {
		return {
			setFigure:
				({caption, captionColor, ...attrs}) =>
				({chain, tr, commands}) => {
					try {
						let captionContent = [];

						// 💡 修正邏輯：若有 captionColor，即使沒 caption 也建立空 text node，保留顏色
						if (caption || captionColor) {
							const textNode: any = {
								type: 'text',
								text: caption || '\u200B',
							};

							if (captionColor) {
								textNode.marks = [
									{
										type: 'textStyle',
										attrs: {
											color: captionColor,
										},
									},
								];
							}

							captionContent = [textNode];
						}

						const {from} = tr.selection;

						const figureNode = {
							type: this.name,
							attrs,
							content: captionContent,
						};

						return chain()
							.insertContentAt(from, figureNode)
							.command(({tr: newTr, commands: newCommands}) => {
								try {
									const {doc} = newTr;

									let figurePos = -1;
									doc.descendants((node, pos) => {
										if (node.type.name === this.name && figurePos === -1) {
											figurePos = pos;
											return false;
										}
									});

									if (figurePos !== -1) {
										const figureNode = doc.nodeAt(figurePos);
										const captionPos = figurePos + (figureNode?.firstChild?.nodeSize ?? 0) + 1;
										const safePos = Math.min(Math.max(captionPos, 0), doc.content.size);

										return newCommands.setTextSelection(safePos);
									}

									return newCommands.setTextSelection(doc.content.size);
								} catch (error) {
									console.error('設置游標位置時發生錯誤:', error);
									return true;
								}
							})
							.run();
					} catch (error) {
						console.error('setFigure 命令執行時發生錯誤:', error);
						return false;
					}
				},

			imageToFigure:
				() =>
				({tr, commands}) => {
					const {doc, selection} = tr;
					const {from, to} = selection;
					const images = findChildrenInRange(doc, {from, to}, (node) => node.type.name === 'image');

					if (!images.length) return false;

					const tracker = new Tracker(tr);

					return commands
						.forEach(images, ({node, pos}) => {
							const mapResult = tracker.map(pos);
							if (mapResult.deleted) return false;

							const range = {
								from: mapResult.position,
								to: mapResult.position + node.nodeSize,
							};

							return commands.insertContentAt(range, {
								type: this.name,
								attrs: {
									src: node.attrs.src,
									alt: node.attrs.alt,
									title: node.attrs.title,
								},
							});
						})
						.run();
				},

			figureToImage:
				() =>
				({tr, commands}) => {
					const {doc, selection} = tr;
					const {from, to} = selection;
					const figures = findChildrenInRange(doc, {from, to}, (node) => node.type.name === this.name);

					if (!figures.length) return false;

					const tracker = new Tracker(tr);

					return commands
						.forEach(figures, ({node, pos}) => {
							const mapResult = tracker.map(pos);
							if (mapResult.deleted) return false;

							const range = {
								from: mapResult.position,
								to: mapResult.position + node.nodeSize,
							};

							return commands.insertContentAt(range, {
								type: 'image',
								attrs: {
									src: node.attrs.src,
									alt: node.attrs.alt,
									title: node.attrs.title,
								},
							});
						})
						.run();
				},
		};
	},

	addInputRules() {
		return [
			nodeInputRule({
				find: inputRegex,
				type: this.type,
				getAttributes: (match) => {
					const [, alt, src, title] = match;
					return {src, alt, title};
				},
			}),
		];
	},
});
