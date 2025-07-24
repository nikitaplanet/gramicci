<template>
	<TiptapToolbarGroup v-if="editor">
		<TiptapToolbarButton :isActive="editor.isActive('link')" @click="openLinkDialog" label="Link">
			<IconLink class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton @click="showAddImageDialog = true" label="Image">
			<IconPhoto class="h-5 w-5" />
		</TiptapToolbarButton>

		<div class="inline-flex h-8 w-8 shrink-0 flex-row items-center justify-center">
			<input :value="editor.getAttributes('textStyle').color" @input="handleChangeCaptionColor" class="h-5 w-5" type="color" />
		</div>

		<TiptapToolbarButton @click="showAddTableDialog = true" label="Table">
			<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" />
			</svg>
		</TiptapToolbarButton>

		<TiptapToolbarButton @click="editor.chain().focus().setHorizontalRule().run()" label="Horizontal Line">
			<IconMinus class="h-5 w-5" />
		</TiptapToolbarButton>

		<TiptapToolbarButton @click="showCommonTextDialog = true" label="文">
			<div class="h-5 w-5 flex justify-center items-center">文</div>
		</TiptapToolbarButton>
		<TiptapToolbarButton @click="insertLinkButton" label="版">
			<div class="h-5 w-5 flex justify-center items-center">版</div>
		</TiptapToolbarButton>
	</TiptapToolbarGroup>

	<TiptapLinkDialog
		v-if="showAddLinkDialog"
		:current-url="currentLinkInDialog"
		:show="showAddLinkDialog"
		@close="showAddLinkDialog = false"
		@update="insertLink" />
	<TiptapVideoDialog v-if="showAddYoutubeDialog" :show="showAddYoutubeDialog" @close="showAddYoutubeDialog = false" @insert="insertYoutubeVideo" />
	<TiptapImageDialog v-if="showAddImageDialog" :show="showAddImageDialog" @close="showAddImageDialog = false" @insert="insertImage" />
	<CommonTextToolbar :show="showCommonTextDialog" @close="showCommonTextDialog = false" @insertCommonText="insertCommonText" />

	<EditTableOverlay v-model:modelValue="showAddTableDialog" @close="showAddTableDialog = false" @insert="insertTable" />
</template>

<script lang="ts" setup>
import {IconLink, IconMinus, IconPhoto} from '@tabler/icons-vue';
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarGroup.vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';

import TiptapVideoDialog from '@components/organisms/editor/tiptap/dialog/TiptapVideoDialog.vue';
import TiptapImageDialog from '@components/organisms/editor/tiptap/dialog/TiptapImageDialog.vue';
import TiptapLinkDialog from '@components/organisms/editor/tiptap/dialog/TiptapLinkDialog.vue';
import CommonTextToolbar from '@components/organisms/editor/tiptap/groupTool/CommonTextToolbar.vue';
import EditTableOverlay from '@components/organisms/editor/tiptap/dialog/EditTableOverlay.vue';

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
const openLinkDialog = () => {
	currentLinkInDialog.value = props.editor.value?.getAttributes('link').href;
	showAddLinkDialog.value = true;
};

const insertLink = (value?: string) => {
	if (!value) {
		props.editor?.chain().focus().extendMarkRange('link').unsetLink().run();
		return;
	}

	props.editor?.chain().focus().extendMarkRange('link').setLink({href: value}).run();
};

const insertYoutubeVideo = (url: string) => {
	props.editor?.commands.setYoutubeVideo({
		src: url,
	});
};

const insertTable = (tableHtml: string) => {
	showAddTableDialog.value = false;
	props.editor?.chain().focus().insertContent(tableHtml).run();
};

const insertImage = (imageObj: Image) => {
	props.editor?.chain().focus().setFigure({src: imageObj.url, caption: imageObj.caption}).run();
};

const insertCommonText = (text) => {
	props.editor?.chain().focus().insertContent(text).run();
};

const insertLinkButton = () => {
	props.editor?.commands.insertImageLink({
		src: 'https://img.shoplineapp.com/media/image_clips/67224698dcbea4000aff7dc9/original.png?1730299544',
		href: 'https://www.gramiccitwshop.com/pages/fit-guide-2024',
		alt: '版型指南',
	});
};

const handleChangeCaptionColor = (event) => {
	const color = event.target.value;

	// 直接從 DOM 找 figcaption
	const figcaptions = props.editor.view.dom.querySelectorAll('figcaption');
	console.log('找到的 figcaption 數量:', figcaptions.length);

	figcaptions.forEach((figcaptionDOM) => {
		try {
			// 獲取 DOM 元素在編輯器中的位置
			const pos = props.editor.view.posAtDOM(figcaptionDOM, 0);
			const resolvedPos = props.editor.state.doc.resolve(pos);

			// 獲取 figcaption 節點
			const figcaptionNode = resolvedPos.nodeAfter || resolvedPos.nodeBefore;

			if (figcaptionNode) {
				// 選擇整個 figcaption 內容
				const from = pos;
				const to = pos + figcaptionNode.nodeSize;

				props.editor
					.chain()
					.focus()
					.setTextSelection({ from, to })
					.setColor(color)
					.run();
			}
		} catch (e) {
			console.error('處理 figcaption 時出錯:', e);
		}
	});
};
</script>

<style lang="scss" scoped></style>
