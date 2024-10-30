<template>
	<TiptapToolbarGroup>
		<ExportFileButton />
		<ImportFileButton />
		<ClearCacheButton />
	</TiptapToolbarGroup>
</template>

<script setup>
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarGroup.vue';
import ExportFileButton from '@components/organisms/editor/tiptap/toolButton/ExportFileButton.vue';
import ImportFileButton from '@components/organisms/editor/tiptap/toolButton/ImportFileButton.vue';
import ClearCacheButton from '@components/organisms/editor/tiptap/toolButton/ClearCacheButton.vue';
</script>

<style lang="scss" scoped></style>
