import EmptyBucket from '@/modals/EmptyBucket.vue';
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';

// В данном Store предполагается получить данные о продуктах с бека (BASE_URL)
// Здесь ещё находится функция по поиску товаров (43 строка кода - searchFunc)


// Старые данные
// let BASE_URL = 'https://dummyjson.com/products'

// Новые данные (Бекенд Арсена)
// let BASE_URL = 'http://localhost:1452/api/products/'
let BASE_URL = 'http://localhost:1452/'

let productsList = reactive([])
let catalogsList = reactive([])

// получение всех товаров
fetch(BASE_URL + 'api/products/')
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
                guarantee: elem.guarantee,
                count_review: elem.count_review,
                createdAt: elem.createdAt,
                // Если что-то ещё надо, то можно ещё что-то добавить
            }
            productsList.push(res)
        })
    })

// получение всех категориев товаров (???)
for (let i = 0; i <= 7; i++) {
    fetch(BASE_URL + `api/category/${i}`)
        .then(res => res.json())
        .then(json => {
            for (let i of json) {
                if(!catalogsList.includes(i.category)){
                    catalogsList.push(i.category)
                }
            }
        })
}

export const useCounterStore = defineStore('appleStore', {
    state: () => ({
        data: productsList,
        catalogData: catalogsList,
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

            console.log(value)
        }
    }
})