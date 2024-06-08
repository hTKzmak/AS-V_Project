<script>
import { useBucketStore } from '@/stores/BucketStore'
import { RouterLink, RouterView } from 'vue-router'
import { useModalStore } from '@/stores/ModalStore';

export default {
    props: ['showCatalog'],
    data() {
        return {
            activeItem: null
        }
    },
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

        // ф-ия для отображения стилизации для кнопок
        activateItemFunc(id) {
            if (this.activeItem !== id) {
                this.activeItem = id; // Иначе устанавливаем activeItem в значение id
                if (id === 2) {
                    this.modalStore.changeModal('Bucket')
                }
            } else {
                this.activeItem = null; // Если activeItem уже равен id, устанавливаем его в значение null
            }
        }
        // console.log(this.showCatalog)
    },

    //changeHandle() {
    // modalStore.isShown = true
    // modalStore.typeModal.value = 'Bucket'
    // console.log(modalStore.typeModal + ' ' + modalStore.isShown)
    // this.modalStore.changeModal('Bucket')
    // },

    // <div class="menu-item" @click="changeHandle">
    // <RouterLink to="/">
    // <img src="../assets/icons/menu/bag.svg" alt="">
    // корзина
    // </RouterLink>
    // </div>
}
</script>

<template>
    <div class="menu">
        <!-- каталог -->
        <div id="1" class="menu-item" @click="activateItemFunc(1)">
            <button @click="showCatalogFunc">
                <img :class="[activeItem === 1 ? 'activateIcon' : '']" src="../assets/icons/menu/catalog.svg" alt="">
            </button>
        </div>


        <!-- корзина -->
        <div id="2" :class="[activeItem === 2 ? 'menu-item activateBasket' : 'menu-item deactivateBasket']"
            @click="activateItemFunc(2)">
            <button>
                <img :class="[activeItem === 2 ? 'activateIcon' : '']" src="../assets/icons/menu/bag.svg" alt="">
                <div class="basketCount">
                    {{ bucketStore.buckLength }}
                </div>
            </button>
        </div>

        <!-- избранное -->
        <div id="3" class="menu-item" @click="activateItemFunc(3)">
            <RouterLink to="/favourite">
                <img :class="[activeItem === 3 ? 'activateIcon' : '']" src="../assets/icons/menu/heart.svg" alt="">
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss">
.activateIcon {
    filter: brightness(0) saturate(100%) invert(84%) sepia(33%) saturate(3901%) hue-rotate(48deg) brightness(88%) contrast(95%);
}

.deactivateBasket {
    background-color: transparent;

    .basketCount {
        display: none;
    }
}

.activateBasket {
    background-color: #52D116;
    border-radius: 4px;
    position: relative;

    img {
        filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);

        @media screen and (max-width: 768px) {
            filter: brightness(0) saturate(100%) invert(25%) sepia(93%) saturate(2625%) hue-rotate(198deg) brightness(97%) contrast(101%);
        }
    }

    .basketCount {
        position: absolute;
        box-shadow: 0px 4px 4px 0px #00000040 inset;
        padding: 4px 12px;
        border-radius: 32px;
        font-size: 20px;
        color: #FFF;
        right: 4px;

        @media screen and (max-width: 768px) {
            background-color: #52D116;
            padding: 4px 8px;
            font-size: 12px;
            right: 0;
        }
    }

    @media screen and (max-width: 768px) {
        background-color: transparent;
    }
}

.menu {
    display: none;
    width: auto;

    background-color: #FFFFFF;
    box-shadow: 0px -4px 8px 0px #0000000D;


    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 3;

    .menu-item {

        width: 168px;
        padding: 8px 12px;

        a,
        button {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 15px;

            color: #282626;

            &:hover {
                color: #0071E4;

                img {
                    filter: brightness(0) saturate(100%) invert(40%) sepia(58%) saturate(7056%) hue-rotate(198deg) brightness(95%) contrast(101%);
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

        @media screen and (max-width: 768px) {
            width: auto;
            padding: 8px;
        }

    }




    @media screen and (max-width: 1440px) {
        display: flex;
        justify-content: space-around;
    }
}

// &:nth-child(2) {
//     background-color: #52D116;
//     border-radius: 4px;
//     position: relative;

//     img {
//         filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);

//         @media screen and (max-width: 768px) {
//             filter: brightness(0) saturate(100%) invert(25%) sepia(93%) saturate(2625%) hue-rotate(198deg) brightness(97%) contrast(101%);
//         }
//     }

//     .basketCount {
//         position: absolute;
//         box-shadow: 0px 4px 4px 0px #00000040 inset;
//         padding: 4px 12px;
//         border-radius: 32px;
//         font-size: 20px;
//         color: #FFF;
//         right: 4px;

//         @media screen and (max-width: 768px) {
//             background-color: #52D116;
//             padding: 4px 8px;
//             font-size: 12px;
//             right: 0;
//         }
//     }

//     @media screen and (max-width: 768px) {
//         background-color: transparent;
//     }
// }</style>
