<script>
import ProductsList from '../../components/ProductsList.vue'
import { RouterLink } from 'vue-router'

export default {
    components: {
        ProductsList
    },
    data() {
        return {
            count: 12
        }
    }
}
</script>

<template>
    <div class="container">
        <RouterLink to="/">Самое популярное</RouterLink>
        <ProductsList :count="count" />
    </div>
</template>