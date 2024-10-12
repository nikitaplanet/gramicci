import axios, {AxiosInstance, AxiosResponse} from 'axios';

// 定义接口用于响应数据类型
interface ApiResponse<T> {
	data: T;
	status: number;
	message: string;
}
const API_URL = import.meta.env.VITE_APP_API_URL;

const apiClient: AxiosInstance = axios.create({
	baseURL: API_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
});
apiClient.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	(error) => {
		console.error('API error:', error);
		return Promise.reject(error);
	},
);

export const getRequest = async <T>(url: string, params?: object): Promise<ApiResponse<T>> => {
	try {
		const response: AxiosResponse<ApiResponse<T>> = await apiClient.get(url, {params});
		return response.data;
	} catch (error) {
		throw new Error(`GET request failed: ${error}`);
	}
};

export const postRequest = async <T>(url: string, data?: object): Promise<ApiResponse<T>> => {
	try {
		const response: AxiosResponse<ApiResponse<T>> = await apiClient.post(POST_API_URL, data);
		return response.data;
	} catch (error) {
		throw new Error(`POST request failed: ${error}`);
	}
};
