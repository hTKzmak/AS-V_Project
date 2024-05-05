<script>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="slider">
        <div class="container slider-container">
            <button><img src="../../assets/images/slider/arrowLeft.svg"></button>
            <div class="slider-content">
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

            img {
                margin-bottom: -50px;
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
                }
            }

            h3 {
                font-size: 32px;
                color: #1E3240;
                margin-top: 10px;
                margin-bottom: 35px;

                span {
                    font-size: 48px;
                }
            }

            a {
                color: #FFF;
                font-size: 16px;
                background-color: #0071E4;
                border-radius: 8px;
                padding: 19px 40px;
            }
        }
    }
}
</style>