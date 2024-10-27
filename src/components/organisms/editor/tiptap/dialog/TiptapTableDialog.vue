<template>
	<Dialog :show="show" @close="closeDialog" title="新增表單">
		<form>
			<div class="flex flex-col space-y-5">
				<div class="flex flex-row space-x-5">
					<InputContainer class="w-full flex-1">
						<Label for="input-table-columns">欄</Label>
						<Input v-model="inputColumnsRef" id="input-table-columns" class="w-full mt-2" min="1" required type="number" />
					</InputContainer>
					<InputContainer class="w-full flex-1">
						<Label for="input-table-rows">列</Label>
						<Input v-model="inputRowsRef" id="input-table-rows" class="w-full mt-2" min="1" required type="number" />
					</InputContainer>
				</div>
				<div class="flex flex-row justify-end space-x-3">
					<DialogButton @click="closeDialog" isLight>返回</DialogButton>
					<DialogButton @click="onSubmit">確認</DialogButton>
				</div>
			</div>
		</form>
	</Dialog>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import Dialog from '../../../modal/Dialog.vue';
import type Table from '@/models/table';
import InputContainer from '../../../form/InputContainer.vue';
import Label from '../../../form/Label.vue';
import Input from '../../../form/Input.vue';
import DialogButton from '@components/atoms/dialog/DialogButton.vue';

defineProps<{
	show: boolean;
}>();

const emit = defineEmits<{
	(e: 'close'): void;
	(e: 'insert', table: Table): void;
}>();

const inputColumnsRef = ref<number>(4);
const inputRowsRef = ref<number>(8);
const inputWithHeaderRef = ref<boolean>(true);

function closeDialog() {
	emit('close');
}

function onSubmit() {
	emit('insert', {
		rows: inputRowsRef.value,
		columns: inputColumnsRef.value,
		withHeader: inputWithHeaderRef.value,
	});
	closeDialog();
}
</script>
