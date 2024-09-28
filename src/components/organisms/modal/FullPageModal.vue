<template>
	<div class="w-screen h-screen fixed top-0 left-0 z-10 bg-gray-300 p-5">
		<div class="flex justify-end items-center flex-row">
			<NButton @click="close">關閉</NButton>
		</div>
		<div class="w-full max-w-3xl mx-auto">
			<div class="text-3xl font-medium mb-6">
				{{ title }}
			</div>
			<div>
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup>
import NButton from '@components/atoms/NButton.vue';

const emit = defineEmits(['close']);
const close = () => {
	emit('close');
};

defineProps({
	title: {
		type: String,
		default: () => {},
	},
});
</script>

<style lang="scss" scoped></style>
