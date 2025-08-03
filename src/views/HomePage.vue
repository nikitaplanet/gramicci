<template>
	<!--Editor-->
	<div class="w-full">
		<TiptapEditor ref="editorRef" />
	</div>
</template>
<script lang="ts" setup>
import TiptapEditor from '@components/organisms/editor/TiptapEditor.vue';
</script>

<style lang="scss" scoped>
.teditor {
	min-height: calc(100vh - 32px);
}
</style>
