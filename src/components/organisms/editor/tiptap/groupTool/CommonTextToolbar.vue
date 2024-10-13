<template>
	<transition>
		<div
			v-if="show"
			v-click-outside:[popperPaneRef]="onClickOutside"
			ref="commonTextTool"
			class="w-[300px] h-full p-4 fixed top-0 left-0 bg-card-background z-20 overflow-y-scroll">
			<div class="w-full flex justify-center items-start flex-wrap gap-3 flex-col">
				<div class="w-full flex justify-start items-center flex-wrap gap-3">
					<TiptapToolbarButton @click="close" label="Horizontal Line">
						<IconSquareX class="h-5 w-5" />
					</TiptapToolbarButton>
					<TiptapToolbarButton :isActive="isEdit" @click="toggleEdit" label="Horizontal Line">
						<IconEdit class="h-5 w-5" />
					</TiptapToolbarButton>
				</div>

				<div class="w-full flex">
					<ElInput
						v-if="!isEdit"
						v-model="searchInput"
						:prefixIcon="Search"
						@keyup="search"
						class="w-full"
						clearable
						placeholder="搜尋常用字" />
					<ElInput v-else v-model="addInput" @keyup.enter="addText" class="w-full" clearable placeholder="輸入欲新增的文字" />
				</div>

				<div class="w-full flex justify-start items-center flex-wrap gap-3">
					<template v-if="searchInput">
						<CommonTextButton
							v-for="(item, index) in searchList"
							:key="`editCommon_${item}`"
							@click="textAction(item, index)"
							class="hover:bg-blue-700">
							{{ item }}
						</CommonTextButton>
						<div v-if="!searchList.length" class="text-xs text-gray-500">無搜尋結果</div>
					</template>
					<template v-else>
						<CommonTextButton
							v-for="(item, index) in textList"
							:class="{'hover:bg-red-700': isEdit, 'hover:bg-blue-700': !isEdit}"
							:key="`editCommon_${item}`"
							@click="textAction(item, index)">
							{{ item }}
							<IconX v-if="isEdit" class="w-3 h-3 ml-3" />
						</CommonTextButton>
					</template>
				</div>
			</div>
		</div>
	</transition>
</template>

<script lang="ts" setup>
import {ElInput, ClickOutside as vClickOutside} from 'element-plus';
import {Search} from '@element-plus/icons-vue';
import {IconX, IconSquareX, IconEdit} from '@tabler/icons-vue';
import CommonTextButton from '@components/organisms/editor/tiptap/toolButton/CommonTextButton.vue';
import {computed, ref} from 'vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';
import {filter} from 'lodash';
import * as sea from 'node:sea';

defineProps<{show: boolean}>();
const emit = defineEmits(['close', 'insertCommonText']);

const textList = ref<Array<string>>(['sss', 'dsadasdad']);
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
	emit('close');
};

const toggleEdit = () => {
	isEdit.value = !isEdit.value;
	if (isEdit.value) {
		searchInput.value = '';
		searchList.value = [];
	}
};

const textAction = (item: string, index: number) => {
	if (isEdit.value) {
		deleteText(index);
	} else {
		insertText(item);
	}
};

const deleteText = (index: number) => {
	textList.value.splice(index, 1);
};

const addText = () => {
	textList.value.unshift(addInput.value);
	addInput.value = '';
};

const insertText = (text: string) => {
	emit('insertCommonText', text);
};

const search = () => {
	searchList.value = filter(textList.value, (i) => i.includes(searchInput.value));
};
</script>

<style lang="scss" scoped></style>
