<template>
	<TiptapToolbarButton v-if="editor" :isActive="!isSplacing" @click="toggleAlignList" label="Typography">
		<component :is="getIconComponent()" class="h-5 w-5" />

		<TiptapToolbarDropdown v-if="isShowAlign" @onClickOutside="isShowAlign = false">
			<TiptapToolbarDropdownButton
				v-for="(i, index) in alignList"
				:isActive="editor.isActive({textAlign: alignList[index]})"
				:key="`align_${i}`"
				@click="editor.chain().focus().setTextAlign(i).run()">
				<component :is="iconsList[index] ?? IconAlignLeft" class="h-5 w-5" />
			</TiptapToolbarDropdownButton>
		</TiptapToolbarDropdown>
	</TiptapToolbarButton>
</template>

<script setup>
import {IconAlignCenter, IconAlignLeft, IconAlignRight} from '@tabler/icons-vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';
import TiptapToolbarDropdown from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarDropdown.vue';
import TiptapToolbarDropdownButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarDropdownButton.vue';
import {ref, computed} from 'vue';

const props = defineProps({
	editor: {
		type: Object,
		default: () => {},
	},
});

const iconsList = ref({
	1: IconAlignLeft,
	2: IconAlignCenter,
	3: IconAlignRight,
});

const alignList = ref({
	1: 'left',
	2: 'center',
	3: 'right',
});

const isShowAlign = ref(false);

const getIconComponent = (i) => {
	const textAlignValue = props.editor.getAttributes('textAlign').textAlign;
	const textAlignId = Object.keys(alignList.value).find((id) => alignList.value[id] === textAlignValue);
	return iconsList.value[textAlignId] ?? iconsList.value[1]; //插入物件如為div間距，預設為IconAlignLeft，active為false
};

const toggleAlignList = () => {
	isShowAlign.value = !isShowAlign.value;
};

const isSplacing = computed(() => {
	return props.editor.isActive('customSpacing');
});
</script>

<style lang="scss" scoped></style>
