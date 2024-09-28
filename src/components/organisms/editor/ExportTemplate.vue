<template>
	<div class="w-full">
		<div class="export-template__toggles">
			<NButton :buttonType="BUTTON_TYPE.TOGGLE" :isActive="displayMode === DATA_DISPLAY_MODE.HTML" @click="toggleView(DATA_DISPLAY_MODE.HTML)"
				>HTML
			</NButton>
			<NButton
				:buttonType="BUTTON_TYPE.TOGGLE"
				:isActive="displayMode === DATA_DISPLAY_MODE.PREVIEW"
				@click="toggleView(DATA_DISPLAY_MODE.PREVIEW)"
				>預覽
			</NButton>
		</div>

		<!--Content-->
		<div v-show="displayMode === DATA_DISPLAY_MODE.HTML" class="mt-5">
			{{ htmlData }}
		</div>
	</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {forEach} from 'lodash';
import {BLOCK_TYPE, DATA_DISPLAY_MODE} from '@components/organisms/editor/index';
import NButton from '@components/atoms/NButton.vue';
import {BUTTON_TYPE} from '@components/atoms';

const props = defineProps({
	savedData: {
		type: Object,
		default: () => {},
	},
});

const displayMode = ref(DATA_DISPLAY_MODE.HTML);
const htmlData = ref('');

const toggleView = (type: DATA_DISPLAY_MODE) => {
	displayMode.value = type;
};

const transToString = () => {
	forEach(props.savedData.blocks, (item) => {
		switch (item.type) {
			case BLOCK_TYPE.HEADER:
				htmlData.value += `<div class="n-header_${item.data.level}">${item.data.text}</div>`;
				break;
			case BLOCK_TYPE.PARAGRAPH:
				htmlData.value += `<div class="n-paragraph">${item.data.text}</div>`;
				break;
		}
	});
};
transToString();
</script>

<style lang="scss" scoped>
.export-template__toggles {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	grid-gap: 1rem;
}
</style>
