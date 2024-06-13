<script>
import SliderCustom from './SliderCustom.vue'
import iPhoneImg from '@/assets/images/slider/iphone_14.png'
import iPadImg from '@/assets/images/slider/ipad.png'
import mbpImg from '@/assets/images/slider/mbp.png'

export default {
    name: 'App',
    components: {
        SliderCustom
    },
    data() {
        return {
            sliderData: [
                { slide: 1, img: iPhoneImg, title: 'iphone 14', price: '137 900', link: '/product/61', color: '#D0EAFC' },
                { slide: 2, img: iPadImg, title: 'iPad Pro 11', price: '137 900', link: '/product/105', color: '#FFA682' },
                { slide: 3, img: mbpImg, title: 'MacBook Pro', price: '137 900', link: '/product/95', color: '#FCD0F0' },
            ],

            choosenSlide: 1,

            color: '#D0EAFC',
        }
    },
    methods: {
        changeSlider() {
            let id = document.querySelector('.carousel__slide--visible').id

            this.choosenSlide = id

            this.sliderData.find(elem => {
                if (elem.slide == id) {
                    this.color = elem.color
                }
            })
        }
    },
}
</script>

<template>
    <div class="slider" :style="{ backgroundColor: color }">
        <SliderCustom :data="sliderData" :changeSlider="changeSlider" />
    </div>
</template>

<style lang="scss">
.slider {
    padding-top: 70px;
    overflow: hidden;
    transition: 0.3s;

    @media screen and (max-width: 1440px) {
        padding-top: 40px;
        padding-bottom: 0;
        margin-top: 55px;
    }

    @media screen and (max-width: 768px) {
        padding-top: 16px;
    }
}
</style>