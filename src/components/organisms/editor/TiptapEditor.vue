<template>
	<div v-if="editor" id="tiptap">
		<div class="bg-tool-background sticky top-[79px] left-0 z-10">
			<TiptapToolbarGroup>
				<TiptapToolbarButton :disabled="!editor.can().chain().focus().undo().run()" @click="editor.chain().focus().undo().run()" label="Undo">
					<IconArrowBackUp class="h-5 w-5" />
				</TiptapToolbarButton>
				<TiptapToolbarButton :disabled="!editor.can().chain().focus().redo().run()" @click="editor.chain().focus().redo().run()" label="Redo">
					<IconArrowForwardUp class="h-5 w-5" />
				</TiptapToolbarButton>
			</TiptapToolbarGroup>

			<TiptapToolbarGroup>
				<TiptapToolbarButton
					:isActive="editor.isActive('heading', {level: 1})"
					@click="editor.chain().focus().toggleHeading({level: 1}).run()"
					label="Heading 1">
					<IconH1 class="h-5 w-5" />
				</TiptapToolbarButton>
				<TiptapToolbarButton
					:isActive="editor.isActive('heading', {level: 2})"
					@click="editor.chain().focus().toggleHeading({level: 2}).run()"
					label="Heading 2">
					<IconH2 class="h-5 w-5" />
				</TiptapToolbarButton>
				<TiptapToolbarButton
					:isActive="editor.isActive('heading', {level: 3})"
					@click="editor.chain().focus().toggleHeading({level: 3}).run()"
					label="Heading 3">
					<IconH3 class="h-5 w-5" />
				</TiptapToolbarButton>
				<TiptapToolbarButton
					:isActive="editor.isActive('heading', {level: 4})"
					@click="editor.chain().focus().toggleHeading({level: 4}).run()"
					label="Heading 4">
					<IconH4 class="h-5 w-5" />
				</TiptapToolbarButton>
			</TiptapToolbarGroup>
			<TiptapToolbarGroup>
				<TiptapToolbarButton :isActive="editor.isActive('bold')" @click="editor?.chain().focus().toggleBold().run()" label="Bold">
					<IconBold class="h-5 w-5" />
				</TiptapToolbarButton>
				<TiptapToolbarButton :isActive="editor.isActive('italic')" @click="editor?.chain().focus().toggleItalic().run()" label="Italic">
					<IconItalic class="h-5 w-5" />
				</TiptapToolbarButton>
				<TiptapToolbarButton
					:isActive="editor.isActive('underline')"
					@click="editor.chain().focus().toggleUnderline().run()"
					label="Underline">
					<IconUnderline class="h-5 w-5" />
				</TiptapToolbarButton>
				<TiptapToolbarButton :isActive="editor.isActive('strike')" @click="editor.chain().focus().toggleStrike().run()" label="Strikethrough">
					<IconStrikethrough class="h-5 w-5" />
				</TiptapToolbarButton>
			</TiptapToolbarGroup>
			<TiptapToolbarGroup>
				<TiptapToolbarButton
					:isActive="editor?.isActive('bulletList')"
					@click="editor?.chain().focus().toggleBulletList().run()"
					label="Bold">
					<IconListDetails class="h-5 w-5" />
				</TiptapToolbarButton>
				<TiptapToolbarButton
					:isActive="editor?.isActive('orderedList')"
					@click="editor?.chain().focus().toggleOrderedList().run()"
					label="Bold">
					<IconListNumbers class="h-5 w-5" />
				</TiptapToolbarButton>
			</TiptapToolbarGroup>
			<TiptapToolbarGroup>
				<TiptapToolbarButton :isActive="editor?.isActive('link')" @click="openLinkDialog" label="Link">
					<IconLink class="h-5 w-5" />
				</TiptapToolbarButton>
				<TiptapToolbarButton @click="showAddImageDialog = true" label="Image">
					<IconPhoto class="h-5 w-5" />
				</TiptapToolbarButton>
				<TiptapToolbarButton
					:isActive="editor?.isActive('blockquote')"
					@click="editor?.chain().focus().toggleBlockquote().run()"
					label="Blockquote">
					<IconBlockquote class="h-5 w-5" />
				</TiptapToolbarButton>
				<TiptapToolbarButton @click="showAddTableDialog = true" label="Table">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" />
					</svg>
				</TiptapToolbarButton>
				<TiptapToolbarButton @click="showAddYoutubeDialog = true" label="Youtube">
					<IconMovie class="h-5 w-5" />
				</TiptapToolbarButton>
				<TiptapToolbarButton @click="editor?.chain().focus().setHorizontalRule().run()" label="Horizontal Line">
					<IconMinus class="h-5 w-5" />
				</TiptapToolbarButton>
			</TiptapToolbarGroup>
			<TiptapToolbarGroup v-if="editor?.isActive('table')">
				<TiptapToolbarButton @click="editor?.commands.deleteTable()" label="Remove table">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M15.46,15.88L16.88,14.46L19,16.59L21.12,14.46L22.54,15.88L20.41,18L22.54,20.12L21.12,21.54L19,19.41L16.88,21.54L15.46,20.12L17.59,18L15.46,15.88M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z" />
					</svg>
				</TiptapToolbarButton>
				<TiptapToolbarButton @click="editor?.commands.addColumnBefore()" label="Add column before">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M13,2A2,2 0 0,0 11,4V20A2,2 0 0,0 13,22H22V2H13M20,10V14H13V10H20M20,16V20H13V16H20M20,4V8H13V4H20M9,11H6V8H4V11H1V13H4V16H6V13H9V11Z" />
					</svg>
				</TiptapToolbarButton>
				<TiptapToolbarButton @click="editor?.commands.addColumnAfter()" label="Add column after">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M11,2A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H2V2H11M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M15,11H18V8H20V11H23V13H20V16H18V13H15V11Z" />
					</svg>
				</TiptapToolbarButton>
				<TiptapToolbarButton @click="editor?.commands.deleteColumn()" label="Remove column">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M4,2H11A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M17.59,12L15,9.41L16.41,8L19,10.59L21.59,8L23,9.41L20.41,12L23,14.59L21.59,16L19,13.41L16.41,16L15,14.59L17.59,12Z" />
					</svg>
				</TiptapToolbarButton>
				<TiptapToolbarButton @click="editor?.commands.addRowBefore()" label="Add row before">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M22,14A2,2 0 0,0 20,12H4A2,2 0 0,0 2,14V21H4V19H8V21H10V19H14V21H16V19H20V21H22V14M4,14H8V17H4V14M10,14H14V17H10V14M20,14V17H16V14H20M11,10H13V7H16V5H13V2H11V5H8V7H11V10Z" />
					</svg>
				</TiptapToolbarButton>
				<TiptapToolbarButton @click="editor?.commands.addRowAfter()" label="Add row after">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M22,10A2,2 0 0,1 20,12H4A2,2 0 0,1 2,10V3H4V5H8V3H10V5H14V3H16V5H20V3H22V10M4,10H8V7H4V10M10,10H14V7H10V10M20,10V7H16V10H20M11,14H13V17H16V19H13V22H11V19H8V17H11V14Z" />
					</svg>
				</TiptapToolbarButton>
				<TiptapToolbarButton @click="editor?.commands.deleteRow()" label="Remove row">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.41,13L12,15.59L14.59,13L16,14.41L13.41,17L16,19.59L14.59,21L12,18.41L9.41,21L8,19.59L10.59,17L8,14.41L9.41,13M22,9A2,2 0 0,1 20,11H4A2,2 0 0,1 2,9V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V9M4,9H8V6H4V9M10,9H14V6H10V9M16,9H20V6H16V9Z" />
					</svg>
				</TiptapToolbarButton>
				<TiptapToolbarButton @click="editor?.commands.mergeOrSplit()" label="Merge or split cell">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5,10H3V4H11V6H5V10M19,18H13V20H21V14H19V18M5,18V14H3V20H11V18H5M21,4H13V6H19V10H21V4M8,13V15L11,12L8,9V11H3V13H8M16,11V9L13,12L16,15V13H21V11H16Z" />
					</svg>
				</TiptapToolbarButton>
			</TiptapToolbarGroup>
		</div>
		<div class="w-full">
			<div class="flex flex-col max-w-[900px] min-h-96 mx-auto bg-white my-8 p-5 rounded-lg shadow-xl">
				<EditorContent :editor="editor" />
			</div>
		</div>
	</div>

	<TiptapLinkDialog
		v-if="showLinkDialog"
		:current-url="currentLinkInDialog"
		:show="showLinkDialog"
		@close="showLinkDialog = false"
		@update="updateLink" />
	<TiptapVideoDialog v-if="showAddYoutubeDialog" :show="showAddYoutubeDialog" @close="showAddYoutubeDialog = false" @insert="insertYoutubeVideo" />
	<TiptapTableDialog v-if="showAddTableDialog" :show="showAddTableDialog" @close="showAddTableDialog = false" @insert="insertTable" />
	<TiptapImageDialog v-if="showAddImageDialog" :show="showAddImageDialog" @close="showAddImageDialog = false" @insert="insertImage" />
</template>

<script lang="ts">
import {Editor, EditorContent} from '@tiptap/vue-3';
import DragHandle from '@tiptap-pro/extension-drag-handle';
import NodeRange from '@tiptap-pro/extension-node-range';
import {
	IconArrowBackUp,
	IconArrowForwardUp,
	IconBlockquote,
	IconBold,
	IconH1,
	IconH2,
	IconH3,
	IconH4,
	IconItalic,
	IconLink,
	IconListDetails,
	IconListNumbers,
	IconMovie,
	IconPhoto,
	IconStrikethrough,
	IconUnderline,
	IconMinus,
} from '@tabler/icons-vue';
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/TiptapToolbarGroup.vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/TiptapToolbarButton.vue';
import type DataTable from '@/models/table';
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
import TiptapVideoDialog from '@components/organisms/editor/tiptap/TiptapVideoDialog.vue';
import TiptapImageDialog from '@components/organisms/editor/tiptap/TiptapImageDialog.vue';
import TiptapTableDialog from '@components/organisms/editor/tiptap/TiptapTableDialog.vue';
import TiptapLinkDialog from '@components/organisms/editor/tiptap/TiptapLinkDialog.vue';

export default {
	components: {
		TiptapLinkDialog,
		TiptapTableDialog,
		TiptapImageDialog,
		TiptapVideoDialog,
		EditorContent,
		TiptapToolbarGroup,
		TiptapToolbarButton,
		IconArrowForwardUp,
		IconArrowBackUp,
		IconBlockquote,
		IconBold,
		IconH1,
		IconH2,
		IconH3,
		IconH4,
		IconItalic,
		IconLink,
		IconListDetails,
		IconListNumbers,
		IconMovie,
		IconPhoto,
		IconStrikethrough,
		IconUnderline,
		IconMinus,
	},
	data() {
		return {
			editor: null,
			showLinkDialog: false,
			showAddTableDialog: false,
			showAddImageDialog: false,
			showAddYoutubeDialog: false,
			currentLinkInDialog: '',
			contentResult: '',
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
					resizable: false,
					allowTableNodeSelection: true,
				}),
				TableRow,
				TableHeader,
				TableCell,
				Gapcursor,
				Image,
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
			return `<div class="blog">${editor?.getHTML()}</div>`;
		},
		insertTable(table: DataTable) {
			this.editor
				?.chain()
				.focus()
				.insertTable({
					rows: table.rows,
					cols: table.columns,
					withHeaderRow: table.withHeader,
				})
				.run();
		},
		insertYoutubeVideo(url: string) {
			this.editor?.commands.setYoutubeVideo({
				src: url,
			});
		},
		insertImage(url: string) {
			this.editor?.chain().focus().setImage({src: url}).run();
		},
		openLinkDialog() {
			this.currentLinkInDialog = this.editor.value?.getAttributes('link').href;

			this.showLinkDialog = true;
		},
		updateLink(value?: string) {
			if (!value) {
				this.editor?.chain().focus().extendMarkRange('link').unsetLink().run();
				return;
			}

			this.editor?.chain().focus().extendMarkRange('link').setLink({href: value}).run();
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
.tiptap p.is-editor-empty:first-child::before {
	color: #adb5bd;
	content: attr(data-placeholder);
	float: left;
	height: 0;
	pointer-events: none;
}
</style>
