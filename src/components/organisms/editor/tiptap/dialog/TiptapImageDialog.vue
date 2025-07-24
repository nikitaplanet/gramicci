<template>
	<Dialog :show="show" @close="closeDialog" maxWidth="max-w-xl" title="插入圖片">
		<form>
			<div class="flex flex-col space-y-5">
				<InputContainer>
					<Label for="input-link-url">輸入圖片連結</Label>
					<Input v-model="inputLinkRef" id="input-link-url" class="mt-2" placeholder="輸入連結" type="url" />
				</InputContainer>

				<InputContainer>
					<Label for="input-link-url">輸入圖片註解</Label>
					<div class="flex h-fit">
						<InputSelect
							v-model="inputCaptionRef"
							:options="commentOption"
							id="imageComment"
							autocomplete="off"
							name="imageComment"
							placeholder="輸入文字或輸入搜尋註解" />
					</div>
					<div class="flex mt-2 justify-between">
						<div class="flex">
							<input v-model="isAutoSaveComment" id="image-comment-checkbox" placeholder="輸入文字" type="checkbox" />
							<label class="text-[14px] ml-1" for="image-comment-checkbox">自動儲存註解</label>
						</div>
						<NLink @click="isExpand = !isExpand">
							<component :is="currentIcon" class="w-4" />
							{{ isExpand ? '關閉註解區塊' : '刪除註解' }}
						</NLink>
					</div>
				</InputContainer>

				<div v-if="isExpand" class="flex gap-2 flex-wrap w-full bg-card-background p-3 rounded-md">
					<p class="w-full text-sm text-slate-500">*點擊刪除註解</p>
					<CommonTextButton
						v-for="(option, index) in commentOption"
						:key="`edit_${index}`"
						@click="deleteComment(index)"
						class="hover:bg-red-700">
						<p class="text-left">{{ option.label }}</p>
						<IconX :size="10" class="min-w-2 min-h-2 ml-3" />
					</CommonTextButton>
				</div>

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
import CommonTextButton from '@components/organisms/editor/tiptap/toolButton/CommonTextButton.vue';
import NLink from '@components/atoms/NLink.vue';
import {IconEraser, IconX, IconCircleX} from '@tabler/icons-vue';
import {useImageCommentStore} from '@/store/imageComment.ts';

defineProps<{show: boolean}>();
const emit = defineEmits(['close', 'insert']);
const inputLinkRef = ref<string>();
const inputCaptionRef = ref<string>();
const isAutoSaveComment = ref<Boolean>(true);
const store = useImageCommentStore();
const isExpand = ref<boolean>(false);

const commentOption = computed(() => {
	return store.getImageComment.map((item, index) => {
		return {label: item, value: item};
	});
});

// 定義動態圖標
const currentIcon = computed(() => (isExpand.value ? IconCircleX : IconEraser));

function deleteComment(index) {
	store.deleteImageComment(index);
}

function closeDialog() {
	emit('close');
}

function insertImage() {
	if (isAutoSaveComment && inputCaptionRef.value) store.addImageComment(inputCaptionRef.value);
	emit('insert', {
		url: inputLinkRef.value,
		caption: inputCaptionRef.value,
	});
	emit('close');
}
</script>
