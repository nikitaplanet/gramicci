<template>
	<Dialog :show="show" @close="closeDialog" title="編輯常用字">
		<div class="flex flex-col space-y-5">
			<div>
				<InputContainer>
					<Label for="input-common"
						><span>新增常用字</span>
						<NLink @click="insertText" hasUnderline>＋新增</NLink>
					</Label>
					<div class="flex justify-between items-center gap-4">
						<Input v-model="commonText" @keydown.enter="insertText" id="input-common" class="mt-2" placeholder="輸入文字" type="text" />
					</div>
				</InputContainer>
			</div>

			<div class="flex justify-start items-center flex-wrap gap-3">
				<CommonTextButton v-for="(item, index) in editList" :key="`editCommon_${index}`" @click="deleteText(index)" class="hover:bg-red-700">
					{{ item }}
					<IconTrash class="w-3 h-3 ml-3" />
				</CommonTextButton>
			</div>

			<div class="flex flex-row justify-end space-x-3">
				<button @click="closeDialog" class="rounded-lg px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100" type="button">
					返回
				</button>
				<button @click="saveList" class="rounded-lg bg-black px-4 py-3 text-sm font-medium text-white hover:bg-opacity-80" type="button">
					保存
				</button>
			</div>
		</div>
	</Dialog>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import Dialog from '../../../modal/Dialog.vue';
import CommonTextButton from '@components/organisms/editor/tiptap/toolButton/CommonTextButton.vue';
import InputContainer from '@components/organisms/form/InputContainer.vue';
import Input from '@components/organisms/form/Input.vue';
import Label from '@components/organisms/form/Label.vue';
import {cloneDeep} from 'lodash';
import NLink from '@components/atoms/NLink.vue';
import {IconTrash} from '@tabler/icons-vue';

const props = defineProps<{show: boolean; listTexts: Array<string>}>();
const emit = defineEmits(['close', 'updateList']);

const editList = ref<Array<string>>(cloneDeep(props.listTexts));
const commonText = ref<string>('');

function closeDialog() {
	emit('close');
}

function deleteText(index) {
	editList.value.splice(index, 1);
}

function insertText() {
	editList.value.unshift(commonText.value);
}

function saveList() {
	emit('updateList', editList.value);
	closeDialog();
}
</script>
