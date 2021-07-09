<template>
  <div>
    <b-container>
      <b-row>
        <top-markets />
      </b-row>

      <b-row>
        <transaction />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import transaction from "./leftPanel/MarketTransaction.vue";
import topMarkets from "./leftPanel/TopMarketsInfo.vue";
export default {
  data() {
    return {};
  },
  components: {
    transaction,
    topMarkets,
  },
};
</script>
