<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link class="link" to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link class="link" to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link class="link" to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/header/header";

export default {
  data() {
    return {
      seller: {}
    };
  },
  created() {
    // this.$http.get("https://www.baidu.com")
    // .then((response) => {
    //   console.log(response.body);
    // });
  },
  components: {
    "v-header": header
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.tab .tab-item {
  flex: 1;
  text-align: center;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.link {
  display: block;
  text-decoration: none;
  font-size: 14px;
  color: rgb(77, 85, 93);
}
.link.active {
  color: rgb(240, 20, 20);
}
</style>
