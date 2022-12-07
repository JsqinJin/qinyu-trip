import dayjs from "dayjs";

// 格式化日期函数工具
export function formatMonthDay(date){
	return dayjs(date).format("MM月DD日")
}
// 计算多少天
export function getDiffDays(starDate, endDate){
	return dayjs(endDate).diff(starDate, "day")
}