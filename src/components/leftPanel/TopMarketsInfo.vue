<template>
  <div>
    <b-table hover :items="price_items" :fields="fields" borderless dark>
      <template  #cell(price)="data">
        <vue-numeric
          id="sell_price"
          separator=","
          :precision="2"
          v-model="data.item.price"
          class="form-control text-danger text-center red "
          :class="greenColor(data.item.price)"
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
    </b-table>
  </div>
</template>

<script>
import VueNumeric from "vue-numeric";
export default {
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "جفت",
        },
        {
          key: "price",
          label: "آخرین قیمت",
        },
        {
          key: "daily_change",
          label: "تغییر",
        },
      ],
      price_items: "",
    };
  },
  mounted() {
    this.getTopMarketsInfo();
  },
  computed: {
    
  },
  methods: {
    getTopMarketsInfo() {
      this.$store
        .dispatch("getTopMarketsInfo")
        .then((response) => {
          console.log(response);
          this.price_items = response.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    greenColor(item) {
      if (item.daily_change >= 0) {
        console.log("topMarkets=> ", item, " : true");
        return true;
      } else {
        return false;
      }
    },
  },
  components: {
    VueNumeric,
  },
};
</script>

<style scoped>
.green{
    color: green;
}

.red{
    color: red;
}
</style>