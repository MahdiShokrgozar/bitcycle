<template>
  <div>
    <b-tabs
      content-class="mt-0 "
      pills
      card
      class="bg-dark--2"
      active-nav-item-class="bg-info"
    >
      <b-tab title="خرید و فروش" active title-link-class="text-white">
        <b-row>
          <b-col md="6">
            <b-form @submit.stop.prevent="onBuy">
              <!-- --------price ------------- -->
              <h6 class="text-white"><b>خرید</b></h6>
              <b-input-group dir="ltr" class="mt-4">
                <template #append>
                  <b-input-group-text class="append text-muted"
                    >مبلغ</b-input-group-text
                  >
                </template>
                <vue-numeric
                  id="market_cap"
                  separator=","
                  :precision="2"
                  v-model="buy_price"
                  class="form-control input"
                ></vue-numeric>
                <template #prepend>
                  <b-input-group-text class="preppend text-muted"
                    >تومان</b-input-group-text
                  >
                </template>
              </b-input-group>
              <!-- --------amount ------------- -->

              <b-input-group dir="ltr" class="mt-4">
                <template #append>
                  <b-input-group-text class="append text-muted"
                    >مقدار</b-input-group-text
                  >
                </template>
                <vue-numeric
                  id="market_cap"
                  separator=","
                  :precision="2"
                  v-model="buy_amount"
                  class="form-control input"
                ></vue-numeric>
                <template #prepend>
                  <b-input-group-text class="preppend text-muted"
                    >BTC</b-input-group-text
                  >
                </template>
              </b-input-group>

              <!-- --------total amount ------------- -->

              <b-input-group dir="ltr" class="mt-4">
                <template #append>
                  <b-input-group-text class="append text-muted"
                    >مبلغ کل</b-input-group-text
                  >
                </template>
                <vue-numeric
                  id="market_cap"
                  separator=","
                  :precision="2"
                  v-model="buy_total_amount"
                  readonly
                  class="form-control input"
                  style="background-color: #2b2e3e"
                ></vue-numeric>
                <template #prepend>
                  <b-input-group-text class="preppend text-muted"
                    >تومان</b-input-group-text
                  >
                </template>
              </b-input-group>

              <div>
                <b-button
                  block
                  variant="success"
                  style="width: 100%"
                  class="mt-4"
                  type="submit"
                  >خرید</b-button
                >
              </div>
            </b-form>
          </b-col>
          <b-col md="6">
            <b-form @submit.stop.prevent="onSell">
              <!-- --------price ------------- -->
              <h6 class="text-white"><b>فروش</b></h6>
              <b-input-group dir="ltr" class="mt-4">
                <template #append>
                  <b-input-group-text class="append text-muted"
                    >مبلغ</b-input-group-text
                  >
                </template>
                <vue-numeric
                  id="market_cap"
                  separator=","
                  :precision="2"
                  v-model="sell_price"
                  class="form-control input"
                ></vue-numeric>
                <template #prepend>
                  <b-input-group-text class="preppend text-muted"
                    >تومان</b-input-group-text
                  >
                </template>
              </b-input-group>
              <!-- --------amount ------------- -->
              <b-input-group dir="ltr" class="mt-4">
                <template #append>
                  <b-input-group-text class="append text-muted"
                    >مقدار</b-input-group-text
                  >
                </template>
                <vue-numeric
                  id="market_cap"
                  separator=","
                  :precision="2"
                  v-model="sell_amount"
                  class="form-control input"
                ></vue-numeric>
                <template #prepend>
                  <b-input-group-text class="preppend text-muted"
                    >BTC</b-input-group-text
                  >
                </template>
              </b-input-group>
              <!-- --------total amount ------------- -->
              <b-input-group dir="ltr" class="mt-4">
                <template #append>
                  <b-input-group-text class="append text-muted"
                    >مبلغ کل</b-input-group-text
                  >
                </template>
                <vue-numeric
                  id="market_cap"
                  separator=","
                  :precision="2"
                  v-model="sell_total_amount"
                  readonly
                  class="form-control input"
                  style="background-color: #2b2e3e"
                ></vue-numeric>
                <template #prepend>
                  <b-input-group-text class="preppend text-muted"
                    >تومان</b-input-group-text
                  >
                </template>
              </b-input-group>

              <div>
                <b-button
                  block
                  variant="danger"
                  style="width: 100%"
                  class="mt-4"
                  type="submit"
                  >فروش</b-button
                >
              </div>
            </b-form>
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import VueNumeric from "vue-numeric";
export default {
  data() {
    return {
      buy_price: "",
      buy_amount: "",
      buy_total_amount: "",
      sell_price: "",
      sell_amount: "",
      sell_total_amount: "",
    };
  },
  watch: {
    buy_price: function () {
      this.buy_total_amount = this.buy_price * this.buy_amount;
    },
    buy_amount: function () {
      this.buy_total_amount = this.buy_price * this.buy_amount;
    },
    sell_price: function () {
      this.sell_total_amount = this.sell_price * this.sell_amount;
    },
    sell_amount: function () {
      this.sell_total_amount = this.sell_price * this.sell_amount;
    },
  },
  methods: {
    onBuy() {
      // let order = {
      //   market: "BTCUSDT",
      //   type: "buy",
      //   price: this.buy_price,
      //   amount: this.buy_amount,
      // };
      let data = new FormData();
      data.append("market", "BTCUSDT");
      data.append("type", "buy");
      data.append("price", this.buy_price);
      data.append("amount", this.buy_amount);
      console.log(data);
      this.$store
        .dispatch("sendOrder", data)
        .then((response) => {
          console.log(response);
          this.$noty.success("خرید انجام شد");
        })
        .catch((err) => {
          console.log(err);
          this.$noty.error("مشکلی وجود دارد");
        });
    },
    onSell() {
      // let order = {
      //   market: "BTCUSDT",
      //   type: "sell",
      //   price: this.sell_price,
      //   amount: this.sell_amount,
      // };
      let data = new FormData();
      data.append("market", "BTCUSDT");
      data.append("type", "sell");
      data.append("price", this.buy_price);
      data.append("amount", this.buy_amount);
      console.log(data);
      this.$store
        .dispatch("sendOrder", data)
        .then((response) => {
          console.log(response);
          this.$noty.success("فروش انجام شد");
        })
        .catch((err) => {
          console.log(err);
          this.$noty.error("مشکلی وجود دارد");
        });
    },
  },
  components: {
    VueNumeric,
  },
};
</script>
<style scoped>
.append {
  background-color: #2b2e3e;
  border-radius: 0px 4px 4px 0px;
  border-color: #2b2e3e;
}
.preppend {
  background-color: #2b2e3e;
  border-radius: 4px 0px 0px 4px;
  border-color: #2b2e3e;
}
.input {
  background-color: #2b2e3e;
  color: white;
  border-color: #2b2e3e;
}
.input:focus {
  background-color: #2b2e3e;
  color: white;
  border-color: #2b2e3e;
}
.input:readonly {
  background-color: #2b2e3e;
  color: white;
  border-color: #2b2e3e;
}
</style>
