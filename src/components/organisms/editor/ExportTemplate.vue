<template>
	<div id="export-template" class="w-full">
		<div class="mt-5 bg-white rounded-2xl p-5">
			<div class="flex justify-end items-center">
				<transition>
					<div v-if="isCopied" class="text-sm mr-4 text-green-700 font-bold">已複製！</div>
				</transition>
				<NLink @click="handleCopy" hasUnderline>複製</NLink>
			</div>

			<div class="mt-2 text-gray-800">
				{{ savedData }}
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import NLink from '@components/atoms/NLink.vue';

const props = defineProps({
	savedData: {
		type: String,
		default: '',
	},
});

const isCopied = ref(false);

const handleCopy = () => {
	const el = document.createElement('textarea');

	el.value = props.savedData;
	document.getElementById('export-template').appendChild(el);
	el.select();
	document.execCommand('Copy');
	document.getElementById('export-template').removeChild(el);

	isCopied.value = true;
	setTimeout(() => {
		isCopied.value = false;
	}, 800);
};
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
