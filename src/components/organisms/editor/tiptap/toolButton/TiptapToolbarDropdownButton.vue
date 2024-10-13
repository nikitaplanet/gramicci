<template>
	<button
		:class="{'bg-gray-100': isActive}"
		@click.stop="mainAction"
		class="w-full hover:bg-gray-100 text-xs p-3 flex flex-grow items-center justify-center"
		type="button">
		<slot />
	</button>
</template>

<script lang="ts" setup>
defineProps({
	isActive: {
		type: Boolean,
		default: true,
	},
});

const emit = defineEmits(['click']);
const mainAction = () => {
	emit('click');
};
</script>

<style lang="scss" scoped></style>
