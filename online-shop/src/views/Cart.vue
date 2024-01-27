<template>
    <button @click="router.push({name:'Catalog'})">Back to catalog</button>

    <div v-if="!store.cart.length" style="text-align: center;">
        <p>Empty Cart....</p>
        <button @click="router.push({name:'Catalog'})">Back to catalog</button>
    </div>

    <div v-else class="cart-items">
        <div
            class="cart-item"
            v-for="item in store.cart"
            :key="item.id"
        >

        <div class="item-details">
            <img :src="item.thumbnail" alt="">
            <span>Brand: {{item.brand}}</span>
            <span>Name: {{item.title}}</span>
            <span>Price: {{item.price}}</span>
            <button @click="removeFromCart(item.id)">Remove</button>
        </div>

        </div>
    </div>

</template>

<script>
    import  {defineComponent} from "vue"

    export default defineComponent({
        name: "CartView"
    })

</script>


<script setup>
    import { productsStore } from '@/stores/products';
    import { useRouter } from 'vue-router';


    const store = productsStore();
    const router = useRouter();

    const removeFromCart = (id) => {
        store.removeFromCart(id);
    }



</script>

<style scoped>
.item-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    box-shadow: 0 0 17px 6px #e7e7e7;
    padding: 16px;
    border-radius: 8px;
}
.item-details img {
    width: 20%;
}
</style>