<script>
import PopularProducts from '../components/PopularProducts.vue'
import NewProducts from '../components/NewProducts.vue'
import Banner from '../components/Banner.vue'
import DiscountForm from '../components/DiscountForm.vue'
import Benefits from '../components/Benefits.vue'

export default {
  components: {
    PopularProducts,
    Banner,
    NewProducts,
    Benefits,
    DiscountForm
  }
}
</script>

<template>
  <h1>купить iPhone в Москве</h1>
  <PopularProducts />
  <Banner/>
  <NewProducts/>
  <Benefits/>
  <DiscountForm/>
</template>

<style>
  h1{
    font-size: 48px;
    text-align: center;
  }
</style>
