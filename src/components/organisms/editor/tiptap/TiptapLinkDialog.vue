<template>
	<Dialog :show="show" @close="closeDialog" title="Link">
		<form @submit.prevent="update">
			<div class="flex flex-col space-y-5">
				<InputContainer>
					<Label for="input-link-url">輸入連結</Label>
					<Input v-model="inputLinkRef" id="input-link-url" type="url" />
				</InputContainer>

				<div class="flex flex-row justify-end space-x-3">
					<button @click="closeDialog" class="rounded-md px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100" type="button">
						返回
					</button>
					<button class="rounded-md bg-black px-4 py-3 text-sm font-medium text-white hover:bg-opacity-80" type="submit">確認</button>
				</div>
			</div>
		</form>
	</Dialog>
</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue';
import Dialog from './Dialog.vue';
import Label from './Label.vue';
import Input from './Input.vue';
import InputContainer from './InputContainer.vue';

const props = defineProps<{show: boolean; currentUrl?: string}>();
const emit = defineEmits(['close', 'update']);
const inputLinkRef = ref<string>();

function closeDialog() {
	emit('close');
}

function update() {
	emit('update', inputLinkRef.value);
	emit('close');
}

onMounted(() => {
	inputLinkRef.value = props.currentUrl ?? '';
});
</script>
