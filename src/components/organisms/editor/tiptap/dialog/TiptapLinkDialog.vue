<template>
	<Dialog :show="show" @close="closeDialog" title="插入連結">
		<form>
			<div class="flex flex-col space-y-5">
				<InputContainer>
					<Label for="input-link-url">輸入 https 開頭連結</Label>
					<Input v-model="inputLinkRef" id="input-link-url" class="mt-2" placeholder="輸入連結" type="url" />
				</InputContainer>

				<div class="flex flex-row justify-end space-x-3">
					<DialogButton @click="closeDialog" isLight>返回</DialogButton>
					<DialogButton @click="update">確認</DialogButton>
				</div>
			</div>
		</form>
	</Dialog>
</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue';
import Dialog from '../../../modal/Dialog.vue';
import Label from '../../../form/Label.vue';
import Input from '../../../form/Input.vue';
import InputContainer from '../../../form/InputContainer.vue';
import DialogButton from '@components/atoms/dialog/DialogButton.vue';

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
