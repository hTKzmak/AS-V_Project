<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    props: ['showCatalog'],
    methods: {
        showCatalogFunc() {
            this.$emit('toggle-catalog')
            console.log(this.showCatalog)
        }
    }
}
</script>

<template>
    <div class="menu">
        <div class="menu-item">
            <button @click="showCatalogFunc">
                <img src="../assets/icons/menu/catalog.svg" alt="">
                каталог
            </button>
            <!-- <RouterLink to="/">
                <img src="../assets/icons/menu/catalog.svg" alt="">
                каталог
            </RouterLink> -->
        </div>
        <div class="menu-item">
            <RouterLink to="/">
                <img src="../assets/icons/menu/bag.svg" alt="">
                корзина
            </RouterLink>
        </div>
        <div class="menu-item">
            <RouterLink to="/">
                <img src="../assets/icons/menu/heart.svg" alt="">
                избранное
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss">
.menu {
    display: none;
    width: auto;

    padding-top: 8px;
    padding-bottom: 8px;

    background-color: #FFFFFF;
    box-shadow: 0px -4px 8px 0px #0000000D;


    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    .menu-item {

        a,
        button {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 15px;

            color: #282626;

            &:hover {
                color: #0071E4;
            }

            img {
                @media screen and (max-width: 768px) {
                    display: block;
                    margin: 0 auto;
                }
            }

            @media screen and (max-width: 768px) {
                display: grid;
            }
        }

    }




    @media screen and (max-width: 1440px) {
        display: flex;
        justify-content: space-around;
    }
}
</style>