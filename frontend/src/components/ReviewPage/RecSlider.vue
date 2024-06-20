<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { useCounterStore } from '@/stores/AppleStore';
import { useBucketStore } from '@/stores/BucketStore';
import ButtonElem from '../UI/ButtonElem.vue';
import Rating from '../UI/Rating.vue';
import { ref, watchEffect } from 'vue';

export default {
    name: 'App',
    props: {
        data: Array,
        changeSlider: Function,
        sortedData: Array,
    },
    components: {
        // компоненты для слайдера
        Carousel,
        Slide,
        Navigation,

        // компоненты с проекта
        ButtonElem,
        Rating,
    },
    setup() {
        const appleStore = useCounterStore();
        const bucketStore = useBucketStore();
        const sortedData = ref([]);

        watchEffect(() => {
            sortedData.value = appleStore.data.filter((elem) => elem.rating > 4.3 && elem.count_review > 80)
        })

        return {
            appleStore,
            bucketStore,
            sortedData
        }
    },
    data() {
        return {
            BASE_URL: this.appleStore.BASE_URL
        }
    },
    methods: {
        addToBucket(id, title, lastPrice, oldPrice, image, count) {
            this.bucketStore.addToBucket(id, title, lastPrice, oldPrice, image, count)
        }
    }
}
</script>

<template>
    <Carousel :items-to-show="1" :wrap-around="true">
        <Slide v-for="item of sortedData.slice(0, 3)" :key="item.slide" :id="item.slide" @click="changeSlider">
            <div class="item">

                <div class="review">
                    <Rating :count_review="item.count_review" :rating="item.rating" :inSlider="true" />
                </div>

                <span id="name">{{ item.title }}</span>
                <div class="img" :style="{ backgroundImage: `url('${BASE_URL + item.image}')` }">></div>
                <span id="price">{{ item.discount === null ? item.price : item.discount }} ₽</span>

                <ButtonElem v-if="this.bucketStore.bucket.find((e) => e.id === item.id) == undefined" title="в корзину"
                    img='/cart.svg' addedItemStyle='false'
                    :action="() => addToBucket(item.id, item.title, item.discount === null ? item.price : item.discount, item.discount === null ? null : item.price, BASE_URL + item.image, 1)" />
                <ButtonElem v-if="this.bucketStore.bucket.find((e) => e.id === item.id) != undefined" title="в корзине"
                    img='/inCart.svg' addedItemStyle='true' />

                <RouterLink id="productLink" :to="{ path: '/product/' + item.id }">подробнее</RouterLink>
            </div>
        </Slide>

        <template #addons>
            <div>
                <Navigation />
            </div>
        </template>
    </Carousel>
</template>

<style lang="scss">
@mixin btnAndLink {
    padding: 18px;
    font-size: 16px;
    color: #FFF;
    border-radius: 8px;

    height: 56px;
}

.item {
    padding: 24px;
    width: 70%;
    height: 446px;

    background-color: #FFFFFF;
    border-radius: 16px;

    display: grid;
    justify-content: center;
    text-align: center;

    .review {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
    }

    #name {
        font-size: 20px;
        font-weight: 400;
    }

    #price {
        font-size: 32px;
        font-weight: 500;
    }

    .img {
        width: 160px;
        height: 160px;

        margin: 16px auto;

        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
    }

    button {
        @include btnAndLink;
        width: auto;

        @media screen and (max-width: 1440px) {
            display: none;
        }
    }

    #productLink {
        @include btnAndLink;
        display: none;

        @media screen and (max-width: 1440px) {
            display: flex;
            justify-content: center;
            background-color: #0071E4;
        }
    }

    @media screen and (max-width: 1440px) {
        width: 266px;
        padding: 24px 0;
    }
}

.recomendationWindow {

    .carousel__viewport {
        overflow-x: auto;
        padding-bottom: 24px;

        &::-webkit-scrollbar {
            height: 8px;
            background-color: #FFFFFF;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #CDDDF5;
            border-radius: 10px;

            &:hover {
                background-color: #b4cef5;
            }
        }
    }

    .carousel__prev,
    .carousel__next {
        width: auto;
        height: auto;
        font-size: 35px;
        margin: 0;
        top: 40%;

        background-color: #FFFFFF;
        box-shadow: 0px 4px 8px 0px #0000001A;
        border-radius: 100px;

        @media screen and (max-width: 768px) {
            margin: 0 -15px;
        }
    }

    .carousel__icon {
        fill: #1A161685;
    }
}
</style>