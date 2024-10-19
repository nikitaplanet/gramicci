<template>
	<TiptapToolbarButton label="importButton">
		<div @click="inputHandler" class="import w-8 h-8" title="匯入設定檔" />
		<input @change="importTextFile" ref="importRef" hidden type="file" />
	</TiptapToolbarButton>
</template>

<script setup>
import {ref} from 'vue';
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';
import {useDataStore} from '@/store/template.ts';
import {ElMessage} from 'element-plus';
const store = useDataStore();
const importRef = ref();
const importedObject = ref(null);

const inputHandler = () => {
	importRef.value.click();
};

const importTextFile = (event) => {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = (e) => {
			try {
				const text = e.target.result;
				importedObject.value = JSON.parse(text);
				store.setTemplates(importedObject.value.templates);
				store.setCommonWords([...importedObject.value.commonWords]);
				ElMessage({
					type: 'success',
					message: '已匯入設定檔',
				});
			} catch (error) {
				console.error('解析文件出錯', error);
			}
		};
		reader.readAsText(file);
	}
};
</script>
<style lang="scss" scoped>
.import {
	background-color: red;
	background: url('/src/assets/img/icons/fileImport.svg') no-repeat;
	background-position: center;
}
</style>
