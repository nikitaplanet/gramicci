<template>
	<TiptapToolbarButton @click="confirmClearLS" label="Clear cache">
		<IconTrashX class="h-5 w-5" />
	</TiptapToolbarButton>

	<Dialog :show="isShowCheckModal" @close="isShowCheckModal = false" title="確認移除瀏覽器暫存？">
		<form>
			<div class="flex flex-col space-y-5">
				<div class="flex flex-row space-x-5 text-sm text-red-600">
					點擊「確認」將此瀏覽器 GRAMICCI 暫存資料刪除，若 Template 資料異常，建議清除後重新匯入正常模板資料。
				</div>
				<div class="flex flex-row justify-end space-x-3">
					<DialogButton @click="isShowCheckModal = false" isLight>返回</DialogButton>
					<DialogButton @click="clearLS">確認</DialogButton>
				</div>
			</div>
		</form>
	</Dialog>
</template>

<script setup>
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';
import {IconTrashX} from '@tabler/icons-vue';
import Dialog from '@components/organisms/modal/Dialog.vue';
import DialogButton from '@components/atoms/dialog/DialogButton.vue';
import {ref} from 'vue';

const isShowCheckModal = ref(false);
const confirmClearLS = () => {
	isShowCheckModal.value = true;
};

const clearLS = () => {
	isShowCheckModal.value = false;
	localStorage.clear();
	location.reload();
};
</script>
