import {getRequest} from '../core/request';

const SHEET_ID = import.meta.env.VITE_APP_SHEET_ID;
const API_KEY = import.meta.env.VITE_APP_API_KEY;

interface QueryTemplateParams {
	tagName: string;
}

export default ({tagName}: QueryTemplateParams) => {
	const url = `${SHEET_ID}/values/${tagName}?key=${API_KEY}`;
	return getRequest(url);
};
