<template>
	<transition>
		<FullPageModal v-if="modelValueWritable" @close="modelValueWritable = false" title="儲存模板">
			<div class="flex flex-col gap-11 sm:gap-5 overflow-y-auto mb-5">
				<ElButton @click="save()" type="info"> + 儲存當前模板</ElButton>
				<div v-if="templatesLength === 0" class="text-lg sm:text-base mx-auto text-gray-400">沒有任何模板唷，馬上儲存當前內容為模板 ↑</div>
				<template v-else>
					<div
						v-for="(template, index) in store.getTemplates"
						:key="template.id"
						class="flex items-center h-[130px] sm:h-[150px] bg-card-background rounded-2xl px-8 hover:border-[3px] hover:border-black relative cursor-pointer">
						<p class="text-5xl sm:text-3xl font-bold mr-12 sm:mr-6">{{ templatesLength - index }}</p>
						<p :class="template.label ? '' : 'text-[#D5D5D5]'" class="text-xl sm:text-base font-bold">
							{{ template.label ? template.label : '點擊儲存當前模板' }}
						</p>
						<TiptapToolbarGroup v-if="template.label" class="absolute top-2 right-6 gap-4">
							<TiptapToolbarButton
								@click="deleteItem(template.id, template.label)"
								class="border border-gray-400"
								label="templateTrash"
								title="刪除模板">
								<IconTrash></IconTrash>
							</TiptapToolbarButton>

							<TiptapToolbarButton
								@click="save(template.id, templatesLength - index)"
								class="border border-gray-400"
								label="templateCover"
								title="編輯模板">
								<IconDeviceFloppy />
							</TiptapToolbarButton>

							<TiptapToolbarButton
								@click="rename(template.id, template.label)"
								class="border border-gray-400"
								label="templateEdit"
								title="重新命名模板">
								<IconEdit />
							</TiptapToolbarButton>

							<TiptapToolbarButton @click="load(template.id)" class="border border-gray-400" label="templateEdit" title="套用模板">
								<IconDownload />
							</TiptapToolbarButton>
						</TiptapToolbarGroup>
						<p class="text-sm font-bold text-[#5d5d5d] italic absolute bottom-5 right-6">
							{{ template.updateAt ?? '' }}
						</p>
					</div>
				</template>
			</div>
		</FullPageModal>
	</transition>
</template>

<script lang="ts" setup>
import FullPageModal from '@components/organisms/modal/FullPageModal.vue';
import {useVModel} from '@vueuse/core';
import {ElMessage, ElMessageBox, ElButton} from 'element-plus';
import {useDataStore} from '@/store/template.ts';
import {useImageCommentStore} from '../../../store/imageComment';
import {IconEdit, IconTrash, IconDeviceFloppy, IconDownload} from '@tabler/icons-vue';
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarGroup.vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';
import {v4 as uuidv4} from 'uuid';
import {computed} from 'vue';

const store = useDataStore();
const imageStore = useImageCommentStore();

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

	(event: 'update', value: string): void;
}

const emit = defineEmits<SaveTemplateModalEmit>();

const modelValueWritable = useVModel(props, 'modelValue', emit);
const templatesLength = computed(() => store.getTemplates.length);

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
 * save 儲存模板
 *
 * @param  {number}  id - 對應id。
 */
const save = (id?: string, dataIndex?: number) => {
	let title = '確認儲存模板?';
	let checkedIdData;
	if (id) {
		checkedIdData = store.getTemplates.find((data) => data.id === id);
		title = `確認覆蓋模板 ${dataIndex}「${checkedIdData.label}」?`;
	}

	ElMessageBox.prompt('輸入存檔名稱＊', title, {
		confirmButtonText: '確認',
		cancelButtonText: '取消',
		showCancelButton: true,
		inputPlaceholder: '請輸入名稱',
		inputPattern: /^.{1,20}$/,
		inputValue: id ? checkedIdData.label : '',
		inputErrorMessage: '不能為空，最多輸入20個字',
	})
		.then(({value}) => {
			if (id)
				store.setTemplates({
					id: id,
					label: value,
					value: props.templateValue,
					updateAt: formatDate(Date.now()),
					config: {
						figcaptionColor: imageStore.getImageCommentColor,
					},
				});
			else {
				store.addTemplate({
					id: uuidv4(),
					label: value,
					value: props.templateValue,
					updateAt: formatDate(Date.now()),
					config: {
						figcaptionColor: imageStore.getImageCommentColor,
					},
				});
			}
			ElMessage({
				type: 'success',
				message: id ? '已覆蓋原模板' : '已儲存模板',
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

/**
 * load 載入模板
 *
 * @param  {Number}  id - 對應id。
 */

const load = (id) => {
	ElMessageBox.confirm('載入後將直接覆蓋目前編輯器資料。', '確認載入模板?', {
		confirmButtonText: '確認',
		cancelButtonText: '取消',
		showCancelButton: true,
	})
		.then(() => {
			const checkedIdData = store.getTemplates.find((data) => data.id === id);
			if (checkedIdData.config?.figcaptionColor) {
				imageStore.saveImageCommentColor(checkedIdData.config.figcaptionColor);
			}

			emit('update', checkedIdData.value);
			ElMessage({
				type: 'success',
				message: '已載入模板',
			});
			modelValueWritable.value = false;
		})
		.catch(() => {});
};
</script>
