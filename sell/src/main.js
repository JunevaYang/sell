// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import goods from "./components/goods/goods";
import ratings from "./components/ratings/ratings";
import seller from "./components/seller/seller";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

/* eslint-disable no-new */
const routes = [
  { path: "/goods", component: goods },
  { path: "/ratings", component: ratings },
  { path: "/seller", component: seller }
];

const router = new VueRouter({
  routes,
  linkActiveClass: "active"
  // 修改配置  将link-active-class 的css名称改为 active 缩短写法
});

new Vue({
  el: "#app",
  router,
  render: c => c(App)
});
// let app = Vue.extend(App);

// let router = new VueRouter();

// router.map({
//     "/goods": {
//         component: goods
//     }
// });

// router.start(app, "#app");
