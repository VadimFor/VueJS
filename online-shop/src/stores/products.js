import { defineStore } from 'pinia';

export const productsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [],
    cart:[]
  }),
  actions: {
    fetchProductsFromDB() {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
          this.products = data.products; 
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    },
    addToCart(product){
      this.cart.push(product);
    },
    removeFromCart(product){
      this.cart = this.cart.filter((item) => item.id !== product);
    }



  }
});