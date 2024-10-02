<template>
	<TiptapToolbarGroup v-if="editor">
		<TiptapToolbarButton :isActive="editor.isActive('bulletList')" @click="editor?.chain().focus().toggleBulletList().run()" label="BulletList">
			<IconListDetails class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton :isActive="editor.isActive('orderedList')" @click="editor.chain().focus().toggleOrderedList().run()" label="OrderedList">
			<IconListNumbers class="h-5 w-5" />
		</TiptapToolbarButton>
	</TiptapToolbarGroup>
</template>

<script setup>
import {IconListDetails, IconListNumbers} from '@tabler/icons-vue';
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
