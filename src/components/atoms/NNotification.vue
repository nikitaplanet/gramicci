<template>
	<transition>
		<div v-if="show" class="w-full fixed left-0 bottom-5 flex justify-center items-center">
			<div class="bg-white p-4 rounded-lg shadow text-sm">
				<slot />
			</div>
		</div>
	</transition>
</template>

<script setup>
defineProps({
	show: {
		type: Boolean,
		default: false,
	},
});
</script>

<style lang="scss" scoped></style>
