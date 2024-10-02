<template>
	<div v-if="editor" id="tiptap">
		<div class="bg-tool-background sticky top-[79px] left-0 z-10">
			<HistoryTool :editor="editor" />
			<HeadingTool :editor="editor" />
			<TextStyleTool :editor="editor" />
			<TextAlignTool :editor="editor" />
			<ListTool :editor="editor" />
			<InsertTool :editor="editor" @toggleCommonTextList="toggleCommonTextList" />
			<TableEditTool :editor="editor" />
			<div v-if="isShowCommonTextList" class="bg-tool-background">
				<CommonTextList @insertCommonText="insertCommonText" />
			</div>
		</div>

		<div class="w-full">
			<div class="flex flex-col max-w-[900px] min-h-96 mx-auto bg-white my-8 p-5 rounded-lg sm:rounded-none sm:my-0 sm:mb-8 shadow-xl">
				<EditorContent :editor="editor" />
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
import {TipTapButton} from '@/assets/js/tiptap/extensions/TipTapButton';

import HistoryTool from '@components/organisms/editor/tiptap/groupTool/HistoryTool.vue';
import HeadingTool from '@components/organisms/editor/tiptap/groupTool/HeadingTool.vue';
import TextStyleTool from '@components/organisms/editor/tiptap/groupTool/TextStyleTool.vue';
import TextAlignTool from '@components/organisms/editor/tiptap/groupTool/TextAlignTool.vue';
import ListTool from '@components/organisms/editor/tiptap/groupTool/ListTool.vue';
import InsertTool from '@components/organisms/editor/tiptap/groupTool/InsertTool.vue';
import TableEditTool from '@components/organisms/editor/tiptap/groupTool/TableEditTool.vue';
import CommonTextList from '@components/organisms/editor/tiptap/groupTool/CommonTextList.vue';

export default {
	components: {
		CommonTextList,
		TableEditTool,
		InsertTool,
		ListTool,
		TextAlignTool,
		TextStyleTool,
		HeadingTool,
		HistoryTool,
		EditorContent,
	},
	data() {
		return {
			editor: null,
			contentResult: '',
			isShowCommonTextList: false,
		};
	},
	mounted() {
		this.editor = new Editor({
			editorProps: {
				attributes: {
					class: 'blog',
				},
			},
			extensions: [
				Paragraph,
				Document,
				Text,
				History,
				Heading.configure({
					levels: [1, 2, 3, 4],
				}),
				TextAlign.configure({
					types: ['heading', 'paragraph'],
				}),
				Bold,
				Italic,
				Underline,
				Strike,
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
				TipTapButton,
			],
			content: '<h1>GRAMICCI PANT</h1><p>面料<br>DURABLE NYLON (100% NYLON) / 100% POLYESTE</p>',
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
			return `<div class="blog">${editor?.getHTML()}</div>`;
		},
		insertButton() {
			this.editor.commands.insertContent({
				type: 'tiptapButton',
			});
		},
		insertCommonText(text) {
			this.editor.chain().focus().insertContent(text).run();
		},
		toggleCommonTextList(val) {
			this.isShowCommonTextList = val;
		},
		getEditorHTML() {
			return this.contentResult;
		},
	},
};
</script>

<style lang="scss">
#tiptap {
	min-height: calc(100vh - 96px - 40px);
}

.ProseMirror {
	padding: 1rem;
	min-height: 200px;
	position: relative;

	&:focus {
		outline: 0 !important; /* focus:!outline-0 */
	}
}

::selection {
	background-color: #70cff850;
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
		top: -0.25rem;
		left: -0.25rem;
		right: -0.25rem;
		bottom: -0.25rem;
		background-color: #70cff850;
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
