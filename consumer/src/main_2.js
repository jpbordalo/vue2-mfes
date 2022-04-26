import Vue from "vue";
import App from "./App.vue";
// import vuetifyMfes from "mfe2/vuetifyMfes";

// console.log(vuetifyMfes);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
