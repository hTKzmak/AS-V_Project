import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';

let BASE_URL = 'https://dummyjson.com/products'

let productsList = reactive([])

fetch(BASE_URL)
    .then(res => res.json())
    .then(json => {
        json.products.map(elem => {
            let res = {
                id: elem.id,
                title: elem.title,
                price: elem.price,
                image: elem.images[0],
                rating: elem.rating,
                discount: elem.discountPercentage,
            }
            productsList.push(res)
        })
    })

export const useCounterStore = defineStore('appleStore', {
    state: () => ({
        data: productsList
    }),

    actions: {
        getData() {
            console.log(this.data)
        }
    }
})