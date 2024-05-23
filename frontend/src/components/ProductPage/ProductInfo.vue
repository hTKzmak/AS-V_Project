<script>
export default {
    setup() {
        return {
            // characteristics нужны были для модалки, чтобы при наведении на них появлялсись списки товаров (на всякий оставлю, тем более, они нужны для показа категорий товаров)
            characteristics: [
                { id: 1, title: 'Тип', image: iPhoneIcon },
                { id: 2, title: 'Цвет', image: iPadIcon },
                { id: 3, title: 'Разрешение экрана', image: iMacIcon },
                { id: 4, title: 'Угол обзора', image: watchIcon },
                { id: 5, title: 'Питание', image: gadgetsIcon },
                { id: 6, title: 'Бренд', image: toolsIcon },
                { id: 7, title: 'Страна производитель', image: toolsIcon },
            ]
        }
    },
}
</script>

<template>
    <div class="container productInfo">
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

                <h2>Объем памяти</h2>

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

                <h2>Характеристики</h2>

                <div class="characteristicsList">
                    <div class="characteristicItem">
                        <p>Тип</p>
                        <p>Очки виртуальной реальности</p>
                    </div>
                </div>
            </div>

            <div class="productData-order"></div>
        </div>
    </div>
</template>

<style lang="scss">
.productInfo {

    display: flex;
    justify-content: space-between;
    align-items: start;


    .productImage {

        margin-top: 120px;
        width: fit-content;

        img {
            width: 100%;
        }

        nav>ul {

            display: flex;
            justify-content: space-between;

            li {


                button {

                    border-radius: 8px;
                    transition: 0.3s;
                    border: 2px solid transparent;

                    img {
                        width: 100px;
                        height: 100px;
                    }

                    &:hover {
                        border: 2px solid #1877F2;
                    }

                }
            }
        }
    }

    .productData {

        margin-top: 120px;

        h1 {
            font-family: "SF Pro Display Black", sans-serif;
            margin: 0;
        }

        .productData-options {
            nav>ul {

                display: flex;
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

            .characteristicsList {

                width: 320px;

                .characteristicItem {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 8px;

                    p {

                        font-size: 16px;

                        &:first-child {
                            color: #121212B2;
                        }
                    }
                }
            }
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
}
</style>