<template>
	<div class="flex flex-row justify-start items-cente gap-8 ml-8">
		<NLink @click="saveTemplate">
			<img alt="Save" src="~@/assets/img/icons/save.svg" />
			儲存模板
		</NLink>
		<NLink @click="loadTemplate">
			<img alt="Save" src="~@/assets/img/icons/load.svg" />
			載入模板
		</NLink>
		<NLink @click="exportTemplate">
			<img alt="Save" src="~@/assets/img/icons/print.svg" />
			轉出模板
		</NLink>
		<NLink @click="editRegularWords">
			<img alt="Save" src="~@/assets/img/icons/regularly_words.svg" />
			常用文字
		</NLink>
		<NLink @click="editTables">
			<img alt="Save" src="~@/assets/img/icons/tables.svg" />
			常用表格
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
