<template>
  <div>
    <navbar />
    <b-container fluid class="bg-dark--1">
      <b-row class="pt-2">
        <b-col md="9">
          <!-- Price -->
          <Market-info />
          <b-row>
            <!-- news -->
            <b-col md="4">
              <news />
            </b-col>
            <!-- Trading View -->
            <b-col md="8">
              <b-row>
                <VueTradingView
                  options="{ autosize: true, symbol: 'BINANCE:BTCUSDT',
    interval: '5', timezone: 'Asia/Tehra', theme: 'dark', style: '1', locale:
    'fa_IR', toolbar_bg: '#1f212d', enable_publishing: false,
    allow_symbol_change: true, container_id: 'sssstradingview_76e30',ss }"
                />
              </b-row>
              <b-row>
                <user-ordering />
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="3">
          <left-panel />
        </b-col>
      </b-row>
      <b-row>
        <active-markets></active-markets>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VueTradingView from "vue-trading-view";
import MarketInfo from "../components/MarketInfo.vue";
import News from "../components/News.vue";
import LeftPanel from "../components/LeftPanel.vue";
import UserOrdering from "../components/UserOrdering.vue";
import Navbar from "../components/Navbar.vue";
import ActiveMarkets from "../components/ActiveMarkets.vue";

export default {
  data() {
    return {};
  },
  props: {},
  components: {
    VueTradingView,
    News,
    MarketInfo,
    LeftPanel,
    UserOrdering,
    Navbar,
    ActiveMarkets,
  },
};
</script>

<style>
.bg-dark--1 {
  background-color: #181a29;
}
.bg-dark--2 {
  background-color: #1f212d;
}
.font-size--1 {
  font-size: 90%;
}

.nav-pills .nav-link.active {
  color: #fff;
  background-color: #ffc955;
}
</style>
