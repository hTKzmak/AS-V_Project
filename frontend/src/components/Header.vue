<script>
import { RouterLink } from 'vue-router'
import Search from '../components/HomePage/Search.vue'
import { useCounterStore } from '@/stores/AppleStore';
import { useModalStore } from '@/stores/ModalStore';

export default {
    components: {
        Search
    },
    data() {
        return {
            showSearch: false,
            showButtons: true,
            showMenu: false
        }
    },
    setup() {
        const appleStore = useCounterStore()
        const modalStore = useModalStore()
        return {
            appleStore, modalStore
        }
    },
    methods: {
        showSearchFunc() {
            this.showSearch = !this.showSearch
            this.showButtons = !this.showButtons

            if (!this.showSearch) {
                this.appleStore.searchData = []
            }
        },
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
        }

    }

}
</script>

<template>

    <div class="location">
        <div class="container location-header">

            <p>Ваш город:
                <select name="select-city" id="city">
                    <option value="Moscow">Москва</option>
                    <option value="SP">Санкт-Петербург</option>
                    <option value="Ekaterinburg">Екатеринбург</option>
                    <option value="Kazan">Казань</option>
                </select>
            </p>

            <div class="social-media">
                <a href="#!"><img src="../assets/icons/social_media/whatsapp.svg" alt="whatsapp"></a>
                <a href="#!"><img src="../assets/icons/social_media/telegram.svg" alt="telegram"></a>
                <a href="#!"><img src="../assets/icons/social_media/vk.svg" alt="vk"></a>
            </div>
        </div>
    </div>


    <header>

        <!-- меню для планшета и телефона -->
        <div v-show="showMenu" class="menuModal container">
            <a href="#!" class="recall">Вам перезвонить?</a>
            <p>Ваш город:
                <select name="select-city" id="city">
                    <option value="Moscow">Москва</option>
                    <option value="SP">Санкт-Петербург</option>
                    <option value="Ekaterinburg">Екатеринбург</option>
                    <option value="Kazan">Казань</option>
                </select>
            </p>
            <ul>
                <li><a href="#!">Весь каталог</a></li>
                <li><a href="#!" id="fire"><img src="../assets/icons/header/fire-emblem.svg">Акции</a></li>
                <li><a href="#!">Гарантия</a></li>
                <li><a href="#!">Политика возрата</a></li>
                <li><a href="#!">Кредит</a></li>
                <li><a href="#!">Доставка и оплата</a></li>
                <li><a href="#!">Отзывы</a></li>
                <li><a href="#!">Контакты</a></li>
                <div class="social-media">
                    <a href="#!"><img src="../assets/icons/social_media/whatsapp.svg" alt="whatsapp"></a>
                    <a href="#!"><img src="../assets/icons/social_media/telegram.svg" alt="telegram"></a>
                    <a href="#!"><img src="../assets/icons/social_media/vk.svg" alt="vk"></a>
                </div>
            </ul>
        </div>

        <div class="container header-mobile">

            <div class="header-info">
                <RouterLink to="/">
                    <img src='../assets/logo.svg' alt="logo">
                </RouterLink>

                <div v-show="showSearch" class="input-search">
                    <img src="../assets/icons/header/search_active.svg"><input type="text" class="search"
                        placeholder="Поиск по каталогу товаров" @keydown="appleStore.searchFunc($event.target.value)">
                </div>
            </div>

            <div class="header-buttons">
                <button class="buttonIcons" @click="showSearchFunc()">
                    <img v-if="showButtons == true" src="../assets/icons/header/search.svg">
                    <img v-else-if="showButtons == false" src="../assets/icons/header/close.svg">
                </button>
                <a v-show="showButtons" href="#!"><img src="../assets/icons/header/call.svg" alt="#"></a>
                <button class="buttonIcons" @click="showMenuFunc()">
                    <img v-if="showMenu == true" src="../assets/icons/header/close.svg">
                    <img v-else src="../assets/icons/header/menu.svg">
                </button>
            </div>

            <!-- Окно с результатом поиска -->
            <Search />

        </div>

        <div class="container header-tablet">

            <div class="header-info">
                <RouterLink to="/">
                    <img src='../assets/logo.svg' alt="logo">
                </RouterLink>
                <div class="input-search">
                    <img v-if="showSearch == true" src="../assets/icons/header/search_active.svg">
                    <img v-else src="../assets/icons/header/search.svg">
                    <input type="text" class="search" placeholder="Поиск по каталогу товаров"
                        @keydown="appleStore.searchFunc($event.target.value)" @click="openSearchTablet()">
                </div>
                <button class="buttonIcons" @click="showSearchFunc()">
                    <img v-if="showButtons == false" src="../assets/icons/header/close.svg">
                </button>
            </div>

            <div class="header-info">
                <a class="phone-call" href="#!"><img src="../assets/icons/header/call_grey.svg" alt="#">+7 812 561 96
                    62</a>
                <button class="buttonIcons" @click="showMenuFunc()">
                    <img v-if="showMenu == true" src="../assets/icons/header/close.svg">
                    <img v-else src="../assets/icons/header/menu.svg">
                </button>
            </div>

            <!-- Окно с результатом поиска -->
            <Search />

        </div>



        <div class="container header-desktop">
            <div class="header-navigation">
                <RouterLink to="/">
                    <img src='../assets/logo.svg' alt="logo">
                </RouterLink>
                <ul>
                    <li><a href="#!">Весь каталог</a></li>
                    <li><a href="#!" id="fire"><img src="../assets/icons/header/fire-emblem.svg">Акции</a></li>
                    <li><a href="#!">Гарантия</a></li>
                    <li><a href="#!">Политика возрата</a></li>
                    <li><a href="#!">Кредит</a></li>
                    <li><a href="#!">Доставка и оплата</a></li>
                    <li><a href="#!">Отзывы</a></li>
                    <li><a href="#!">Контакты</a></li>
                </ul>
                <div class="phone">
                    <a class="phone-call" href="#!"><img src="../assets/icons/header/call_grey.svg" alt="#">+7 812
                        561 96
                        62</a>
                    <a href="#!" class="recall">Вам перезвонить?</a>
                </div>
            </div>


            <div class="header-search">
                <button class="buttonElem"><img src="../assets/icons/header/dots.svg" alt="">Каталог товаров</button>

                <input type="text" placeholder="Поиск по каталогу товаров"
                    @keydown="appleStore.searchFunc($event.target.value)">

                <!-- Окно с результатом поиска -->
                <Search />

                <a href="#!"><img src="../assets/icons/header/heart.svg" alt=""></a>
                <a href="#!"><img src="../assets/icons/header/filters.svg" alt=""></a>
                <button class="buttonElem basketBtn" @click="changeHandle">
                    <img src="../assets/icons/header/basket.svg" alt="">
                    в корзине
                    <div class="basketCount">
                        1
                    </div>
                </button>
            </div>

            <div class="header-categories">
                <ul>
                    <li>
                        <a href="#!">
                            <img src="../assets/icons/header/gadgets/iphone.svg">
                            iPhone
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src="../assets/icons/header/gadgets/ipad.svg">
                            iPad
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src="../assets/icons/header/gadgets/macbook.svg">
                            MacBook и iMac
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src="../assets/icons/header/gadgets/applewatch.svg">
                            Watch
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src="../assets/icons/header/gadgets/airpods.svg">
                            Гаджеты
                        </a>
                    </li>
                    <li>
                        <a href="#!">
                            <img src="../assets/icons/header/gadgets/tools.svg">
                            Аксессуары
                        </a>
                    </li>
                </ul>

                <a href="#!" class="iPhone14_link">
                </a>
            </div>

        </div>
    </header>

    
</template>

<style lang="scss">
.location {
    padding-top: 10px;
    padding-bottom: 10px;
    background: #F9F9F9;

    .location-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p>select {
            color: #0071E4;
            background: transparent;
            border: none;
            font-size: 16px;
            width: 85px;

            option {
                background: #FFF;
            }
        }

        .social-media {
            display: flex;
            gap: 7px;
        }
    }

    @media screen and (max-width: 1440px) {
        display: none;
    }

}

header {
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #FFF;
    box-shadow: 0px 4px 4px 0px #0000000D;


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
                    width: 200px;
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

                    a {
                        color: #000;
                        text-decoration: none;


                        &:hover {
                            color: #0071E4;
                            border-bottom: 1px solid #0071E4;
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

                    a {
                        display: flex;
                        align-items: center;
                        gap: 8px;

                        text-decoration: none;
                        font-size: 20px;

                        color: #100E0E;

                        &:hover {
                            color: #0071E4;
                        }
                    }
                }
            }

            .iPhone14_link {
                background: linear-gradient(90deg, #000000 22.19%, #5E556B 100%);
                background-image: url('../assets/icons/header/gadgets/banner.png');
                border-radius: 8px;
                height: 64px;
                width: 280px;
                background-repeat: no-repeat;
                background-position: center center;
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

                a {
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
</style>