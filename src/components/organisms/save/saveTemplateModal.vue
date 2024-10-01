<template>
	<transition>
		<FullPageModal v-if="modelValueWritable" @close="modelValueWritable = false" title="儲存模板">
			<div class="flex flex-col gap-11 overflow-y-auto mb-10">
				<div
					v-for="template in demo"
					:key="template.id"
					@click="storeTemplate(template.id)"
					class="flex items-center h-[130px] bg-card-background rounded-2xl pl-8 hover:border-[3px] hover:border-black relative cursor-pointer">
					<p class="text-5xl font-bold mr-12">{{ template.id }}</p>
					<p :class="template.title ? '' : 'text-[#D5D5D5]'" class="text-xl font-bold mr-12">
						{{ template.title ? template.title : '沒有紀錄' }}
					</p>
					<p class="text-sm font-bold text-[#5d5d5d] italic absolute bottom-5 right-6">{{ template.updateAt ?? '沒有紀錄' }}</p>
				</div>
			</div>
		</FullPageModal>
	</transition>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import FullPageModal from '@components/organisms/modal/FullPageModal.vue';
import {useVModel} from '@vueuse/core';

interface SaveTemplateModalProps {
	modelValue: boolean;
	templateValue: object | null;
}

const props = withDefaults(defineProps<SaveTemplateModalProps>(), {
	modelValue: true,
	templateValue: () => ({}),
});

interface SaveTemplateModalEmit {
	(event: 'update:modelValue', value: boolean): void;
}
const emit = defineEmits<SaveTemplateModalEmit>();

const modelValueWritable = useVModel(props, 'modelValue', emit);
// const templateDemo = useStoreTemplateDemo();

const demo = ref([
	{
		id: 1,
		title: '男裝模板1',
		value: {},
		updateAt: '2024-05-01 12:00',
	},
	{
		id: 2,
		title: '女裝模板1',
		value: {},
		updateAt: '2024-05-03 12:00',
	},
	{
		id: 3,
		title: '',
		value: null,
		updateAt: '',
	},
	{
		id: 4,
		title: '',
		value: null,
		updateAt: '',
	},
	{
		id: 5,
		title: '',
		value: null,
		updateAt: '',
	},
]);

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
const storeTemplate = (id) => {
	demo.value.forEach((data) => {
		if (data && data.id === id) {
			data.title = '儲存測試';
			data.value = props.templateValue;
			data.updateAt = formatDate(Date.now());
		}
	});
};
</script>
