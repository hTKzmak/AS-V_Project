import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBucketStore = defineStore('bucket', () => {

  let bucket = ref([
    {
        id:0,
        title: 'Apple iPhone 8 256 ГБ Серебристый',
        lastPrice: 16500,
        oldPrice: 42500,
        image: 'src/assets/icons/modals/buckphone.png',
        count: 1
    },
    {
        id:1,
        title: 'Apple iPhone 8 256 ГБ Серебристый',
        lastPrice: 16500,
        oldPrice: 42500,
        image: 'src/assets/icons/modals/buckphone.png',
        count: 1
    },
    {
        id:2,
        title: 'Apple iPhone 8 256 ГБ Серебристый',
        lastPrice: 16500,
        oldPrice: 42500,
        image: 'src/assets/icons/modals/buckphone.png',
        count: 1
    },
    {
        id:3,
        title: 'Apple iPhone 8 256 ГБ Серебристый',
        lastPrice: 16500,
        oldPrice: 42500,
        image: 'src/assets/icons/modals/buckphone.png',
        count: 1
    },
   ])
  let buckLength = ref('4')
  let BuckExist = ref(bucket.value.length); 
  let totPrice = ref(0);
   bucket.value.forEach(element => {
       totPrice.value+=element.lastPrice
   });
   function deleteItem(id){
       bucket.value = bucket.value.filter((item)=> +item.id != id)
       totPrice.value=0
       bucket.value.forEach(element => {
       totPrice.value+=element.lastPrice
       // BuckExist.value = BuckExist.value - 1
       });
       buckLength.value--
       console.log(id)
       console.log(buckLength.value)
       console.log('length ' + BuckExist.value)
       
   }


  return { bucket, buckLength, BuckExist, totPrice, deleteItem }
})
