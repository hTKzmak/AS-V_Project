import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBucketStore = defineStore('bucket', () => {

    let bucket = ref([
        {
            id: 0,
            title: 'Apple iPhone 8 256 ГБ Серебристый',
            lastPrice: 16500,
            oldPrice: 42500,
            image: 'src/assets/icons/modals/buckphone.png',
            count: 1
        },
        {
            id: 1,
            title: 'Apple iPhone 8 256 ГБ Серебристый',
            lastPrice: 16500,
            oldPrice: 42500,
            image: 'src/assets/icons/modals/buckphone.png',
            count: 1
        },
        {
            id: 2,
            title: 'Apple iPhone 8 256 ГБ Серебристый',
            lastPrice: 16500,
            oldPrice: 42500,
            image: 'src/assets/icons/modals/buckphone.png',
            count: 1
        },
        {
            id: 3,
            title: 'Apple iPhone 8 256 ГБ Серебристый',
            lastPrice: 16500,
            oldPrice: 42500,
            image: 'src/assets/icons/modals/buckphone.png',
            count: 1
        },
    ])
    const productsFromStorage = localStorage.getItem('bucket');
    if (productsFromStorage) {
        bucket.value = JSON.parse(productsFromStorage);
        console.log(bucket.value)
    }
    let buckLength = ref(bucket.value.length)
    let BuckExist = ref(bucket.value.length);
    let totPrice = ref(0);
    bucket.value.forEach(element => {
        totPrice.value += element.lastPrice * element.count
    });


    function addToBucket(id, title, lastPrice, oldPrice, image, count, color, memo) {
        let findIndex = bucket.value.findIndex(elem => elem.id === id)
        if (findIndex !== -1) {

            // localStorage.bucket.value = JSON.stringify(bucket.value)
            bucket.value.splice(findIndex, 1)
            buckLength.value--
            localStorage.setItem('bucket', JSON.stringify(bucket.value))
            console.log(bucket.value)
            // console.log(localStorage.getItem(JSON.stringify(('bucket.value'))))
            // console.log(bucket.value)
        } else {
            bucket.value.push({
                id: id, title: title, lastPrice: lastPrice, oldPrice: oldPrice, count: count,
                image: image, color: color, memo: memo
            })
            buckLength.value++
            localStorage.bucket = JSON.stringify(bucket.value)
            console.log(bucket.value)
            //    console.log(localStorage.getItem(JSON.stringify('bucket.value')))
        }
        totPrice.value = 0
        bucket.value.forEach(element => {
            totPrice.value += element.lastPrice
            // BuckExist.value = BuckExist.value - 1
        });
        // if (findIndex !== -1){
        //     bucket.value = bucket.value.filter(elem => elem.id !== id)
        // }else{
        //     bucket.value.push({id: id, title: title, price: price,
        //         image: image, rating: rating, discount: discount, is_available: is_available})
        //        console.log(bucket.value)
        // }

        // bucket.value.push({id: id, title: title, price: price,
        //     image: image, rating: rating, discount: discount, is_available: is_available})
        //    console.log(bucket.value)
    }


    function deleteItem(id) {
        bucket.value = bucket.value.filter((item) => +item.id != id)
        totPrice.value = 0
        bucket.value.forEach(element => {
            totPrice.value += element.lastPrice
            // BuckExist.value = BuckExist.value - 1
        });
        buckLength.value--
        localStorage.bucket = JSON.stringify(bucket.value)
        console.log('Deleeted itemm with ID ' + id + ', now Bucket lenght is ' + buckLength.value)
    }

    function countUp(id) {
        // bucket.value[id].count++
        bucket.value.forEach(element => {
            if (element.id == id) {
                element.count++
                console.log('count of prod with id ' + id + ' updated to ' + element.count)
                localStorage.bucket = JSON.stringify(bucket.value)
                totPrice.value = 0
                bucket.value.forEach(element => {
                    totPrice.value += element.lastPrice * element.count
                });
            }
        });
    }

    function countDown(id) {
        // bucket.value[id].count++
        bucket.value.forEach(element => {
            if (element.id == id) {
                if (element.count === 1) {
                    bucket.value = bucket.value.filter((item) => +item.id != id)
                    totPrice.value = 0
                    bucket.value.forEach(element => {
                        totPrice.value += element.lastPrice
                        // BuckExist.value = BuckExist.value - 1
                    });
                    buckLength.value--
                    localStorage.bucket = JSON.stringify(bucket.value)
                    console.log('Deleeted itemm with ID ' + id + ', now Bucket lenght is ' + buckLength.value)
                } else {
                    element.count--
                    console.log('count of prod with id ' + id + ' updated to ' + element.count)
                    localStorage.bucket = JSON.stringify(bucket.value)
                    totPrice.value = 0
                    bucket.value.forEach(element => {
                        totPrice.value += element.lastPrice * element.count
                    });
                }

            }
        });

    }


    return { bucket, buckLength, BuckExist, totPrice, deleteItem, addToBucket, countUp, countDown }
})
