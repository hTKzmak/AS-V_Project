<script>
import ProductsList from '../components/ProductsList.vue'
import { RouterLink } from 'vue-router'

export default {
    components: {
        ProductsList
    },
    data() {
        return {
            count: 8
        }
    }
}
</script>

<template>
    <div class="container">
        <RouterLink to="/">Новинки</RouterLink>
        <ProductsList :count="count" />
    </div>
</template>