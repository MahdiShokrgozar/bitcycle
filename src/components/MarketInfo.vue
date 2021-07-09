<template>
  <div>
    <b-row align-h="center" class="mb-4 bg-dark--2 text-white">
      <b-col md="2">
        <dropdown :x="-79" :class-name="'my-dropdown'">
          <template slot="btn">BTCUSDC</template>
          <template slot="body" class="bg-dark--1">
            <ul
              class="bg-dark--1"
              v-for="(value, name, index) in markets"
              :key="index"
            >
              <li class="bg-dark--1">
                <dropdown :class-name="'my-dropdown'" :trigger="'hover'" :role="'sublist'" :align="'left'">
                  <template slot="btn">{{ name }}</template>
                  <template
                    slot="body"
                    class="bg-dark--1"
                    
                  >
                  <ul class="bg-dark--1">
                    <li v-for="(child, index) in value"
                    :key="index">
                    {{child}}
                    </li>
                  </ul>
                   
                  </template>
                </dropdown>
              </li>
            </ul>
          </template>
        </dropdown>
      </b-col>
      <!-- price -->
      <b-col md="2">
        <b-form-group
          id="price_group"
          :label="this.$t('marketInfo.price')"
          label-for="price"
          class="text-center text-muted"
        ></b-form-group>
        <vue-numeric
          id="price"
          separator=","
          :precision="2"
          v-model="info.price"
          class="form-control number text-center"
          :minus="true"
          read-only
        ></vue-numeric>
      </b-col>
      <!--  daily_price_change_pct -->
      <b-col md="2">
        <b-form-group
          id="daily_price_change_pct_group"
          :label="this.$t('marketInfo.daily_price_change_pct')"
          label-for="daily_price_change_pct"
          class="text-center text-muted"
        ></b-form-group>
        <vue-numeric
          id="daily_price_change_pct"
          separator=","
          :precision="2"
          v-model="info.daily_price_change_pct"
          class="form-control number text-center"
          :minus="true"
          read-only
        ></vue-numeric>
      </b-col>
      <!-- market_cap -->
      <b-col md="2">
        <b-form-group
          id="market_cap_group"
          :label="this.$t('marketInfo.market_cap')"
          label-for="market_cap"
          class="text-center text-muted"
        ></b-form-group>
        <vue-numeric
          id="market_cap"
          separator=","
          :precision="2"
          v-model="info.market_cap"
          class="form-control number text-center"
          read-only
        ></vue-numeric>
      </b-col>
      <!-- high_daily_price -->
      <b-col md="2">
        <b-form-group
          id="high_daily_price_group"
          :label="this.$t('marketInfo.high_daily_price')"
          label-for="high_daily_price"
          class="text-center text-muted"
        ></b-form-group>
        <vue-numeric
          id="high_daily_price"
          separator=","
          :precision="2"
          v-model="info.high_daily_price"
          class="form-control number text-center"
          read-only
        ></vue-numeric>
      </b-col>
      <!--  low_daily_price -->
      <b-col md="2">
        <b-form-group
          id="low_daily_price_group"
          :label="this.$t('marketInfo.low_daily_price')"
          label-for="low_daily_price"
          class="text-center text-muted"
        ></b-form-group>
        <vue-numeric
          id="low_daily_price"
          separator=","
          :precision="2"
          v-model="info.low_daily_price"
          class="form-control number text-center"
          read-only
        ></vue-numeric>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import VueNumeric from "vue-numeric";
// import VueCascaderSelect from "vue-cascader-select";
// import VueNestedMenu from "vue-nested-menu";
import Dropdown from "bp-vuejs-dropdown";
export default {
  data() {
    return {
      show_ul: false,
      info: {
        price: 88,
        daily_price_change_pct: 77,
      },
      selectedDropdown: "None",
      markets: {
        BTC: ["USDC", "USDT", "TOMAN"],
        ETH: ["BCH", "BTC", "USDC", "USDT", "TOMAN"],
        BNB: ["BTC", "USDT", "BCH", "TOMAN"],
        ADA: ["BTC", "BCH", "USDT", "TOMAN"],
        DOGE: ["BTC", "USDT", "BCH", "TOMAN"],
        XRP: ["USDT", "BCH", "BTC", "USDC", "TOMAN"],
        USDC: ["USDT", "TOMAN"],
        DOT: ["USDT", "BCH", "BTC", "TOMAN"],
        UNI: ["BTC", "USDT", "ETH", "TOMAN"],
        BCH: ["USDC", "USDT", "BTC", "TOMAN"],
        LTC: ["USDT", "USDC", "BTC", "BCH", "TOMAN"],
        SOL: ["BCH", "USDT", "BTC", "TOMAN"],
        LINK: ["USDT", "ETH", "BTC", "TOMAN"],
        MATIC: ["BTC", "USDT", "TOMAN"],
        XLM: ["BCH", "USDT", "BTC", "TOMAN"],
        ETC: ["BCH", "BTC", "USDT", "TOMAN"],
        VET: ["BTC", "BCH", "USDT", "ETH", "TOMAN"],
        FIL: ["BTC", "BCH", "USDT", "TOMAN"],
        ALGO: ["BCH", "USDT", "BTC", "TOMAN"],
        TRX: ["ETH", "BCH", "USDT", "BTC", "TOMAN"],
        EOS: ["ETH", "BTC", "USDT", "BCH", "TOMAN"],
        XMR: ["BCH", "BTC", "USDT", "TOMAN"],
        AAVE: ["USDT", "ETH", "BTC", "TOMAN"],
        KSM: ["USDT", "BTC", "TOMAN"],
        OKB: ["BTC", "USDT", "TOMAN"],
        NEO: ["BTC", "USDT", "BCH", "TOMAN"],
        ATOM: ["USDT", "BCH", "BTC", "TOMAN"],
        BSV: ["BCH", "BTC", "USDC", "USDT", "TOMAN"],
        CRO: ["USDT", "TOMAN"],
        MKR: ["USDT", "ETH", "BTC", "TOMAN"],
        XTZ: ["USDT", "BCH", "BTC", "TOMAN"],
        AVAX: ["BCH", "BTC", "USDT", "TOMAN"],
        HT: ["BTC", "USDT", "TOMAN"],
        LUNA: ["USDT", "BTC", "BCH", "TOMAN"],
        SUSHI: ["BTC", "ETH", "USDT", "TOMAN"],
        COMP: ["BTC", "USDT", "ETH", "TOMAN"],
        HBAR: ["USDT", "BTC", "TOMAN"],
        DCR: ["BTC", "USDT", "TOMAN"],
        DASH: ["USDT", "BCH", "BTC", "TOMAN"],
        SNX: ["BTC", "USDT", "ETH", "TOMAN"],
        TUSD: ["USDT", "TOMAN"],
        ZEC: ["BCH", "USDT", "BTC", "TOMAN"],
        XEM: ["USDT", "BTC", "BCH", "TOMAN"],
        YFI: ["USDT", "BTC", "ETH", "TOMAN"],
        HOT: ["USDT", "BTC", "TOMAN"],
        WAVES: ["USDT", "BTC", "TOMAN"],
        ZIL: ["BTC", "ETH", "USDT", "TOMAN"],
        CHZ: ["USDT", "BTC", "TOMAN"],
        NEAR: ["USDT", "BTC", "TOMAN"],
        ENJ: ["BTC", "USDT", "TOMAN"],
        PAX: ["USDT", "TOMAN"],
        BAT: ["USDT", "BTC", "TOMAN"],
        QTUM: ["BTC", "USDT", "TOMAN"],
        ZEN: ["USDT", "BTC", "TOMAN"],
        ARRR: ["BTC", "USDT", "TOMAN"],
        MANA: ["BTC", "USDT", "TOMAN"],
        DGB: ["BTC", "BCH", "USDT", "TOMAN"],
        NANO: ["USDT", "BTC", "TOMAN"],
        CRV: ["BTC", "USDT", "ETH", "TOMAN"],
        GRT: ["USDT", "BTC", "TOMAN"],
        BNT: ["USDT", "ETH", "BTC", "TOMAN"],
        ONT: ["USDT", "BTC", "TOMAN"],
        UMA: ["ETH", "USDT", "BTC", "TOMAN"],
        ZRX: ["USDT", "ETH", "BTC", "TOMAN"],
        AR: ["USDT", "BTC", "TOMAN"],
        SC: ["USDT", "BTC", "TOMAN"],
        FTM: ["USDT", "BTC", "TOMAN"],
        RVN: ["BCH", "BTC", "USDT", "TOMAN"],
        IOST: ["USDT", "BTC", "TOMAN"],
        LPT: ["USDT", "TOMAN"],
        ICX: ["USDT", "BTC", "TOMAN"],
        INCH: ["USDT", "TOMAN"],
        BCHA: ["USDT", "BTC", "BCH", "TOMAN"],
        CKB: ["BTC", "USDT", "TOMAN"],
        XVG: ["BTC", "USDT", "TOMAN"],
        LSK: ["USDT", "BTC", "TOMAN"],
        RSR: ["ETH", "USDT", "BTC", "TOMAN"],
        BAL: ["BTC", "USDT", "TOMAN"],
        REN: ["USDT", "ETH", "BTC", "TOMAN"],
        WOO: ["USDT", "TOMAN"],
        LRC: ["USDT", "BTC", "TOMAN"],
        ERG: ["BTC", "USDT", "TOMAN"],
        DODO: ["USDT", "TOMAN"],
        SKL: ["USDT", "TOMAN"],
        SNT: ["USDT", "BTC", "TOMAN"],
        VTHO: ["BTC", "USDT", "ETH", "TOMAN"],
        GNO: ["USDT", "BTC", "TOMAN"],
        XVS: ["USDT", "TOMAN"],
        OGN: ["USDT", "TOMAN"],
        INJ: ["USDT", "TOMAN"],
        OCEAN: ["USDT", "TOMAN"],
        NMR: ["BTC", "USDT", "TOMAN"],
        AUDIO: ["USDT", "TOMAN"],
        WAXP: ["USDT", "BTC", "TOMAN"],
        SRM: ["USDT", "TOMAN"],
        OXT: ["BTC", "USDT", "TOMAN"],
        NKN: ["USDT", "TOMAN"],
        ARDR: ["BTC", "USDT", "TOMAN"],
        KMD: ["BTC", "USDT", "TOMAN"],
        ALPHA: ["USDT", "TOMAN"],
        KNC: ["USDT", "BTC", "TOMAN"],
        PERP: ["USDT", "TOMAN"],
        XHV: ["BTC", "USDT", "TOMAN"],
        SXP: ["USDT", "TOMAN"],
        ANT: ["USDT", "BTC", "TOMAN"],
        MLN: ["BTC", "USDT", "TOMAN"],
        STORJ: ["BTC", "USDT", "TOMAN"],
        REP: ["USDT", "TOMAN"],
        BTS: ["USDT", "BTC", "TOMAN"],
        BTM: ["USDT", "BCH", "BTC", "TOMAN"],
        KEEP: ["USDT", "TOMAN"],
        BADGER: ["USDT", "TOMAN"],
        CREAM: ["USDT", "BTC", "TOMAN"],
        GAS: ["USDT", "BTC", "TOMAN"],
        SYS: ["USDT", "BTC", "TOMAN"],
        POLS: ["USDT", "TOMAN"],
        POWR: ["USDT", "TOMAN"],
        HNS: ["BTC", "USDT", "TOMAN"],
        JST: ["USDT", "BTC", "TOMAN"],
        NRG: ["BTC", "USDT", "TOMAN"],
        BCN: ["USDT", "BTC", "TOMAN"],
        IRIS: ["BTC", "USDT", "TOMAN"],
        CHR: ["USDT", "TOMAN"],
        PNK: ["USDT", "BTC", "TOMAN"],
        ELA: ["BTC", "USDT", "TOMAN"],
        RNDR: ["USDT", "TOMAN"],
        POND: ["USDT", "TOMAN"],
        LAMB: ["BTC", "USDT", "TOMAN"],
        SERO: ["USDT", "BTC", "TOMAN"],
        API3: ["USDT", "TOMAN"],
        DIA: ["USDT", "BTC", "TOMAN"],
        AE: ["BTC", "USDT", "TOMAN"],
        HEGIC: ["USDT", "TOMAN"],
        BLZ: ["USDT", "TOMAN"],
        KDA: ["USDT", "BTC", "TOMAN"],
        BEAM: ["USDT", "BTC", "TOMAN"],
        LOOM: ["USDT", "BTC", "TOMAN"],
        PIVX: ["BTC", "USDT", "TOMAN"],
        VSYS: ["USDT", "BTC", "TOMAN"],
        STAKE: ["USDT", "TOMAN"],
        DERO: ["USDT", "BTC", "TOMAN"],
        KP3R: ["USDT", "TOMAN"],
        HC: ["BTC", "USDT", "TOMAN"],
        GHST: ["USDT", "TOMAN"],
        CTXC: ["USDT", "BTC", "TOMAN"],
        RARI: ["USDT", "TOMAN"],
        ULT: ["BTC", "USDT", "TOMAN"],
        AST: ["BTC", "USDT", "TOMAN"],
        CVP: ["USDT", "TOMAN"],
        GRIN: ["BTC", "USDT", "TOMAN"],
        BAN: ["BTC", "USDT", "TOMAN"],
        RING: ["USDT", "TOMAN"],
        REVV: ["USDT", "TOMAN"],
        KAN: ["USDT", "BTC", "TOMAN"],
        PRE: ["USDT", "TOMAN"],
        COVER: ["USDT", "TOMAN"],
        DXD: ["BTC", "USDT", "TOMAN"],
        ONES: ["USDT", "TOMAN"],
        TRTL: ["USDT", "BTC", "TOMAN"],
        SWRV: ["USDT", "BTC", "TOMAN"],
        JRT: ["ETH", "USDT", "TOMAN"],
        CMT: ["USDT", "BTC", "TOMAN"],
        DMD: ["BTC", "USDT", "TOMAN"],
        CHI: ["USDT", "BTC", "TOMAN"],
        ONG: ["BTC", "USDT", "TOMAN"],
        PHNX: ["BTC", "USDT", "TOMAN"],
        EMC: ["BTC", "USDT", "TOMAN"],
        GEN: ["BTC", "USDT", "TOMAN"],
        OLT: ["BTC", "USDT", "TOMAN"],
        AUTO: ["USDT", "TOMAN"],
        PGN: ["BTC", "USDT", "TOMAN"],
        WINGS: ["BTC", "USDT", "TOMAN"],
        KTON: ["USDT", "TOMAN"],
        SUMO: ["USDT", "BTC", "TOMAN"],
        ZER: ["USDT", "BTC", "TOMAN"],
        ACM: ["USDT", "BTC", "TOMAN"],
        LIT: ["USDT", "TOMAN"],
        STX: ["BTC", "USDT", "TOMAN"],
        HYDRO: ["BTC", "USDT", "TOMAN"],
        BTT: ["BTC", "USDT", "TOMAN"],
        WEST: ["USDT", "BTC", "TOMAN"],
        YUSRA: ["USDT", "TOMAN"],
        FCH: ["USDT", "BCH", "BTC", "TOMAN"],
        NBS: ["USDT", "BTC", "TOMAN"],
        ANC: ["USDT", "TOMAN"],
        BEL: ["USDT", "TOMAN"],
        SUN: ["BTC", "USDT", "TOMAN"],
        BKK: ["USDT", "TOMAN"],
        SCRT: ["BTC", "USDT", "TOMAN"],
        MIR: ["USDT", "TOMAN"],
        CFX: ["USDT", "BTC", "TOMAN"],
        IFT: ["USDT", "TOMAN"],
        KUN: ["USDT", "TOMAN"],
        NMC: ["USDT", "BTC", "TOMAN"],
        FTT: ["BTC", "USDT", "TOMAN"],
        XDAG: ["BTC", "USDT", "TOMAN"],
        LON: ["USDT", "TOMAN"],
        FNX: ["USDT", "TOMAN"],
      },
      // menu_items: { title: "menu", children: [] },
    };
  },
  mounted() {
    this.getMarketInfo();
    this.getMarkets();
    // this.changeMenu(this.markets);
    // this.$root.$on("bv::dropdown::show", (bvEvent) => {
    //   if (bvEvent.componentId === "dropdown-2") {
    //     this.isDropdown2Visible = true;
    //   }
    // });
    // this.$root.$on("bv::dropdown::hide", (bvEvent) => {
    //   if (bvEvent.componentId === "dropdown-2") {
    //     this.isDropdown2Visible = false;
    //   }
    //   if (this.isDropdown2Visible) {
    //     bvEvent.preventDefault();
    //   }
    // });

    // e.stopPropagation();
    // e.preventDefault();
  },

  computed: {
    // colorPrice: function () {
    //   return {
    //     green: this.info.price > 0,
    //     red: this.info.price < 0,
    //   };
    // },
    // colorDailyPrice: function () {
    //   return {
    //     green: parseFloat(this.info.daily_price_change_pct) > 0,
    //     red: parseFloat(this.info.daily_price_change_pct) < 0,
    //   };
    // },
  },
  methods: {
    showSumMenue() {
      this.toggleUl();
    },
    toggleUl() {
      if (this.show_ul) {
        this.show_ul = false;
      } else if (this.show_ul == false) {
        this.show_ul = true;
      }
    },
    getMarketInfo() {
      this.$store
        .dispatch("getMarketInfo", "BTCUSDT")
        .then((response) => {
          console.log(response);
          this.info = response.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMarkets() {
      this.$store
        .dispatch("getMarkets")
        .then((response) => {
          console.log(response);
          // this.markets = response.body;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setSelectedItem(item) {
      this.selectedDropdown = item;
    },
    toogleItem(index) {
      if (this.menu[index].children) {
        if (!this.menu[index].showSubMenu) {
          this.menu[index].showSubMenu = true;
        } else {
          this.menu[index].showSubMenu = false;
        }
      }
    },

    // changeMenu(menu) {
    //   for (const items of Object.keys(menu)) {
    //     var submenu = [];

    //     for (const child in menu[items]) {
    //       console.log(items, "/", menu[items][child]);
    //       submenu.push({ name: menu[items][child] });
    //     }
    //     this.menu_items.children.push({ title: items, children: submenu });
    //   }
    // },
    //   colorClass(amount) {
    //     console.log(amount);
    //     // const am=parseFloat(amount)
    //     if (amount > 0) {
    //       return true;
    //     } else {
    //       console.log("reeeeeeeeeeeeeeeeed");
    //       return "red";
    //     }
    //   },
  },

  components: {
    VueNumeric,
    // VueNestedMenu,
    Dropdown,
  },
};
</script>

<style>
.red {
  color: red;
  text-align: center;
  background-color: #1f212d;
  border-color: #1f212d;
}
.green {
  color: rgb(91, 209, 91);
  background-color: #1f212d;
  border-color: #1f212d;
  text-align: center;
}
.number {
  background-color: #1f212d;
  border-color: #1f212d;
  text-align: center;
  color: white;
}

.dropdown-menu-btn {
  position: relative !important;
  width: 100% !important;
  margin: 0% !important;
  padding: 0% !important;
  background-color: #1f212d;
  min-width: none;
}

.dropdown-item {
  min-width: none;
  /* background-color: #1f212d !important; */
  color: white !important;
}
ul.dropdown-menu.show {
  left: -38px !important;
}

.dropdown-submenu {
  position: relative;
}

.dropdown-submenu .dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: -1px;
}
.my-dropdown-bp__body {
  background-color: #181a29;
}
.my-dropdown-bp__btn--active {
  background-color: #1f212d;
}
.my-class-bp__btn {
  background: lightgray;
}

.my-class-bp__btn--active {
  background: #fff;
}

.my-class-bp__body {
  width: 20rem; 
  padding: 2rem; 
  font-size: 1.6rem;
}

</style>
