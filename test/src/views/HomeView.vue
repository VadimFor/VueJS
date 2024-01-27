<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />

    <div class="products-list">
        <div class="product">item 1 </div>
        <div class="product">item 2 </div>
        <div class="product">item 3 </div>
        <div class="product">item 4 </div>  
        <div class="product">item 5 </div>
        <div class="product">item 6 </div>  
 </div>

  </main>
</template>


<style scoped>
.products-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.product {
    flex-basis: 28%;
    margin: 8px;
    padding: 16px;
    box-shadow: 0px 0px 14px 1px #e6e6e6;
    cursor: pointer;
}

.product img {
    width: 70%;
}
</style>