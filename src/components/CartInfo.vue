<template>
  <div class="container">
    <a-button
      class="btn"
      @click="handleMakeOrderClick"
      :disabled="!productsInCart.length"
      >Перейти к оформлению</a-button
    >
    <div class="info">
      <span class="info__caption">Ваша корзина</span>
      <div class="quantity">{{ totalQuantity }}</div>
    </div>
    <div class="sum">
      <span class="sum__caption">Общая стоимость</span>
      <div class="total-sum">{{ productsSum }}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    productsInCart() {
      return this.$store.getters.getProductsInCard;
    },
    productsSum() {
      return this.productsInCart.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
    },
    productsList() {
      return this.productsInCart.map(
        (product) => ` ${product.dish} - ${product.quantity} шт.`
      );
    },
    totalQuantity() {
      return this.productsInCart.reduce((acc, curr) => acc + curr.quantity, 0);
    },
  },
  methods: {
    handleMakeOrderClick() {
      alert(this.productsList);
    },
  },
};
</script>

<style scoped>
.container {
  width: 300px;
  height: 100%;
  font-size: 20px;
}

.info {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid grey;
  height: 50px;
  align-items: center;
}

.sum {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  width: 100%;
}
</style>
