<template>
  <div>
    <b-tabs
      content-class="mt-0 "
      pills
      card
      class="bg-dark--2"
      active-nav-item-class="bg-info"
    >
      <b-tab title="سفارش های بازار" active title-link-class="text-white">
        <b-table
          class="bg-dark--2 text-white"
          :items="order_items"
          borderless
          dark
          small
          :fields="market_fields"
        >
          <template #cell(price)="data">
            <vue-numeric
              id="market_cap"
              separator=","
              :precision="2"
              v-model="data.item.price"
              class="form-control number text-center"
              read-only
            ></vue-numeric>
          </template>
          <template #cell(remaining_amount)="data">
            <vue-numeric
              id="market_cap"
              separator=","
              :precision="10"
              v-model="data.item.remaining_amount"
              class="form-control number text-center"
              read-only
            ></vue-numeric>
          </template>
          <template #cell(date)="data">
            {{ data.item.date | moment("HH:mm") }}
          </template>
        </b-table>
      </b-tab>
      <b-tab title="تاریخچه شفارش‌ها" title-link-class="text-white" @click.prevent="getActiveMarkets">
        <b-table
          class="bg-dark--2 text-white"
          :items="active_markets_items"
          borderless
          dark
          small
          :fields="fields"
        >
          <template #cell(date)="data">
            {{ data.item.date | moment("jYY/jMM/jDD , HH:mm") }}
          </template>
          <template #cell(Type)="data">
             <span v-if="data.item.Type=='buy'">خرید</span>
             <span v-if="data.item.Type=='sell'">فروش</span>
          </template>
          <template #cell(price)="data">
            <vue-numeric
              id="market_cap"
              separator=","
              :precision="2"
              v-model="data.item.price"
              class="form-control number text-center"
              read-only
            ></vue-numeric>
          </template>
          <template #cell(remaining_amount)="data">
            <vue-numeric
              id="market_cap"
              separator=","
              :precision="10"
              v-model="data.item.remaining_amount"
              class="form-control number text-center"
              read-only
            ></vue-numeric>
          </template>
        </b-table>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import VueNumeric from "vue-numeric";
export default {
  data() {
    return {
      fields: [
        {
          key: "date",
          label: this.$t("transactoin.datee"),
        },
        {
          key: "market_name",
          label: this.$t("transactoin.market"),
        },
        {
          key: "Type",
          label: this.$t("transactoin.type"),
        },
        {
          key: "price",
          label: this.$t("transactoin.price"),
        },
        {
          key: "average_traded_price",
          label: this.$t("transactoin.averageTradedPrice"),
        },
        {
          key: "total_amount",
          label: this.$t("transactoin.totalAmount"),
        },
        {
          key: "total_price",
          label: this.$t("transactoin.totalPrice"),
        },
      ],
      market_fields: [ {
          key: "price",
          label: this.$t("transactoin.price"),
        },
        {
          key: "remaining_amount",
          label: this.$t("transactoin.amount"),
        },
        {
          key: "date",
          label: this.$t("transactoin.date"),
        },],
      transaction_items: "",
      active_markets_items: "",
      order_items: "",
    };
  },
  mounted() {
    this.getOrders();

    this.getActiveMarkets();
  },
  methods: {
    getTransactions() {
      this.$store
        .dispatch("getTransactions", "BTCUSDT")
        .then((response) => {
          console.log(response);
          this.transaction_items = response.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
 getOrders() {
      this.$store
        .dispatch("getOrders", "BTCUSDT")
        .then((response) => {
          console.log(response);
          this.order_items = response.body.buy_orders;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getActiveMarkets() {
      this.$store
        .dispatch("getActiveMarkets", "BTCUSDT")
        .then((response) => {
          console.log(response);
          this.active_markets_items = response.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    VueNumeric,
  },
};
</script>

<style scoped>
.activetab {
  background-color: rgb(252, 5, 5) !important;
  color: rgb(0, 255, 13);
  text-decoration: underline;
}
</style>
