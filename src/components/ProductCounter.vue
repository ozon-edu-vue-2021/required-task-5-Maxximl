<template>
  <div v-if="product.quantity" class="wrapper">
    <a-input-number
      id="inputNumber"
      v-model="quantity"
      :min="0"
      :max="100"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data: function () {
    return {
      quantity: this.product.quantity,
    };
  },
  methods: {
    onChange() {
      this.$store.commit("addToCart", {
        ...this.product,
        quantity: this.quantity,
      });
    },
  },
  watch: {
    product: {
      handler(newVal) {
        this.quantity = newVal.quantity;
      },
      deep: true,
    },
  },
};
</script>

<style scoped></style>
