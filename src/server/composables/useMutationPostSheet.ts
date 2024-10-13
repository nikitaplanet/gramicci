import {useMutation} from '@tanstack/vue-query';

import mutationPostSheet from '../api/mutationPostSheet';

import type {MutationPostSheetData} from '../api/mutationPostSheet.ts';

export default () => {
	const mutationFn = (data: MutationPostSheetData) => {
		return mutationPostSheet(data);
	};
	return useMutation({
		mutationFn,
	});
};
