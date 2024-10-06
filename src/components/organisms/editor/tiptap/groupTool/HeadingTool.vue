<template>
	<TiptapToolbarButton v-if="editor" :isActive="isShowHeading" @click="toggleHeadingList" label="Typography">
		<IconHeading v-if="!editor.isActive('heading')" class="h-5 w-5" />
		<template v-else>
			<template v-for="i in 6" :key="`headingActive_${i}`">
				<component v-if="editor.isActive('heading', {level: i})" :is="getIconComponent(i)" class="h-5 w-5" />
			</template>
		</template>

		<TiptapToolbarDropdown v-if="isShowHeading" @onClickOutside="isShowHeading = false">
			<TiptapToolbarDropdownButton
				v-for="i in 6"
				:isActive="editor.isActive('heading', {level: i})"
				:key="`heading_${i}`"
				@click="editor.chain().focus().toggleHeading({level: i}).run()">
				<component :is="getIconComponent(i)" class="h-5 w-5" />
			</TiptapToolbarDropdownButton>
		</TiptapToolbarDropdown>
	</TiptapToolbarButton>
</template>

<script setup>
import {IconH1, IconH2, IconH3, IconH4, IconH5, IconH6, IconHeading} from '@tabler/icons-vue';
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

const isShowHeading = ref(false);
const iconsList = ref({
	1: IconH1,
	2: IconH2,
	3: IconH3,
	4: IconH4,
	5: IconH5,
	6: IconH6,
});

const getIconComponent = (i) => {
	return iconsList.value[i];
};

const toggleHeadingList = () => {
	isShowHeading.value = !isShowHeading.value;
};
</script>

<style lang="scss" scoped></style>
