<script>
import ProductsList from '../../components/ProductsList.vue'
import { RouterLink } from 'vue-router'
import { useCounterStore } from '@/stores/AppleStore';

export default {
    components: {
        ProductsList
    },
    setup() {
        const appleStore = useCounterStore()
        return {
            appleStore,
            count: 12
        }
    }
}
</script>

<template>
    <div class="container">
        <RouterLink to="/">Самое популярное</RouterLink>
        <ProductsList :count="count" :data="appleStore.data" />
    </div>
</template>