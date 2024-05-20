<script>
import { RouterLink } from 'vue-router'

import iPhoneIcon from '../assets/icons/header/gadgets/iphone.svg'
import iPadIcon from '../assets/icons/header/gadgets/ipad.svg'
import iMacIcon from '../assets/icons/header/gadgets/macbook.svg'
import watchIcon from '../assets/icons/header/gadgets/applewatch.svg'
import gadgetsIcon from '../assets/icons/header/gadgets/airpods.svg'
import toolsIcon from '../assets/icons/header/gadgets/tools.svg'

import iPhoneImg from '../assets/img.png'


export default {
    data() {
        return {
            showCategories: false,
            showProducts: false,
            categories: [
                {
                    id: 1, title: 'iPhone', image: iPhoneIcon, products: [
                        { id: 1, title: 'Название продукта', price: 17000, image: iPhoneImg }
                    ]
                },
                {
                    id: 2, title: 'iPad', image: iPadIcon, products: [
                        { id: 1, title: 'Название продукта', price: 17000, image: iPhoneImg }
                    ]
                },
                {
                    id: 3, title: 'MacBook и iMac', image: iMacIcon, products: [
                        { id: 1, title: 'Название продукта', price: 17000, image: iPhoneImg }
                    ]
                },
                {
                    id: 4, title: 'Watch', image: watchIcon, products: [
                        { id: 1, title: 'Название продукта', price: 17000, image: iPhoneImg }
                    ]
                },
                {
                    id: 5, title: 'Гаджеты', image: gadgetsIcon, products: [
                        { id: 1, title: 'Название продукта', price: 17000, image: iPhoneImg }
                    ]
                },
                {
                    id: 6, title: 'Аксессуары', image: toolsIcon, products: [
                        { id: 1, title: 'Название продукта', price: 17000, image: iPhoneImg }
                    ]
                },
            ],
            showProductsList: {},
        }
    },
    methods: {
        showProductsFunc(category) {
            this.showProductsList[category.id] = !this.showProductsList[category.id];
        }
    }
}
</script>

<template>
    <div class="catalogTab">

        <div class="catalogMenu">

            <!-- список каталогов -->
            <div class="catalogItem" v-for="elem in categories">

                <!-- сам каталог -->

                <div class="catalogItem-elem">
                    <div class="title">
                        <img :src=elem.image>
                        <p>{{ elem.title }}</p>
                    </div>
                    <button @click="showProductsFunc(elem)">
                        <i v-if="showProducts === false" class="arrow down"></i>
                        <i v-else class="arrow up"></i>
                    </button>
                </div>

                <!-- список продуктов определённого каталога -->
                <ul v-show="showProductsList[elem.id]">
                    <li v-for="item in elem.products">
                        <div class="info">
                            <img :src=item.image>
                            <p>{{ item.title }}</p>
                            <span>от {{ item.price }}₽</span>
                        </div>
                        <RouterLink to="/ban">подробнее</RouterLink>
                    </li>
                </ul>
            </div>

        </div>

        <div class="exit">
            <button><img src="../assets/icons/header/close.svg" alt=""></button>
        </div>

    </div>
</template>

<style lang="scss">
.catalogTab {

    display: none;

    justify-content: space-between;

    background-color: #FFFFFF;
    box-shadow: 0px -4px 4px 0px #0000000D;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;

    height: 300px;
    padding-top: 45px;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 48px;

    .catalogMenu {
        width: 90%;
        padding-right: 63px;
        overflow-y: auto;

        .catalogItem {
            padding-left: 20px;
            padding-right: 20px;
            border-bottom: 1px solid #E7E7E7;

            .catalogItem-elem {

                display: flex;
                justify-content: space-between;
                align-items: center;

                .title {
                    display: flex;
                    gap: 8px;

                    img {
                        width: 35px;
                    }

                    p {
                        font-size: 20px;
                    }
                }
            }

            ul {
                li {

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .info {

                        margin: 0;
                        display: flex;
                        align-items: center;
                        gap: 16px;

                        img {
                            width: 48px;
                        }

                        p, span{
                            font-size: 20px;
                        }
                        
                        span{
                            color: #706E6E;
                        }

                    }

                    a{
                        font-size: 20px;
                    }

                }
            }

        }

    }

    .exit {
        position: absolute;
        top: 15px;
        right: 15px;
    }

    @media screen and (max-width: 1440px) {
        display: flex;
    }

    @media screen and (max-width: 768px) {
        bottom: 75px;
    }

}

.arrow {
    border: solid #706E6E;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;

}

.up {
    border-color: #0071E4;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
}

.down {
    border-color: #706E6E;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}

button {
    background: transparent;
    border: none;
    cursor: pointer;
}
</style>