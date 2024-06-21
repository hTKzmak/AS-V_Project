<script>
import PopularProducts from '../components/HomePage/PopularProducts.vue'
import NewProducts from '../components/HomePage/NewProducts.vue'
import Banner from '../components/HomePage/Banner.vue'
import DiscountForm from '../components/HomePage/DiscountForm.vue'
import Benefits from '../components/HomePage/Benefits.vue'
import SliderMain from '../components/HomePage/SliderCustom/SliderMain.vue'
import { useCounterStore } from '@/stores/AppleStore'
import { onMounted } from 'vue'

export default {
  components: {
    SliderMain,
    PopularProducts,
    Banner,
    NewProducts,
    Benefits,
    DiscountForm
  },
  setup(){
    const appleStore = useCounterStore()

    onMounted(()=>{
      appleStore.data = []
      appleStore.getData()
    })
    return {
      appleStore
    }
  }
}
</script>

<template>
  <SliderMain />
  <h1>купить iPhone в Москве</h1>
  <PopularProducts />
  <Banner />
  <NewProducts/>
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
