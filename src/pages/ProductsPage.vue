<template>
  <div class="outer-container">
    <div v-if="!loading" class="product-container">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div v-else class="loader">Загрузка...</div>
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
      return this.$store.getters.getProducts;
    },
    loading() {
      return this.$store.getters.getLoadingStatus;
    },
  },
  data: function () {
    return {};
  },
};
</script>

<style scoped>
.outer-container {
  display: flex;
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.loader {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
