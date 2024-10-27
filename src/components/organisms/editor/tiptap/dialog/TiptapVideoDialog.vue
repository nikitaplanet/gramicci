<template>
	<Dialog :show="show" @close="closeDialog" title="插入 Youtube">
		<form>
			<div class="flex flex-col space-y-5">
				<InputContainer>
					<Label for="input-add-youtube-url">輸入 Youtube 連結</Label>
					<Input v-model="inputYoutubeUrlRef" id="input-add-youtube-url" placeholder="輸入連結" required type="url" />
				</InputContainer>
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
import InputContainer from '../../../form/InputContainer.vue';
import Input from '../../../form/Input.vue';
import Label from '../../../form/Label.vue';
import DialogButton from '@components/atoms/dialog/DialogButton.vue';

defineProps<{
	show: boolean;
}>();

const emit = defineEmits(['close', 'insert']);

const inputYoutubeUrlRef = ref<string>('');

function closeDialog() {
	emit('close');
}

function onSubmit() {
	emit('insert', inputYoutubeUrlRef.value);
	inputYoutubeUrlRef.value = '';
	closeDialog();
}
</script>
