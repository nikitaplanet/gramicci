<template>
	<Dialog :show="show" @close="closeDialog" title="插入表單">
		<form @submit.prevent="onSubmit">
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
				<SwitchGroup>
					<div class="flex flex-row items-center space-x-3">
						<Switch
							v-model="inputWithHeaderRef"
							:class="inputWithHeaderRef ? 'bg-black' : 'bg-gray-200'"
							class="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
							<span
								:class="inputWithHeaderRef ? 'translate-x-6' : 'translate-x-1'"
								class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform" />
						</Switch>
						<SwitchLabel class="select-none text-sm text-gray-600">表格 Header</SwitchLabel>
					</div>
				</SwitchGroup>
				<div class="flex flex-row justify-end space-x-3">
					<button @click="closeDialog" class="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100" type="button">
						返回
					</button>
					<button class="rounded-lg bg-black px-4 py-3 text-sm font-medium text-white hover:bg-opacity-80" type="submit">確認</button>
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
import {Switch, SwitchLabel, SwitchGroup} from '@headlessui/vue';

defineProps<{
	show: boolean;
}>();

const emit = defineEmits<{
	(e: 'close'): void;
	(e: 'insert', table: Table): void;
}>();

const inputColumnsRef = ref<number>(3);
const inputRowsRef = ref<number>(3);
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
