<template>
	<TiptapToolbarGroup>
		<TiptapToolbarButton @click="save" label="Save">
			<IconDeviceFloppy class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton @click="load" label="Redo">
			<IconDownload class="h-5 w-5" />
		</TiptapToolbarButton>
	</TiptapToolbarGroup>
</template>

<script setup>
import {IconDeviceFloppy, IconDownload} from '@tabler/icons-vue';
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarGroup.vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';

defineProps({
	editor: {
		type: Object,
		default: () => {},
	},
});

const save = () => {};

const load = () => {};
</script>

<style lang="scss" scoped></style>
