<template>
	<transition>
		<FullPageModal v-if="modelValueWritable" @close="modelValueWritable = false" title="儲存模板">
			<div class="flex flex-col gap-11 overflow-y-auto mb-20">
				<div
					v-for="template in data.data"
					:key="template.id"
					@click="open(template.id)"
					class="flex items-center h-[130px] bg-card-background rounded-2xl pl-8 hover:border-[3px] hover:border-black relative cursor-pointer">
					<p class="text-5xl font-bold mr-12">{{ template.id }}</p>
					<p :class="template.label ? '' : 'text-[#D5D5D5]'" class="text-xl font-bold mr-12">
						{{ template.label ? template.label : '沒有紀錄' }}
					</p>
					<p class="text-sm font-bold text-[#5d5d5d] italic absolute bottom-5 right-6">{{ template.updateAt ?? '沒有紀錄' }}</p>
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
// import useTemplateStore from '@/store/template.ts';
import useMutationPostSheet from '/src/server/composables/useMutationPostSheet.ts';
import useQueryTemplates from '/src/server/composables/useQueryTemplates.ts';

// const templateStore = useTemplateStore();
const {data, invalidate} = useQueryTemplates({params: {tagName: 'template'}});
const {mutate} = useMutationPostSheet();

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
 * 轉換時間格式
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
 * 儲存
 */

const open = (id) => {
	let title = '確認儲存模板?';
	// const checkedIdData = templateStore.template.find((data) => data.id === id);
	const checkedIdData = data.value.data.find((data) => data.id === id);
	if (checkedIdData?.label) title = `確認覆蓋模板 ${id}「${checkedIdData.label}」?`;
	ElMessageBox.prompt('輸入存檔名稱＊', title, {
		confirmButtonText: '確認',
		showCancelButton: false,
		inputPlaceholder: '請輸入名稱',
		inputPattern: /^.{1,20}$/,
		inputErrorMessage: '不能為空，最多輸入20個字',
	})
		.then(({value}) => {
			let val = {tagId: 1, id: null, label: '', value: '', updateAt: ''};
			data.value.data.forEach((item) => {
				if (item && item.id === id) {
					val.id = Number(id);
					val.label = value;
					val.value = props.templateValue;
					val.updateAt = formatDate(Date.now());
				}
			});
			console.log(val);
			mutate(val, {
				onSuccess() {
					invalidate();
					ElMessage({
						type: 'success',
						message: '已儲存模板',
					});
				},
			});
		})
		.catch(() => {});
};
</script>
