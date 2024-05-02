<script>
import ProductItem from './ProductItem.vue'

export default {
    components: {
        ProductItem
    },
    props: ['count']
}
</script>

<template>
    <div class="products-list">
        <div v-for="index in count" :key="index">
            <ProductItem />
        </div>
    </div>
</template>

<style lang="scss">
.products-list {
    margin: 5px 0 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
    row-gap: 30px;

    @media screen and (min-width: 769px) and (max-width: 1440px) {
        justify-content: space-around;
    }

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
}
</style>