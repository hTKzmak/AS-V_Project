<script>
export default {
    props: {
        title: String,
        img: String,
        price: Number,
        link: String,
    }
}
</script>

<template>
    <div class="slider-content">
        <img :src="img" :style="{marginBottom: img.includes('mbp') ? '35px' : '-75px'}">
        <div class="title">

            <h1 v-if="title === 'iphone 14'">iPh<div class="oval"></div>ne 14</h1>
            <h1 v-else>{{ title }}</h1>

            <h3>от <span>{{ price }} ₽</span></h3>
            <RouterLink :to="link">подробнее</RouterLink>
        </div>
    </div>
</template>

<style lang="scss">
.slider-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
    width: 100%;

    img {
        margin-bottom: -50px;

        @media screen and (max-width: 1440px) {
            margin: 0 auto;
            width: 270px;
        }

        @media screen and (max-width: 768px) {
            margin: 0 auto;
            width: 173px;
        }
    }

    .title {
        text-align: left;
        margin-top: -50px;

        @media screen and (max-width: 1440px) {
            text-align: center;
            margin: 0;
        }

        h1 {
            font-size: 88px;
            color: #1E3240;
            display: flex;
            align-items: center;
            margin: 0;

            .oval {
                width: 90px;
                height: 45px;

                border: 11px solid #1E3240;

                border-radius: 500px;

                margin-bottom: -15px;

                @media screen and (max-width: 1440px) {
                    width: 68px;
                    height: 30px;
                    border: 8px solid #1E3240;
                }

                @media screen and (max-width: 768px) {
                    width: 42px;
                    height: 19px;
                    border: 4.63px solid #1E3240;
                    margin-bottom: -7px;
                }
            }

            @media screen and (max-width: 1440px) {
                font-size: 59.31px;
            }

            @media screen and (max-width: 768px) {
                font-size: 37.07px;
                margin: 0 auto;
            }
        }

        h3 {
            font-size: 32px;
            margin: 19px 0 17px;

            span {
                font-size: 48px;

                @media screen and (max-width: 768px) {
                    font-size: 32px;
                }
            }

            @media screen and (max-width: 1440px) {
                margin: 6px 0 16px;
            }

            @media screen and (max-width: 768px) {
                font-size: 20px;
                margin: 9px 0 8px;
            }
        }

        a {
            background-color: #0071E4;
            color: #FFF;

            display: ruby-text;

            font-size: 16px;
            font-family: "SF Pro Display Medium", sans-serif;

            border: none;
            border-radius: 8px;

            cursor: pointer;

            padding: 18px 40px;

            max-width: 160px;
            @media screen and (max-width: 1440px) {
                max-width: none;
            }
            @media screen and (max-width: 768px) {
                border-radius: 8px;
                font-size: 16px;
                padding: 10px 39px;
            }
        }
    }

    @media screen and (max-width: 1440px) {
        flex-direction: column-reverse;
        justify-content: center;
        gap: 31px;
    }

    @media screen and (max-width: 768px) {
        gap: 16px;
    }

}
</style>