<script>
import { RouterLink } from 'vue-router'

import iPhoneIcon from '../assets/icons/header/gadgets/iphone.svg'
import iPadIcon from '../assets/icons/header/gadgets/ipad.svg'
import iMacIcon from '../assets/icons/header/gadgets/macbook.svg'
import watchIcon from '../assets/icons/header/gadgets/applewatch.svg'
import gadgetsIcon from '../assets/icons/header/gadgets/airpods.svg'
import toolsIcon from '../assets/icons/header/gadgets/tools.svg'

import iPhoneImg from '../assets/img.png'
import { useCounterStore } from '@/stores/AppleStore'

// ТОВАРЫ НЕ ОТОБРАЖАЕМ. БУДЕТ ПРОСТО НАВИГАЦИЯ!!!

export default {
    props: ['showCatalog'],
    data() {
        return {
            // выбранные категории, в которых хранятся id выбранных нами категории (нужен для стилизации текста и иконки)
            choosenCategory: [],

            // существующие категории для отображения (тк бекенда ещё нет)
            categories: [
                {
                    id: 1, title: 'iPhone', image: iPhoneIcon, products: [
                        { id: 1, title: 'Название продукта', price: 17000, image: iPhoneImg },
                        { id: 2, title: 'Название продукта', price: 17000, image: iPhoneImg },
                        { id: 3, title: 'Название продукта', price: 17000, image: iPhoneImg },
                    ]
                },
                {
                    id: 2, title: 'iPad', image: iPadIcon, products: [
                        { id: 1, title: 'Название продукта', price: 17000, image: iPhoneImg }
                    ]
                },
                {
                    id: 3, title: 'MacBook и iMac', image: iMacIcon, products: [
                        { id: 1, title: 'Название продукта', price: 17000, image: iPhoneImg },
                        { id: 2, title: 'Название продукта', price: 17000, image: iPhoneImg },
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

            // отображение продуктов выбранной нами категории
            showProductsList: {},

            // Все категории, которые есть у товаров
            catalogsList: ['Смартфоны', 'Планшеты', 'Компьютеры', 'Часы', 'Акссесуары', 'Акции'],

            // отфильтрованные товары для их отображения в каталоге товаров
            filteredProducts: []
        }
    },
    setup() {
        const appleStore = useCounterStore()
        return {
            appleStore
        }
    },
    methods: {
        // функция для отображения продуктов выбранной нами категории и для стилизации текста и иконок (правда сами иконки не перекрашиваются :/)
        showProductsFunc(category) {
            // оставить код:
            this.showProductsList[category.id] = !this.showProductsList[category.id];
            if (this.showProductsList[category.id] === true && !this.choosenCategory.includes(category.id)) {
                this.choosenCategory.push(category.id)
            }
            else {
                const filteredNumbers = this.choosenCategory.filter((number) => number !== category.id);
                this.choosenCategory = filteredNumbers
            }

            // новый код:
            // let data = this.appleStore.data;
            // for (let i of data) {
            //     if(i.title.includes(category.title)){
            //         console.log('yes')
            //     }
            // }
        },

        // ф-ия для закрытия данного компонента CatalogTab, чтобы она не отображалась
        showCatalogFunc() {
            this.$emit('toggle-catalog')
            console.log(this.showCatalog)
        }
    }
}
</script>

<template>
    <div v-show="showCatalog" class="catalogTab">

        <div class="catalogMenu">

            <!-- список каталогов -->
            <div class="catalogItem" v-for="elem in categories">

                <!-- сам каталог -->

                <div class="catalogItem-elem">
                    <div class="title">
                        <img :src=elem.image
                            :style="{ filter: choosenCategory.includes(elem.id) ? 'brightness(0) saturate(100%) invert(40%) sepia(58%) saturate(7056%) hue-rotate(198deg) brightness(95%) contrast(101%)' : '' }">
                        <p :style="{ color: choosenCategory.includes(elem.id) ? '#0071E4' : '' }">{{ elem.title }}</p>
                    </div>
                    <button @click="showProductsFunc(elem)">
                        <i v-if="!showProductsList[elem.id]" class="arrow down"></i>
                        <i v-else class="arrow up"></i>
                    </button>
                </div>

                <!-- список продуктов определённого каталога -->
                <ul v-show="showProductsList[elem.id]">
                    <li v-for="item in elem.products">
                        <div class="info">
                            <img :src=item.image>
                            <div class="title">
                                <p>{{ item.title }}</p>
                                <span>от {{ item.price }}₽</span>
                            </div>
                        </div>
                        <RouterLink to="/ban">подробнее</RouterLink>
                    </li>
                </ul>
            </div>


            <RouterLink to="/ban">Весь каталог</RouterLink>
        </div>

        <div class="exit">
            <button @click="showCatalogFunc"><img src="../assets/icons/header/close.svg" alt=""></button>
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

    height: 440px;
    padding-top: 45px;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 48px;

    .catalogMenu {
        width: 95%;
        padding-right: 45px;
        overflow-y: auto;
        overflow-x: hidden;
        display: grid;


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

                    img,
                    object,
                    symbol {
                        width: 35px;

                        svg {
                            fill: red;
                        }
                    }

                    p {
                        font-size: 20px;
                    }
                }

            }

            ul {

                display: grid;
                row-gap: 16px;

                li {

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .info {

                        margin: 0;
                        display: flex;
                        align-items: center;
                        gap: 24px;

                        img {
                            width: 48px;
                        }

                        .title {

                            display: flex;
                            gap: 16px;
                            align-items: center;

                            p,
                            span {
                                font-size: 20px;
                                margin: 0;
                            }

                            span {
                                color: #706E6E;
                            }

                            @media screen and (max-width: 768px) {
                                display: grid;
                                gap: 0;
                            }
                        }

                    }

                    a {
                        font-size: 20px;
                    }

                }
            }

        }


        a {
            font-size: 20px;
            margin: 10px 20px;
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

    // @media screen and (max-width: 768px) {
    //     bottom: 75px;
    // }

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