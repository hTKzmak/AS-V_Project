<script setup>
import { useModalStore } from '@/stores/ModalStore';

// Добавил AppleStore
import { useCounterStore } from '@/stores/AppleStore';
import { useCurrentProductStore } from '@/stores/CurrentProductStore';
import { useLikeStore } from '@/stores/LikeStore';
import { useBucketStore } from '@/stores/BucketStore';
import { useSingleProductStore } from '@/stores/SingleProductStore';
import ButtonElem from './UI/ButtonElem.vue';
import Rating from './UI/Rating.vue';
import { computed, onMounted } from 'vue';
import { ref } from 'vue';

// икноки корзин
import cart from '../assets/icons/cart.svg';
import cartAdded from '../assets/icons/cartAdded.svg';

const modalStore = useModalStore()

// Добавил appleStore
const appleStore = useCounterStore()

const currentProductStore = useCurrentProductStore()

const likeStore = useLikeStore()

const bucketStore = useBucketStore()

const singleProductStore = useSingleProductStore()


// Используется базовый url с бекенда
let BASE_URL = appleStore.BASE_URL

const changeHandle = () => {
    // modalStore.isShown = true
    // modalStore.typeModal = 'Better'
    // console.log(modalStore.typeModal + ' ' + modalStore.isShown)
    modalStore.changeModal('Better')
}
const oneClickHandle = () => {
    // modalStore.isShown = true
    // modalStore.typeModal = 'Better'
    // console.log(modalStore.typeModal + ' ' + modalStore.isShown)
    currentProductStore.image = BASE_URL + props.image
    currentProductStore.price = props.discount ? props.discount : props.price
    currentProductStore.oldPrice = props.discount ? props.price : null
    currentProductStore.name = props.title
    modalStore.changeModal('oneClick')

}
const tradeInHandle = () => {
    // modalStore.isShown = true
    // modalStore.typeModal = 'Better'
    // console.log(modalStore.typeModal + ' ' + modalStore.isShown)
    currentProductStore.image = props.image
    currentProductStore.price = props.discount ? props.discount : props.price
    currentProductStore.oldPrice = props.discount ? props.price : null
    currentProductStore.name = props.title
    modalStore.changeModal('tradeIn')
}

function addToBucket() {
    bucketStore.addToBucket(props.id, props.title, props.discount === null ? props.price : props.discount,
        props.discount === null ? null : props.price, BASE_URL + props.image, 1, props.color, props.memo === undefined ? undefined : props.memo.value + ' ' + props.memo.unit_type)
}

function addToFav() {
    likeStore.addFavourite(props.id, props.title,
        props.price, props.image, props.rating, props.discount, props.is_available, props.count_review, props.color, props.memo)
    isInFav.value = !isInFav.value
    if (isInFav.value == true) {
        console.log(props.id + ' added to fav')
    } else {
        console.log(props.id + ' removed from fav')
    }
    console.log(isInFav.value + ' - isInFav.value for prod with id ' + props.id)
}

// function showAllProducts(id) {
//     singleProductStore.findProd(id)
// }

// ФУНКЦИОНАЛ ОТОБРАЖЕНИЯ ДОБАВЛЕННОСТИ В ИЗБРАННОЕ/КОРЗИНУ

const isInFav = ref(false)



onMounted(() => {
    if (likeStore.likedProducts.find((e) => e.id === props.id) != undefined) {
        console.log(likeStore.likedProducts.find((e) => e.id === props.id) != undefined)
        isInFav.value = true
        console.log(isInFav.value + ' - isInFav.value for prod with id ' + props.id)
    }

})

const productLink = computed(() => ({
    name: 'product',
    params: { id: props.id }
}));


// получаемые пропы для товара
const props = defineProps({
    id: Number,
    title: String,
    price: Number,
    image: String,
    rating: Number,
    discount: Number,
    is_available: Boolean,
    category: String,
    guarantee: Number,
    count_review: Number,
    color: String,
    memo: Object || undefined
});

</script>

<template>
    <div class="product-item" :id='props.id'>
        <div class="rating-and-settings">

            <!-- надо будет переделать систему отображения звёздочек (в зависимости от рейтинга) -->

            <Rating :count_review="count_review" :rating="rating" />

            <div class="settings">
                <button @click="addToFav">
                    <img :class="isInFav == true ? 'blue-heart' : 'standart'" src="../assets/icons/header/heart.svg">
                </button>
            </div>
        </div>


        <RouterLink class="main-product-info" :to="is_available ? productLink : ''">
            <h3 v-if="memo !== undefined">{{ title }} {{ color }} {{ memo.value }} {{ memo.unit_type }}</h3>
            <h3 v-if="memo == undefined">{{ title }} {{ color }}</h3>
            <div class="product-image" :style="{ backgroundImage: `url('${BASE_URL + image}')` }"></div>
        </RouterLink>


        <!-- если товар есть в наличии -->

        <div v-if="is_available" class="other-product-info">
            <div class="product-info">
                <div class="existence">
                    <div class="existence-sign"></div>
                    <p>Есть в наличии</p>
                </div>

                <p v-if="guarantee > 5" @click="tradeInHandle">Гарантия {{ guarantee }} лет</p>
                <p v-else-if="guarantee < 4" @click="tradeInHandle">Гарантия {{ guarantee }} года</p>
                <p v-else @click="tradeInHandle">Гарантия {{ guarantee }} год</p>

            </div>

            <div class="price-info">
                <!-- для отображения и скрытия скидки для пк версии -->
                <h4 id="discount-desktop">{{ discount === null ? null : price + ' ' + '₽' }}</h4>
                <!-- для отображения и скрытия скидки для мобильной и планшетной версии -->
                <h4 id="discount-adaptive" v-show="discount !== null">{{ price + ' ' + '₽' }}</h4>


                <!-- мобильная версия кнопки для покупки  -->

                <ButtonElem v-if="bucketStore.bucket.find((e) => e.id === props.id) == undefined"
                    :title="discount === null ? price + ' ' + '₽' : discount + ' ' + '₽'" :img='cart'
                    addedItemStyle='false' :action="addToBucket" />
                <ButtonElem v-if="bucketStore.bucket.find((e) => e.id === props.id) != undefined"
                    :title="discount === null ? price + ' ' + '₽' : discount + ' ' + '₽'" :img='cartAdded'
                    addedItemStyle='true' />

                <h3>{{ discount === null ? price : discount }} ₽</h3>
            </div>

            <!-- ПК версия кнопки для покупки  -->

            <ButtonElem v-if="bucketStore.bucket.find((e) => e.id === props.id) == undefined" title="в корзину"
                :img='cart' addedItemStyle='false' :action="addToBucket" />
            <ButtonElem v-if="bucketStore.bucket.find((e) => e.id === props.id) != undefined" title="в корзине"
                :img='cartAdded' addedItemStyle='true' />


            <div class="other">
                <a href="#!" @click="changeHandle">Хочу дешевле</a>
                <a class="oneCLick" @click="oneClickHandle" href="#!">Купить в 1 клик</a>
            </div>
        </div>

        <!-- если товара нет в наличии -->

        <div v-else class="absent">
            <div class="product-info">
                <div class="existence">
                    <div class="absent-sign"></div>
                    <p>Ожидается поступление</p>
                </div>
            </div>
            <p class="text-info">Мы можем сообщить вам, когда товар появится в наличии</p>
            <button class="buttonElem">сообщить о поступлении</button>
        </div>

    </div>
</template>

<style lang="scss">
.blue-heart {
    filter: brightness(0) saturate(100%) invert(40%) sepia(58%) saturate(7056%) hue-rotate(198deg) brightness(95%) contrast(101%);
}

.product-item {

    // width: 282px;
    // width: 260px;
    width: 280px;
    box-shadow: 0px 4px 8px 0px #0000000D;
    padding: 20px 10px;
    border-radius: 16px;
    display: grid;
    justify-content: center;

    .rating-and-settings {

        display: flex;
        justify-content: space-between;
        align-items: center;

        .star-rating {
            display: flex;
            align-items: center;
            gap: 2px;

            .fa {
                font-size: 20px;
            }

            .checked {
                color: #FFAD31;
            }

            .missed {
                color: #DBDBDB;
            }

            a {
                margin-left: 8px;
            }
        }

        .settings {
            button {
                border: none;
                background: transparent;

                img {
                    width: 25px;
                }
            }
        }
    }

    .main-product-info{

        display: flex;
        flex-direction: column;

        h3 {
            font-size: 24px;
            text-align: center;
            margin-top: 9px;
            margin-bottom: 9px;
            color: #100E0E;
    
            text-overflow: clip;
            -webkit-line-clamp: 2;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
    
            @media screen and (max-width: 1440px) {
                font-weight: 700;
                font-size: 18px;
            }
        }
    
        .product-image {
            width: inherit;
            height: 300px;
    
            background-repeat: no-repeat;
            background-position: center center;
            background-size: contain;
        }

        @media screen and (max-width: 1440px) {
            flex-direction: column-reverse;
        }
    }

    .other-product-info {

        // display: none;

        width: inherit;

        .product-info,
        .existence {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            color: #706E6E;

            .existence-sign {
                width: 16px;
                height: 16px;
                background-color: #52D116;
                border-radius: 100px;
                margin-right: 2px;
            }
        }

        .price-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;

            #discount-desktop,
            #discount-adaptive {
                text-decoration: line-through;
                font-size: 20px;
                color: #878787;
                margin: 0;
            }

            #discount-desktop {
                display: flex;

                @media screen and (max-width: 1440px) {
                    display: none;
                }
            }

            #discount-adaptive {
                display: none;

                @media screen and (max-width: 1440px) {
                    display: flex;
                    width: 80%;
                }
            }

            h3 {
                font-size: 32px;
                margin: 0;

                @media screen and (max-width: 1440px) {
                    display: none;
                }
            }

            button {
                display: none;

                @media screen and (max-width: 1440px) {
                    display: flex;
                    flex-direction: row-reverse;
                    width: 100%;
                }
            }
        }

        .other {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;

            .oneCLick {
                font-size: 16px;
                color: #706E6E;
            }

        }

        button {
            padding: 16px;
            border-radius: 8px;

            @media screen and (max-width: 1440px) {
                display: none;
            }
        }

        .buttonCartAdded {
            background-color: #6FD91C;
        }

        @media screen and (max-width: 1440px) {
            width: 259px;
        }
    }


    .absent {
        width: inherit;
        // display: none;

        .product-info,
        .existence {
            display: flex;
            justify-content: left;
            gap: 2px;
            align-items: center;
            font-size: 16px;
            color: #706E6E;

            .absent-sign {
                width: 16px;
                height: 16px;
                background-color: #0071E4;
                border-radius: 100px;
                margin-right: 2px;
            }

            @media screen and (max-width: 1440px) {
                justify-content: center;
            }

        }

        .text-info {
            margin: 0;
            color: #878787;
            margin-left: 18px;
        }

        button {
            border: 1px solid #0071E4;
            color: #0071E4;
            background: transparent;

            margin-top: 16px;

            padding: 17px 10px;

            font-size: 18px;

            border-radius: 8px;

            @media screen and (max-width: 1440px) {
                border: none;
                padding: 0;
            }
        }

    }

    @media screen and (max-width: 1440px) {
        text-align: center;
    }

}
</style>