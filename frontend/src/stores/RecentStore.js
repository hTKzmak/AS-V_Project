// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRecentStore = defineStore('recent', () => {
    let recentProducts = ref([])
    const productsFromStorage = localStorage.getItem('recent');
    if (productsFromStorage) {
      recentProducts.value = JSON.parse(productsFromStorage);
      console.log(recentProducts.value)
    }
    function addToRecent(id, title, price, image, rating, discount, is_available){
        let findIndex = recentProducts.value.findIndex(elem => elem.id === id)
        if (findIndex == -1){
        recentProducts.value.push({
            id: id,
            title: title,
            price: price,
            image: image,
            rating: rating,
            discount: discount,
            is_available: is_available
        })
        if (recentProducts.value.length > 5){
          recentProducts.value.shift()
        }
        localStorage.recent = JSON.stringify(recentProducts.value)
        console.log(recentProducts.value)
        }

    }

  return { recentProducts, addToRecent }
})
