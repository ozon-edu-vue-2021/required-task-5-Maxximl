import Vue from "vue";
import Vuex from "vuex";
import { fetchProducts } from "./api";
import { getRandomInt } from "./helpers";

Vue.use(Vuex);
const setProducts = "setProducts";
const getProducts = "getProducts";

const images = [
  require("./assets/images/6123150777.webp"),
  require("./assets/images/6126039472.webp"),
  require("./assets/images/6126040354.webp"),
  require("./assets/images/6128597660.webp"),
  require("./assets/images/6134992334.webp"),
  require("./assets/images/6136170572.webp"),
  require("./assets/images/6136172483.webp"),
  require("./assets/images/6140906765.webp"),
  require("./assets/images/6142673815.webp"),
  require("./assets/images/6142681673.webp"),
  require("./assets/images/6142683276.webp"),
  require("./assets/images/6148226736.webp"),
];

export const store = new Vuex.Store({
  state: {
    products: [],
    loading: false,
    productsInCart: [],
  },
  mutations: {
    [setProducts](state, newProducts) {
      state.products = newProducts;
    },
    setLoadingStatus(state, isLoading) {
      state.loading = isLoading;
    },
    addToCart(state, newProduct) {
      const product = state.products.find(
        (product) => product.id === newProduct.id
      );
      product.quantity = newProduct.quantity;

      const productInCart = state.productsInCart.find(
        (product) => product.id === newProduct.id
      );
      if (!productInCart) {
        state.productsInCart.push(product);
      }

      if (!newProduct.quantity) {
        state.productsInCart = state.productsInCart.filter(
          (product) => product.id !== newProduct.id
        );
      }
    },
    toggleLike(state, productId) {
      const product = state.products.find((item) => item.id === productId);
      product.liked = !product.liked;
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getLoadingStatus(state) {
      return state.loading;
    },
    getProductsInCard(state) {
      return state.productsInCart;
    },
    getFavoriteProducts(state) {
      return state.products.filter((product) => product.liked);
    },
  },
  actions: {
    async [getProducts](context) {
      try {
        context.commit("setLoadingStatus", true);
        const products = await fetchProducts();
        const preparedProducts = products.map((product) => {
          return {
            ...product,
            price: getRandomInt(999),
            quantity: 0,
            photo: images[getRandomInt(12)],
            liked: false,
          };
        });
        context.commit(setProducts, preparedProducts);
      } catch (error) {
        context.commit(setProducts, []);
        console.error(error);
      } finally {
        context.commit("setLoadingStatus", false);
      }
    },
  },
});
