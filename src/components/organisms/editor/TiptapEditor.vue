<template>
	<div v-if="editor" :class="{'tiptapContent--showOuterBorder': isShowBorderOuter}" id="tiptap" class="tiptapContent">
		<div class="bg-tool-background sticky top-0 left-0 z-20 flex items-center justify-start flex-wrap">
			<LogoInTool />
			<CacheTool />
			<EditorStyleTool
				:isPreviewMobile="isPreviewMobile"
				:isShowBorderOuter="isShowBorderOuter"
				:isShowHtml="isShowHtml"
				@toggleBorderOuter="toggleBorderOuter"
				@toggleDevice="toggleDevice"
				@toggleHtml="toggleHtml" />
			<HeadingAndAlignTool :editor="editor" />
			<TextStyleTool :editor="editor" />
			<ListTool :editor="editor" />
			<InsertTool :editor="editor" />
			<TableEditTool :editor="editor" />
		</div>

		<div v-show="!isShowHtml" :class="{w767: isPreviewMobile}" class="w-full">
			<div
				:class="{'max-w-[1400px]': !isPreviewMobile, 'max-w-[400px] sm:max-w-full': isPreviewMobile}"
				class="flex flex-col w-11/12 min-h-96 mx-auto bg-white my-8 sm:w-full sm:my-0 sm:mb-8 md:my-0 md:mb-8">
				<EditorContent :editor="editor" />
				<div v-show="!isEditable" class="remarkBlog">
					<h5>
						尺寸數據皆為官方數值，可以參照手邊現有衣服尺寸比對大小。<br />
						平量數據將以「寬」表示 EX. 腰寬、臀寬、褲口寬 等<br />
						整圈數據將以「圍」表示 EX. 腰圍、臀圍、褲口圍 等 <br />
						為避免腰帶在洗滌中打卷纏繞，建議使用洗衣袋。<br />
						*調節環皆可透過單手輕鬆調節，切勿使用蠻力扯開，如不清楚使用方法，歡迎詢問。<br />
						*由於布料染色工法的特性，一開始著用時可能會有因爲汗水、雨水加上摩擦導致沾色到淺色布料的情況。<br />
						*淺色和深色衣物建議分開洗滌。<br />
						*貼身衣物類和配件類商品，皆不提供退換貨服務，購買前請謹慎思考。<br />
						*如有其他產品相關問題，歡迎透過官網訊息或官方社群媒體訊息詢問，謝謝！<br />
					</h5>
				</div>
			</div>
		</div>

		<div v-if="isShowHtml">
			<div class="w-full max-w-[800px] m-auto my-8 sm:my-0">
				<ExportTemplate :savedData="contentResult" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {Editor, EditorContent} from '@tiptap/vue-3';
import DragHandle from '@tiptap-pro/extension-drag-handle';
import NodeRange from '@tiptap-pro/extension-node-range';
import Paragraph from '@tiptap/extension-paragraph';
import Document from '@tiptap/extension-document';
import History from '@tiptap/extension-history';
import Heading from '@tiptap/extension-heading';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import Link from '@tiptap/extension-link';
import {HardBreak} from '@tiptap/extension-hard-break';
import {Blockquote} from '@tiptap/extension-blockquote';
import {CharacterCount} from '@tiptap/extension-character-count';
import {Youtube} from '@tiptap/extension-youtube';
import Dropcursor from '@tiptap/extension-dropcursor';
import {HorizontalRule} from '@tiptap/extension-horizontal-rule';
import {Table} from '@tiptap/extension-table';
import {TableRow} from '@tiptap/extension-table-row';
import {TableHeader} from '@tiptap/extension-table-header';
import {TableCell} from '@tiptap/extension-table-cell';
import Gapcursor from '@tiptap/extension-gapcursor';
import Image from '@tiptap/extension-image';
import Text from '@tiptap/extension-text';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import Fontsize from 'tiptap-extension-font-size';
import {TipTapImageLink} from '@assets/js/tiptap/extensions/ImageLink';
import {Figure} from '@assets/js/tiptap/extensions/Figure';
import {Color} from '@tiptap/extension-color';
import {cssStyle} from '@/assets/js/cssStyle.js';
import {AllSelection} from 'prosemirror-state';
import {LineHeightTextStyle} from '@assets/js/tiptap/extensions/LineHeight';

import HeadingAndAlignTool from '@components/organisms/editor/tiptap/groupTool/HeadingAndAlignTool.vue';
import CacheTool from '@components/organisms/editor/tiptap/groupTool/CacheTool.vue';
// import HistoryTool from '@components/organisms/editor/tiptap/groupTool/HistoryTool.vue';
import TextStyleTool from '@components/organisms/editor/tiptap/groupTool/TextStyleTool.vue';
import ListTool from '@components/organisms/editor/tiptap/groupTool/ListTool.vue';
import InsertTool from '@components/organisms/editor/tiptap/groupTool/InsertTool.vue';
import TableEditTool from '@components/organisms/editor/tiptap/groupTool/TableEditTool.vue';
import EditorStyleTool from '@components/organisms/editor/tiptap/groupTool/EditorStyleTool.vue';

import ExportTemplate from '@components/organisms/editor/ExportTemplate.vue';
import LogoInTool from '@components/organisms/editor/tiptap/groupTool/LogoInTool.vue';

export default {
	components: {
		LogoInTool,
		CacheTool,
		HeadingAndAlignTool,
		EditorStyleTool,
		TableEditTool,
		InsertTool,
		ListTool,
		TextStyleTool,
		// HistoryTool,
		EditorContent,
		ExportTemplate,
	},
	data() {
		return {
			editor: null,
			contentResult: '',
			isEditable: true,
			isPreviewMobile: false,
			isShowCommonTextList: false,
			isShowBorderOuter: false,
			isShowHtml: false,
		};
	},
	mounted() {
		this.editor = new Editor({
			editorProps: {
				attributes: {
					class: 'blog',
				},
				handleKeyDown(view, event) {
					// 處理 Command+A 或 Ctrl+A 鍵盤事件
					if ((event.metaKey || event.ctrlKey) && event.key === 'a') {
						event.preventDefault();

						const {state, dispatch} = view;
						const {doc, tr} = state;
						const allSelection = new AllSelection(doc); // 使用 ProseMirror 的全選

						dispatch(tr.setSelection(allSelection)); // 更新為全選狀態
						return true;
					}
					return false;
				},
			},
			extensions: [
				Paragraph,
				Document,
				Text,
				History,
				Heading.configure({
					levels: [1, 2, 3, 4, 5, 6],
				}),
				TextAlign.configure({
					types: ['heading', 'paragraph'],
				}),
				TextStyle,
				FontFamily,
				Bold,
				Italic,
				Underline,
				Strike,
				Fontsize,
				ListItem,
				BulletList,
				OrderedList,
				NodeRange.configure({
					key: null,
				}),
				Link.configure({
					openOnClick: false,
				}),
				HardBreak,
				Blockquote,
				CharacterCount,
				Youtube,
				Dropcursor.configure({
					width: 2,
					color: '#2563eb',
				}),
				HorizontalRule,
				Table.configure({
					resizable: true,
					allowTableNodeSelection: true,
				}),
				TableRow,
				TableHeader,
				TableCell,
				Gapcursor,
				Image.configure({
					inline: true,
				}),
				DragHandle.configure({
					render() {
						const element = document.createElement('div');

						element.classList.add('custom-drag-handle');

						return element;
					},
				}),
				Placeholder.configure({
					placeholder: '輸入內容...',
				}),
				TipTapImageLink,
				Figure.configure({
					inline: true,
				}),
				Color,
				LineHeightTextStyle,
			],
			content: '',
			onUpdate: ({editor}) => {
				this.contentResult = this.generateHTML(editor);
			},
		});

		setTimeout(() => (this.contentResult = this.generateHTML(this.editor)), 250);
	},
	beforeUnmount() {
		this.editor?.destroy();
	},
	methods: {
		generateHTML(editor) {
			return `<div class="blog">${editor?.getHTML()}</div>` + `<style>${cssStyle}</style>`;
		},
		insertCommonText(text) {
			this.editor.chain().focus().insertContent(text).run();
		},
		getEditorHTML() {
			return this.contentResult;
		},
		toggleDevice(val) {
			this.isPreviewMobile = val;
		},
		toggleBorderOuter() {
			this.isShowBorderOuter = !this.isShowBorderOuter;
		},
		toggleHtml() {
			this.isShowHtml = !this.isShowHtml;
		},
	},
};
</script>

<style lang="scss">
#tiptap {
	min-height: calc(100vh - 96px - 40px);
}

.tiptapContent {
	&--showOuterBorder {
		.ProseMirror {
			border: 1px solid #dfdfdf;
		}
	}
}

.ProseMirror {
	position: relative;

	&:focus {
		outline: 0 !important; /* focus:!outline-0 */
	}
}

::selection {
	background-color: #e5c3ff;
}

.ProseMirror-noderangeselection {
	*::selection {
		background: transparent;
	}

	* {
		caret-color: transparent;
	}
}

.ProseMirror-selectednode,
.ProseMirror-selectednoderange {
	position: relative;

	&::before {
		position: absolute;
		pointer-events: none;
		z-index: -1;
		content: '';
		top: -0.2rem;
		left: -0.2rem;
		right: -0.2rem;
		bottom: -0.2rem;
		background-color: #333333;
		border-radius: 0.2rem;
	}
}

.custom-drag-handle {
	&::after {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1rem;
		height: 1.25rem;
		content: '⠿';
		font-weight: 700;
		cursor: grab;
		background: #0d0d0d10;
		color: #0d0d0d50;
		border-radius: 0.25rem;
	}
}

.ProseMirror {
	iframe {
		width: 100% !important;
		height: auto !important;
		max-width: 480px;
		min-height: 320px;
		aspect-ratio: 16 / 9 !important; /* aspect-video */
		margin-right: 1.5rem;
	}

	img.ProseMirror-selectednode,
	.ProseMirror-selectednode iframe {
		outline: 3px solid #f59e0b;
		transition: outline 0.15s; /* transition-[outline] duration-150 */
		display: block;
	}

	img {
		width: 100%;

		&.ProseMirror-selectednode,
		div[data-youtube-video] {
			cursor: move;
		}
	}

	.selectedCell:after {
		z-index: 2;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(156, 163, 175, 0.3); /* bg-gray-400/30 */
		pointer-events: none;
		content: '';
	}

	.column-resize-handle {
		position: absolute;
		width: 0.25rem; /* w-1 */
		top: 0;
		right: -2px;
		bottom: -2px;
		background-color: #bae6fd; /* bg-sky-200 */
		pointer-events: none;
	}

	.ProseMirror-gapcursor {
		display: none;
		pointer-events: none;
		position: relative !important;

		&:after {
			content: '';
			display: block;
			position: relative !important;
			height: 1.25rem; /* h-5 */
			border-left: 1px solid black;
			margin-top: 0.25rem;
			animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
		}

		&.ProseMirror-focused {
			display: block;
		}
	}
}

@keyframes ProseMirror-cursor-blink {
	to {
		visibility: hidden;
	}
}

// PlaceHolder
.tiptap p.is-empty::before {
	color: #adb5bd;
	content: attr(data-placeholder);
	float: left;
	height: 0;
	pointer-events: none;
}
</style>
