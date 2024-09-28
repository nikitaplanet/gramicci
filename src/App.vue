<template>
	<NavBar>
		<Logo />
		<Menu @exportTemplate="exportTemplate" @loadTemplate="loadTemplate" @saveTemplate="saveTemplate" />
	</NavBar>

	<!--Editor-->
	<div class="w-full py-36">
		<div>
			<div class="pt-8">
				<h1 class="w-full font-bold text-xl text-center pb-4">-內容-</h1>
				<EditorBlock ref="editorRef" />
			</div>
		</div>
	</div>

	<!-- Export -->
	<transition>
		<FullPageModal v-if="isShowExport" @close="isShowExport = false" title="轉出模板">
			<ExportTemplate :savedData="savedData" />
		</FullPageModal>
	</transition>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import NavBar from '@components/organisms/nav/NavBar.vue';
import EditorBlock from '@components/organisms/editor/EditorBlock.vue';
import Menu from '@components/organisms/nav/components/Menu.vue';
import Logo from '@components/organisms/nav/components/Logo.vue';
import FullPageModal from '@components/organisms/modal/FullPageModal.vue';
import ExportTemplate from '@components/organisms/editor/ExportTemplate.vue';

const editorRef = ref(null);
const savedData = ref(null);

const isShowExport = ref(false);

const saveTemplate = () => {
	if (editorRef.value) {
		savedData.value = editorRef.value.getEditorData();
	}
};

const loadTemplate = () => {};

const exportTemplate = async () => {
	if (editorRef.value) {
		savedData.value = await editorRef.value.getEditorData();
		isShowExport.value = true;
		console.log('savedData.value ', savedData.value.blocks);
	}
};
</script>

<style lang="scss"></style>
