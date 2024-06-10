
import { defineStore } from 'pinia'
import { ref } from 'vue'
// import { useRecentStore } from './RecentStore'





export const useSingleProductStore = defineStore('singleProduct', () => {
  // Для карточек в модалках


  



  let id = ref(0)
  let BASE_URL = ref('')
  let price = ref(0)
  let discount_price = ref(null)
  let guarantee = ref(0)
  let rating = ref(0)
  let count_review = ref(0)
  let is_available = ref(false)
  let store_address = ref(0)
  let color = ref('')
  let brand = ref('')
  let country = ref('RUSSIA ZZZVVV')
  let category = ref('')
  let name = ref('FINDPROD DID NOT WORK')
  let images = ref([])
  let characteristics = ref([])

  let neededProd = ref({})



  // {"id":2,"price":35900,"discount_price":null,"guarantee":12,"rating":5,"count_review":43,"is_available":true,"store_address":null,
  // "color":"Красный","brand":"Apple","country":"Китай","category":"Смартфоны","name":"iPhone SE 2022","images":["image/iphone_se_2022_red.jpg"],
  // "characteristics":[{"characteristic":"Процессор","unit_type":"значение","value":"A15 Bionic"},{"characteristic":"Объем встроенной памяти","unit_type":"ГБ","value":"128"},
  // {"characteristic":"Аккумулятор","unit_type":"mAh","value":"2018"},{"characteristic":"Питание","unit_type":"значение","value":"Li-Ion"},
  // {"characteristic":"Материал корпуса","unit_type":"значение","value":"стекло/алюминий"},{"characteristic":"Вес","unit_type":"г","value":"148"},
  // {"characteristic":"Диагональ","unit_type":"дюйма","value":"4.7"},{"characteristic":"Разрешение","unit_type":"значение","value":"1334x750"}]}



  function findProd(findId){
    // BASE_URL.value = 'http://localhost:1452/api/products/'+findId
    BASE_URL.value = 'http://localhost:1452/api/products/'+findId
    console.log(BASE_URL.value)
    fetch(BASE_URL.value)
      .then(res => res.json())
      .then(json => {
      console.log(findId)
      id.value = json.id
      price.value = json.price
      discount_price.value = json.discount_price
      guarantee.value = json.guarantee
      images.value = json.images
      name.value = json.name
      characteristics.value = json.characteristics
      is_available.value = json.is_available
      rating.value = json.rating

      neededProd.value = json
      
      // recentStore.addToRecent(id.value, name.value, price.value, images.value[0], rating.value, discount_price.value, is_available.value)
      
      console.log(neededProd.value.category)
      console.log(characteristics.value)
      console.log(name.value)
      console.log(images.value)
    })
    
  }

  


  return { id, price, discount_price, guarantee, rating, color, count_review, is_available, store_address, brand, country, category, name, images, characteristics, findProd, neededProd }
})
