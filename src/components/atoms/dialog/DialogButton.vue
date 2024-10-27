<template>
	<button
		:class="{
			'text-black underline hover:opacity-60 ': isLight,
			'bg-black text-white hover:bg-opacity-80': !isLight,
		}"
		@click="click"
		class="rounded-lg px-4 py-3 text-sm font-medium transition"
		type="button">
		<slot />
	</button>
</template>

<script lang="ts" setup>
const emit = defineEmits(['click']);

const props = defineProps({
	isLight: {
		type: Boolean,
		default: false,
	},
});

const click = () => {
	emit('click');
};
</script>

<style lang="scss" scoped></style>
