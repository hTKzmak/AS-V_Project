<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import SliderContent from './SliderContent.vue'

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
        SliderContent
    }
}
</script>

<template>
    <div class="slider-container">
        <Carousel :items-to-show="1" :wrap-around="true" :transition="500">
            <Slide v-for="slide in data" :key="slide.slide" :id="slide.slide" @click="changeSlider" @touchend="changeSlider">
                <SliderContent :title="slide.title" :img="slide.img" :price="slide.price" :link="slide.link" />
            </Slide>

            <template #addons>
                <div @click="changeSlider">
                    <Navigation />
                </div>
            </template>
        </Carousel>
    </div>
</template>

<style lang="scss">
.slider-container {
    max-width: 1440px;
    margin: 0 auto;
    padding-left: 120px;
    padding-right: 120px;

    @media screen and (max-width: 1440px) {
        max-width: 1440px;
        padding: 0 25px;
    }

    @media screen and (max-width: 768px) {
        max-width: 768px;
    }

}

.carousel__prev,
.carousel__next {
    width: auto;
    height: auto;
    font-size: 35px;
    margin: 0;
    top: 40%;

    @media screen and (max-width: 768px) {
        margin: 0 -15px;
    }
}

.carousel__icon {
    fill: #1A161685;
}
</style>