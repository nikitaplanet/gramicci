<template>
	<TiptapToolbarButton label="exportButton">
		<button @click="exportObjectAsText" title="匯出設定檔">
			<div class="export w-5 h-5"></div>
		</button>
	</TiptapToolbarButton>
</template>

<script setup>
import TiptapToolbarButton from '@components/organisms/editor/tiptap/toolButton/TiptapToolbarButton.vue';
import {useDataStore} from '@/store/template.ts';
import {useTableDataStore} from '@/store/table.ts';
import {useImageCommentStore} from '@/store/imageComment.ts';
import {formatNowDate} from '@/utils/formatNowDate.ts';
import {computed} from 'vue';

const store = useDataStore();
const tableStore = useTableDataStore();
const imageCommentStore = useImageCommentStore();

const storeData = computed(() => {
	return {
		templates: [...store.getTemplates],
		commonWords: [...store.getCommonWords],
		tables: [...tableStore.tables],
		imageComment: [...imageCommentStore.imageComment],
	};
});
const exportObjectAsText = () => {
	console.log('storeData.value', storeData.value);
	const objectString = JSON.stringify(storeData.value, null, 2);
	const blob = new Blob([objectString], {type: 'text/plain'});
	const url = URL.createObjectURL(blob);

	const link = document.createElement('a');
	link.href = url;
	link.download = `${formatNowDate()}GRAMICCI設定檔.txt`;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
};
</script>
<style lang="scss" scoped>
.export {
	background: url('/src/assets/img/icons/fileExport.svg') no-repeat content-box;
	background-position: center;
}
</style>
