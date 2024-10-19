import {defineStore} from 'pinia';
import {useStorage} from '@vueuse/core';

export const useDataStore = defineStore('template', {
	state: () => ({
		templates: useStorage('templates', [
			{
				id: 1,
				title: '',
				value: null,
				updateAt: '',
			},
			{
				id: 2,
				title: '',
				value: null,
				updateAt: '',
			},
			{
				id: 3,
				title: '',
				value: null,
				updateAt: '',
			},
			{
				id: 4,
				title: '',
				value: null,
				updateAt: '',
			},
			{
				id: 5,
				title: '',
				value: null,
				updateAt: '',
			},
		]),
		commonWords: useStorage('commonWords', []),
	}),
	getters: {
		getTemplates: (state) => state.templates,
		getCommonWords: (state) => state.commonWords,
	},
	actions: {
		setTemplates(val) {
			console.log('setTemplate', val);
			this.templates = val;
		},
		setCommonWords(val) {
			console.log('setWord', val);

			this.commonWords = val;
		},
	},
});
