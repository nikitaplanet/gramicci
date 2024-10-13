import {useMutation} from '@tanstack/vue-query';

import mutationPostSheet from '../api/mutationPostSheet';

import type {MutationPostSheetData} from '../api/mutationPostSheet.ts';

export default () => {
	const mutationFn = (data: MutationPostSheetData) => {
		console.log(data, '??????');
		return mutationPostSheet(data);
	};
	return useMutation({
		mutationFn,
	});
};
