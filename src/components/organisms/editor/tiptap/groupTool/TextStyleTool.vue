<template>
	<TiptapToolbarGroup v-if="editor">
		<TiptapToolbarButton :isActive="editor.isActive('bold')" @click="editor?.chain().focus().toggleBold().run()" label="Bold">
			<IconBold class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton :isActive="editor.isActive('italic')" @click="editor?.chain().focus().toggleItalic().run()" label="Italic">
			<IconItalic class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton :isActive="editor.isActive('underline')" @click="editor.chain().focus().toggleUnderline().run()" label="Underline">
			<IconUnderline class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton :isActive="editor.isActive('strike')" @click="editor.chain().focus().toggleStrike().run()" label="Strikethrough">
			<IconStrikethrough class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton :isActive="isShowFontSize" @click="toggleFontSizeList" label="TextSize">
			<IconTextSize class="h-5 w-5" />
			<TiptapToolbarDropdown v-if="isShowFontSize" @onClickOutside="isShowFontSize = false">
				<TiptapToolbarDropdownButton
					v-for="(item, index) in fontSizeList"
					:isActive="editor.isActive('textStyle', {fontSize: `${item}px`})"
					:key="`font_${index}`"
					@click="editor.chain().focus().setFontSize(`${item}px`).run()">
					{{ item }}
				</TiptapToolbarDropdownButton>
			</TiptapToolbarDropdown>
		</TiptapToolbarButton>
		<TiptapToolbarButton :isActive="isShowTypography" @click="toggleTypographyList" label="Typography">
			<IconTypography class="h-5 w-5" />
			<TiptapToolbarDropdown v-if="isShowTypography" @onClickOutside="isShowTypography = false">
				<TiptapToolbarDropdownButton
					v-for="(item, index) in fontFamilyList"
					:isActive="editor.isActive('textStyle', {fontFamily: item.font})"
					:key="`fontFamily_${index}`"
					@click="editor.chain().focus().setFontFamily(item.font).run()">
					<span>{{ item.name }}</span>
				</TiptapToolbarDropdownButton>
			</TiptapToolbarDropdown>
		</TiptapToolbarButton>
	</TiptapToolbarGroup>
</template>

<script lang="ts" setup>
import {IconBold, IconItalic, IconStrikethrough, IconUnderline, IconTextSize, IconTypography} from '@tabler/icons-vue';
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

const isShowFontSize = ref(false);
const isShowTypography = ref(false);

const fontSizeList = ref<number[]>([]);
for (let i = 9; i < 40; i++) {
	fontSizeList.value.push(i);
}

interface FontFamily {
	name: string;
	font: string;
	class: string;
}

const fontFamilyList = ref<FontFamily[]>([
	{
		name: 'Arial',
		font: 'Arial',
		class: 'font-en',
	},
	{
		name: '蘋方繁',
		font: 'PingFang TC',
		class: 'font-tw',
	},
]);

const toggleFontSizeList = () => {
	isShowFontSize.value = !isShowFontSize.value;
};

const toggleTypographyList = () => {
	isShowTypography.value = !isShowTypography.value;
};
</script>

<style lang="scss" scoped>
//.font {
//	&-en {
//		font-family: 'Arial';
//	}
//
//	&-tw {
//		font-family: 'PingFang TC';
//	}
//}
</style>
