import {useQuery, useQueryClient} from '@tanstack/vue-query';
import {ref} from 'vue';

import queryTemplates from '../api/queryTemplates';

interface UseQueryTemplatesOption {
	params: {tagName: string};
}

export default (options: UseQueryTemplatesOption) => {
	const queryClient = useQueryClient();

	const params = ref(options.params);
	const queryKey = ['QUERY_COMMOM_WORDS', params];

	const queryFn = async () => {
		const result = await queryTemplates(params.value);
		const data = transData(result.values);

		return data;
	};

	const invalidate = () => queryClient.invalidateQueries({queryKey});

	const query = useQuery({
		enabled: () => !!params.value,
		queryKey,
		queryFn,
	});

	return Object.assign(query, {
		invalidate,
		queryKey,
		params,
	});
};

export function transData(data: []) {
	const json = [];

	for (let i = 1; i < data.length; i++) {
		// 從 1 開始以跳過標題
		const row = {};
		for (let j = 0; j < data[0].length; j++) {
			row[data[0][j]] = data[i][j];
		}
		json.push(row);
	}
	return json[0]?.value ? JSON.parse(json[0]?.value) : [];
}
