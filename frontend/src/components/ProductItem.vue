<script>
// import ButtonElem from './UI/ButtonElem.vue';

// export default {
//   components: {
//     ButtonElem
//   }
// }
</script>

<template>
    <div class="product-item">
        <div class="rating-and-settings">
            <div class="star-rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <a href="#!">(14)</a>
            </div>
            <div class="settings">
                <button>
                    <img src="../assets/icons/header/heart.svg">
                </button>
                <button>
                    <img src="../assets/icons/header/filters.svg">
                </button>
            </div>
        </div>

        <h3>Apple iPhone XS Max 256 ГБ золотой</h3>
        <img class="product-image" src="../assets/img.png" alt="img">

        <div class="product-info">
            <div class="existence">
                <div class="existence-sign"></div>
                <p>Есть в наличии</p>
            </div>
            <p>Гарантия 1 год</p>
        </div>

        <div class="price-info">
            <h4>137 900 ₽</h4>
            <button class="buttonElem buttonCart">137 900 ₽<img src="../assets/icons/cart.svg"></button>
            <h3>137 900 ₽</h3>
        </div>

        <button class="buttonElem buttonCart"><img src="../assets/icons/cart.svg" alt="">в корзину</button>

        <div class="other">
            <a href="#!">Хочу дешевле</a>
            <a class="oneCLick" href="#!">Купить в 1 клик</a>
        </div>
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
    }

    .product-image {
        width: inherit;
        height: 300px;
    }

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

        .buttonCart {
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

    .buttonCart {
        padding: 20px;
        border-radius: 8px;

        @media screen and (max-width: 1440px) {
            display: none;
        }
    }

    @media screen and (max-width: 1440px) {
        width: 259px;
    }
}
</style>