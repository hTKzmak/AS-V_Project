<script>
import PopularProducts from '../components/HomePage/PopularProducts.vue'
import NewProducts from '../components/HomePage/NewProducts.vue'
import Banner from '../components/HomePage/Banner.vue'
import DiscountForm from '../components/HomePage/DiscountForm.vue'
import Benefits from '../components/HomePage/Benefits.vue'
import Slider from '../components/HomePage/Slider.vue'

export default {
  components: {
    Slider,
    PopularProducts,
    Banner,
    NewProducts,
    Benefits,
    DiscountForm
  }
}
</script>

<template>
  <Slider/>
  <h1>купить iPhone в Москве</h1>
  <PopularProducts />
  <Banner />
  <NewProducts />
  <Benefits />
  <DiscountForm />
</template>

<style lang="scss">
h1 {
  font-size: 48px;
  text-align: center;

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
}
</style>
