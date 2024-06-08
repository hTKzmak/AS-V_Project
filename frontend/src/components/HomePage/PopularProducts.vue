<script>
import ProductsList from '../../components/ProductsList.vue'
import { RouterLink } from 'vue-router'
import { useCounterStore } from '@/stores/AppleStore';
import { ref, watchEffect } from 'vue';

export default {
    components: {
        ProductsList
    },
    setup() {
        const appleStore = useCounterStore();
        const sortedData = ref([]);

        // нужен для отображения данных от большого значения count_review, до меньшего
        watchEffect(() => {
            if (appleStore.data.length > 0) {
                sortedData.value = [...appleStore.data].sort((a, b) => b.count_review - a.count_review);
            }
        });

        return {
            appleStore,
            sortedData,
            count: 12
        }
    },
    methods: {
        lol() {
            console.log(this.sortedData)
        }
    }
}
</script>

<template>
    <div class="container">
        <RouterLink id="products-link" to="/">Самое популярное</RouterLink>
        <ProductsList :count="count" :data="sortedData" />
    </div>
</template>

<style lang="scss">
#products-link {
    font-size: 24px;
    margin-bottom: 24px;
    
    @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 16px;
    }
}
</style>