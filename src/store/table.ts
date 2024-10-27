import {defineStore} from 'pinia';
import {useStorage} from '@vueuse/core';

export const useTableDataStore = defineStore('table', {
	state: () => ({
		tables: useStorage('tables', [
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
	}),
	getters: {
		getTables: (state) => state.tables,
	},
	actions: {
		addCell() {
			this.tables.push({
				id: this.tables[this.tables.length - 1].id + 1,
				label: '',
				value: null,
				updateAt: '',
			});
		},
		setTables(val) {
			this.tables = val;
		},
		setCommonWords(val) {
			this.commonWords = val;
		},
		deleteTable(id) {
			this.tables.forEach((item) => {
				if (item.id === id) {
					item.value = null;
					item.label = '';
					item.updateAt = '';
				}
			});
		},
		renameTemplate(id, name) {
			this.tables.forEach((item) => {
				if (item.id === id) item.label = name;
			});
		},
	},
});
