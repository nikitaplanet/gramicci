export interface MutationPostSheetData {
	tagId: number; //頁籤id
	id: number;
	label: string;
	value: string;
	sort?: number;
	updateAt?: string;
}

const SCRIPT_KEY = import.meta.env.VITE_APP_POST_SCRIPT_KEY;
const POST_API_URL = import.meta.env.VITE_APP_POST_API_URL;

/**
 * 更新google表單
 */
// export default (data: MutationPostSheetData) => {
// 	return postRequest(`${SCRIPT_KEY}/exce`, {
// 		data,
// 	});
// };

export default async (data: MutationPostSheetData) => {
	const scriptURL = `${POST_API_URL}${SCRIPT_KEY}/exec`;

	try {
		const response = await fetch(scriptURL, {
			method: 'POST',
			redirect: 'follow',
			headers: {
				'Content-Type': 'text/plain;charset=utf-8',
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		console.log('Success:', result);
	} catch (error) {
		console.error('Error:', error);
	}
};
