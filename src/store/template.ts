import {defineStore} from 'pinia';
import {useStorage} from '@vueuse/core';

export const useDataStore = defineStore('template', {
	state: () => ({
		templates: useStorage('templates', [
			{
				id: 1,
				label: '',
				value: null,
				updateAt: '',
			},
			{
				id: 2,
				label: '',
				value: null,
				updateAt: '',
			},
			{
				id: 3,
				label: '',
				value: null,
				updateAt: '',
			},
			{
				id: 4,
				label: '',
				value: null,
				updateAt: '',
			},
			{
				id: 5,
				label: '',
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
			this.templates = val;
		},
		setCommonWords(val) {
			this.commonWords = val;
		},
		deleteTemplate(id) {
			console.log(id);
			this.templates.forEach((item) => {
				if (item.id === id) {
					item.value = null
					item.label = ''
					item.updateAt= ''
				};
			});
		},
		renameTemplate(id, name) {
			console.log(id);
			this.templates.forEach((item) => {
				if (item.id === id) item.label = name;
			});
		},
	},
});
