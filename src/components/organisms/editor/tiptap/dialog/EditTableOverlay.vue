<template>
	<transition>
		<FullPageModal v-if="modelValueWritable" @close="modelValueWritable = false" title="編輯表格">
			<div class="flex flex-col gap-11 sm:gap-5 overflow-y-auto mb-20">
				<div
					v-for="template in store.getTables"
					:key="template.id"
					@click="template.label ? load(template.id) : open(template.id)"
					class="flex items-center h-[130px] sm:h-[150px] bg-card-background rounded-2xl px-8 hover:border-[3px] hover:border-black relative cursor-pointer">
					<p class="text-5xl font-bold mr-12 sm:mr-6">{{ template.id }}</p>
					<p :class="template.label ? '' : 'text-[#D5D5D5]'" class="text-xl sm:text-base font-bold">
						{{ template.label ? template.label : '點擊創建表格' }}
					</p>
					<TiptapToolbarGroup v-if="template.label" class="absolute top-2 right-6">
						<TiptapToolbarButton
							@click.stop="deleteItem(template.id, template.label)"
							class="border border-gray-400"
							label="templateTrash">
							<IconTrash></IconTrash>
						</TiptapToolbarButton>

						<!--						<TiptapToolbarButton @click="open(template.id)" class="border border-gray-400" label="templateCover">-->
						<!--							<IconDeviceFloppy />-->
						<!--						</TiptapToolbarButton>-->

						<TiptapToolbarButton @click.stop="editTable(template.id)" class="border border-gray-400" label="templateEdit">
							<IconEdit />
						</TiptapToolbarButton>
					</TiptapToolbarGroup>
					<p class="text-sm font-bold text-[#5d5d5d] italic absolute bottom-5 right-6">
						{{ template.updateAt ?? '' }}
					</p>
				</div>
			</div>
			<div class="fixed bottom-0 left-0 h-20 bg-[#5B5B5B] text-white flex w-screen">
				<p class="w-full max-w-3xl mx-auto leading-[80px]">請選擇儲存欄位。</p>
			</div>
		</FullPageModal>
	</transition>

	<!--表格編輯器-->
	<TableEditorOverlay
		v-if="isShowTableEditor"
		:show="isShowTableEditor"
		:tableData="tableData"
		@close="isShowTableEditor = false"
		@saveTable="saveTable" />
</template>

<script lang="ts" setup>
import FullPageModal from '@components/organisms/modal/FullPageModal.vue';
import {useVModel} from '@vueuse/core';
import {ElMessage, ElMessageBox} from 'element-plus';
import {useTableDataStore} from '@/store/table.ts';
import {IconEdit, IconTrash, IconDeviceFloppy} from '@tabler/icons-vue';
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarGroup.vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';
import TableEditorOverlay from '@components/organisms/editor/tiptap/dialog/TableEditorOverlay.vue';
import {ref} from 'vue';

const store = useTableDataStore();

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

	(event: 'insert', value: string): void;
}

const emit = defineEmits<SaveTemplateModalEmit>();

const isShowTableEditor = ref(false);
const tableData = ref(null);
const modelValueWritable = useVModel(props, 'modelValue', emit);
const selectedId = ref(0);

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
 * load 插入表格
 *
 * @param  {number}  id - 對應id。
 */
const load = (id: number) => {
	const findTable = store.getTables.find((data) => data.id === id);
	if (findTable) {
		emit('insert', findTable.value);

		ElMessage({
			type: 'success',
			message: '表單插入成功',
		});
	}
};

/**
 * open 打開創建表格
 *
 * @param  {number}  id - 對應id。
 */
const open = (id: number) => {
	tableData.value = null;
	selectedId.value = id;
	isShowTableEditor.value = true;
};

/**
 * editTable 編輯名稱
 *
 * @param  {Number}  id - 對應id。
 */
const editTable = (id) => {
	const findTable = store.getTables.find((data) => data.id === id);
	if (findTable) {
		tableData.value = {
			title: findTable.label,
			html: findTable.value,
		};

		selectedId.value = id;
		isShowTableEditor.value = true;
	}
};
const deleteItem = (id, oldName) => {
	ElMessageBox.confirm('確認後將刪除此筆表格。', `確認刪除表格「${oldName}」?`, {
		confirmButtonText: '確認',
		cancelButtonText: '取消',
		showCancelButton: true,
		type: 'warning',
	})
		.then(() => {
			store.deleteTable(id);
			ElMessage({
				type: 'success',
				message: '已刪除表格',
			});
		})
		.catch(() => {});
};

const saveTable = (tableResult) => {
	store.tables.forEach((item) => {
		if (item && item.id === selectedId.value) {
			item.id = Number(selectedId.value) as number;
			item.label = tableResult.title;
			item.value = tableResult.html;
			item.updateAt = formatDate(Date.now());

			ElMessage({
				type: 'success',
				message: '已更新表格',
			});
		}
	});
};
</script>
