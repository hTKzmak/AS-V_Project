<script>
import ProductInfo from '../components/ProductPage/ProductInfo.vue';
import DeliveryQA from '../components/ProductPage/DeliveryQA.vue';
import Nothing from '../components/ProductPage/Nothing.vue';

export default{
    components: {
        ProductInfo,
        DeliveryQA,
        Nothing
    }
}
</script>

<template>
    <ProductInfo/>
    <DeliveryQA/>
    <Nothing/>
</template>

<style lang="scss">
</style>