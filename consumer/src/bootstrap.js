import Vue from "vue";
import App from "./App.vue";
import vuetifyMfes from "mfe2/vuetifyMfes";
import store from "./store";

console.log(vuetifyMfes);

Vue.config.productionTip = false;
Vue.config.errorHandler = function (err, vm, info) {
  console.log("----------", err, vm, info);
};

new Vue({
  render: (h) => h(App),
  vuetify: vuetifyMfes,
  store,
}).$mount("#app");
