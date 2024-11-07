<template>
	<Dialog :show="show" @close="closeDialog" title="新增常用字">
		<form>
			<div class="flex flex-col space-y-5">
				<InputContainer>
					<Label for="input-link-url">輸入標題</Label>
					<Input v-model="inputLTitle" id="input-link-url" class="mt-2" placeholder="輸入標題" type="url" />
				</InputContainer>

				<InputContainer>
					<Label for="input-link-url">輸入內容</Label>
					<ElInput v-model="addInput" clearable placeholder="輸入欲新增的文字" type="textarea" />
				</InputContainer>

				<div class="flex flex-row justify-end space-x-3">
					<DialogButton @click="closeDialog" isLight>返回</DialogButton>
					<DialogButton @click="addText">確認</DialogButton>
				</div>
			</div>
		</form>
	</Dialog>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import Dialog from '../../../modal/Dialog.vue';
import Label from '../../../form/Label.vue';
import Input from '../../../form/Input.vue';
import InputContainer from '../../../form/InputContainer.vue';
import DialogButton from '@components/atoms/dialog/DialogButton.vue';

defineProps<{show: boolean}>();
const emit = defineEmits(['close', 'addText']);
const inputLTitle = ref<string>();
const addInput = ref<string>();

function closeDialog() {
	emit('close');
}

function addText() {
	emit('addText', {title: inputLTitle.value, content: addInput.value});
	emit('close');
}
</script>
