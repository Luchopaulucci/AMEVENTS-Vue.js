import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.min.css";

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
