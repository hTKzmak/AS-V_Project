<script>
import Search from '../components/HomePage/Search.vue'
import { useCounterStore } from '@/stores/AppleStore';
import { useModalStore } from '@/stores/ModalStore';
import { useBucketStore } from '@/stores/BucketStore';

import iPhoneIcon from '../assets/icons/header/gadgets/iphone.svg'
import iPadIcon from '../assets/icons/header/gadgets/ipad.svg'
import iMacIcon from '../assets/icons/header/gadgets/macbook.svg'
import watchIcon from '../assets/icons/header/gadgets/applewatch.svg'
import gadgetsIcon from '../assets/icons/header/gadgets/airpods.svg'
import toolsIcon from '../assets/icons/header/gadgets/tools.svg'
import { computed } from 'vue';

export default {
    components: {
        // компонент для отображения результов поиска
        Search
    },
    data() {
        return {
            // для отображения/изменения иконки поиска
            showSearch: false,
            // для скрытия кнопок (телефон, меню), если поиск активирован (относится к mobile и tablet)
            showButtons: true,
            // для отображения меню (контакты, соц. сети, и т.д.) (относится к mobile и tablet)
            showMenu: false,
            // для отображения окна с каталогами (пока для ПК)
            activateCatalog: false,
            // для отображения другого окна с товарами, которые связанны с определённым каталогом (пока для ПК)
            showProducts: false,

            // Все категории, которые есть у товаров
            catalogsList: ['Смартфоны', 'Планшеты', 'Компьютеры', 'Часы', 'Аксессуары', 'Акции'],

            // отфильтрованные товары для их отображения в каталоге товаров
            filteredProducts: []
        }
    },
    setup() {
        const appleStore = useCounterStore()
        const modalStore = useModalStore()
        const bucketStore = useBucketStore()
        const productLink = computed(() => ({
            name: '/product'
        }));
        return {

            appleStore, modalStore, bucketStore, productLink,
            // categories нужны были для модалки, чтобы при наведении на них появлялсись списки товаров (на всякий оставлю, тем более, они нужны для показа категорий товаров)
            categories: [
                { id: 1, title: 'iPhone', image: iPhoneIcon, link: '/list_of_products/smartphones' },
                { id: 2, title: 'iPad', image: iPadIcon, link: '/list_of_products/pads' },
                { id: 3, title: 'MacBook и iMac', image: iMacIcon, link: '/list_of_products/laptops' },
                { id: 4, title: 'Watch', image: watchIcon, link: '/list_of_products/watches' },
                { id: 5, title: 'Гаджеты', image: gadgetsIcon, link: '/list_of_products/gadgets' },
                { id: 6, title: 'Аксессуары', image: toolsIcon, link: '/list_of_products/accessories' },
            ]

        }
    },
    methods: {
        // функция для отображения поля ввода для поиска (ф-ия используется для мобильной и планшетной версии)
        // Эта функция используется для кнопки закрытия поиска 
        findByCategory(category) {
            this.appleStore.filterByCategory(category)
        },
        showSearchFunc() {
            this.showSearch = !this.showSearch
            this.showButtons = !this.showButtons

            if (!this.showSearch) {
                this.appleStore.searchData = []
            }
        },

        // функция для работы с поиском при нажатии на поле ввода (ф-ия используется для планшета)
        // Эта функция нужна для того, чтобы при повторном нажатии на поле ввода она не закрывалась (как это происходит для showSearchFunc, если заменитю openSearchTablet на showSearchFunc)
        openSearchTablet() {
            this.showSearch = true
            this.showButtons = false
        },

        showMenuFunc() {
            this.showMenu = !this.showMenu
        },
        changeHandle() {
            // modalStore.isShown = true
            // modalStore.typeModal.value = 'Bucket'
            // console.log(modalStore.typeModal + ' ' + modalStore.isShown)
            this.modalStore.changeModal('Bucket')
        },
        callbackHandle() {
            this.modalStore.changeModal('Callback')
            console.log('callback comes in')
        },
        nightHandle() {
            this.modalStore.changeModal('night')
            console.log('night comes in')
        },
        // функция для отображения товаров выбранного каталога (эту функцию будет нужно доработать, если появится бекенд)

        // Не используется, но на всякий случай оставлю

        // showCatalogToolsList(catalog) {
        //     showProducts = !showProducts
        //     console.log(catalog)
        // },

        // функция для отображения или прекращения показа окна каталога и прекращение отображения продуктов выбранной категории
        activateCatalogFunc() {
            this.activateCatalog = !this.activateCatalog
            this.showProducts = false
        },

        // функция по отображению товаров определённой категории
        showProductsFunc(elem) {
            // Получение списка всех товаров
            const data = this.appleStore.data;

            // Фильтрация товаров по категории и вывод в catalogItemsList
            if (elem !== 'Акции') {
                const filteredProductsData = data.filter((product) => product.category === elem);
                this.filteredProducts = filteredProductsData;
            }
            else {
                const filteredProductsData = data.filter((product) => product.discount !== null);
                this.filteredProducts = filteredProductsData;
            }
            this.showProducts = true;


        }

    }

}
</script>

<template>

    <header>

        <!-- меню для планшета и телефона -->
        <div v-show="showMenu" class="menuModal container">
            <RouterLink to="/" class="recall">Вам перезвонить?</RouterLink>
            <ul>
                <li @click="showMenuFunc()">
                    <RouterLink to="/list_of_products/all">Весь каталог</RouterLink>
                </li>
                <li @click="showMenuFunc()">
                    <RouterLink to="/list_of_products/smartphones" id="fire"><img
                            src="../assets/icons/header/fire-emblem.svg">Акции</RouterLink>
                </li>
                <li @click="showMenuFunc()">
                    <RouterLink to="/ban">Гарантия</RouterLink>
                </li>
                <li @click="showMenuFunc()">
                    <RouterLink to="/refund">Политика возрата</RouterLink>
                </li>
                <li @click="showMenuFunc()">
                    <RouterLink to="/credit">Кредит</RouterLink>
                </li>
                <li @click="showMenuFunc()">
                    <RouterLink to="/ban">Доставка и оплата</RouterLink>
                </li>
                <li @click="showMenuFunc()">
                    <RouterLink to="/review">Отзывы</RouterLink>
                </li>
                <li @click="showMenuFunc()">
                    <RouterLink to="/contacts">Контакты</RouterLink>
                </li>
                <div class="social-media">
                    <a href="#!"><img src="../assets/icons/social_media/whatsapp.svg" alt="whatsapp"></a>
                    <a href="#!"><img src="../assets/icons/social_media/telegram.svg" alt="telegram"></a>
                    <a href="#!"><img src="../assets/icons/social_media/vk.svg" alt="vk"></a>
                </div>
            </ul>
        </div>

        <!-- мобильная версия header -->
        <div class="container header-mobile">

            <div class="header-info">
                <RouterLink to="/">
                    <img src='../assets/logo.svg' alt="logo">
                </RouterLink>

                <div v-show="showSearch" class="input-search">
                    <img src="../assets/icons/header/search_active.svg"><input type="text" class="search"
                        placeholder="Введите запрос" @input="appleStore.searchFunc($event.target.value)">
                </div>
            </div>

            <div class="header-buttons">
                <button class="buttonIcons" @click="showSearchFunc()">
                    <img v-if="showButtons == true" src="../assets/icons/header/search.svg">
                    <img v-else-if="showButtons == false" src="../assets/icons/header/close.svg">
                </button>
                <a v-show="showButtons" href="#!"><img src="../assets/icons/header/call.svg" alt="#"></a>
                <button v-show="showButtons" class="buttonIcons" @click="showMenu = !showMenu">
                    <img v-if="showMenu == true" src="../assets/icons/header/close.svg">
                    <img v-else src="../assets/icons/header/menu.svg">
                </button>
            </div>

            <!-- Окно с результатом поиска -->
            <!-- <Search :showSearch="showSearch"/> -->
            <Search />

        </div>

        <!-- планшетная версия header -->
        <div class="container header-tablet">

            <div class="header-info">
                <RouterLink to="/">
                    <img src='../assets/logo.svg' alt="logo">
                </RouterLink>
                <div class="input-search">
                    <img v-if="showSearch == true" src="../assets/icons/header/search_active.svg">
                    <img v-else src="../assets/icons/header/search.svg">
                    <input type="text" class="search" placeholder="Поиск по каталогу товаров"
                        @input="appleStore.searchFunc($event.target.value)" @click="openSearchTablet()">
                </div>
                <button class="buttonIcons" @click="showSearchFunc()">
                    <img v-if="showButtons == false" src="../assets/icons/header/close.svg">
                </button>
            </div>

            <div class="header-info">
                <a class="phone-call" href="#!"><img src="../assets/icons/header/call_grey.svg" alt="#">+7 812 561 96
                    62</a>
                <button class="buttonIcons" @click="showMenu = !showMenu">
                    <img v-if="showMenu == true" src="../assets/icons/header/close.svg">
                    <img v-else src="../assets/icons/header/menu.svg">
                </button>
            </div>

            <!-- Окно с результатом поиска -->
            <!-- <Search :showSearch="showSearch"/> -->
            <Search />

        </div>


        <!-- ПК версия header -->
        <div class="container header-desktop">
            <div class="header-navigation">
                <RouterLink to="/">
                    <img src='../assets/logo.svg' alt="logo">
                </RouterLink>
                <ul>

                    <li>
                        <RouterLink class="route" to="/list_of_products/all">Весь каталог</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="route" to="/list_of_products/smartphones" id="fire"><img
                                src="../assets/icons/header/fire-emblem.svg">Акции</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="route" to="/">Гарантия</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="route" to="/refund">Политика возрата</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="route" to="/credit">Кредит</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="route" to="/">Доставка и оплата</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="route" to="/review">Отзывы</RouterLink>
                    </li>
                    <li>
                        <RouterLink class="route" to="/contacts">Контакты</RouterLink>
                    </li>

                </ul>
                <div class="phone">
                    <a class="phone-call" href="#!"><img src="../assets/icons/header/call_grey.svg" alt="#">+7 812
                        561 96
                        62</a>
                    <a @click="callbackHandle()" class="recall">Вам перезвонить?</a>
                </div>
            </div>

            <!---------------------------- КАТАЛОГ ------------------------------->
            <div class="header-search">
                <div class="catalogNavigation">
                    <button @click="activateCatalogFunc()"
                        :class="[!activateCatalog ? 'buttonElem' : 'buttonElem catalogBtn']"><img
                            src="../assets/icons/header/dots.svg" alt="">Каталог товаров</button>

                    <div class="catalog">
                        <div v-show="activateCatalog" class="catalogModal">
                            <ul class="catalogToolsList">
                                <li @mouseenter="showProductsFunc(elem)" v-for="elem in catalogsList" :key="elem">{{
                                    elem }}</li>
                            </ul>

                            <div v-show="showProducts" class="catalogItemsList">
                                <RouterLink :to="productLink.name + '/' + product.id" style="position: relative;"
                                    class="catalogItem" v-for="product in filteredProducts.slice(0, 12)" :id=product.id
                                    :key="product.id" @click="activateCatalog = false">


                                    <img :src="appleStore.BASE_URL + product.image">

                                    <div class="title">
                                        <p>{{ product.title }}</p>
                                        <span>{{ product.discount === null ? 'от' + ' ' + product.price + '₽' : 'от'
                                            + ' ' + product.discount + '₽' }}</span>
                                    </div>

                                </RouterLink>
                                <RouterLink v-show="filteredProducts.length > 0" to="/ban"
                                    @click="activateCatalog = false">
                                    Смотреть все товары
                                </RouterLink>
                            </div>

                        </div>
                    </div>

                </div>

                <input type="text" placeholder="Поиск по каталогу товаров"
                    @input="appleStore.searchFunc($event.target.value)">

                <!-- Окно с результатом поиска -->
                <!-- <Search :showSearch="showSearch"/> -->
                <Search />

                <RouterLink to="/favourite" @click="activateCatalog = false"><img src="../assets/icons/header/heart.svg"
                        alt="heart"></RouterLink>

                <button class="buttonElem basketBtn" @click="changeHandle">

                    <img src="../assets/icons/header/basket.svg" alt="">
                    в корзине
                    <div class="basketCount">
                        {{ bucketStore.buckLength }}
                    </div>
                </button>
            </div>

            <!-- здесь используется те самые categories (36 строка кода) -->
            <div class="header-categories">
                <ul>
                    <li @click="appleStore.changeCategory" v-for="(category) in this.categories" :key="category">
                        <RouterLink :to="category.link">
                            <img :src="category.image">
                            {{ category.title }}
                        </RouterLink>
                    </li>
                </ul>

                <button class="trade-in">
                    <img id="main" src="../assets/images/iphone.png" alt="#">
                    <div class="trade-in-main">
                        Трейд-ин
                        <img id="arrow" src="../assets/icons/arrow_circle.svg" alt="#">
                    </div>
                </button>
            </div>

        </div>
    </header>


</template>

<style scoped lang="scss">
header {
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #FFF;
    box-shadow: 0px 4px 4px 0px #0000000D;
    z-index: 3;


    .header-mobile {
        display: none;
        justify-content: space-between;
        align-items: center;

        .header-info {

            display: flex;
            align-items: center;

            .input-search {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-left: 18px;

                input {
                    width: 100%;
                    border: none;
                    outline: none;
                    font-size: 16px;
                }
            }

        }


        .header-buttons {
            display: flex;
            gap: 35px;
            align-items: center;
            position: relative;
        }

        @media screen and (max-width: 768px) {
            display: flex;
        }
    }

    .header-tablet {

        display: none;
        justify-content: space-between;

        .header-info {
            display: flex;
            align-items: center;
            gap: 32px;

            .input-search {
                display: flex;
                align-items: center;
                gap: 8px;

                input {
                    width: 200px;
                    border: none;
                    outline: none;
                    font-size: 16px;
                }
            }

        }

        @media screen and (min-width: 769px) and (max-width: 1440px) {
            display: flex;
        }

    }

    .header-desktop {
        .header-navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 30px;
            padding-bottom: 30px;

            ul {
                display: flex;
                align-items: center;
                gap: 20px;

                li {
                    list-style-type: none;

                    #fire {
                        border: 1px solid #FDEFBF;
                        background-color: #FDEFBF;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        padding: 5px 10px;
                        border-radius: 8px;
                    }

                    a,
                    .route {
                        color: #000;
                        text-decoration: none;


                        &:hover {
                            color: #0071E4;
                            border-bottom: 2px solid #0071E4;
                        }
                    }
                }
            }

            .phone {
                text-align: end;

                .recall {
                    color: #0071E4;
                    text-decoration: none;
                }
            }
        }

        .header-search {

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;

            position: relative;

            .catalogNavigation {

                position: relative;

                .catalogBtn {
                    background-color: #9747FF;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }

                .catalog {

                    position: absolute;
                    left: 0;
                    right: 0;
                    z-index: 1;

                    .catalogModal {
                        background-color: #fff;

                        display: flex;
                        width: fit-content;
                        // height: 288px;
                        height: 297px;

                        padding: 20px 16px 40px;
                        margin: 0;

                        border-bottom-left-radius: 16px;
                        border-bottom-right-radius: 16px;

                        .catalogToolsList {
                            display: grid;
                            gap: 8px;
                            width: 189px;
                            margin: 0;

                            li {
                                background-color: #F9F9F9;

                                list-style-type: none;

                                font-size: 20px;

                                padding: 8px;
                                border-radius: 8px;

                                display: flex;
                                align-items: center;

                                cursor: pointer;

                                &:hover {
                                    color: #0071E4;
                                    background-color: #F0E4FF;
                                }
                            }
                        }

                        .catalogItemsList {
                            display: grid;
                            grid-template-columns: repeat(3, auto);
                            gap: 8px;

                            // overflow-y: auto;
                            // overflow-x: hidden;

                            // width: 53rem;
                            height: 18rem;
                            margin-left: 16px;
                            margin-top: 15px;


                            .catalogItem {
                                display: flex;
                                align-items: center;

                                width: 206px;
                                // height: 64px;

                                padding: 8px 16px 8px;

                                background-color: #F9F9F9;

                                border-radius: 8px;
                                gap: 6px;

                                transition: 0.3s;

                                cursor: pointer;

                                img {
                                    width: 48px;
                                }

                                .title {

                                    p,
                                    span,
                                    a {
                                        margin: 0;

                                        text-overflow: clip;
                                        -webkit-line-clamp: 2;
                                        display: -webkit-box;
                                        -webkit-box-orient: vertical;
                                        overflow: hidden;
                                    }

                                    p,
                                    a {
                                        font-size: 16px;
                                        color: #100E0E;
                                    }

                                    span,
                                    a {
                                        font-size: 14px;
                                        color: #282626;
                                    }
                                }

                                &:hover {
                                    -webkit-box-shadow: 4px 4px 10px 0px rgba(34, 60, 80, 0.2);
                                    -moz-box-shadow: 4px 4px 10px 0px rgba(34, 60, 80, 0.2);
                                    box-shadow: 4px 4px 10px 0px rgba(34, 60, 80, 0.2);
                                }
                            }

                            a {
                                position: absolute;
                                // bottom: 15px;
                                bottom: 8px;
                                width: max-content;
                            }
                        }

                    }

                }

            }

            input {
                border-radius: 8px;
                border: 1px solid #B7B7B7;

                padding: 16px 56px;
                width: 594px;

                outline: none;

                font-size: 20px;

                background: url('../assets/icons/header/search_grey.svg');
                background-repeat: no-repeat;
                background-position: 15px 50%;
            }

        }

        .header-categories {

            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;

            ul {
                display: flex;
                gap: 16px;
                align-items: center;
                padding-left: 0;

                li {
                    list-style-type: none;

                    position: relative;

                    a,
                    .route {
                        display: flex;
                        align-items: center;
                        gap: 8px;

                        text-decoration: none;
                        font-size: 20px;

                        color: #100E0E;

                        &:hover {
                            color: #0071E4;

                            img {
                                filter: brightness(0) saturate(100%) invert(40%) sepia(58%) saturate(7056%) hue-rotate(198deg) brightness(95%) contrast(101%);
                            }
                        }

                    }

                    .categoriesList {
                        background-color: #FFF;
                        border-bottom-left-radius: 8px;
                        border-bottom-right-radius: 8px;

                        display: grid;

                        padding: 16px;

                        position: absolute;
                        top: 75px;
                        left: 0;
                        right: 0;

                        padding-bottom: 27px;
                        width: 130px;

                        a {
                            font-size: 16px;
                        }
                    }
                }
            }

            .trade-in {
                position: relative;

                border: none;

                background-image: linear-gradient(90deg, #000000 22.19%, #5E556B 100%);
                background-repeat: no-repeat;
                /* Перемещение и изменение размера фонового изображения */
                background-blend-mode: multiply;

                overflow: hidden;

                width: 280px;
                height: 64px;
                border-radius: 8px;

                font-size: 20px;
                color: #FFFFFF;

                #main {
                    position: absolute;
                    width: 45px;
                    top: 0;
                    left: 10px;
                }

                .trade-in-main {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    #arrow {
                        position: absolute;
                        right: 16px;
                    }
                }
            }
        }

        @media screen and (max-width: 1440px) {
            display: none;
        }

    }

    .buttonIcons {
        border: none;
        background: transparent;
        cursor: pointer;
    }

    .basketBtn {
        background-color: #52D116;
    }

    .phone-call {
        text-decoration: none;
        color: #000;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .basketCount {
        box-shadow: 0px 4px 4px 0px #00000040 inset;
        padding: 4px 12px;
        border-radius: 32px;
    }

    .menuModal {
        display: none;
        position: absolute;
        background-color: #FFF;
        left: 0;
        right: 0;
        top: 64px;
        height: 100rem;

        .recall {
            position: absolute;
            right: 80px;
            top: -20px;

            @media screen and (max-width: 768px) {
                display: none;
            }
        }

        p {
            font-size: 18px;

            &>select {
                color: #0071E4;
                background: transparent;
                border: none;
                font-size: 16px;
                width: 85px;

                option {
                    background: #FFF;
                }
            }
        }


        ul {
            display: flex;
            gap: 16px;
            align-items: center;
            padding-left: 0;
            flex-wrap: wrap;
            max-width: 80%;

            li {
                list-style-type: none;

                #fire {
                    border: 1px solid #FDEFBF;
                    background-color: #FDEFBF;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 5px 10px;
                    border-radius: 8px;
                    width: fit-content;
                }

                a,
                .route {
                    display: flex;
                    align-items: center;
                    gap: 8px;

                    text-decoration: none;
                    font-size: 18px;

                    color: #100E0E;


                    &:hover {
                        color: #0071E4;
                    }

                }
            }

            .social-media {
                display: flex;
                gap: 7px;
            }

            @media screen and (max-width: 768px) {
                display: grid;
                margin-top: 24px;
            }
        }

        @media screen and (max-width: 1440px) {
            display: inherit;
        }

        @media screen and (min-width: 769px) and (max-width: 1440px) {
            height: auto;
        }

        @media screen and (max-width: 768px) {
            height: 100rem;
        }

    }

    @media screen and (max-width: 1440px) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: #fff;
    }
}

.itemLink {
    position: relative;
}
</style>