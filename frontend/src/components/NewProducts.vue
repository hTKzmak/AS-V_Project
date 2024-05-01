<script>
import ProductsList from '../components/ProductsList.vue'
import { RouterLink } from 'vue-router'

export default {
    components: {
        ProductsList
    },
    data(){
        return{
            count: 8
        }
    }
}
</script>

<template>
    <RouterLink to="/">Новинки</RouterLink>
    <ProductsList :count="count"/>
</template>