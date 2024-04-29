<script>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="location">
        <div class="container location-header">

            <p>Ваш город: <span>Москва</span></p>

            <div class="social-media">
                <a href="#!"><img src="../../assets/icons/whatsapp.svg" alt=""></a>
                <a href="#!"><img src="../../assets/icons/telegram.svg" alt=""></a>
                <a href="#!"><img src="../../assets/icons/vk.svg" alt=""></a>
            </div>
        </div>
    </div>

    <header>
        <div class="container header-mobile">

            <RouterLink to="/">
                <img src='../../assets/icons/logo.svg' alt="logo">
            </RouterLink>

            <div class="header-buttons">
                <button><img src="../../assets/icons/search.svg"></button>
                <a href="#!"><img src="../../assets/icons/call.svg" alt="#"></a>
                <button><img src="../../assets/icons/menu.svg"></button>
            </div>

        </div>

        <div class="container header-tablet">

            <div class="header-info">
                <RouterLink to="/">
                    <img src='../../assets/icons/logo.svg' alt="logo">
                </RouterLink>
                <div class="input-search">
                    <img src="../../assets/icons/search.svg"><input type="text" class="search"
                        placeholder="Поиск по каталогу товаров">
                </div>
            </div>

            <div class="header-info">
                <a class="phone-call" href="#!"><img src="../../assets/icons/call_grey.svg" alt="#">+7 812 561 96 62</a>
                <button><img src="../../assets/icons/menu.svg"></button>
            </div>

        </div>



        <div class="container header-desktop">
            <div class="header-navigation">
                <RouterLink to="/">
                    <img src='../../assets/icons/logo.svg' alt="logo">
                </RouterLink>
                <ul>
                    <li><a href="#!">Весь каталог</a></li>
                    <li><a href="#!" id="fire"><img src="../../assets/icons/fire-emblem.svg">Акции</a></li>
                    <li><a href="#!">Гарантия</a></li>
                    <li><a href="#!">Политика возрата</a></li>
                    <li><a href="#!">Кредит</a></li>
                    <li><a href="#!">Доставка и оплата</a></li>
                    <li><a href="#!">Отзывы</a></li>
                    <li><a href="#!">Контакты</a></li>
                </ul>
                <div class="phone">
                    <a class="phone-call" href="#!"><img src="../../assets/icons/call_grey.svg" alt="#">+7 812 561 96
                        62</a>
                    <a href="#!" class="recall">Вам перезвонить?</a>
                </div>
            </div>

            <div class="header-search"></div>
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

        .header-search{
            
        }

        @media screen and (max-width: 1440px) {
            display: none;
        }
    }


    button {
        border: none;
        background: transparent;
        cursor: pointer;

    }

    .phone-call {
        text-decoration: none;
        color: #000;
        display: flex;
        align-items: center;
        gap: 10px;
    }
}
</style>