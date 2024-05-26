<script>
import { RouterLink } from 'vue-router'
import ButtonElem from '../UI/ButtonElem.vue';

export default {
    components: {
        ButtonElem
    },
    setup() {
        return {
            // characteristics нужны были для модалки, чтобы при наведении на них появлялсись списки товаров (на всякий оставлю, тем более, они нужны для показа категорий товаров)
            characteristics: [
                { id: 1, title: 'Тип', text: 'Очки виртуальной реальности' },
                { id: 2, title: 'Цвет', text: 'Белый' },
                { id: 3, title: 'Разрешение экрана', text: '3840x2160' },
                { id: 4, title: 'Угол обзора', text: '90°' },
                { id: 5, title: 'Питание', text: 'От аккумулятора' },
                { id: 6, title: 'Бренд', text: 'Oculus' },
                { id: 7, title: 'Страна производитель', text: 'Китай' },
            ]
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="productInfo">
            <h1 id="mobileTitle">Oculus Quest 2 White 128GB</h1>
            <div class="productImage">
                <img src="../../assets/img.png" alt="product image">
                <nav>
                    <ul>
                        <li>
                            <button>
                                <img src="../../assets/img.png" alt="product image">
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src="../../assets/img.png" alt="product image">
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src="../../assets/img.png" alt="product image">
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src="../../assets/img.png" alt="product image">
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="productData">
                <h1>Oculus Quest 2 White 128GB</h1>

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
                            <div class="characteristicItem" v-for="elem in characteristics">
                                <p>{{ elem.title }}</p>
                                <p>{{ elem.text }}</p>
                            </div>
                            <RouterLink to="/ban">Смотреть все характеристики</RouterLink>
                        </div>
                    </div>

                    <div class="productData-order">
                        <div class="product-info">
                            <h4>48 000 ₽</h4>
                            <div class="existence">
                                <div class="existence-sign"></div>
                                <p>Есть в наличии</p>
                            </div>
                        </div>
                        <h3>44 290 ₽</h3>
                        <ButtonElem title="Добавить в корзину" addedItemStyle="false" />
                        <p>Купить в 1 клик</p>
                        <div class="buyInOneClick">
                            <input type="tel" name="#" id="#" placeholder="+7 900 654 32 45">
                            <ButtonElem title="Купить" addedItemStyle="false" />
                        </div>

                        <nav>
                            <ul>
                                <li>
                                    <button id="discountBtn">
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

                        <h2 id="title_characteristic">Характеристики</h2>

                        <div class="characteristicsList">
                            <div class="characteristicItem" v-for="elem in characteristics">
                                <p>{{ elem.title }}</p>
                                <p>{{ elem.text }}</p>
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

                width: 270px;
                margin-top: 30px;

                .product-info {

                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    h4 {
                        text-decoration: line-through;
                        font-size: 20px;
                        margin: 0;
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
                    width: 22rem;
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