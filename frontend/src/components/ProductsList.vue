<script>
import ProductItem from './ProductItem.vue'

export default {
    components: {
        ProductItem
    }
}
</script>

<template>
    <div class="products-list">
        <ProductItem />
    </div>
</template>

<style lang="scss">
.products-list {
    margin: 50px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
    row-gap: 30px;
}
</style>