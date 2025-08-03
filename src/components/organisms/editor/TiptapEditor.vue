<template>
	<div v-if="editor" :class="{'tiptapContent--showOuterBorder': isShowBorderOuter}" id="tiptap" class="tiptapContent">
		<div class="bg-tool-background w-full sticky top-0 left-0 z-20 flex items-center justify-start flex-wrap">
			<LogoInTool />
			<CacheTool :htmlContent="templateValue" @load="(data) => loadHtml(data)" />
			<EditorStyleTool
				:isEditable="isEditable"
				:isPreviewMobile="isPreviewMobile"
				:isShowHtml="isShowHtml"
				@toggleDevice="toggleDevice"
				@toggleHtml="toggleHtml"
				@toggleLock="toggleLock" />
			<HeadingAndAlignTool :editor="editor" />
			<TextStyleTool :editor="editor" />
			<ListTool :editor="editor" />
			<InsertTool :editor="editor" />
			<TableEditTool v-if="editor?.isActive('table')" :editor="editor" showRemove />
			<SyncConfigTool />
		</div>

		<div v-show="!isShowHtml" :class="{w767: isPreviewMobile}" class="w-full">
			<div
				:class="{'max-w-[1400px]': !isPreviewMobile, 'max-w-[400px] sm:max-w-full': isPreviewMobile}"
				class="flex flex-col w-11/12 min-h-96 mx-auto bg-white my-8 sm:w-full sm:my-0 sm:mb-8 md:my-0 md:mb-8">
				<EditorContent v-if="isEditable" :editor="editor" />
				<div v-else v-html="htmlValue" class="preview"></div>
			</div>
			<div class="w-full text-xs text-center py-2 text-gray-400 italic">Copyright © 2025 GRAMICCI v1.3</div>
		</div>

		<div v-if="isShowHtml" class="w-full">
			<div class="w-full max-w-[800px] m-auto my-8 sm:my-0">
				<ExportTemplate :savedData="htmlValue" />
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
import {TiptapCustomSpacing} from '@/plugins/TiptapCustomSpacing.ts';
import {Div} from '@/plugins/Div.ts';
import {staticWords} from '@/assets/js/staticWords.js';

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
import SyncConfigTool from '@components/organisms/editor/tiptap/groupTool/SyncConfigTool.vue';

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
		SyncConfigTool,
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
					class: 'blog blogAlign',
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
				// Figure.configure({
				// 	inline: true,
				// }),
                Figure,
				Color,
				LineHeightTextStyle,
				TiptapCustomSpacing,
				Div,
			],
			content: '',
			onUpdate: () => {
				this.contentResult = this.generateHTML();
			},
		});

		setTimeout(() => (this.contentResult = this.generateHTML()), 250);
	},
	beforeUnmount() {
		this.editor?.destroy();
	},
	methods: {
		generateHTML() {
			return `<div class="blog">${this.editor?.getHTML()}</div>` + `<style>${cssStyle}</style>`;
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
		toggleLock() {
			this.isEditable = !this.isEditable;
		},
		toggleHtml() {
			this.contentResult = this.generateHTML();
			this.isShowHtml = !this.isShowHtml;
		},
		loadHtml(data) {
			this.editor.commands.setContent(data);
		},
	},
	computed: {
		templateValue: function () {
			return this.editor.getHTML();
		},
		htmlValue: function () {
			return `<div class="blog">${this.editor?.getHTML()}${staticWords}</div>` + `<style>${cssStyle}</style>`;
		},
	},
};
</script>

<style lang="scss">
@import '@/assets/scss/plugins/tiptapTemplate';
</style>
