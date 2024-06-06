<script>
import ProductsList from '../components/ProductsList.vue'
import { useCounterStore } from '@/stores/AppleStore';
import { useLikeStore } from '@/stores/LikeStore';
import { ref, watch } from 'vue';



export default {
    components: {
        ProductsList
    },
    setup() {
        const appleStore = useCounterStore()
        const likeStore = useLikeStore()
        const likeSort = ref('none')
        function checkLiked() {
            console.log(likeStore.likedProducts)
        }
        watch(likeSort, (newSort) => {
            console.log(newSort)
            if (newSort === 'none') {
                likeStore.baseSort()
                console.log(likeStore.likedProducts)
            }
            else if (newSort === 'price_up') {
                likeStore.sortPriceUp()
                likeStore.likedProductsLength++
                console.log(likeStore.likedProducts)
            } else if (newSort === 'price_down') {
                likeStore.sortPriceDown()
                likeStore.likedProductsLength++
                console.log(likeStore.likedProducts)
            } else if (newSort === 'rate_up') {
                likeStore.sortRateUp()
                likeStore.likedProductsLength++
                console.log(likeStore.likedProducts)
            } else if (newSort === 'rate_down') {
                likeStore.sortRateDown()
                likeStore.likedProductsLength++
                console.log(likeStore.likedProducts)
            }
        }, { deep: true });
        return {
            appleStore, likeStore, likeSort, checkLiked
        }
    }
}
</script>

<template>
    <div v-if="likeStore.likedProductsLength === 0" class="container empty-like-container">
        <h1 class="like-title">В избранном пока ничего нет</h1>
        <div class="like-text-field">
            <p>Нажмите</p>
            <img src="../assets/icons/header/heart.svg">
            <p>на понравившемся товаре, чтобы вернуться к нему позже</p>
        </div>
        <RouterLink to="/">
            <div class="button-link-like">пойти выбирать</div>
        </RouterLink>
    </div>

    <div v-if="likeStore.likedProductsLength != 0" class="container full-like-container">
        <h1 class="like-title">Избранное</h1>
        <div class="likeSort-container">
            <!-- <button @click="checkLiked()">Check massive</button> -->
            <p>Сортировать</p>
            <select class="like-select" v-model="likeSort">
                <RouterLink to="/"></RouterLink>
                <option class="like-option" value="none">по умолчанию</option>
                <option class="like-option" value="price_up">цена вверх</option>
                <option class="like-option" value="price_down">цена вниз</option>
                <option class="like-option" value="rate_up">оценка вверх</option>
                <option class="like-option" value="rate_down">оценка вниз</option>
            </select>
        </div>
        <div class="container">
            <ProductsList :data="likeStore.likedProducts" :count="likeStore.likedProductsLength" />
        </div>
    </div>
</template>

<style lang="scss">
.empty-like-container {
    min-height: 50vh;
}

.full-like-container {
    min-height: 50vh;
}

.button-link-like {
    display: flex;
    text-align: center;
    width: 256px;
    height: 56px;
    background-color: #0071E4;
    color: white;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    @media screen and (max-width: 769px) {
        display: none;
    }
}

.like-text-field {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    margin: 24px 0;

    p {
        font-size: 16px;
    }

    img {
        width: 24px;
        height: 24px;
    }

    @media screen and (max-width: 1440px) {
        margin: 19px 0 31px;
    }

    @media screen and (max-width: 769px) {
        flex-wrap: wrap;
        
        p{
            margin: 0;
        }
    }
}

.like-title {
    align-self: self-start;
    text-align: left;
    font-size: 40px;
    margin-bottom: 0;

    @media screen and (min-width: 769px) and (max-width: 1440px) {
        margin-top: 100px;
        margin-bottom: 0;
        font-size: 32px;
    }

    @media screen and (max-width: 769px) {
        padding-top: 100px;
        margin-bottom: 0;
        font-size: 20px;
    }
}

.like-select {
    width: 146px;
    height: 40px;
    font-size: 16px;
    font-weight: 400;
    background-color: #F9F9F9;
    border-radius: 8px;
    border: transparent;
}

.likeSort-container {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 20px;
    // @media screen and (min-width: 769px) and (max-width: 1440px){
    //     padding-top: 100px;
    // }

}
</style>