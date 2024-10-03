<template>
	<TiptapToolbarGroup>
		<TiptapToolbarButton :isActive="!isPreviewMobile" @click="toggleDevice(false)" label="Desk">
			<IconDeviceDesktop class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton :isActive="isPreviewMobile" @click="toggleDevice(true)" label="Mobile">
			<IconDeviceMobile class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton :isActive="isShowBorderOuter" @click="toggleBorderOuter" label="Border Outer">
			<IconBorderOuter class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton :isActive="isShowHtml" @click="toggleHtml" label="Border Outer">
			<IconHtml class="h-5 w-5" />
		</TiptapToolbarButton>
	</TiptapToolbarGroup>
</template>

<script setup>
import {IconDeviceDesktop, IconDeviceMobile, IconBorderOuter, IconHtml} from '@tabler/icons-vue';
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarGroup.vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';

const emit = defineEmits(['toggleDevice', 'toggleBorderOuter', 'toggleHtml']);
defineProps({
	isPreviewMobile: {
		type: Boolean,
		default: false,
	},
	isShowBorderOuter: {
		type: Boolean,
		default: false,
	},
	isShowHtml: {
		type: Boolean,
		default: false,
	},
});

const toggleDevice = (val) => {
	emit('toggleDevice', val);
};

const toggleBorderOuter = () => {
	emit('toggleBorderOuter');
};

const toggleHtml = () => {
	emit('toggleHtml');
};
</script>

<style lang="scss" scoped></style>
