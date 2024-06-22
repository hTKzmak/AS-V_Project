// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRecentStore = defineStore('recent', () => {
    let recentProducts = ref([])
    const productsFromStorage = localStorage.getItem('recent');
    if (productsFromStorage) {
      recentProducts.value = JSON.parse(productsFromStorage);
    }
    function addToRecent(id, title, price, image, rating, discount, is_available, category, guarantee, count_review){
        let findIndex = recentProducts.value.findIndex(elem => elem.id === id)
        if ((findIndex == -1) && (id != 0)){
        recentProducts.value.push({
            id: id,
            title: title,
            price: price,
            image: image,
            rating: rating,
            discount: discount,
            is_available: is_available,
            category: category,
            guarantee: guarantee,
            count_review: count_review,
        })
        if (recentProducts.value.length > 5){
          recentProducts.value.shift()
        }
        localStorage.recent = JSON.stringify(recentProducts.value)
        }

    }

  return { recentProducts, addToRecent }
})
