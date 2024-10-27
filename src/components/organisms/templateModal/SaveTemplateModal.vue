<template>
	<transition>
		<FullPageModal v-if="modelValueWritable" @close="modelValueWritable = false" title="儲存模板">
			<div class="flex flex-col gap-11 sm:gap-5 overflow-y-auto mb-20">
				<div
					v-for="template in store.getTemplates"
					:key="template.id"
					@click="template.label ? '' : open(template.id)"
					class="flex items-center h-[130px] sm:h-[150px] bg-card-background rounded-2xl px-8 hover:border-[3px] hover:border-black relative cursor-pointer">
					<p class="text-5xl font-bold mr-12 sm:mr-6">{{ template.id }}</p>
					<p :class="template.label ? '' : 'text-[#D5D5D5]'" class="text-xl sm:text-base font-bold">
						{{ template.label ? template.label : '點擊儲存當前模板' }}
					</p>
					<TiptapToolbarGroup v-if="template.label" class="absolute top-2 right-6">
						<TiptapToolbarButton @click="deleteItem(template.id, template.label)" class="border border-gray-400" label="templateTrash">
							<IconTrash></IconTrash
						></TiptapToolbarButton>

						<TiptapToolbarButton @click="open(template.id)" class="border border-gray-400" label="templateCover">
							<IconDeviceFloppy />
						</TiptapToolbarButton>

						<TiptapToolbarButton @click="rename(template.id, template.label)" class="border border-gray-400" label="templateEdit">
							<IconEdit
						/></TiptapToolbarButton>
					</TiptapToolbarGroup>
					<p class="text-sm font-bold text-[#5d5d5d] italic absolute bottom-5 right-6">{{ template.updateAt ?? '' }}</p>
				</div>
			</div>
			<div class="fixed bottom-0 left-0 h-20 bg-[#5B5B5B] text-white flex w-screen">
				<p class="w-full max-w-3xl mx-auto leading-[80px]">請選擇儲存欄位。</p>
			</div>
		</FullPageModal>
	</transition>
</template>

<script lang="ts" setup>
import FullPageModal from '@components/organisms/modal/FullPageModal.vue';
import {useVModel} from '@vueuse/core';
import {ElMessage, ElMessageBox} from 'element-plus';
import {useDataStore} from '@/store/template.ts';
import {IconEdit, IconTrash, IconDeviceFloppy} from '@tabler/icons-vue';
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarGroup.vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';

const store = useDataStore();

interface SaveTemplateModalProps {
	modelValue: boolean;
	templateValue: string | null;
}

const props = withDefaults(defineProps<SaveTemplateModalProps>(), {
	modelValue: true,
	templateValue: null,
});

interface SaveTemplateModalEmit {
	(event: 'update:modelValue', value: boolean): void;
}
const emit = defineEmits<SaveTemplateModalEmit>();

const modelValueWritable = useVModel(props, 'modelValue', emit);

/**
 * formatDate 轉換紀錄時間格式
 *
 * @param  {number}  id - 對應id。
 * @return {string}  時間 - yyyy-MM-dd hh:mm
 */
const formatDate = (timestamp) => {
	const date = new Date(timestamp);
	const yyyy = date.getFullYear();
	const MM = String(date.getMonth() + 1).padStart(2, '0');
	const dd = String(date.getDate()).padStart(2, '0');
	const hh = String(date.getHours()).padStart(2, '0');
	const mm = String(date.getMinutes()).padStart(2, '0');
	return `${yyyy}-${MM}-${dd} ${hh}:${mm}`;
};

/**
 * open 儲存模板
 *
 * @param  {number}  id - 對應id。
 */
const open = (id: number) => {
	let title = '確認儲存模板?';

	const checkedIdData = store.getTemplates.find((data) => data.id === id);
	if (checkedIdData?.label) title = `確認覆蓋模板 ${id}「${checkedIdData.label}」?`;
	ElMessageBox.prompt('輸入存檔名稱＊', title, {
		confirmButtonText: '確認',
		cancelButtonText: '取消',
		showCancelButton: true,
		inputPlaceholder: '請輸入名稱',
		inputPattern: /^.{1,20}$/,
		inputValue: checkedIdData.label ?? null,
		inputErrorMessage: '不能為空，最多輸入20個字',
	})
		.then(({value}) => {
			store.templates.forEach((item) => {
				if (item && item.id === id) {
					item.id = Number(id) as number;
					item.label = value;
					item.value = props.templateValue;
					item.updateAt = formatDate(Date.now());
				}
			});
			ElMessage({
				type: 'success',
				message: '已儲存模板',
			});
		})
		.catch(() => {});
};

/**
 * rename 編輯名稱
 *
 * @param  {Number}  id - 對應id。
 * @param  {String}  oldName - 模板目前名稱。
 */
const rename = (id, oldName) => {
	ElMessageBox.prompt(`編輯存檔名稱＊`, '編輯模板名稱', {
		confirmButtonText: '確認',
		cancelButtonText: '取消',
		showCancelButton: true,
		inputPlaceholder: '請輸入名稱',
		inputPattern: /^.{1,20}$/,
		inputValue: oldName,
		inputErrorMessage: '不能為空，最多輸入20個字',
	})
		.then(({value}) => {
			store.renameTemplate(id, value);
			ElMessage({
				type: 'success',
				message: '已更新模板名稱',
			});
		})
		.catch(() => {});
};
const deleteItem = (id, oldName) => {
	ElMessageBox.confirm('確認後將刪除此筆模板。', `確認刪除模板「${oldName}」?`, {
		confirmButtonText: '確認',
		cancelButtonText: '取消',
		showCancelButton: true,
		type: 'warning',
	})
		.then(() => {
			store.deleteTemplate(id);
			ElMessage({
				type: 'success',
				message: '已刪除模板',
			});
		})
		.catch(() => {});
};
</script>
