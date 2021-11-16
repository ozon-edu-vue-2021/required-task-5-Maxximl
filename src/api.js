const productsUrl = " https://random-data-api.com/api/food/random_food?size=30";

export const fetchProducts = async () => {
  const response = await fetch(productsUrl);
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject("Ошибка при получении продуктов: ", response.status);
  }
};
