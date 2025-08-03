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
				({chain, tr, commands}) => {
					console.log('setFigure 接收到的參數:', {caption, captionColor, attrs});

					try {
						// 建立 caption 內容
						let captionContent = [];

						if (caption) {
							// 如果有指定顏色，建立帶有顏色標記的文字節點
							if (captionColor) {
								const textNode = {
									type: 'text',
									text: caption,
									marks: [
										{
											type: 'textStyle',
											attrs: {
												color: captionColor,
											},
										},
									],
								};
								captionContent = [textNode];
							} else {
								// 沒有指定顏色的情況
								const textNode = {
									type: 'text',
									text: caption,
								};
								captionContent = [textNode];
							}
						}

						// 取得當前選取範圍
						const {from, to} = tr.selection;

						// 插入 figure 節點
						const figureNode = {
							type: this.name,
							attrs,
							content: captionContent,
						};

						// 插入內容並設置正確的游標位置
						return chain()
							.insertContentAt(from, figureNode)
							.command(({tr: newTr, commands: newCommands}) => {
								try {
									const {doc} = newTr;

									// 找到剛插入的 figure 節點
									let figurePos = -1;
									doc.descendants((node, pos) => {
										if (node.type.name === this.name && figurePos === -1) {
											figurePos = pos;
											return false;
										}
									});

									if (figurePos !== -1) {
										// 計算 figcaption 的位置
										const figureNode = doc.nodeAt(figurePos);
										if (figureNode) {
											// 設置游標到 figcaption 內部
											const captionPos = figurePos + figureNode.firstChild?.nodeSize + 1 || figurePos + 1;

											// 確保位置在有效範圍內
											const safePos = Math.min(Math.max(captionPos, 0), doc.content.size);

											return newCommands.setTextSelection(safePos);
										}
									}

									// 如果找不到 figure，設置到文檔末尾
									return newCommands.setTextSelection(doc.content.size);
								} catch (error) {
									console.error('設置游標位置時發生錯誤:', error);
									return true; // 即使設置游標失敗也返回 true，避免整個命令失敗
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
								alt: node.attrs.alt,
								title: node.attrs.title,
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
								alt: node.attrs.alt,
								title: node.attrs.title,
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
					const [, alt, src, title] = match;
					return {src, alt, title};
				},
			}),
		];
	},
});
