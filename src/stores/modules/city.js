import {getCityAll} from "@/service";
import {defineStore} from "pinia";

// 城市数据仓库
const useCityStore = defineStore("city", {
	state: () => ({
		allCities: {},

		currentCity: {cityName:"佛山"}
	}),
	actions: {
		async fetchAllCitiesData() {
			const res = await getCityAll()
			this.allCities = res.data
		}
	}
})
// 导出城市数据
export default useCityStore