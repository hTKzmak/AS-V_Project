<script>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="location">
        <div class="container location-header">

            <p>Ваш город: <span>Москва V</span></p>

            <div class="social-media">
                <a href="#!"><img src="../assets/icons/header/whatsapp.svg" alt=""></a>
                <a href="#!"><img src="../assets/icons/header/telegram.svg" alt=""></a>
                <a href="#!"><img src="../assets/icons/header/vk.svg" alt=""></a>
            </div>
        </div>
    </div>

    <header>
        <div class="container header-mobile">

            <RouterLink to="/">
                <img src='../assets/icons/header/logo.svg' alt="logo">
            </RouterLink>

            <div class="header-buttons">
                <button class="buttonIcons"><img src="../assets/icons/header/search.svg"></button>
                <a href="#!"><img src="../assets/icons/header/call.svg" alt="#"></a>
                <button class="buttonIcons"><img src="../assets/icons/header/menu.svg"></button>
            </div>

        </div>

        <div class="container header-tablet">

            <div class="header-info">
                <RouterLink to="/">
                    <img src='../assets/icons/header/logo.svg' alt="logo">
                </RouterLink>
                <div class="input-search">
                    <img src="../assets/icons/header/search.svg"><input type="text" class="search"
                        placeholder="Поиск по каталогу товаров">
                </div>
            </div>

            <div class="header-info">
                <a class="phone-call" href="#!"><img src="../assets/icons/header/call_grey.svg" alt="#">+7 812 561 96
                    62</a>
                <button class="buttonIcons"><img src="../assets/icons/header/menu.svg"></button>
            </div>

        </div>



        <div class="container header-desktop">
            <div class="header-navigation">
                <RouterLink to="/">
                    <img src='../assets/icons/header/logo.svg' alt="logo">
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
                    <a class="phone-call" href="#!"><img src="../../assets/icons/header/call_grey.svg" alt="#">+7 812
                        561 96
                        62</a>
                    <a href="#!" class="recall">Вам перезвонить?</a>
                </div>
            </div>


            <div class="header-search">
                <button class="buttonElem"><img src="../assets/icons/header/dots.svg" alt="">Каталог товаров</button>
                <input type="text" placeholder="Поиск по каталогу товаров">
                <a href="#!"><img src="../assets/icons/header/heart.svg" alt=""></a>
                <a href="#!"><img src="../assets/icons/header/filters.svg" alt=""></a>
                <button class="buttonElem basketBtn">
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
    padding: 10px 25px;
    background: #F9F9F9;

    .location-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p>span {
            color: #0071E4;
        }

        .social-media {
            display: flex;
            gap: 7px;
        }
    }

}

header {
    padding: 5px 20px;
    background-color: #FFF;
    box-shadow: 0px 4px 4px 0px #0000000D;


    .header-mobile {
        display: none;
        justify-content: space-between;
        align-items: center;

        .header-buttons {
            display: flex;
            gap: 35px;
            align-items: center;

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

            input {
                color: #B7B7B7;

                border-radius: 8px;
                border: 1px solid #B7B7B7;

                padding: 16px 56px;
                width: 594px;

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
                background-image: url('../assets/icons/header/gadgets/banner.png');
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

    .buttonElem {
        border-radius: 16px;
        padding: 13px 16px;
        font-size: 20px;
        border: none;
        background-color: #0071E4;
        color: #FFF;

        display: flex;
        align-items: center;
        gap: 5px;

        cursor: pointer;
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
}
</style>