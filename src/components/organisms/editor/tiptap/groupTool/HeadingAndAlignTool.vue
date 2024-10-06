<template>
	<TiptapToolbarGroup>
		<HeadingTool :editor="editor" />
		<TextAlignTool :editor="editor" />
	</TiptapToolbarGroup>
</template>

<script setup>
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarGroup.vue';
import HeadingTool from '@components/organisms/editor/tiptap/groupTool/HeadingTool.vue';
import TextAlignTool from '@components/organisms/editor/tiptap/groupTool/TextAlignTool.vue';

defineProps({
	editor: {
		type: Object,
		default: () => {},
	},
});
</script>

<style lang="scss" scoped></style>
