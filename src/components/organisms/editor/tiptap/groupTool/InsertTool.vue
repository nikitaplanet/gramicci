<template>
	<TiptapToolbarGroup v-if="editor">
		<TiptapToolbarButton :isActive="editor.isActive('link')" @click="openLinkDialog" label="Link">
			<IconLink class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton @click="showAddImageDialog = true" label="Image">
			<IconPhoto class="h-5 w-5" />
		</TiptapToolbarButton>

		<TiptapToolbarButton @click="showAddTableDialog = true" label="Table">
			<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" />
			</svg>
		</TiptapToolbarButton>
		<!--		<TiptapToolbarButton @click="showAddYoutubeDialog = true" label="Youtube">-->
		<!--			<IconMovie class="h-5 w-5" />-->
		<!--		</TiptapToolbarButton>-->

		<TiptapToolbarButton @click="editor.chain().focus().setHorizontalRule().run()" label="Horizontal Line">
			<IconMinus class="h-5 w-5" />
		</TiptapToolbarButton>

		<TiptapToolbarButton @click="showCommonTextDialog = true" label="文">
			<div class="h-5 w-5 flex justify-center items-center">文</div>
		</TiptapToolbarButton>
	</TiptapToolbarGroup>

	<TiptapLinkDialog
		v-if="showAddLinkDialog"
		:current-url="currentLinkInDialog"
		:show="showAddLinkDialog"
		@close="showAddLinkDialog = false"
		@update="insertLink" />
	<TiptapVideoDialog v-if="showAddYoutubeDialog" :show="showAddYoutubeDialog" @close="showAddYoutubeDialog = false" @insert="insertYoutubeVideo" />
	<TiptapTableDialog v-if="showAddTableDialog" :show="showAddTableDialog" @close="showAddTableDialog = false" @insert="insertTable" />
	<TiptapImageDialog v-if="showAddImageDialog" :show="showAddImageDialog" @close="showAddImageDialog = false" @insert="insertImage" />
	<CommonTextToolbar :show="showCommonTextDialog" @close="showCommonTextDialog = false" @insertCommonText="insertCommonText" />
</template>

<script lang="ts" setup>
import type DataTable from '@/models/table';
import {IconLink, IconMinus, IconPhoto} from '@tabler/icons-vue';
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarGroup.vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';

import TiptapVideoDialog from '@components/organisms/editor/tiptap/dialog/TiptapVideoDialog.vue';
import TiptapImageDialog from '@components/organisms/editor/tiptap/dialog/TiptapImageDialog.vue';
import TiptapTableDialog from '@components/organisms/editor/tiptap/dialog/TiptapTableDialog.vue';
import TiptapLinkDialog from '@components/organisms/editor/tiptap/dialog/TiptapLinkDialog.vue';
import CommonTextToolbar from '@components/organisms/editor/tiptap/groupTool/CommonTextToolbar.vue';
import {ref} from 'vue';
import {Image} from '@components/organisms/editor/tiptap/dialog';

const props = defineProps({
	editor: {
		type: Object,
		default: () => {},
	},
});

// Modal
const showAddLinkDialog = ref(false);
const showAddYoutubeDialog = ref(false);
const showAddImageDialog = ref(false);
const showAddTableDialog = ref(false);
const showCommonTextDialog = ref(false);

// Data
const currentLinkInDialog = ref('');

// Methods
function openLinkDialog() {
	currentLinkInDialog.value = props.editor.value?.getAttributes('link').href;

	showAddLinkDialog.value = true;
}

function insertLink(value?: string) {
	if (!value) {
		props.editor?.chain().focus().extendMarkRange('link').unsetLink().run();
		return;
	}

	props.editor?.chain().focus().extendMarkRange('link').setLink({href: value}).run();
}

function insertYoutubeVideo(url: string) {
	props.editor?.commands.setYoutubeVideo({
		src: url,
	});
}

function insertTable(table: DataTable) {
	props.editor
		?.chain()
		.focus()
		.insertTable({
			rows: table.rows,
			cols: table.columns,
			withHeaderRow: table.withHeader,
		})
		.run();
}

function insertImage(imageObj: Image) {
	props.editor?.chain().focus().setFigure({src: imageObj.url, caption: imageObj.caption}).run();
}

function insertCommonText(text) {
	props.editor.chain().focus().insertContent(text).run();
}
</script>

<style lang="scss" scoped></style>
