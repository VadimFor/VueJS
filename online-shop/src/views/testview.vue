<template>
    <h1>TEST</h1>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'test_view'
    });
</script>


<script setup>
    import { onMounted } from 'vue';
    import { testeostore } from '@/stores/test';

    const t = testeostore();

    onMounted(() => {
        console.log('TEST')
        t.testmethod()
        console.log(t.tesvar);
    });

</script>