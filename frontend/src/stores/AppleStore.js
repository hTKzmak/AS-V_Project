import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';

// В данном Store предполагается получить данные о продуктах с бека (BASE_URL)
// Здесь ещё находится функция по поиску товаров (43 строка кода - searchFunc)


// Старые данные
// let BASE_URL = 'https://dummyjson.com/products'

// Новые данные (Бекенд Арсена)
let BASE_URL = 'http://localhost:1452/api/products/'

let productsList = reactive([])

fetch(BASE_URL)
    .then(res => res.json())
    .then(json => {
        json.map(elem => {
            let res = {
                id: elem.id,
                title: elem.name,
                price: elem.price,
                image: elem.images[0],
                rating: elem.rating,
                discount: elem.discount_price,
                is_available: elem.is_available,
                category: elem.category,
                // Если что-то ещё надо, то можно ещё что-то добавить
            }
            productsList.push(res)
        })
    })
    
export const useCounterStore = defineStore('appleStore', {
    state: () => ({
        data: productsList,
        inputValue: '',
        BASE_URL: 'http://localhost:1452/',
        searchData: reactive([])
    }),

    actions: {
        getData() {
            console.log(this.data)
        },
        getValue(value) {
            this.inputValue = value
            console.log(this.inputValue)
        },
        searchFunc(value) {
            let filteredProducts = this.data.filter(elem => elem.title.toLowerCase().includes(value.toLowerCase()))
            
            if (filteredProducts && value) {
                this.searchData = filteredProducts
            }
            else if (filteredProducts && !value) {
                this.searchData = []
            }
            else {
                this.searchData = []
            }

            console.log(filteredProducts)
        }
    }
})