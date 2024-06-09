import { defineStore } from 'pinia'
import { reactive, ref} from 'vue'

export const useLikeStore = defineStore('like', () => {

    let likedProducts = reactive([])
    const productsFromStorage = localStorage.getItem('likedProducts');
    if (productsFromStorage) {
      likedProducts = JSON.parse(productsFromStorage);
      console.log(likedProducts)
    }
      

//   let buckLength = ref('4')
//   let BuckExist = ref(bucket.value.length); 
//   let totPrice = ref(0);
//    bucket.value.forEach(element => {
//        totPrice.value+=element.lastPrice
//    });
//    function deleteItem(id){
//        bucket.value = bucket.value.filter((item)=> +item.id != id)
//        totPrice.value=0
//        bucket.value.forEach(element => {
//        totPrice.value+=element.lastPrice
//        // BuckExist.value = BuckExist.value - 1
//        });
//        buckLength.value--
//        console.log(id)
//        console.log(buckLength.value)
//        console.log('length ' + BuckExist.value)
       
//    }

    let likedProductsLength = ref(likedProducts.length)
    function addFavourite(id, title, price, image, rating, discount, is_available, count_review){
        let findIndex = likedProducts.findIndex(elem => elem.id === id)
        if (findIndex !== -1){
            
            // localStorage.likedProducts = JSON.stringify(likedProducts)
            likedProducts.splice(findIndex, 1)
            localStorage.setItem('likedProducts', JSON.stringify(likedProducts))
            console.log(likedProducts)
            likedProductsLength.value--
            console.log(likedProductsLength)
            // console.log(localStorage.getItem(JSON.stringify(('likedProducts'))))
            // console.log(likedProducts)
            return(false)
        }else{
            likedProducts.push({id: id, title: title, price: price,
                image: image, rating: rating, discount: discount, is_available: is_available, count_review: count_review})
                localStorage.likedProducts = JSON.stringify(likedProducts)
                console.log(likedProducts)
                likedProductsLength.value++
                console.log(likedProductsLength)
                return(true)
            //    console.log(localStorage.getItem(JSON.stringify('likedProducts')))
        }

        // if (findIndex !== -1){
        //     likedProducts = likedProducts.filter(elem => elem.id !== id)
        // }else{
        //     likedProducts.push({id: id, title: title, price: price,
        //         image: image, rating: rating, discount: discount, is_available: is_available})
        //        console.log(likedProducts)
        // }

        // likedProducts.push({id: id, title: title, price: price,
        //     image: image, rating: rating, discount: discount, is_available: is_available})
        //    console.log(likedProducts)
        
    }
    function baseSort(){
        likedProducts.sort((a, b) => a.id - b.id);
        localStorage.likedProducts = JSON.stringify(likedProducts)
        console.log('Sorted Array')
    }
    function sortPriceUp(){
        likedProducts.sort((a, b) => a.price - b.price);
        localStorage.likedProducts = JSON.stringify(likedProducts)
        console.log('Sorted Array')
        
    }
    function sortPriceDown(){
        likedProducts.sort((a, b) => b.price - a.price );
        localStorage.likedProducts = JSON.stringify(likedProducts)
        console.log('Sorted Array')

    }
    function sortRateUp(){
        likedProducts.sort((a, b) => a.rating - b.rating);
        localStorage.likedProducts = JSON.stringify(likedProducts)
        console.log('Sorted Array')

    }
    function sortRateDown(){
        likedProducts.sort((a, b) => b.rating - a.rating );
        localStorage.likedProducts = JSON.stringify(likedProducts)
        console.log('Sorted Array')

    }

  return { likedProducts, likedProductsLength,  addFavourite, sortPriceUp, sortPriceDown, sortRateUp, sortRateDown, baseSort }
})