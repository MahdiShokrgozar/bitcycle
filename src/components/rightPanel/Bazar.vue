<template>
  <div>
    <!-- =========================sell ================= -->

    <b-table
      class="bg-dark--2 text-white"
      :items="sell_order_items"
      borderless
      dark
      hover
      :fields="fields"
      :small="true"
    >
      <template #cell(price)="data">
        <vue-numeric
          id="sell_price"
          separator=","
          :precision="2"
          v-model="data.item.price"
          class="form-control text-danger text-center"
          style="color: red"
          read-only
        ></vue-numeric>
      </template>
      <template #cell(remaining_amount)="data">
        <vue-numeric
          id="sell_amount"
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

    <!-- ======================= buy =================== -->
    <b-table
      class="bg-dark--2 text-white"
      :items="buy_order_items"
      borderless
      dark
      hover
      :fields="fields"
      :small="true"
      thead-tr-class="d-none"
    >
      <template #cell(price)="data">
        <vue-numeric
          id="price"
          separator=","
          :precision="2"
          v-model="data.item.price"
          class="form-control text-center"
          style="color: green"
          read-only
        ></vue-numeric>
      </template>
      <template #cell(remaining_amount)="data">
        <vue-numeric
          id="price"
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
  </div>
</template>

<script>
import VueNumeric from "vue-numeric";
export default {
  data() {
    return {
      sell_order_items: "",
      buy_order_items: "",

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
    };
  },

  mounted() {
    this.getOrders();
  },
  methods: {
    getOrders() {
      this.$store
        .dispatch("getOrders", "BTCUSDT")
        .then((response) => {
          console.log(response);
          this.buy_order_items = response.body.buy_orders;
          this.sell_order_items = response.body.sell_orders;
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
