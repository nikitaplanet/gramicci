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
		templates: useStorage('templates', []),
		commonWords: useStorage('commonWords', []),
	}),
	getters: {
		getTemplates: (state) => state.templates,
		getCommonWords: (state) => state.commonWords,
	},
	actions: {
		setTemplates(data:TemplateData) {
			this.templates.forEach((item) => {
				if (data.id === data.id) {
					item={...data}
				}
			});
		},
		setCommonWords(val) {
			this.commonWords = val;
		},
		deleteTemplate(id) {
			console.log(id);
			this.templates.forEach((item) => {
				if (item.id === id) {
					item.value = null;
					item.label = '';
					item.updateAt = '';
				}
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
