<template>
	<div class="w-full py-1.5 px-2 flex justify-start items-center flex-wrap border-t border-t-gray-200 gap-3">
		<div :class="{'border-r border-r-gray-600 ': listTexts.length}" class="text-xs pr-2">
			<button @click="editList" class="underline text-black transition underline-offset-2 hover:opacity-75" type="button">編輯清單</button>
		</div>
		<div class="flex justify-start items-center flex-wrap gap-3">
			<CommonTextButton v-for="(item, index) in listTexts" :key="`commonText_${index}`" @click="insertText(item)">
				{{ item }}
			</CommonTextButton>
		</div>
	</div>
	<TiptapCommonTextDialog :key="listKey" :listTexts="listTexts" :show="isShowEditMdal" @close="isShowEditMdal = false" @updateList="updateList" />
</template>

<script setup>
import {ref} from 'vue';

const emit = defineEmits(['insertCommonText']);
const listTexts = ref(['GRAMICCI', 'DURABLE NYLON (100% NYLON) / 100% POLYESTE']);
import TiptapCommonTextDialog from '@components/organisms/editor/tiptap/dialog/TiptapCommonTextDialog.vue';
import CommonTextButton from '@components/organisms/editor/tiptap/toolButton/CommonTextButton.vue';
import {cloneDeep} from 'lodash';

const isShowEditMdal = ref(false);
const listKey = ref(0);

const insertText = (item) => {
	emit('insertCommonText', item);
};

const editList = () => {
	listKey.value++;
	isShowEditMdal.value = true;
};

const updateList = (list) => {
	listTexts.value = cloneDeep(list);
};
</script>

<style lang="scss" scoped></style>
