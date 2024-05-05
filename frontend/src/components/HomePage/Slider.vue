<script>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="slider">
        <div class="container slider-container">
            <button><img src="../../assets/images/slider/arrowLeft.svg"></button>
            <div class="slider-content">
                <div class="title-mobile">

                    <h1>iPh
                        <div class="oval"></div>
                        ne 14
                    </h1>

                    <h3>от <span>137 900 ₽</span></h3>
                    <RouterLink to="/ban">подробнее</RouterLink>
                </div>
                <img src="../../assets/images/slider/iphone_14.png">
                <div class="title">

                    <h1>iPh
                        <div class="oval"></div>
                        ne 14
                    </h1>

                    <h3>от <span>137 900 ₽</span></h3>
                    <RouterLink to="/ban">подробнее</RouterLink>
                </div>
            </div>
            <button><img src="../../assets/images/slider/arrowRight.svg"></button>
        </div>
    </div>
</template>

<style lang="scss">
.slider {
    background-color: #D0EAFC;
    padding-top: 50px;
    padding-bottom: 50px;

    .slider-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            border: none;
            background: transparent;
        }

        .slider-content {
            display: flex;
            align-items: center;
            justify-content: space-around;
            gap: 48px;
            width: 100%;

            .title {
                @media screen and (max-width: 1440px) {
                    display: none;
                }
            }

            .title-mobile {
                display: none;

                @media screen and (max-width: 1440px) {
                    display: grid;
                    text-align: center;
                }
            }

            img {
                margin-bottom: -50px;

                @media screen and (max-width: 1440px) {
                    margin: 0 auto -45px;
                    width: 270px;
                }

                @media screen and (max-width: 768px) {
                    margin: 0 auto -21px;
                    width: 173px;
                }
            }

            h1 {
                font-size: 88px;
                color: #1E3240;
                display: flex;
                align-items: center;
                margin: 0;

                .oval {
                    width: 90px;
                    height: 30px;

                    border: 11px solid #1E3240;

                    border-radius: 500px;

                    margin-bottom: -10px;

                    @media screen and (max-width: 768px) {
                        width: 45px;
                        height: 10px;
                        border: 5px solid #1E3240;
                    }
                }

                @media screen and (max-width: 768px) {
                    font-size: 38px;
                    text-align: center;
                    margin: 0 auto;
                }
            }

            h3 {
                font-size: 32px;
                color: #1E3240;
                margin-top: 10px;
                margin-bottom: 35px;

                font-family: "SF Pro Display Regular", sans-serif;

                span {
                    font-size: 48px;

                    @media screen and (max-width: 768px) {
                        font-size: 32px;
                    }
                }

                @media screen and (max-width: 768px) {
                    font-size: 20px;
                    margin-bottom: 20px;
                }
            }

            a {
                color: #FFF;
                font-size: 16px;
                background-color: #0071E4;
                border-radius: 8px;
                padding: 19px 40px;

                @media screen and (max-width: 1440px) {
                    margin: 0 auto;
                }

                @media screen and (max-width: 768px) {
                    margin: 0;
                }
            }

            @media screen and (max-width: 1440px) {
                display: grid;
                justify-content: center;
            }
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1440px) {
        padding-top: 40px;
        padding-bottom: 40px;
    }

    @media screen and (max-width: 768px) {
        padding-top: 16px;
        padding-bottom: 16px;
    }
}
</style>