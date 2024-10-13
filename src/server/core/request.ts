import axios, {AxiosInstance, AxiosResponse} from 'axios';

// 定義接口用於響應數據類型
interface ApiResponse<T> {
	data: T;
	status: number;
	message: string;
}

// GET 和 POST 的 base URL
const GET_API_URL = import.meta.env.VITE_APP_GET_API_URL;
const POST_API_URL = import.meta.env.VITE_APP_POST_API_URL;

// 創建 GET 專用的 Axios 實例
const getApiClient: AxiosInstance = axios.create({
	baseURL: GET_API_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});

// 創建 POST 專用的 Axios 實例
const postApiClient: AxiosInstance = axios.create({
	baseURL: POST_API_URL,
	timeout: 10000,
	// followAllRedirects: true,
	headers: {
		'Content-Type': 'text/plain;charset=utf-8',
		// 	// 'Access-Control-Allow-Origin': '*',
	},
});

// GET 攔截器
getApiClient.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	(error) => {
		console.error('GET request error:', error);
		return Promise.reject(error);
	},
);

// POST 攔截器
postApiClient.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	(error) => {
		console.error('POST request error:', error);
		return Promise.reject(error);
	},
);

// GET 請求方法
export const getRequest = async <T>(url: string, params?: object): Promise<ApiResponse<T>> => {
	try {
		const response: AxiosResponse<ApiResponse<T>> = await getApiClient.get(url, {params});
		return response.data;
	} catch (error) {
		throw new Error(`GET request failed: ${error}`);
	}
};

// POST 請求方法
export const postRequest = async <T>(url: string, data?: object): Promise<ApiResponse<T>> => {
	try {
		const response: AxiosResponse<ApiResponse<T>> = await postApiClient.post(url, data?.data);
		return response.data;
	} catch (error) {
		throw new Error(`POST request failed: ${error}`);
	}
};
