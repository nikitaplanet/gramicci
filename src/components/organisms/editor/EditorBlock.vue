<template>
	<div id="editorjs"></div>
</template>

<script lang="ts" setup>
// https://www.jb51.net/javascript/314160bd0.htm

import {ref, reactive, toRefs, onMounted} from 'vue';

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import Image from '@editorjs/image';
import Link from '@editorjs/link';
import CheckList from '@editorjs/checklist';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Delimiter from '@editorjs/delimiter';
import Underline from '@editorjs/underline';
import IndentTune from 'editorjs-indent-tune';
import Button from '@ikbenbas/editorjs-button';

defineProps({
	data: {
		type: Array,
		default: () => [],
	},
});

const editor = ref(null);

const {data} = toRefs(
	reactive({
		data: '',
	}),
);

onMounted(() => {
	editor.value = new EditorJS({
		autofocus: true,
		holder: 'editorjs',
		placeholder: '請輸入內容',
		readOnly: false,
		tools: {
			header: Header,
			link: Link,
			paragraph: {
				class: Paragraph,
				inlineToolbar: true,
			},
			image: {
				class: Image,
				inlineToolbar: false,
				config: {
					uploader: {
						uploadByUrl: (url) => uploadEditorMedia(url),
					},
				},
			},
			checkList: CheckList,
			list: {
				class: List,
				inlineToolbar: true,
			},
			embeds: {
				class: Embed,
				inlineToolbar: true,
				config: {
					services: {
						youtube: true,
						coub: true,
						vimeo: true,
						codepen: true,
						gfycat: true,
						imgur: true,
						'twitch-video': true,
						'twitch-channel': true,
					},
				},
			},
			table: {
				class: Table,
				inlineToolbar: true,
				config: {
					rows: 2,
					cols: 3,
				},
			},
			delimiter: Delimiter,
			underline: Underline,
			indentTune: IndentTune,
			button: {
				class: Button,
				config: {
					label: 'Click',
					target: '_blank',
					classes: ['button', 'is-primary'],
				},
			},
		},
		tunes: ['indentTune'],
		onReady: () => {
			console.log('Editor ready!');
		},
	});
});

const uploadEditorMedia = (url) => {
	return new Promise((resolve) => {
		resolve({
			success: 1,
			file: {
				url: url,
			},
		});
	});
};

const getEditorData = async () => {
	return await editor.value.save();
};

defineExpose({
	getEditorData,
});
</script>

<style lang="scss">
.image-tool__image-picture {
	width: 100%;
}

.ce-block__content {
	h1 {
		font-size: 36px;
	}

	h2 {
		font-size: 30px;
	}

	h3 {
		font-size: 26px;
	}

	h4 {
		font-size: 22px;
	}

	h5 {
		font-size: 18px;
	}

	h6 {
		font-size: 16px;
	}
}
</style>
