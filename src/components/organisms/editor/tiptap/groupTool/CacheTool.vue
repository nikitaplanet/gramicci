<template>
	<TiptapToolbarGroup>
		<TiptapToolbarButton @click="showTemplates" label="Save">
			<IconTemplate class="h-5 w-5" />
		</TiptapToolbarButton>
	</TiptapToolbarGroup>
	<TemplatesModal
		v-model:modelValue="isShowTemplatesModal"
		:templateValue="htmlContent"
		@update="
			(data) => {
				loadTemplate(data);
			}
		"
		title="內容模板" />
</template>

<script setup>
import {ref} from 'vue';
import {IconDeviceFloppy, IconDownload, IconTemplate} from '@tabler/icons-vue';
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarGroup.vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';
import TemplatesModal from '@components/organisms/templateModal/TemplatesModal.vue';

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

// 顯示模板彈窗
const isShowTemplatesModal = ref(false);
const showTemplates = () => {
	isShowTemplatesModal.value = true;
};

const loadTemplate = (data) => {
	emit('load', data);
};
</script>

<style lang="scss" scoped></style>
