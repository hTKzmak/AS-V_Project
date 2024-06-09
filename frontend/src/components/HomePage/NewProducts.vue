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
        const appleStore = useCounterStore()
        const sortedData = ref([]);

        // const categoriesList = appleStore.categoriesData
        const categoriesList = ['Смартфоны', 'Планшеты', 'Часы', 'Компьютеры', 'Акссесуары']

        watchEffect(() => {
            categoriesList.forEach(category => {
                sortedData.value = sortedData.value.concat(appleStore.data.filter(elem => elem.category === category).sort((a, b) => b.id - a.id).slice(0, 2));
            });
        });

        return {
            appleStore,
            sortedData,
            // count: 8
        }
    }
}
</script>

<template>
    <div class="container">
        <RouterLink id="products-link" to="/">Новинки</RouterLink>
        <ProductsList :data="sortedData" />
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