import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCurrentProductStore = defineStore('currentProduct', () => {

  let name = ref('iPhone 14 Pro Max 128GB Green')
  let image = ref('src/assets/placeholder.png')
  let price = ref(999)
  let oldPrice = ref(1099)

  


  return { name, image, price, oldPrice }
})
