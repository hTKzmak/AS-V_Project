<script>
import { RouterLink } from 'vue-router'

import iPhoneIcon from '../assets/icons/header/gadgets/iphone.svg'
import iPadIcon from '../assets/icons/header/gadgets/ipad.svg'
import iMacIcon from '../assets/icons/header/gadgets/macbook.svg'
import watchIcon from '../assets/icons/header/gadgets/applewatch.svg'
import gadgetsIcon from '../assets/icons/header/gadgets/airpods.svg'

export default {
    props: ['showCatalog'],
    data() {
        return {
            categories: [
                { id: 1, title: 'Смартфоны', image: iPhoneIcon, link: '/ban' },
                { id: 2, title: 'Планшеты', image: iPadIcon, link: '/ban' },
                { id: 3, title: 'Компьютеры', image: iMacIcon, link: '/ban' },
                { id: 4, title: 'Часы', image: watchIcon, link: '/ban' },
                { id: 5, title: 'Акссесуары', image: gadgetsIcon, link: '/ban' },
            ]
        }
    },
    methods: {
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

                <RouterLink @click="showCatalogFunc" class="catalogItem-elem" :to="elem.link">
                    <div class="title">
                        <img :src=elem.image>
                        <p>{{ elem.title }}</p>
                    </div>
                </RouterLink>
            </div>
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

    height: auto;
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
        padding-left: 20px;


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
                            fill: rgb(44,44,44);
                        }
                    }

                    p {
                        font-size: 20px;
                        color: #100E0E;
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
            margin: 10px 20px 10px 0;
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

    @media screen and (max-width: 768px) {
        bottom: 75px;
    }

}

button {
    background: transparent;
    border: none;
    cursor: pointer;
}
</style>