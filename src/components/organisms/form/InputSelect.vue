<template>
	<el-select
		v-model="selectValue"
		:filter-method="onFilter"
		@blur="onBlur()"
		@change="onChange()"
		class="input-select-class"
		allow-create
		default-first-option
		filterable
		placeholder="Select"
		size="large"
		style="width: 100%">
		<el-option v-for="item in filterOpts" :key="item.value" :label="item.label" :value="item.value" />
	</el-select>
</template>

<script lang="ts" setup>
import Input from './Input.vue';
import {computed, ref, watch} from 'vue';
import {ElSelect, ElButton, ElInput} from 'element-plus';

const props = defineProps<{
	options: {label: string; value: string}[];
	id: string;
	name: string;
	modelValue: string | number | null | undefined;
}>();
const selectValue = ref<string | undefined | number>('');
const inputValue = ref<string | undefined | number>();
const selectOptions = ref<{label: string; value: string}[]>();

const getOptions = computed(() => {
	return selectOptions?.value ? props.options : selectOptions.value;
});

const emit = defineEmits<{
	(e: 'update:modelValue', value: string | undefined | number): void;
}>();

watch(selectValue, (val) => {
	emit('update:modelValue', val);
});

const filterOpts = ref(props.options);

function onFilter(text) {
	inputValue.value = text;
	filterOpts.value = props.options.filter((option) => option?.label?.includes(text));
}

// 重置輸入內容
function onChange() {
	inputValue.value = '';
}

// 失去焦點時，如果輸入框有內容，以輸入內容為主
function onBlur() {
	if (inputValue.value) {
		selectValue.value = inputValue.value;
	}
}
</script>
<style lang="scss">
.el-select {
	&__wrapper {
		border-radius: 0.375rem !important;
		&.is-focused {
			border: 2px solid black;
			box-shadow: 0 0 0 0px inset !important;
		}
	}
}
</style>
