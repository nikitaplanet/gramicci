<template>
	<TiptapToolbarGroup v-if="editor">
		<TiptapToolbarButton :isActive="editor.isActive('bold')" @click="editor?.chain().focus().toggleBold().run()" label="Bold">
			<IconBold class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton :isActive="editor.isActive('italic')" @click="editor?.chain().focus().toggleItalic().run()" label="Italic">
			<IconItalic class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton :isActive="editor.isActive('underline')" @click="editor.chain().focus().toggleUnderline().run()" label="Underline">
			<IconUnderline class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton :isActive="editor.isActive('strike')" @click="editor.chain().focus().toggleStrike().run()" label="Strikethrough">
			<IconStrikethrough class="h-5 w-5" />
		</TiptapToolbarButton>
	</TiptapToolbarGroup>
</template>

<script setup>
import {IconBold, IconItalic, IconStrikethrough, IconUnderline} from '@tabler/icons-vue';
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
