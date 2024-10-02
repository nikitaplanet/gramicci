<template>
	<TiptapToolbarGroup v-if="editor">
		<TiptapToolbarButton
			:isActive="editor.isActive({textAlign: 'left'})"
			@click="editor.chain().focus().setTextAlign('left').run()"
			label="AlignLeft">
			<IconAlignLeft class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton
			:isActive="editor.isActive({textAlign: 'center'})"
			@click="editor.chain().focus().setTextAlign('center').run()"
			label="AlignCenter">
			<IconAlignCenter class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton
			:isActive="editor.isActive({textAlign: 'right'})"
			@click="editor.chain().focus().setTextAlign('right').run()"
			label="AlignRight">
			<IconAlignRight class="h-5 w-5" />
		</TiptapToolbarButton>
	</TiptapToolbarGroup>
</template>

<script setup>
import {IconAlignCenter, IconAlignLeft, IconAlignRight} from '@tabler/icons-vue';
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
