<template>
  <div class="outerContainer">
    <div class="container">
      <div class="photo">
        <img :src="product.photo" alt="" />
      </div>
      <div class="name">{{ product.dish }}</div>
      <div class="price">{{ product.price }}</div>
      <div class="quantity">
        <ProductCounter :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCounter from "../components/ProductCounter.vue";

export default {
  props: {
    product: Object,
  },
  components: {
    ProductCounter,
  },
};
</script>

<style scoped>
.outerContainer {
  padding: 0 15px;
}
.container {
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 15px;
  border-bottom: 1px solid rgb(218, 203, 203);
}

.photo {
  height: 180px;
  padding: 5px 10px 5px;
}

img {
  height: 100%;
  width: auto;
}
.quantity {
  display: flex;
}

.quantity span {
  font-size: 20px;
  line-height: 20px;
  cursor: pointer;
}
.quantity-num {
  font-size: 16px;
  width: 30px;
  display: flex;
  justify-content: center;
}
</style>
