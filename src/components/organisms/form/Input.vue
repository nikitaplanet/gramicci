<template>
	<input
		v-model="proxyModel"
		:placeholder="placeholder"
		class="w-full text-sm rounded-md border border-gray-400 px-3 py-2 text-gray-800 focus:ring-black focus:outline-black" />
</template>

<script lang="ts" setup>
import {computed} from 'vue';

const props = defineProps<{
	modelValue: string | number | undefined;
	placeholder: string;
}>();

const emit = defineEmits<{
	(e: 'update:modelValue', value: string | number): void;
}>();

const proxyModel = computed({
	get: () => props.modelValue ?? '',
	set: (value: string | number): void => emit('update:modelValue', value),
});
</script>
