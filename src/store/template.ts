import {defineStore} from 'pinia';
import {useStorage} from '@vueuse/core';

interface TemplateData {
	id: string;
	label: string;
	value: string;
	updateAt: string;
}

export const useDataStore = defineStore('template', {
	state: () => ({
		templates: useStorage('templatesStore', []),
		commonWords: useStorage('commonWords', []),
	}),
	getters: {
		getTemplates: (state) => state.templates,
		getCommonWords: (state) => state.commonWords,
	},
	actions: {
		setTemplates(data:TemplateData) {
			this.templates.forEach((item) => {
				if (item.id === data.id) {
					item.value= data.value
					item.label = data.label
					item.updateAt=data.updateAt
				};
			});
		},
		setCommonWords(val) {
			this.commonWords = val;
		},
		deleteTemplate(id) {
			this.templates=this.templates.filter((item) => {
				return item.id !== id
			});
		},
		renameTemplate(id, name) {
			this.templates.forEach((item) => {
				if (item.id === id) item.label = name;
			});
		},
		addTemplate(data:TemplateData) {
			this.templates.unshift(data)
		},
	},
});
