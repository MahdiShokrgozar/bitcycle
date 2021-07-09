import Vue from "vue";
// eslint-disable-next-line no-unused-vars
import router from "../../router";

const state = {
};

const getters = {
	
};

const mutations = {
	
};

const actions = {
    getNews(context,market) {
		return new Promise((resolve, reject) => {
			Vue.http
				.get("http://bitycle.com/api/news/market_news?market="+market)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					reject(err);
				});
		});
	},
}


export default {
	state,
	getters,
	mutations,
	actions,
};