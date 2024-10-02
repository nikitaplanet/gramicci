<template>
	<button
		:aria-label="label"
		:class="[
			'inline-flex h-8 w-8 shrink-0 flex-row items-center justify-center rounded-md disabled:bg-transparent disabled:text-gray-300 transition ease-in',
			isActive ? 'bg-[#d9dbde] text-gray-800 hover:bg-opacity-80' : 'text-gray-600 hover:bg-gray-200',
		]"
		type="button">
		<slot />
	</button>
</template>

<script lang="ts" setup>
defineProps<{
	label: string;
	isActive?: boolean;
}>();
</script>
