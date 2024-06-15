<script>
import ButtonElem from '../UI/ButtonElem.vue';
import { useSingleProductStore } from '@/stores/SingleProductStore';
import { useCounterStore } from '@/stores/AppleStore';
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router'
import { useRecentStore } from '@/stores/RecentStore';
import { useBucketStore } from '@/stores/BucketStore';
import { useModalStore } from '@/stores/ModalStore';
import { useCurrentProductStore } from '@/stores/CurrentProductStore';






export default {
    components: {
        ButtonElem
    },
    setup() {
        const recentStore = useRecentStore()
        const singleProductStore = useSingleProductStore()
        const appleStore = useCounterStore()
        const bucketStore = useBucketStore()
        const modalStore = useModalStore()
        const currentProductStore = useCurrentProductStore()


        const route = useRoute()

        let productId = ref(0);

        //------------------------------------ ФУНКЦИОНАЛ ОБНОВЛЕНИЯ КОМПОНЕНТА -------------------------


        // Переменная для хранения ID
        const idForWatch = ref(route.params.id);

        // Следим за изменениями параметра id в маршруте
        watch(
            () => route.params.id,
            (newId, oldId) => {
                idForWatch.value = newId;
                singleProductStore.findProd(idForWatch.value)
                recentStore.addToRecent(singleProductStore.id, singleProductStore.name, singleProductStore.price, singleProductStore.images[0], singleProductStore.rating, singleProductStore.discount_price, singleProductStore.is_available)
            }
        );

        //------------------------------------ ФУНКЦИОНАЛ КНОПОК -------------------------

        function buyInOneClick() {
            currentProductStore.name = singleProductStore.name
            currentProductStore.image = appleStore.BASE_URL + singleProductStore.images[0]
            currentProductStore.price = singleProductStore.price
            currentProductStore.oldPrice = singleProductStore.price
            modalStore.changeModal('oneClick')

        }

        function addToBucket() {
            bucketStore.addToBucket(singleProductStore.id, singleProductStore.name, singleProductStore.price, singleProductStore.discount === null ? singleProductStore.price : singleProductStore.discount, appleStore.BASE_URL + singleProductStore.images[0], 1)
        }

        function buyInCredit() {
            currentProductStore.name = singleProductStore.name
            currentProductStore.image = appleStore.BASE_URL + singleProductStore.images[0]
            currentProductStore.price = singleProductStore.price
            currentProductStore.oldPrice = singleProductStore.price
            modalStore.changeModal('credit')
        }

        //--------------------------------------------------------------------------------


        onMounted(() => {
            productId.value = route.params.id
            console.log(productId.value)
            singleProductStore.findProd(productId.value)
            recentStore.addToRecent(singleProductStore.id, singleProductStore.name, singleProductStore.price, singleProductStore.images[0], singleProductStore.rating, singleProductStore.discount_price, singleProductStore.is_available)
        }
        )
        return {
            singleProductStore, appleStore, productId, bucketStore,
            modalStore, currentProductStore, buyInOneClick, addToBucket, buyInCredit,
            // characteristics нужны были для модалки, чтобы при наведении на них появлялсись списки товаров (на всякий оставлю, тем более, они нужны для показа категорий товаров)
            characteristics: singleProductStore.characteristics
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="productInfo">
            <h1 id="mobileTitle">{{ singleProductStore.name }}</h1>
            <div class="productImage">
                <img :src="appleStore.BASE_URL + singleProductStore.images[0]" alt="product image">
                <nav>
                    <ul>
                        <li v-for="image in singleProductStore.images" :key="image">
                            <button>
                                <img :src="appleStore.BASE_URL + image" alt="product image">
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="productData">
                <h1>{{ singleProductStore.name }}</h1>

                <div class="productData-optionsAndOrder">

                    <div class="productData-options">
                        <nav>
                            <ul>
                                <li>
                                    <button id="color">
                                        <img src="../../assets/img.png" alt="product image">
                                    </button>
                                </li>
                                <li>
                                    <button id="color">
                                        <img src="../../assets/img.png" alt="product image">
                                    </button>
                                </li>
                            </ul>
                        </nav>

                        <h2 id="title_memory">Объем памяти</h2>

                        <nav>
                            <ul>
                                <li>
                                    <button id="memory">
                                        128GB
                                    </button>
                                </li>
                                <li>
                                    <button id="memory">
                                        256GB
                                    </button>
                                </li>
                            </ul>
                        </nav>

                        <h2 id="title_characteristic">Характеристики</h2>

                        <div class="characteristicsList">
                            <div class="characteristicItem" v-for="elem in singleProductStore.characteristics"
                                :key="elem.characteristic">
                                <p>{{ elem.characteristic }}</p>
                                <p v-if="elem.unit_type != 'значение'">{{ elem.value }} {{ elem.unit_type }}</p>
                                <p v-else>{{ elem.value }}</p>
                            </div>
                            <RouterLink to="/ban">Смотреть все характеристики</RouterLink>
                        </div>
                    </div>

                    <div class="productData-order">
                        <div class="product-info">
                            <h4>{{ singleProductStore.discount_price ? singleProductStore.discount_price + ' ' + '₽' :
                                null}}</h4>
                            <div class="existence">
                                <div class="existence-sign"></div>
                                <p>Есть в наличии</p>
                            </div>
                        </div>
                        <h3>{{ singleProductStore.price }} ₽</h3>
                        <ButtonElem v-if="bucketStore.bucket.find((e) => e.id === singleProductStore.id) == undefined"
                            title="Добавить в корзину" addedItemStyle="false" :action="addToBucket" />
                        <ButtonElem v-if="bucketStore.bucket.find((e) => e.id === singleProductStore.id) != undefined"
                            title="В корзине" img='/inCart.svg' addedItemStyle='true' />
                        <p>Купить в 1 клик</p>
                        <div class="buyInOneClick">
                            <input type="tel" name="#" id="#" placeholder="+7 900 654 32 45">
                            <ButtonElem title="Купить" addedItemStyle="false" :action="buyInOneClick" />
                        </div>

                        <nav>
                            <ul>
                                <li>
                                    <button id="discountBtn" @click="buyInCredit">
                                        <img src="../../assets/icons/discount.svg" alt="#">
                                        Купить в кредит
                                    </button>
                                </li>
                                <li>
                                    <img src="../../assets/icons/bike.svg" alt="#">
                                    <div class="title">
                                        <p>Доставим в Санкт-Петербурге</p>
                                        <span>сегодня до 15:16</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="../../assets/icons/bag.svg" alt="#">
                                    <div class="title">
                                        <p>Самовызов</p>
                                        <span>Лиговский проспект 33/35</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="../../assets/icons/truck.svg" alt="#">
                                    <div class="title">
                                        <p>Доставим по России</p>
                                        <span>до 22.12.2022</span>
                                    </div>
                                </li>
                            </ul>
                        </nav>

                    </div>

                    <div class="characteristics_mobile">
                        <h2 id="title_characteristic">Характеристики</h2>

                        <div class="characteristicsList">
                            <div class="characteristicItem" v-for="elem in singleProductStore.characteristics"
                                :key="elem.characteristic">
                                <p>{{ elem.characteristic }}</p>
                                <p v-if="elem.unit_type != 'значение'">{{ elem.value }} {{ elem.unit_type }}</p>
                                <p v-else>{{ elem.value }}</p>
                            </div>
                            <RouterLink to="/ban">Смотреть все характеристики</RouterLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
#mobileTitle {
    display: none;

    @media screen and (max-width: 1440px) {
        display: flex;
        justify-content: center;
    }
}

.productInfo {

    display: flex;
    justify-content: space-between;
    align-items: start;


    .productImage {

        margin-top: 120px;
        width: fit-content;

        img {
            width: 400px;
            margin: 0 auto;
            display: flex;

            @media screen and (min-width: 769px) and (max-width: 1440px) {
                width: 600px;
            }

            @media screen and (max-width: 768px) {
                width: 288px;
            }
        }

        nav {

            display: flex;
            justify-content: center;

            ul {

                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                li {


                    button {

                        border-radius: 8px;
                        transition: 0.3s;
                        border: 2px solid transparent;

                        img {
                            width: 100px;
                            height: 100px;

                            @media screen and (max-width: 768px) {
                                width: 72px;
                                height: 72px;
                            }
                        }

                        &:hover {
                            border: 2px solid #1877F2;
                        }

                    }
                }

                @media screen and (max-width: 1440px) {
                    margin: 0 auto;
                }
            }

            @media screen and (max-width: 768px) {
                margin: 0 auto;
                width: 21rem;
            }
        }

        @media screen and (max-width: 1440px) {
            margin: 0 auto;
        }

    }

    .productData {

        margin-top: 120px;
        width: 55%;

        h1 {
            font-family: "SF Pro Display Black", sans-serif;
            margin: 0;
            text-align: start;

            @media screen and (max-width: 1440px) {
                display: none;
            }
        }


        .productData-optionsAndOrder {

            display: flex;
            justify-content: space-between;
            gap: 63px;

            .productData-options {

                margin-top: 50px;

                h2 {
                    margin-left: 0;
                }

                nav>ul {

                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;

                    li {
                        button {

                            border-radius: 8px;
                            transition: 0.2s;
                            border: 2px solid transparent;

                            &:hover {
                                border: 2px solid #1877F2;
                            }
                        }
                    }
                }

                h2 {
                    font-size: 18px;
                    font-family: "SF Pro Display Medium", sans-serif;
                }

                #title_characteristic {
                    @media screen and (max-width: 768px) {
                        display: none;
                    }
                }

                .characteristicsList {

                    width: 320px;
                    display: grid;

                    .characteristicItem {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 8px;

                        p {

                            font-size: 16px;
                            margin-top: 6px;
                            margin-bottom: 6px;

                            &:first-child {
                                color: #121212B2;
                            }
                        }
                    }

                    a {
                        margin-top: 16px;
                    }

                    @media screen and (max-width: 768px) {
                        display: none;
                    }

                }

                @media screen and (max-width: 1440px) {
                    margin-top: 0;
                }
            }

            .productData-order {

                background-color: #12121205;

                width: 270px;
                border-radius: 16px;

                padding: 24px;
                margin-top: 30px;

                .product-info {

                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    h4 {
                        text-decoration: line-through;
                        font-size: 20px;
                        margin: 0;
                        font-weight: 500;
                    }

                    .existence {

                        display: flex;
                        gap: 8px;
                        align-items: center;

                        .existence-sign {
                            width: 16px;
                            height: 16px;
                            background-color: #52D116;
                            border-radius: 100px;
                            margin-right: 2px;
                        }

                        p {
                            margin: 0;
                        }
                    }
                }

                h3 {
                    font-size: 32px;
                    margin-top: 4px;
                    margin-bottom: 12px;
                    font-weight: 700;
                }

                .btnStyle {
                    font-family: 'SF Pro Display Bold', sans-serif;
                    width: 100%;
                }

                .buyInOneClick {

                    position: relative;
                    border-radius: 8px;
                    border: 1px solid #1212124D;

                    input {
                        font-size: 16px;
                        padding: 16px 0 16px 24px;
                        width: 50%;

                        outline: none;
                        border: none;
                        background: transparent;
                    }

                    button {
                        position: absolute;
                        font-size: 16px;
                        right: 16px;
                        top: 5px;
                        width: auto;

                        border-radius: 8px;
                        padding: 10px 8px;

                        img {
                            display: none;
                        }
                    }
                }

                nav {
                    ul {
                        display: grid;
                        row-gap: 14px;

                        li {
                            display: flex;
                            gap: 12px;
                            align-items: start;

                            img {
                                width: 24px;
                            }

                            .title {

                                p,
                                span {
                                    margin: 0;
                                }

                                span {
                                    color: #1877F2;
                                }
                            }

                            #discountBtn {
                                display: flex;
                                align-items: center;
                                padding: 0;

                                gap: 12px;
                                font-size: 16px;

                                color: #1877F2;
                            }
                        }
                    }
                }




                @media screen and (max-width: 768px) {
                    width: 22rem;
                }

            }

            .characteristics_mobile {

                display: none;

                #title_characteristic {
                    display: none;
                    font-size: 18px;
                    margin-top: 62px;

                    @media screen and (max-width: 768px) {
                        display: flex;
                    }
                }

                .characteristicsList {

                    width: 320px;
                    display: none;

                    .characteristicItem {

                        p {

                            font-size: 16px;
                            margin-top: 6px;
                            margin-bottom: 6px;

                            &:first-child {
                                color: #121212B2;
                            }
                        }
                    }

                    a {
                        margin-top: 16px;
                    }

                    @media screen and (max-width: 768px) {
                        display: grid;
                    }

                }

                @media screen and (max-width: 768px) {
                    display: grid;
                }
            }

            @media screen and (max-width: 768px) {
                display: grid;
                gap: 0;
            }
        }

        @media screen and (max-width: 1440px) {
            margin-top: 0;
            width: auto;
        }

    }

    #color {
        img {
            width: 80px;
            height: 80px;
        }
    }

    #memory {
        padding: 16px;
        font-family: "SF Pro Display Medium", sans-serif;
        font-size: 16px;

        &:focus-within {
            background-color: #1877F2;
            color: #FFF;
        }
    }

    @media screen and (max-width: 1440px) {
        display: grid;
        justify-content: center;
        margin: 80px 0;
    }

}
</style>