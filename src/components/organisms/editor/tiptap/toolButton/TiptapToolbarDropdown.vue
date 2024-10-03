<template>
	<div
		v-click-outside:[popperPaneRef]="onClickOutside"
		ref="dropdown"
		class="absolute top-9 h-auto max-h-40 bg-white overflow-y-scroll py-2 w-auto min-w-12 flex flex-col shadow text-nowrap rounded-lg">
		<slot />
	</div>
</template>

<script setup>
import {computed, ref} from 'vue';
import {ClickOutside as vClickOutside} from 'element-plus';

const emit = defineEmits(['onClickOutside']);

const dropdown = ref();
const popperPaneRef = computed(() => {
	return dropdown.value?.popperRef?.contentRef;
});
const onClickOutside = () => {
	emit('onClickOutside');
};
</script>

<style lang="scss" scoped></style>
