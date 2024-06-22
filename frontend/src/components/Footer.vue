<script setup>
import { useModalStore } from '@/stores/ModalStore';
import { useCounterStore } from '@/stores/AppleStore';
import { RouterLink } from 'vue-router'
const modalStore = useModalStore()
const appleStore = useCounterStore()
</script>

<template>
    <footer>
        <div class="container footer-container">

            <div class="footer-info">
                <img src="../assets/logo.svg" alt="logo">
                <div class="footer-text-info">
                    <p>© 2013-2022</p>
                    <p>Продажа iPhone в МСК</p>
                    *Сайт не является публичной оффертой. Вся информация, указанная на сайте носит информационный
                    характер.
                </div>
            </div>

            <div class="footer-info-mobile">
                <div class="main-info">
                    <img src="../assets/logo.svg" alt="logo">
                    <div class="footer-text-info">
                        <p>© 2013-2022</p>
                        <p>Продажа iPhone в МСК</p>
                    </div>
                </div>
                *Сайт не является публичной оффертой. Вся информация, указанная на сайте носит информационный
                характер.
            </div>

            <div class="footer-navigation">
                <ul>
                    <li><RouterLink class="route" to="/warranty">Гарантия</RouterLink></li>
                    <li><RouterLink class="route" to="/refund">Политика возрата</RouterLink></li>
                    <li><RouterLink class="route" to="/credit">Кредит</RouterLink></li>
                    <li><RouterLink class="route" to="/">Доставка и оплата</RouterLink></li>
                    <li><RouterLink class="route" to="/review">Отзывы</RouterLink></li>
                    <li><RouterLink class="route" to="/contacts">Контакты</RouterLink></li>
                    <li><RouterLink class="route" to="/error">Политика конфеденциальности</RouterLink></li>
                </ul>
                <ul>
                    <li @click="appleStore.changeCategory"><RouterLink class="route" to="/list_of_products/smartphones">iPhone</RouterLink></li>
                    <li @click="appleStore.changeCategory"><RouterLink class="route" to="/list_of_products/pads">iPad</RouterLink></li>
                    <li @click="appleStore.changeCategory"><RouterLink class="route" to="/list_of_products/laptops">Macbook и iMac</RouterLink></li>
                    <li @click="appleStore.changeCategory"><RouterLink class="route" to="/list_of_products/watches">Watch</RouterLink></li>
                    <li @click="appleStore.changeCategory"><RouterLink class="route" to="/list_of_products/accessories">Аксессуары</RouterLink></li>
                    <li @click="appleStore.changeCategory"><RouterLink class="route" to="/list_of_products/smartphones">Акции</RouterLink></li>
                </ul>
            </div>

            <div class="footer-contacts">

                <div class="phoneInfo">
                    <div class="phone">
                        <p>+7 812 704 86 97</p>
                        Бесплатная консультация <br />
                        С 10:00 до 21:00, без выходных
                    </div>

                    <div class="social-media">
                        <a href="#!"><img src="../assets/icons/social_media/whatsapp.svg" alt="whatsapp"></a>
                        <a href="#!"><img src="../assets/icons/social_media/telegram.svg" alt="telegram"></a>
                        <a href="#!"><img src="../assets/icons/social_media/vk.svg" alt="vk"></a>
                    </div>
                </div>

                <div class="callAndMedia">
                    <a class="getCall" @click="modalStore.changeModal('Callback')">Заказать звонок</a>

                    <div class="social-media">
                        <a href="#!"><img src="../assets/icons/social_media/whatsapp.svg" alt="whatsapp"></a>
                        <a href="#!"><img src="../assets/icons/social_media/telegram.svg" alt="telegram"></a>
                        <a href="#!"><img src="../assets/icons/social_media/vk.svg" alt="vk"></a>
                    </div>
                </div>
                <p>Москва, ул Барклая 8</p>
                <p>Москва, ул Барклая 8</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
footer {
    padding: 30px 20px;

    .footer-container {
        display: flex;
        justify-content: space-between;
        align-items: start;

        @media screen and (min-width: 769px) and (max-width: 1440px) {
            display: grid;
            justify-content: stretch;
        }

        @media screen and (max-width: 768px) {
            display: grid;
        }
    }

    .footer-info {
        width: 270px;
        font-size: 14px;
        color: #B7B7B7;

        .footer-text-info {
            p {
                font-size: 16px;
                color: #878787;
            }
        }

        @media screen and (min-width: 769px) and (max-width: 1440px) {
            display: flex;
            align-items: start;
            gap: 24px;

            width: 500px;
        }

        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    .footer-info-mobile {
        display: none;
        font-size: 14px;
        color: #B7B7B7;

        .main-info {
            display: flex;
            align-items: center;
            justify-content: center;

            .footer-text-info {
                text-align: start;
                color: #878787;
            }
        }

        @media screen and (max-width: 768px) {
            display: grid;
            text-align: center;
        }
    }

    .footer-navigation {

        display: flex;
        gap: 40px;

        ul {
            display: grid;
            row-gap: 16px;
            padding-left: 0;

            li {
                list-style-type: none;

                a {
                    text-decoration: none;
                    color: #100E0E;
                }
            }

            @media screen and (min-width: 769px) and (max-width: 1440px) {
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
            }

            @media screen and (max-width: 768px) {
                display: grid;
            }
        }

        @media screen and (min-width: 769px) and (max-width: 1440px) {
            display: grid;
            gap: 16px;
        }

        @media screen and (max-width: 768px) {
            display: grid;
            gap: 10px;
        }
    }

    .footer-contacts {

        .phoneInfo {
            margin-bottom: 10px;
            font-size: 14px;
            color: #706E6E;

            .social-media {
                display: none;

                @media screen and (min-width: 769px) and (max-width: 1440px) {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
            }

            p {
                font-family: 'SF Pro Display Medium', sans-serif;
                font-size: 40px;
                margin: 0;
                color: #100E0E;
            }

            .phone {
                @media screen and (min-width: 769px) and (max-width: 1440px) {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                p {
                    @media screen and (min-width: 769px) and (max-width: 1440px) {
                        font-size: 32px;
                    }

                    @media screen and (max-width: 769px) {
                        font-size: 24px;
                    }
                }
            }

            @media screen and (min-width: 769px) and (max-width: 1440px) {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }

        .callAndMedia {

            display: flex;
            gap: 24px;
            align-items: center;

            .getCall {
                font-family: 'SF Pro Display Medium', sans-serif;
                font-size: 20px;
            }

            .social-media {
                display: flex;
                align-items: center;
                gap: 8px;

                @media screen and (min-width: 769px) and (max-width: 1440px) {
                    display: none;
                }
            }

            @media screen and (max-width: 768px) {
                display: grid;
            }
        }
    }

    @media screen and (max-width: 768px) {
        padding: 30px 0 100px;
    }
}
</style>