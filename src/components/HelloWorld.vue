<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col md="9">
          <Price/>
          <b-row>
            <b-col md="4">
              <b-tabs content-class="mt-3" pills>
                <b-tab title=" بازار"> </b-tab>
                <b-tab title="ستیار فاندامنتال" active>
                  <b-tabs content-class="mt-3" pills :variant="dark">
                    <b-tab title="BTC"> </b-tab>
                    <b-tab title="IRT" active>
                      <b-card
                        bg-variant="dark"
                        header="Dark"
                        text-variant="white"
                        class="text-center"
                      ></b-card>
                    </b-tab>
                    <b-tab title="صعودی"> </b-tab>
                    <b-tab title="نزولی"> </b-tab>
                  </b-tabs>
                </b-tab>
                <b-tab title="دستیار تکنیکال"> </b-tab>
              </b-tabs>
            </b-col>
            <b-col md="8">
              <div>
                <VueTradingView
                  options="{ autosize: true, symbol: 'BINANCE:BTCUSDT',
    interval: '5', timezone: 'Asia/Tehra', theme: 'dark', style: '1', locale:
    'fa_IR', toolbar_bg: '#f1f3f6', enable_publishing: false,
    allow_symbol_change: true, container_id: 'sssstradingview_76e30',ss }"
                />
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="3">
          <b-row>
            <b-table
              striped
              hover
              :items="items"
              :fields="first_fields"
              borderless
              dark
            ></b-table>
          </b-row>
          <!-- <b-card
						bg-variant="dark"
						header="Dark"
						text-variant="white"
						class="text-center"
					> -->
          <b-row>
            <b-tabs content-class="mt-3">
              <b-tab title="معاملات بازار" active>
                <b-table
                  variant="dark"
                  :items="items"
                  borderless
                  dark
                  :fields="fields"
                >
                </b-table>
              </b-tab>
              <b-tab title="سفارش‌های بازار"><p>I'm the second tab</p></b-tab>
            </b-tabs>
          </b-row>
          <!-- </b-card> -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VueTradingView from "vue-trading-view";
import VueNumeric from "vue-numeric";
import Price from './MarketInfo.vue'
export default {
  data() {
    return {
     
      first_fields: [
        {
          key: "age",
          label: "جفت",
        },
        {
          key: "first_name",
          label: "آخرین قیمت",
        },
        {
          key: "last_name",
          label: "تغییر",
        },
      ],
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  props: {},
  components: {
    VueTradingView,
    VueNumeric,
    Price,
  },
};
</script>
