<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { useCounterStore } from '@/stores/AppleStore';
import { useBucketStore } from '@/stores/BucketStore';
import ButtonElem from '../UI/ButtonElem.vue';

export default {
    name: 'App',
    props: {
        data: Array,
        changeSlider: Function
    },
    components: {
        Carousel,
        Slide,
        Navigation,
        ButtonElem
    },
    setup() {
        const appleStore = useCounterStore();
        const bucketStore = useBucketStore();
        return {
            appleStore,
            bucketStore
        }
    },
    data() {
        return {
            data: this.appleStore.data.sort((elem) => elem.rating >= 4.5 && elem.count_review >= 100),
            BASE_URL: this.appleStore.BASE_URL
        }
    },
    methods: {
        addToBucket() {
            this.bucketStore.addToBucket(props.id, props.title, props.price, props.discount === null ? props.price : props.discount, BASE_URL + props.image, 1)
        }
    }
}
</script>

<template>
    <Carousel :items-to-show="1" :wrap-around="true">
        <Slide v-for="item in data.slice(0, 3)" :key="item.slide" :id="item.slide" @click="changeSlider">
            <div class="item">

                <div class="review">
                    <span>Типа звёздочки</span>
                    <RouterLink>{{ item.count_review }} отзывов</RouterLink>
                </div>

                <span id="name">{{ item.title }}</span>
                <div class="img" :style="{ backgroundImage: `url('${BASE_URL + item.image}')` }">></div>
                <span id="price">{{ item.price }} ₽</span>
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
.item {
    padding: 24px;
    width: 70%;
    height: 446px;

    background-color: #FFFFFF;
    border-radius: 16px;

    display: grid;
    justify-content: center;
    text-align: center;

    .review{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
    }

    #name{
        font-size: 20px;
        font-weight: 400;
    }

    #price{
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

    @media screen and (max-width: 1440px) {
        width: 266px;
    }
}

.recomendationWindow {

    .carousel__viewport{
        overflow-x: auto;
        padding-bottom: 24px;
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
