<template>
	<transition>
		<div
			v-if="show"
			ref="commonTextTool"
			class="w-full h-[45vh] p-4 pt-0 fixed bottom-0 bg-card-background/80 z-20 overflow-y-scroll Properties shadow-md">
			<div class="w-full flex justify-center items-start flex-wrap gap-3 flex-col">
				<!-- 工具列 -->
				<div class="w-full bg-card-background pt-4 pb-2 flex flex-col gap-3 sticky top-0">
					<div class="w-full flex justify-start items-center flex-wrap gap-3 h-[41px]">
						<TiptapToolbarButton @click="close" label="Horizontal Line">
							<IconSquareX class="h-5 w-5" />
						</TiptapToolbarButton>
						<div class="flex items-center">
							<TiptapToolbarButton :isActive="isEdit" @click="toggleEdit" label="Horizontal Line">
								<IconTrash class="h-5 w-5" />
							</TiptapToolbarButton>
						</div>
						<NLink @click="isShowAddModal = true" hasUnderline>＋新增常用字</NLink>
					</div>

					<!-- input -->
					<div class="w-full flex flex-col gap-3">
						<h1 class="w-full text-lg font-medium">
							{{ isEdit ? '刪除常用字' : '選擇常用字' }}
						</h1>
						<ElInput
							v-if="!isEdit"
							v-model="searchInput"
							:prefixIcon="Search"
							@keyup="search"
							class="w-full"
							clearable
							placeholder="搜尋常用字" />
					</div>
				</div>
				<div class="w-full flex justify-start items-start flex-wrap gap-3 overflow-scroll commonTextContainer">
					<template v-if="searchInput">
						<CommonTextButton v-for="item in searchList" :key="`editCommon_${item}`" @click="textAction(item)" class="hover:bg-blue-700">
							{{ item.content }}
						</CommonTextButton>
						<div v-if="!searchList.length" class="text-xs text-gray-500">無搜尋結果</div>
					</template>
					<template v-else>
						<template v-if="store.getCommonWords.length > 0">
							<div v-for="item in store.getCommonWords" class="flex flex-col">
								<div class="text-xs mb-2 font-medium">
									{{ item.title }}
								</div>
								<CommonTextButton
									:class="{'hover:bg-red-700': isEdit, 'hover:bg-blue-700': !isEdit}"
									:key="`editCommon_${item}`"
									@click="textAction(item)">
									<pre v-html="transHtmlFormat(item)" class="text-left"></pre>
									<IconX v-if="isEdit" :size="10" class="min-w-2 min-h-2 ml-3" />
								</CommonTextButton>
							</div>
						</template>

						<template v-else>
							<div class="text-sm text-gray-400">目前尚未建立常用字</div>
						</template>
					</template>
				</div>
			</div>
		</div>
	</transition>

	<AddCommonTextDialog :show="isShowAddModal" @addText="addText" @close="isShowAddModal = false" />
</template>

<script lang="ts" setup>
import {ElInput, ElMessage, ElMessageBox} from 'element-plus';
import {Search} from '@element-plus/icons-vue';
import {IconX, IconSquareX, IconTrash} from '@tabler/icons-vue';
import CommonTextButton from '@components/organisms/editor/tiptap/toolButton/CommonTextButton.vue';
import {ref} from 'vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';
import {filter} from 'lodash';
import AddCommonTextDialog from '@components/organisms/editor/tiptap/dialog/AddCommonTextDialog.vue';

import {useDataStore} from '@/store/template.ts';
import NLink from '@components/atoms/NLink.vue';
import {CommonText} from '@assets/js/enum/commonText';

const store = useDataStore();
defineProps<{show: boolean}>();
const emit = defineEmits(['close', 'insertCommonText']);
const searchList = ref<Array<CommonText>>([]);
const searchInput = ref<string>('');
const isEdit = ref(false);
const commonTextTool = ref();
const isShowAddModal = ref(false);

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

const textAction = (item: CommonText) => {
	if (isEdit.value) {
		deleteText(item);
	} else {
		insertText(item);
	}
};

const deleteText = (item: CommonText) => {
	ElMessageBox.confirm(`確認後將刪除常用字「${item.content}」。`, '確認刪除常用字?', {
		confirmButtonText: '確認',
		cancelButtonText: '取消',
		showCancelButton: true,
		type: 'warning',
	})
		.then(() => {
			store.setCommonWords(store.commonWords.filter((val) => val.content !== item.content));
			ElMessage({
				type: 'success',
				message: `已刪除常用字 "${item}"`,
			});
		})
		.catch(() => {});
};

const addText = (data: CommonText) => {
	const findData = store.getCommonWords.find((item) => item.content === data.content);
	if (findData) {
		ElMessage({
			type: 'warning',
			message: `"${data.content}" 已在常用字清單中`,
		});
		return;
	}
	store.setCommonWords([...store.getCommonWords, data]);
	ElMessage({
		type: 'success',
		message: '已儲存常用字',
	});
};

const insertText = (text: CommonText) => {
	emit('insertCommonText', transHtmlFormat(text));
};

const search = () => {
	searchList.value = filter(store.getCommonWords, (i) => i.content.includes(searchInput.value));
};

/**
 * transHtmlFormat:textarea有換行格式換為<p>標籤
 * @description textarea有換行格式\h，將每列文字是用<p>標籤做換行區別，無\h傳回text原始值。
 * @param {CommonText} data - 新增常用字input輸入的值
 * @returns {string} data.content or <p>標籤字串。
 */
const transHtmlFormat = (data: CommonText) => {
	// return data.content.includes('\n') ? `<p>${data.content.replaceAll('\n', '</p><p>')}</p>` : data.content;
	return data.content;
};
</script>
<style lang="scss" scoped>
.commonTextContainer {
	scrollbar-width: none; /* Firefox */
	-ms-overflow-style: none; /* IE & Edge */

	&::-webkit-scrollbar {
		display: none;
	}
}
</style>
