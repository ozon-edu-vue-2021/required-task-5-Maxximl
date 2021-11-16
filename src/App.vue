<template>
  <div id="app">
    <nav class="navigation">
      <router-link to="/products">Продукты</router-link>
      <router-link to="/cart">Корзина</router-link>
      <router-link to="/favorite">Избранное</router-link>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  async mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}

.navigation {
  height: 40px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: lavender;
  z-index: 99;
}
.content {
  margin-top: 40px;
}
</style>
