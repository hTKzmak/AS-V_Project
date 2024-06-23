<script setup>
import ProductsList from '../../components/ProductsList.vue'
import { RouterLink } from 'vue-router'
import { useCounterStore } from '@/stores/AppleStore';
import { onMounted, ref, watchEffect } from 'vue';

        const appleStore = useCounterStore();
        const sortedData = ref([]);

        // нужен для отображения новых товаров по дате (от большего к меньшему)
        watchEffect(() => { 
            if (appleStore.data.length > 0) {
                sortedData.value = [...appleStore.data].sort((a, b) => (new Date(b.createdAt)) - (new Date(a.createdAt)))
            }
        });
        onMounted(() =>{   
            if (appleStore.data.length > 0) {
                sortedData.value = [...appleStore.data].sort((a, b) => (new Date(b.createdAt)) - (new Date(a.createdAt)))
            }
        }
        )


</script>


<template>
    <div class="container">
        <RouterLink id="products-link" to="/">Новинки</RouterLink>
        <ProductsList :count="8" :data="sortedData" />
    </div>
</template>

<style lang="scss">
#products-link {
    font-size: 24px;
    margin-bottom: 24px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-top: 24px;
        margin-bottom: 16px;
    }
}
</style>