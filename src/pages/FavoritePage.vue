<template>
  <div>
    <h2 class="header">Избранное</h2>
    <div class="product-container">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return this.$store.getters.getFavoriteProducts;
    },
  },
};
</script>

<style scoped>
.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
