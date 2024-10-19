<template>
	<transition>
		<FullPageModal v-if="modelValueWritable" @close="modelValueWritable = false" title="儲存模板">
			<div class="flex flex-col gap-11 overflow-y-auto mb-20">
				<div
					v-for="template in store.getTemplates"
					:class="template.label ? 'hover:border-[3px] hover:border-black cursor-pointer' : 'cursor-default'"
					:key="template.id"
					@click="template.label ? open(template.id) : ''"
					class="flex items-center h-[130px] bg-card-background rounded-2xl pl-8 relative">
					<p :class="template.label ? '' : 'text-[#D5D5D5]'" class="text-5xl font-bold mr-12">{{ template.id }}</p>
					<p :class="template.label ? '' : 'text-[#D5D5D5]'" class="text-xl font-bold mr-12">
						{{ template.label ? template.label : '沒有紀錄' }}
					</p>
					<p class="text-sm font-bold text-[#5d5d5d] italic absolute bottom-5 right-6">{{ template.updateAt ?? '' }}</p>
				</div>
			</div>
			<div class="fixed bottom-0 left-0 h-20 bg-[#5B5B5B] text-white flex w-screen">
				<p class="w-full max-w-3xl mx-auto leading-[80px]">請選擇載入的模板。</p>
			</div>
		</FullPageModal>
	</transition>
</template>

<script lang="ts" setup>
import FullPageModal from '@components/organisms/modal/FullPageModal.vue';
import {useVModel} from '@vueuse/core';
import {ElMessage, ElMessageBox} from 'element-plus';
import {useDataStore} from '@/store/template.ts';
const store = useDataStore();

interface LoadeTmplateModalProps {
	modelValue: boolean;
}

const props = withDefaults(defineProps<LoadeTmplateModalProps>(), {
	modelValue: true,
});

interface LoadeTmplateModalEmit {
	(event: 'update:modelValue', value: boolean): void;
	(event: 'update', value: string): void;
}
const emit = defineEmits<LoadeTmplateModalEmit>();

const modelValueWritable = useVModel(props, 'modelValue', emit);

/**
 * 載入
 */

const open = (id) => {
	ElMessageBox.confirm('載入後將直接覆蓋目前編輯器資料。', '確認載入模板?', {
		confirmButtonText: '確認',
		cancelButtonText: '取消',
		showCancelButton: true,
	})
		.then(() => {
			const checkedIdData = store.getTemplates.find((data) => data.id === id);
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
