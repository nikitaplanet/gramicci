<template>
	<NavBar>
		<Logo />
		<MenuList @exportTemplate="exportTemplate" @loadTemplate="loadTemplate" @saveTemplate="saveTemplate" />
	</NavBar>

	<!--Editor-->
	<div class="w-full pt-[79px]">
		<div>
			<TiptapEditor ref="editorRef" />
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
import MenuList from '@components/organisms/nav/components/MenuList.vue';
import Logo from '@components/organisms/nav/components/Logo.vue';
import FullPageModal from '@components/organisms/modal/FullPageModal.vue';
import ExportTemplate from '@components/organisms/editor/ExportTemplate.vue';
import TiptapEditor from '@components/organisms/editor/TiptapEditor.vue';

const editorRef = ref(null);
const savedData = ref(null);

const isShowExport = ref(false);

const saveTemplate = () => {
	savedData.value = editorRef?.value.getEditorHTML();
};

const loadTemplate = () => {};

const exportTemplate = async () => {
	if (editorRef.value) {
		savedData.value = editorRef?.value.getEditorHTML();
		isShowExport.value = true;
	}
};
</script>

<style lang="scss"></style>
