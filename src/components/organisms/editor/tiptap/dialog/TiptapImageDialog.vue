<template>
	<Dialog :show="show" @close="closeDialog" title="插入圖片">
		<form>
			<div class="flex flex-col space-y-5">
				<InputContainer>
					<Label for="input-link-url">輸入圖片連結</Label>
					<Input v-model="inputLinkRef" id="input-link-url" class="mt-2" placeholder="輸入連結" type="url" />
				</InputContainer>

				<InputContainer>
					<Label for="input-link-url">輸入圖片註解</Label>
					<InputSelect
						v-model="inputCaptionRef"
						:options="commentOption"
						id="imageComment"
						class="mt-2"
						autocomplete="off"
						name="imageComment"
						placeholder="輸入文字" />
					<div class="flex mt-2">
						<input v-model="isAutoSaveComment" id="image-comment-checkbox" placeholder="輸入文字" type="checkbox" />
						<label class="text-xs ml-1" for="image-comment-checkbox">自動儲存註解</label>
					</div>
				</InputContainer>

				<div class="flex flex-row justify-end space-x-3">
					<DialogButton @click="closeDialog" isLight>返回</DialogButton>
					<DialogButton @click="insertImage">確認</DialogButton>
				</div>
			</div>
		</form>
	</Dialog>
</template>

<script lang="ts" setup>
import {ref, computed} from 'vue';
import Dialog from '../../../modal/Dialog.vue';
import Label from '../../../form/Label.vue';
import Input from '../../../form/Input.vue';
import InputSelect from '../../../form/InputSelect.vue';
import InputContainer from '../../../form/InputContainer.vue';
import DialogButton from '@components/atoms/dialog/DialogButton.vue';
import {useDataStore} from '@/store/imageComment.ts';

defineProps<{show: boolean}>();
const emit = defineEmits(['close', 'insert']);
const inputLinkRef = ref<string>();
const inputCaptionRef = ref<string>();
const isAutoSaveComment = ref<Boolean>(true);

const store = useDataStore();

const commentOption = computed(() => {
	return store.getImageComment.map((item, index) => {
		return {label: item, value: item};
	});
});

function closeDialog() {
	emit('close');
}

function insertImage() {
	if (isAutoSaveComment) store.addImageComment(inputCaptionRef.value);
	emit('insert', {url: inputLinkRef.value, caption: inputCaptionRef.value});
	emit('close');
}
</script>
