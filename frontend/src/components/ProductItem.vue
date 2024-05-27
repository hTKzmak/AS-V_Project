<script>
import ButtonElem from './UI/ButtonElem.vue';

export default {
    components: {
        ButtonElem
    },
    props: ['id', 'title', 'price', 'image', 'rating', 'discount']
}
</script>

<template>
    <div class="product-item" :id='id'>
        <div class="rating-and-settings">
            <div class="star-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star missed"></span>
                <a href="#!">(14)</a>
            </div>
            <div class="settings">
                <button>
                    <img src="../assets/icons/header/heart.svg">
                </button>
            </div>
        </div>

        <h3>{{title}}</h3>
        <img class="product-image" :src="image" alt="img">

        <div class="product-item-info">
            <div class="product-info">
                <div class="existence">
                    <div class="existence-sign"></div>
                    <p>Есть в наличии</p>
                </div>
                <p>Гарантия 1 год</p>
            </div>

            <div class="price-info">
                <h4>{{ price }} ₽</h4>
                <!-- мобильная версия кнопки для покупки  -->
                <ButtonElem :title="price + ' ' + '₽'" img='/cart.svg' addedItemStyle='false'/>

                <!-- мобильная версия кнопки для показа, что товар положен в корзину  -->
                <!-- <button class="buttonElem buttonCartAdded">137 900 ₽<img src="../assets/icons/cart-added.svg"></button> -->
                <h3>{{ price }} ₽</h3>
            </div>

            <!-- ПК версия кнопки для покупки  -->
            <ButtonElem title="в корзину" img='/cart.svg' addedItemStyle='false' />

            <!-- ПК версия кнопки для показа, что товар положен в корзину  -->
            <!-- <button class="buttonElem buttonCartAdded"><img src="../assets/icons/cart-added.svg">в корзине</button> -->

            <div class="other">
                <a href="#!">Хочу дешевле</a>
                <a class="oneCLick" href="#!">Купить в 1 клик</a>
            </div>
        </div>

        <!-- если товара нет в наличии -->

        <!-- <div class="absent">
            <div class="product-info">
                <div class="existence">
                    <div class="absent-sign"></div>
                    <p>Ожидается поступление</p>
                </div>
            </div>
            <p class="text-info">Мы можем сообщить вам, когда товар появится в наличии</p>
            <button class="buttonElem">сообщить о поступлении</button>
        </div> -->

    </div>
</template>

<style lang="scss">
.product-item {

    // width: 282px;
    width: 260px;
    box-shadow: 0px 4px 8px 0px #0000000D;
    padding: 20px 10px;
    border-radius: 16px;

    .rating-and-settings {

        display: flex;
        justify-content: space-between;
        align-items: center;

        .star-rating {
            display: flex;
            align-items: center;
            gap: 2px;

            .checked {
                color: #FFAD31;
            }

            .missed {
                color: #DBDBDB;
            }

            a {
                margin-left: 8px;
            }
        }

        .settings {
            button {
                border: none;
                background: transparent;

                img {
                    width: 25px;
                }
            }
        }
    }

    h3 {
        font-size: 24px;
        text-align: center;
        margin-top: 9px;
        margin-bottom: 9px;

        @media screen and (max-width: 1440px) {
            font-weight: 700;
        }
    }

    .product-image {
        width: inherit;
        height: 300px;
    }

    .product-item-info {

        // display: none;

        width: inherit;

        .product-info,
        .existence {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
            color: #706E6E;

            .existence-sign {
                width: 16px;
                height: 16px;
                background-color: #52D116;
                border-radius: 100px;
                margin-right: 2px;
            }
        }

        .price-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;

            h4 {
                text-decoration: line-through;
                font-size: 20px;
                color: #878787;
                margin: 0;
            }

            h3 {
                font-size: 32px;
                margin: 0;

                @media screen and (max-width: 1440px) {
                    display: none;
                }
            }

            // .buttonCart,
            // .buttonCartAdded {
            //     display: none;

            //     @media screen and (max-width: 1440px) {
            //         display: flex;
            //     }
            // }

            button {
                display: none;

                @media screen and (max-width: 1440px) {
                    display: flex;
                }
            }
        }

        .other {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;

            .oneCLick {
                font-size: 16px;
                color: #706E6E;
            }

        }

        // .buttonCart,
        // .buttonCartAdded {
        //     padding: 20px;
        //     border-radius: 8px;

        //     @media screen and (max-width: 1440px) {
        //         display: none;
        //     }
        // }

        button {
            padding: 16px;
            border-radius: 8px;

            @media screen and (max-width: 1440px) {
                display: none;
            }
        }

        .buttonCartAdded {
            background-color: #6FD91C;
        }

        @media screen and (max-width: 1440px) {
            width: 259px;
        }
    }


    .absent {
        width: inherit;
        // display: none;

        .product-info,
        .existence {
            display: flex;
            justify-content: left;
            gap: 2px;
            align-items: center;
            font-size: 16px;
            color: #706E6E;

            .absent-sign {
                width: 16px;
                height: 16px;
                background-color: #0071E4;
                border-radius: 100px;
                margin-right: 2px;
            }

            @media screen and (max-width: 1440px) {
                justify-content: center;
            }

        }

        .text-info {
            margin: 0;
            color: #878787;
            margin-left: 18px;
        }

        button {
            border: 1px solid #0071E4;
            color: #0071E4;
            background: transparent;

            margin-top: 16px;

            padding: 17px 10px;

            font-size: 18px;

            border-radius: 8px;

            @media screen and (max-width: 1440px) {
                border: none;
                padding: 0;
            }
        }

    }

    @media screen and (max-width: 1440px) {
        text-align: center;
    }

}
</style>