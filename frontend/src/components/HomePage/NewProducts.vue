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
        <RouterLink to="/">Новинки</RouterLink>
        <ProductsList :data="sortedData" />
    </div>
</template>