<template>
	<button
		@click.stop="mainAction"
		class="text-xs py-1 px-3 bg-gray-600 text-white rounded-lg transition hover:bg-gray-700 flex justify-center items-center"
		type="button">
		<slot />
	</button>
</template>

<script setup>
const emit = defineEmits(['click']);

function mainAction() {
	emit('click');
}
</script>

<style lang="scss" scoped></style>
