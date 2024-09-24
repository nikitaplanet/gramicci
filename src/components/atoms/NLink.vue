<template>
	<a
		:href="link"
		:target="target"
		class="text-sm font-medium transition ease-in hover:underline-offset-2 hover:text-gray-700 hover:underline hover:font-medium">
		<slot />
	</a>
</template>

<script lang="ts" setup>
defineProps({
	link: {
		type: String,
		default: '',
	},
	target: {
		type: String,
		default: '_blank',
	},
});
</script>

<style lang="scss" scoped></style>
