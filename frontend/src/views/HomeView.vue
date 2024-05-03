<script>
import PopularProducts from '../components/PopularProducts.vue'
import NewProducts from '../components/NewProducts.vue'
import Banner from '../components/Banner.vue'
import DiscountForm from '../components/DiscountForm.vue'

export default {
  components: {
    PopularProducts,
    Banner,
    NewProducts,
    DiscountForm
  }
}
</script>

<template>
  <h1>купить iPhone в Москве</h1>
  <PopularProducts />
  <Banner/>
  <NewProducts/>
  <DiscountForm/>
</template>

<style>
  h1{
    font-size: 48px;
    text-align: center;
  }
</style>
