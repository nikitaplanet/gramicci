<template>
	<Dialog :show="show" @close="closeDialog" title="插入 Youtube">
		<form @submit.prevent="onSubmit">
			<div class="flex flex-col space-y-5">
				<InputContainer>
					<Label for="input-add-youtube-url">輸入 Youtube 連結</Label>
					<Input v-model="inputYoutubeUrlRef" id="input-add-youtube-url" required type="url" />
				</InputContainer>
				<div class="flex flex-row justify-end space-x-3">
					<button @click="closeDialog" class="rounded-md px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100" type="button">
						返回
					</button>
					<button class="rounded-md bg-black px-4 py-3 text-sm font-medium text-white hover:bg-opacity-80" type="submit">確認</button>
				</div>
			</div>
		</form>
	</Dialog>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import Dialog from './Dialog.vue';
import InputContainer from './InputContainer.vue';
import Input from './Input.vue';
import Label from './Label.vue';

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
