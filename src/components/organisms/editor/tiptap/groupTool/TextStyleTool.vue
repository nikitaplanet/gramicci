<template>
	<TiptapToolbarGroup v-if="editor">
		<!-- 粗體 -->
		<TiptapToolbarButton :isActive="editor.isActive('bold')" @click="editor?.chain().focus().toggleBold().run()" label="Bold">
			<IconBold class="h-5 w-5" />
		</TiptapToolbarButton>

		<!-- 斜體 -->
		<TiptapToolbarButton :isActive="editor.isActive('italic')" @click="editor?.chain().focus().toggleItalic().run()" label="Italic">
			<IconItalic class="h-5 w-5" />
		</TiptapToolbarButton>

		<!-- 底線 -->
		<TiptapToolbarButton :isActive="editor.isActive('underline')" @click="editor.chain().focus().toggleUnderline().run()" label="Underline">
			<IconUnderline class="h-5 w-5" />
		</TiptapToolbarButton>

		<!-- 字級 -->
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

		<!-- 字體 -->
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

		<!-- 間隔 -->
		<TiptapToolbarButton :isActive="isShowSpacing || isSplacing" @click="toggleSpacingList" label="Spacing">
			<IconSpacingVertical class="h-5 w-5" />
			<TiptapToolbarDropdown v-if="isShowSpacing" @onClickOutside="isShowSpacing = false">
				<TiptapToolbarDropdownButton
					v-for="(item, index) in spacingList"
					:isActive="editor.isActive('customSpacing', {minHeight: item})"
					:key="`spacing_${index}`"
					@click="setSpacing(item)">
					<span>{{ item }}</span>
				</TiptapToolbarDropdownButton>
			</TiptapToolbarDropdown>
		</TiptapToolbarButton>
		<div class="inline-flex h-8 w-8 shrink-0 flex-row items-center justify-center">
			<input
				:value="editor.getAttributes('textStyle').color"
				@input="editor.chain().focus().setColor($event.target.value).run()"
				class="h-5 w-5"
				type="color" />
		</div>
	</TiptapToolbarGroup>
</template>

<script lang="ts" setup>
import {IconBold, IconItalic, IconUnderline, IconTextSize, IconTypography, IconSpacingVertical} from '@tabler/icons-vue';
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarGroup.vue';
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

const isShowFontSize = ref(false);
const isShowTypography = ref(false);
const isShowSpacing = ref(false);

const fontSizeList = ref<number[]>([]);
for (let i = 9; i < 40; i++) {
	fontSizeList.value.push(i);
}

const spacingList = ref<number[]>([20, 25, 50]);

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
		name: 'Arial Black',
		font: 'Arial Black',
		class: 'font-en-black',
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

const toggleSpacingList = () => {
	isShowSpacing.value = !isShowSpacing.value;
};

const setSpacing = (val) => {
	const stateIsSplacing = isSplacing.value;

	props.editor?.commands.newlineInCode();
	props.editor?.commands.insertContent({
		type: 'customSpacing',
		attrs: {
			minHeight: val,
		},
	});

	props.editor?.commands.focus();
};

const isSplacing = computed(() => {
	return props.editor.isActive('customSpacing');
});

const isCurrentTextAlign = (value) => props.editor?.getAttributes('textAlign').textAlign === value;
</script>

<style lang="scss" scoped>
.font {
	&-en {
		font-family: 'Arial';
	}

	&-en-black {
		font-family: 'Arial Black';
	}

	&-tw {
		font-family: 'PingFang TC';
	}
}
</style>
