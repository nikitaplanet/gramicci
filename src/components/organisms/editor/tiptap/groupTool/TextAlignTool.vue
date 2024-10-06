<template>
	<TiptapToolbarButton v-if="editor" :isActive="true" @click="toggleAlignList" label="Typography">
		<template v-for="(i, index) in alignList" :key="`alignActive_${index}`">
			<component v-if="editor.isActive({textAlign: alignList[index]})" :is="getIconComponent(index)" class="h-5 w-5" />
		</template>

		<TiptapToolbarDropdown v-if="isShowAlign" @onClickOutside="isShowAlign = false">
			<TiptapToolbarDropdownButton
				v-for="(i, index) in alignList"
				:isActive="editor.isActive({textAlign: alignList[index]})"
				:key="`align_${i}`"
				@click="editor.chain().focus().setTextAlign(i).run()">
				<component :is="getIconComponent(index)" class="h-5 w-5" />
			</TiptapToolbarDropdownButton>
		</TiptapToolbarDropdown>
	</TiptapToolbarButton>
</template>

<script setup>
import {IconAlignCenter, IconAlignLeft, IconAlignRight} from '@tabler/icons-vue';
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarGroup.vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';
import TiptapToolbarDropdown from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarDropdown.vue';
import TiptapToolbarDropdownButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarDropdownButton.vue';
import {ref} from 'vue';

defineProps({
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
	return iconsList.value[i];
};

const toggleAlignList = () => {
	isShowAlign.value = !isShowAlign.value;
};
</script>

<style lang="scss" scoped></style>
