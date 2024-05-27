<script setup>
import { useCounterStore } from '@/stores/AppleStore';
import { reactive, ref } from 'vue';

const appleStore = useCounterStore();

</script>

<template>
    <!-- <button @click="console.log(appleStore.searchData)">show menu</button> -->
    
    <ul class="searchList">
        <li class="searchItem" v-for="index in appleStore.searchData" :key="index">
            <div class="search-product-info">
                <div class="img" :style="{ backgroundImage: `url('${index.image}')` }"></div>
                <div class="product-title">
                    <p class="title">{{ index.title }}</p>
                    <span class="price">{{ index.price }} ₽</span>
                </div>
            </div>
            <RouterLink to="/404">Подробнее</RouterLink>
        </li>
    </ul>
</template>

<style lang="scss">
.searchList {
    position: absolute;
    padding: 0;
    right: 50%;
    left: 22%;
    top: 50px;
    width: 46vw;
    max-width: 706px;
    background-color: #FFF;
    border-radius: 16px;
    z-index: 1;

    .searchItem {
        display: flex;
        justify-content: space-between;
        align-items: center;

        list-style-type: none;
        padding: 16px 32px;


        .search-product-info {

            display: flex;
            align-items: center;
            gap: 16px;

            .img {
                width: 64px;
                height: 64px;
                background-position: center center;
                background-repeat: no-repeat;
                background-color: rgb(34, 34, 34);
                background-size: cover;

                @media screen and (min-width: 769px) and (max-width: 1440px) {
                    width: 48px;
                    height: 48px;
                }

                @media screen and (max-width: 768px) {
                    width: 32px;
                    height: 32px;
                }
            }

            .product-title {
                .title {
                    font-size: 20px;
                    color: #100E0E;
                    margin: 0;

                    @media screen and (min-width: 769px) and (max-width: 1440px) {
                        font-size: 16px;
                    }

                    @media screen and (max-width: 768px) {
                        font-size: 14px;
                    }
                }

                .price {
                    font-size: 24px;
                    color: #282626;
                    margin: 4px 0 0;

                    @media screen and (min-width: 769px) and (max-width: 1440px) {
                        font-size: 20px;
                    }

                    @media screen and (max-width: 768px) {
                        font-size: 16px;
                    }
                }
            }

        }

        a {
            z-index: 2;
        }

        &::before {
            position: absolute;
            left: 0;
            right: 0;

            width: inherit;
            // height: 102px;
            height: 95px;

            border-bottom: 1px solid #B7B7B7;
            content: "";

            @media screen and (min-width: 769px) and (max-width: 1440px) {
                height: 85px;
            }

            @media screen and (max-width: 768px) {
                height: 65px;
            }

        }

        &:last-child::before {
            width: 96%;
            left: 13px;
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1440px) {
        // top: 128px;
        top: 48px;
        left: 15%;
        max-height: 344px;
        width: 70vw;
        max-width: none;

        overflow-y: auto;

        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
    }

    @media screen and (max-width: 768px) {
        // top: 128px;
        // top: 150px;
        top: 48px;
        left: 0;
        right: 0;
        max-height: 294px;
        width: inherit;
        max-width: inherit;

        overflow-y: auto;

        border-top-right-radius: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
    }
}
</style>