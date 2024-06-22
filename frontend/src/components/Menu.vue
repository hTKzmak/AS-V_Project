<script>
import { useBucketStore } from '@/stores/BucketStore'
import { useModalStore } from '@/stores/ModalStore'
import { RouterLink, RouterView } from 'vue-router'

export default {
    props: ['showCatalog'],
    setup() {
        const bucketStore = useBucketStore()
        const modalStore = useModalStore()
        return {
            bucketStore, modalStore
        }
    },
    methods: {
        // ф-ия для отображения CatalogTab (это отдельный компонент для мобильной и планшетной версии каталогов) 
        showCatalogFunc() {
            this.$emit('toggle-catalog')
        },

        showBasketFunc(){
            this.modalStore.changeModal('Bucket')
        }
    }
}
</script>

<template>
    <div class="menu">
        <div class="menu-item">
            <button @click="showCatalogFunc">
                <img src="../assets/icons/menu/catalog.svg" alt="#">
                каталог
            </button>
        </div>
        <div class="menu-item">
            <button @click="showBasketFunc">
                <img src="../assets/icons/menu/bag.svg" alt="#">
                корзина
            </button>
        </div>
        <div class="menu-item">
            <RouterLink to="/favourite">
                <img src="../assets/icons/menu/heart.svg" alt="#">
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

    z-index: 3;

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

            &:focus-within {
                color: #282626;

                img{
                    filter: brightness(0) saturate(100%) invert(61%) sepia(76%) saturate(654%) hue-rotate(54deg) brightness(97%) contrast(89%);
                }
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
