<template>
	<TiptapToolbarGroup>
		<TiptapToolbarButton @click="save" label="Save">
			<IconDeviceFloppy class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton @click="load" label="Redo">
			<IconDownload class="h-5 w-5" />
		</TiptapToolbarButton>
	</TiptapToolbarGroup>
	<SaveTemplateModal v-model:modelValue="isShowSaveTemplateModal" :templateValue="htmlContent" title="儲存模板" />
	<LoadTemplateModal v-model:modelValue="isShowLoadTemplateModal" @update="updateTemplate" title="載入模板" />
</template>

<script setup>
import {ref} from 'vue';
import {IconDeviceFloppy, IconDownload} from '@tabler/icons-vue';
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarGroup.vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';
import SaveTemplateModal from '@components/organisms/templateModal/SaveTemplateModal.vue';
import LoadTemplateModal from '@components/organisms/templateModal/LoadTemplateModal.vue';

const props = defineProps({
	editor: {
		type: Object,
		default: () => {},
	},
	htmlContent: {
		type: String,
		default: '',
	},
});

const emit = defineEmits(['load']);

// 儲存模板
const isShowSaveTemplateModal = ref(false);
const save = () => {
	isShowSaveTemplateModal.value = true;
};

// 載入模板
const isShowLoadTemplateModal = ref(false);
const load = () => {
	isShowLoadTemplateModal.value = true;
};

const updateTemplate = (data) => {
	emit('load', data);
};
</script>

<style lang="scss" scoped></style>
