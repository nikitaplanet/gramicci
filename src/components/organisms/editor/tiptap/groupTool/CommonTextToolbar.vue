<template>
	<transition>
		<div
			v-if="show"
			v-click-outside:[popperPaneRef]="onClickOutside"
			ref="commonTextTool"
			class="w-full h-[45vh] p-4 pt-0 fixed bottom-0 bg-card-background/80 z-20 overflow-y-scroll Properties shadow-md">
			<div class="w-full flex justify-center items-start flex-wrap gap-3 flex-col">
				<!-- 工具列 -->
				<div class="w-full bg-card-background pt-4 pb-2 flex flex-col gap-3 sticky top-0">
					<div class="w-full flex justify-between items-center flex-wrap gap-3 h-[41px]">
						<TiptapToolbarButton @click="close" label="Horizontal Line">
							<IconSquareX class="h-5 w-5" />
						</TiptapToolbarButton>
						<div class="flex items-center">
							<NButton v-if="isEdit" @click="addText" class="w-max h-10 mr-3">新增常用字</NButton>
							<TiptapToolbarButton :isActive="isEdit" @click="toggleEdit" label="Horizontal Line">
								<IconEdit class="h-5 w-5" />
							</TiptapToolbarButton>
						</div>
					</div>

					<!-- input -->
					<div class="w-full flex">
						<ElInput
							v-if="!isEdit"
							v-model="searchInput"
							:prefixIcon="Search"
							@keyup="search"
							class="w-full"
							clearable
							placeholder="搜尋常用字" />
						<template v-else>
							<ElInput v-model="addInput" class="w-full" clearable placeholder="輸入欲新增的文字" type="textarea" />
						</template>
					</div>
				</div>
				<div class="w-full flex justify-start items-center flex-wrap gap-3 overflow-scroll">
					<template v-if="searchInput">
						<CommonTextButton v-for="item in searchList" :key="`editCommon_${item}`" @click="textAction(item)" class="hover:bg-blue-700">
							{{ item }}
						</CommonTextButton>
						<div v-if="!searchList.length" class="text-xs text-gray-500">無搜尋結果</div>
					</template>
					<template v-else>
						<CommonTextButton
							v-for="(item, index) in store.getCommonWords"
							:class="{'hover:bg-red-700': isEdit, 'hover:bg-blue-700': !isEdit}"
							:key="`editCommon_${item}`"
							@click="textAction(item, index)">
							<pre v-html="transHtmlFormat(item)" class="text-left"></pre>
							<IconX v-if="isEdit" :size="10" class="min-w-2 min-h-2 ml-3" />
						</CommonTextButton>
					</template>
				</div>
			</div>
		</div>
	</transition>
</template>

<script lang="ts" setup>
import {ElInput, ClickOutside as vClickOutside, ElMessage, ElMessageBox} from 'element-plus';
import {Search} from '@element-plus/icons-vue';
import {IconX, IconSquareX, IconEdit} from '@tabler/icons-vue';
import CommonTextButton from '@components/organisms/editor/tiptap/toolButton/CommonTextButton.vue';
import {computed, ref, watch} from 'vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';
import {filter} from 'lodash';
import * as sea from 'node:sea';
import NButton from '@components/atoms/NButton.vue';

import {useDataStore} from '@/store/template.ts';
const store = useDataStore();
defineProps<{show: boolean}>();
const emit = defineEmits(['close', 'insertCommonText']);
const searchList = ref<Array<string>>([]);
const addInput = ref<string>('');
const searchInput = ref<string>('');
const isEdit = ref(false);
const commonTextTool = ref();
const popperPaneRef = computed(() => {
	return commonTextTool.value?.popperRef?.contentRef;
});

const onClickOutside = () => {
	close();
};

const close = () => {
	isEdit.value = false;
	emit('close');
};

const toggleEdit = () => {
	isEdit.value = !isEdit.value;
	if (isEdit.value) {
		searchInput.value = '';
		searchList.value = [];
	}
};

const textAction = (item: string) => {
	if (isEdit.value) {
		deleteText(item);
	} else {
		insertText(item);
	}
};

const deleteText = (item: string) => {
	ElMessageBox.confirm(`確認後將刪除常用字「${item}」。`, `確認刪除常用字?`, {
		confirmButtonText: '確認',
		cancelButtonText: '取消',
		showCancelButton: true,
		type: 'warning',
	})
		.then(() => {
			store.setCommonWords(store.commonWords.filter((val) => val !== item));
			ElMessage({
				type: 'success',
				message: `已刪除常用字 "${item}"`,
			});
		})
		.catch(() => {});
};

const addText = () => {
	if (store.getCommonWords.includes(addInput.value)) {
		ElMessage({
			type: 'warning',
			message: `"${addInput.value}" 已在常用字清單中`,
		});
		return;
	}
	store.setCommonWords([...store.getCommonWords, addInput.value]);
	ElMessage({
		type: 'success',
		message: '已儲存常用字',
	});
};

const insertText = (text: string) => {
	emit('insertCommonText', transHtmlFormat(text));
};

const search = () => {
	searchList.value = filter(store.getCommonWords, (i) => i.includes(searchInput.value));
};

/**
 * transHtmlFormat:textarea有換行格式換為<p>標籤
 * @description textarea有換行格式\h，將每列文字是用<p>標籤做換行區別，無\h傳回text原始值。
 * @param {string} text - 新增常用字input輸入的值
 * @returns {string} text or <p>標籤字串。
 */
const transHtmlFormat = (text: string) => {
	return text.includes('\n') ? `<p>${text.replaceAll('\n', '</p><p>')}</p>` : text;
};
</script>
<style lang="scss" scoped></style>
