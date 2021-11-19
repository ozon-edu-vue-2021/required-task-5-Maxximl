<template>
  <div class="container">
    <h2 class="header">Корзина</h2>
    <div class="content">
      <div class="products">
        <div v-if="productsInCart.length" class="cart-items">
          <ProductItem
            v-for="product in productsInCart"
            :key="product.uid"
            :product="product"
          />
        </div>
        <div v-else>Корзина пуста</div>
      </div>
      <CartInfo />
    </div>
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
import CartInfo from "../components/CartInfo.vue";

export default {
  components: {
    ProductItem,
    CartInfo,
  },
  computed: {
    productsInCart() {
      return this.$store.getters.getProductsInCard;
    },
  },
};
</script>

<style scoped>
.header {
  font-size: 30px;
}
.content {
  display: flex;
}

.products {
  flex: 3;
  background-color: white;
  margin-right: 30px;
}
</style>
