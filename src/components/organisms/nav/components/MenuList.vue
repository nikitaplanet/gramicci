<template>
	<div class="flex flex-row justify-start items-cente gap-8 ml-8">
		<NLink @click="saveTemplate">
			<img alt="Save" src="~@/assets/img/icons/save.svg" />
			<span class="block sm:hidden">儲存模板</span>
		</NLink>
		<NLink @click="loadTemplate">
			<img alt="Save" src="~@/assets/img/icons/load.svg" />
			<span class="block sm:hidden">載入模板</span>
		</NLink>
		<NLink @click="exportTemplate">
			<img alt="Save" src="~@/assets/img/icons/print.svg" />
			<span class="block sm:hidden">轉出模板</span>
		</NLink>
	</div>
</template>

<script lang="ts" setup>
import NLink from '@components/atoms/NLink.vue';

const emit = defineEmits(['saveTemplate', 'loadTemplate', 'exportTemplate', 'editRegularWords', 'editTables']);

const saveTemplate = () => {
	emit('saveTemplate');
};

const loadTemplate = () => {
	emit('loadTemplate');
};

const exportTemplate = () => {
	emit('exportTemplate');
};

const editRegularWords = () => {
	emit('editRegularWords');
};

const editTables = () => {
	emit('editTables');
};
</script>

<style lang="scss" scoped></style>
