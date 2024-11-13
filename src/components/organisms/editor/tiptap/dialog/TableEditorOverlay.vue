<template>
	<Dialog :show="show" @close="closeDialog" title="編輯表單內容" maxWidth="max-w-[660px]">
		<div id="tiptapTableEditor" class="flex flex-col space-y-5">
			<InputContainer>
				<Label for="input-link-url">表格標題 ＊</Label>
				<Input v-model.trim="tableTitle" id="input-link-url" class="mt-2" maxlength="20" placeholder="輸入標題" type="text" />
				<div v-if="error.title" class="text-xs font-medium text-red-600">{{ error.title }}</div>
			</InputContainer>

			<InputContainer>
				<Label for="input-link-url">表格內容 ＊</Label>
				<TableEditTool :editor="editor" />
				<EditorContent :editor="editor" />
			</InputContainer>

			<div class="flex flex-row justify-end space-x-3">
				<DialogButton @click="closeDialog" isLight> 返回</DialogButton>
				<DialogButton @click="onSubmit"> 確認</DialogButton>
			</div>
		</div>
	</Dialog>
</template>

<script lang="ts">
import {Editor, EditorContent} from '@tiptap/vue-3';
import Dialog from '@components/organisms/modal/Dialog.vue';

import Paragraph from '@tiptap/extension-paragraph';
import Document from '@tiptap/extension-document';
import {Table} from '@tiptap/extension-table';
import {TableRow} from '@tiptap/extension-table-row';
import {TableHeader} from '@tiptap/extension-table-header';
import {TableCell} from '@tiptap/extension-table-cell';
import Text from '@tiptap/extension-text';
import Placeholder from '@tiptap/extension-placeholder';
import {AllSelection} from 'prosemirror-state';

import TableEditTool from '@components/organisms/editor/tiptap/groupTool/TableEditTool.vue';
import Label from '@components/organisms/form/Label.vue';
import InputContainer from '@components/organisms/form/InputContainer.vue';
import Input from '@components/organisms/form/Input.vue';
import DialogButton from '@components/atoms/dialog/DialogButton.vue';

export default {
	components: {
		DialogButton,
		Input,
		InputContainer,
		Label,
		Dialog,
		TableEditTool,
		EditorContent,
	},
	props: {
		show: {
			type: Boolean,
			default: false,
		},
		tableData: {
			required: true,
			type: Object,
			default: () => null,
		},
	},
	emits: ['saveTable', 'close'],
	data() {
		return {
			editor: null,
			tableTitle: '',
			tableResult: '',
			error: {
				title: '',
			},
		};
	},
	watch: {
		tableTitle: {
			handler() {
				this.error.title = '';
			},
			immediate: true,
		},
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
				Table.configure({
					resizable: true,
					allowTableNodeSelection: true,
				}),
				TableRow,
				TableHeader,
				TableCell,
				Placeholder.configure({
					placeholder: '輸入內容...',
				}),
			],
			content: '',
			onUpdate: ({editor}) => {
				this.tableResult = this.saveTable(editor);
			},
		});

		// Insert Default Table
		this.initTable();
	},
	beforeUnmount() {
		this.editor?.destroy();
	},
	methods: {
		saveTable() {
			return this.editor?.getHTML();
		},
		initTable() {
			if (!this.tableData) {
				this.tableTitle = '';
				this.editor
					?.chain()
					.focus()
					.insertTable({
						rows: 8,
						cols: 4,
						withHeaderRow: true,
					})
					.run();
			} else {
				this.editor?.commands.setContent(this.tableData.html);
				this.tableTitle = this.tableData.title;
			}
		},
		onSubmit() {
			this.error.title = '';

			this.$emit('saveTable', {
				html: this.saveTable(),
				title: this.tableTitle,
			});

			if (!this.tableTitle) {
				this.error.title = '不能為空，輸入最多 20 個字元。';
			} else {
				this.closeDialog();
			}
		},
		closeDialog() {
			this.$emit('close');
		},
	},
};
</script>
<style lang="scss">
#tiptapTableEditor {
	.tableTool {
		padding: 0 !important;
	}

	.tableWrapper {
		width: 100% !important;
		margin-left: 0 !important;
	}
}
</style>
