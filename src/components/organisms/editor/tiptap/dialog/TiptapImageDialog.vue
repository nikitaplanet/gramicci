<template>
	<Dialog :show="show" @close="closeDialog" title="插入圖片">
		<form @submit.prevent="insertImage">
			<div class="flex flex-col space-y-5">
				<InputContainer>
					<Label for="input-link-url">輸入圖片連結</Label>
					<Input v-model="inputLinkRef" id="input-link-url" class="mt-2" placeholder="輸入連結" type="url" />
				</InputContainer>

				<InputContainer>
					<Label for="input-link-url">輸入圖片註解</Label>
					<Input v-model="inputCaptionRef" id="input-link-url" class="mt-2" placeholder="輸入文字" type="text" />
				</InputContainer>

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
import Label from '../../../form/Label.vue';
import Input from '../../../form/Input.vue';
import InputContainer from '../../../form/InputContainer.vue';

defineProps<{show: boolean}>();
const emit = defineEmits(['close', 'insert']);
const inputLinkRef = ref<string>();
const inputCaptionRef = ref<string>();

function closeDialog() {
	emit('close');
}

function insertImage() {
	emit('insert', {url: inputLinkRef.value, caption: inputCaptionRef.value});
	emit('close');
}
</script>
