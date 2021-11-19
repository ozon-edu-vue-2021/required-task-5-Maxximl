<template>
  <div class="container">
    <div class="photo">
      <img :src="product.photo" alt="" />
      <img
        :src="product.liked ? likedImg : notLikedImg"
        alt=""
        class="like"
        @click="handleLikeClick"
      />
    </div>
    <div class="card-body">
      <div class="price">{{ `${product.price} руб.` }}</div>
      <div class="name">{{ product.dish }}</div>
    </div>
    <div class="card-row">
      <div class="add-to-card-button">
        <a-button v-if="!product.quantity" @click="addToCart"
          >В корзину</a-button
        >
        <span class="in-card-caption" v-else>В корзине:</span>
      </div>
      <div class="quantity">
        <ProductCounter :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCounter from "../components/ProductCounter.vue";
import likedImg from "../assets/images/liked.png";
import notLikedImg from "../assets/images/not-liked.png";

export default {
  props: {
    product: Object,
  },
  components: {
    ProductCounter,
  },
  data: function () {
    return {
      likedImg,
      notLikedImg,
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        ...this.product,
        quantity: this.product.quantity + 1,
      });
    },
    handleLikeClick() {
      this.$store.dispatch("toggleLike", this.product.id);
    },
  },
};
</script>

<style scoped>
.container {
  min-width: 230px;
  max-width: 2;
  height: 350px;
  border: 1px solid grey;
  position: relative;
  margin: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.photo {
  height: 200px;
  position: relative;
}

.like {
  position: absolute;
  right: -10px;
  top: -10px;
  z-index: 10;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.like:hover {
  transform: scale(1.1);
}
.card-body {
  flex: 1;
}

.price {
  font-size: 20px;
}
.add-to-card-button {
}

img {
  height: 100%;
  width: auto;
}

.card-row {
  display: flex;
  justify-content: space-between;
}

.in-card-caption {
  font-size: 16px;
}
</style>
