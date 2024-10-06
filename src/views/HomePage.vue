<template>
	<!--Editor-->
	<div class="w-full">
		<div>
			<TiptapEditor ref="editorRef" />
		</div>
	</div>

	<SaveTemplateModal v-model:modelValue="isShowSaveTemplateModal" :templateValue="savedData" title="儲存模板" />
	<LoadTemplateModal v-model:modelValue="isShowLoadTemplateModal" @update="updateTemplate" title="載入模板" />
</template>
<script lang="ts" setup>
import {ref} from 'vue';
// import NavBar from '@components/organisms/nav/NavBar.vue';
// import MenuList from '@components/organisms/nav/components/MenuList.vue';
// import Logo from '@components/organisms/nav/components/Logo.vue';
import SaveTemplateModal from '@components/organisms/templateModal/SaveTemplateModal.vue';
import LoadTemplateModal from '@components/organisms/templateModal/LoadTemplateModal.vue';
import TiptapEditor from '@components/organisms/editor/TiptapEditor.vue';

const editorRef = ref(null);
const savedData = ref(null);

// 儲存模板
const isShowSaveTemplateModal = ref(false);
// const saveTemplate = () => {
// 	isShowSaveTemplateModal.value = true;
// 	savedData.value = editorRef?.value.getEditorHTML();
// };

// 載入模板
const isShowLoadTemplateModal = ref(false);
// const loadTemplate = () => {
// 	isShowLoadTemplateModal.value = true;
// };
const updateTemplate = (data) => {
	console.log(data);
};
</script>
