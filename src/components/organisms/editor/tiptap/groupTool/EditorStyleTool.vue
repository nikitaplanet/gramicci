<template>
	<TiptapToolbarGroup>
		<TiptapToolbarButton :isActive="!isPreviewMobile" @click="toggleDevice(false)" label="Desk">
			<IconDeviceDesktop class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton :isActive="isPreviewMobile" @click="toggleDevice(true)" label="Mobile">
			<IconDeviceMobile class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton :isActive="isLock" @click="toggleLock" label="Border Outer">
			<IconLockOpen2 v-if="isEditable" class="h-5 w-5" />
			<IconLock v-if="!isEditable" class="h-5 w-5" />
		</TiptapToolbarButton>
		<TiptapToolbarButton :isActive="isShowHtml" @click="toggleHtml" label="Border Outer">
			<IconHtml class="h-5 w-5" />
		</TiptapToolbarButton>
	</TiptapToolbarGroup>
</template>

<script setup>
import {IconDeviceDesktop, IconDeviceMobile, IconHtml, IconLockOpen2, IconLock} from '@tabler/icons-vue';
import TiptapToolbarGroup from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarGroup.vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';

const emit = defineEmits(['toggleDevice', 'toggleLock', 'toggleHtml']);
defineProps({
	isPreviewMobile: {
		type: Boolean,
		default: false,
	},
	isEditable: {
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

const toggleLock = () => {
	emit('toggleLock');
};

const toggleHtml = () => {
	emit('toggleHtml');
};
</script>

<style lang="scss" scoped></style>
