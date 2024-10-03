import {defineStore} from 'pinia';

export default defineStore('APP', () => {
	const template = [
		// {
		// 	id: 1,
		// 	title: '男裝模板1',
		// 	value: {},
		// 	updateAt: '2024-05-01 12:00',
		// },
		// {
		// 	id: 2,
		// 	title: '女裝模板1',
		// 	value: {},
		// 	updateAt: '2024-05-03 12:00',
		// },

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
	];

	return {
		template,
	};
});
