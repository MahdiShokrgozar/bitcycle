import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import i18n from "./i18n";
import VueResource from "vue-resource";
import VueSnip from 'vue-snip'
import VueNoty from 'vuejs-noty'
import Vuelidate from 'vuelidate'
import 'vuejs-noty/dist/vuejs-noty.css'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Vue.use(VueI18n)
Vue.config.productionTip = false;

Vue.use(VueResource);

Vue.use(require('vue-jalali-moment'));




Vue.use(Vuelidate)

Vue.use(VueNoty, {
  layout: "bottomLeft",
  theme: "nest",
  queue: 'global',
  timeout: "4000",
  progressBar: true,
  closeWith: ["click"]
})

Vue.use(VueSnip)

Vue.http.options.root = "http://bitycle.com";
const token = localStorage.getItem("token");
if (token) {
  Vue.http.headers.common["Authorization"] = token;
}

new Vue({
  router,
  store,
  i18n,
  components: {
    // popover
  },
  render: (h) => h(App),
}).$mount("#app");
