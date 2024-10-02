<template>
	<TiptapToolbarGroup v-if="editor">
		<TiptapToolbarButton :disabled="!editor.can().chain().focus().undo().run()" @click="editor.chain().focus().undo().run()" label="Undo">
			<IconArrowBackUp class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton :disabled="!editor.can().chain().focus().redo().run()" @click="editor.chain().focus().redo().run()" label="Redo">
			<IconArrowForwardUp class="h-5 w-5" />
		</TiptapToolbarButton>
	</TiptapToolbarGroup>
</template>

<script setup>
import {IconArrowBackUp, IconArrowForwardUp} from '@tabler/icons-vue';
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarGroup.vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';

defineProps({
	editor: {
		type: Object,
		default: () => {},
	},
});
</script>

<style lang="scss" scoped></style>
