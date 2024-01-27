<template>
   <div class="products-list">
        <div class="product"
            v-for="product in store.products"
            :key="product.id"
            @click="gotoProductPage(product.id)"
        >
            <img :src="product.thumbnail" :alt="product.title">
            <h2>Brand: {{ product.brand }}</h2>
            <p>Description: {{ product.description }}</p>
            <h2>Price: {{ product.price }}$</h2>
        </div>
   </div>
</template>

<script>
    import { defineComponent} from 'vue';
    export default defineComponent({name: 'CatalogView'});
</script>

<script setup>
    import { onMounted } from 'vue';
    import { productsStore } from '@/stores/products';
    import { useRouter } from 'vue-router';

    const store = productsStore();
    onMounted(() => { //esto se ejecuta cada vez que reinicio la pagina
        console.log('MOUNTED >>>>>>>');
        store.fetchProductsFromDB();
        console.log(store.products);
    });

    const router = useRouter();
    const gotoProductPage = (id) => {
        router.push({name: 'ProductView', params: {id}});
    };
</script>

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