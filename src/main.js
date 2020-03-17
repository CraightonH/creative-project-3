import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import api from "../api.js";
import http from "https";

Vue.config.productionTip = false;

let data = {
  api: {
    options: {
      host: 'od-api.oxforddictionaries.com',
      port: '443',
      method: "GET",
      headers: {
          'app_id': api.app_id,
          'app_key': api.api_key
      }
    }
  },
  search: '',
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
