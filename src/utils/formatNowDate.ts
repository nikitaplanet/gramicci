/**
 * 轉換時間格式
 */
export const formatNowDate = () => {
	const date = new Date(Date.now());
	const yyyy = date.getFullYear();
	const MM = String(date.getMonth() + 1).padStart(2, '0');
	const dd = String(date.getDate()).padStart(2, '0');
	const hh = String(date.getHours()).padStart(2, '0');
	const mm = String(date.getMinutes()).padStart(2, '0');
	return `${yyyy}-${MM}-${dd}-${hh}-${mm}`;
};
