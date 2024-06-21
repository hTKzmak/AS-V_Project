<script>
import ProductItem from './ProductItem.vue'

export default {
    components: {
        ProductItem
    },
    props: ['count', 'data']
}
</script>

<template>
    <div class="products-list">
        <ProductItem v-for="index of data.slice(0, count)" :id="index.id" :title="index.title" :price="index.price"
            :image="index.image" :rating="index.rating" :discount="index.discount" :is_available="index.is_available"
            :guarantee="index.guarantee" :count_review="index.count_review" :color="index.color" :memo="index.memo" :key="index.id"/>
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