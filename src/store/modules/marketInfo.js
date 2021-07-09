import Vue from "vue";
// eslint-disable-next-line no-unused-vars
import router from "../../router";

const state = {
  token: "Token 8b9a7468516b34251b20eec3d6467ba41e90e981",
};

const getters = {};

const mutations = {};

const actions = {
  login(data) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post("http://bitycle.com/api/account/login", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          resolve(response);
          const token = response.body.access;

          localStorage.setItem("token", token);

          Vue.http.headers.common["Authorization"] = token;
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getMarketInfo(context, market) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get("http://bitycle.com/api/exchange/market_info?market=" + market)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getMarkets() {
    return new Promise((resolve, reject) => {
      Vue.http
        .get("http://bitycle.com/api/exchange/markets")
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getTopMarketsInfo() {
    return new Promise((resolve, reject) => {
      Vue.http
        .get("http://bitycle.com/api/exchange/top_markets_info")
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getTransactions(context, market) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get(
          "http://bitycle.com/api/exchange/market_transactions?market=" + market
        )
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getActiveMarkets(context, market) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get(
          "http://bitycle.com/api/account/user_market_orders?market=" + market,
          {
            headers: {
              Authorization: "Token 8b9a7468516b34251b20eec3d6467ba41e90e981",
            },
          }
        )
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getOrders(context, market) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get("http://bitycle.com/api/exchange/market_orders?market=" + market)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  sendOrder(context, order) {
    return new Promise((resolve, reject) => {
      Vue.http
        .post("http://bitycle.com/api/exchange/send_order", order, {
          headers: {
            Authorization: "Token 8b9a7468516b34251b20eec3d6467ba41e90e981",
          },
        })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
