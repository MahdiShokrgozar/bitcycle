<template>
  <div>
    <b-tabs
      content-class="mt-0 "
      pills
      card
      class="bg-dark--2"
      active-nav-item-class="bg-info"
    >
      <b-tab title="معاملات بازار" active title-link-class="text-white">
        <b-table
          class="bg-dark--2 text-white"
          :items="transaction_items"
          borderless
          dark
          :fields="fields"
          small
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
      <b-tab title="سفارش‌های بازار" title-link-class="text-white">
        <b-table
          class="bg-dark--2 text-white"
          :items="order_items"
          borderless
          dark
          small
          :fields="fields"
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
        },
      ],
      transaction_items: "",
      order_items: "",
    };
  },
  mounted() {
    this.getTransactions();
    this.getOrders();
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
