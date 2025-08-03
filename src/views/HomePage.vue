<template>
	<!--Editor-->
	<div class="w-full overflow-y-hidden">
		<div class="teditor">
			<TiptapEditor ref="editorRef" />
		</div>
		<div class="w-full text-xs text-center py-2 text-gray-400 italic">Copyright © 2025 GRAMICCI v1.2 / By Nikita Lyu</div>
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
