<template>
	<TiptapToolbarGroup v-if="editor">
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
		<TiptapToolbarButton
			:isActive="editor.isActive('heading', {level: 5})"
			@click="editor.chain().focus().toggleHeading({level: 5}).run()"
			label="Heading 5">
			<IconH5 class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton
			:isActive="editor.isActive('heading', {level: 6})"
			@click="editor.chain().focus().toggleHeading({level: 6}).run()"
			label="Heading 6">
			<IconH6 class="h-5 w-5" />
		</TiptapToolbarButton>
	</TiptapToolbarGroup>
</template>

<script setup>
import {IconH1, IconH2, IconH3, IconH4, IconH5, IconH6} from '@tabler/icons-vue';
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
