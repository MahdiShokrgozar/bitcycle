import Vue from "vue";
import Vuex from "vuex";

import News from "./modules/news";
import MarketInfo from "./modules/marketInfo";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	modules: {
	
		News,
		MarketInfo
	},
});
