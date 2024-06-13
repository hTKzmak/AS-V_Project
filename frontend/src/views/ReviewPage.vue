<script>
import RecSlider from '../components/ReviewPage/RecSlider.vue'

export default {
    components: { RecSlider },
    data() {
        return {
            reviewData: [
                {
                    id: 1, name: 'Эдуард', item: 'iPhone 14', text: 'Понравилось всё. Ребята в магазине работают шустро, за пару минут оформили, и уже через 3 часа телефон был у меня на руках. При получении курьер помог проверить телефон, и поклеить защитное стекло, так же покупал акционный набор аксессуаров, и их качество, как и телефона оказалось на высоте. Всё работает, всё быстро и доступно, 5/5.'
                },
                {
                    id: 2, name: 'Эдуард', item: 'iPhone 14', text: 'Понравилось всё. Ребята в магазине работают шустро, за пару минут оформили, и уже через 3 часа телефон был у меня на руках. При получении курьер помог проверить телефон, и поклеить защитное стекло, так же покупал акционный набор аксессуаров, и их качество, как и телефона оказалось на высоте. Всё работает, всё быстро и доступно, 5/5.'
                },
                {
                    id: 3, name: 'Эдуард', item: 'iPhone 14', text: 'Понравилось всё. Ребята в магазине работают шустро, за пару минут оформили, и уже через 3 часа телефон был у меня на руках. При получении курьер помог проверить телефон, и поклеить защитное стекло, так же покупал акционный набор аксессуаров, и их качество, как и телефона оказалось на высоте. Всё работает, всё быстро и доступно, 5/5.'
                },
                {
                    id: 4, name: 'Эдуард', item: 'iPhone 14', text: 'Понравилось всё. Ребята в магазине работают шустро, за пару минут оформили, и уже через 3 часа телефон был у меня на руках. При получении курьер помог проверить телефон, и поклеить защитное стекло, так же покупал акционный набор аксессуаров, и их качество, как и телефона оказалось на высоте. Всё работает, всё быстро и доступно, 5/5.'
                },
                {
                    id: 5, name: 'Эдуард', item: 'iPhone 14', text: 'Понравилось всё. Ребята в магазине работают шустро, за пару минут оформили, и уже через 3 часа телефон был у меня на руках. При получении курьер помог проверить телефон, и поклеить защитное стекло, так же покупал акционный набор аксессуаров, и их качество, как и телефона оказалось на высоте. Всё работает, всё быстро и доступно, 5/5.'
                },
                {
                    id: 6, name: 'Эдуард', item: 'iPhone 14', text: 'Понравилось всё. Ребята в магазине работают шустро, за пару минут оформили, и уже через 3 часа телефон был у меня на руках. При получении курьер помог проверить телефон, и поклеить защитное стекло, так же покупал акционный набор аксессуаров, и их качество, как и телефона оказалось на высоте. Всё работает, всё быстро и доступно, 5/5.'
                },
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="review-content">

            <div class="title">
                <h1>Отзывы о покупках <span>модель</span></h1>
                <div class="custom-select">
                    <select name="" id="">
                        <option value="All">Все модели</option>
                    </select>
                </div>
            </div>

            <div class="reviews-list">
                <div class="review-item" v-for="elem in reviewData">
                    <div class="name-rating">
                        <span id="name">{{ elem.name }}</span>
                        <div class="star-rating">
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star missed"></span>
                        </div>
                    </div>
                    <span id="item">Отзыв об {{ elem.item }}</span>
                    <p>{{ elem.text }}</p>
                </div>
            </div>

            тут пагинация :P

            <div class="recomendationWindow">
                <div class="rec-head">
                    <img src="../assets/icons/review/heart_like.svg" alt="#">
                    <div class="title">
                        <span id="rec-title">Люди рекомендуют</span>
                        <p>Всем это понравилось. <br> Присмотритесь и вы</p>
                    </div>
                </div>
                <RecSlider />
            </div>

        </div>
    </div>
</template>

<style lang="scss">
.review-content {

    margin-top: 32px;

    position: relative;

    .title {

        display: flex;
        align-items: center;
        gap: 24px;

        h1 {
            text-align: start;
            margin: 0;

            font-size: 40px;

            span {
                font-size: 24px;
                color: #282626;
                font-weight: 600;

                margin-left: 16px;
                margin-right: 24px;

                @media screen and (max-width: 1440px) {
                    margin-left: 4px;
                    margin-right: 0;
                }

                @media screen and (max-width: 768px) {
                    display: none;
                }
            }

            @media screen and (max-width: 1440px) {
                font-size: 32px;
            }

            @media screen and (max-width: 768px) {
                font-size: 20px;
                margin-bottom: 8px;
            }
        }

        @media screen and (max-width: 768px) {
            align-items: start;
            gap: 0;
            flex-direction: column;
        }
    }

    .reviews-list {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: 32px 0;

        .review-item {

            display: flex;
            flex-direction: column;

            width: 400px;

            .name-rating {

                display: flex;
                align-items: end;
                gap: 8px;

                #name {
                    font-size: 24px;
                    font-weight: 600;

                    @media screen and (max-width: 768px) {
                        font-size: 16px;
                    }
                }
            }

            #item {
                color: #706E6E;
                font-size: 16px;
                margin: 12px 0;

                @media screen and (max-width: 768px) {
                    font-size: 13px;
                }
            }

            p {
                margin: 0;

                @media screen and (max-width: 768px) {
                    font-size: 14px;
                }
            }

            @media screen and (max-width: 1440px) {
                width: 27rem;
            }

            @media screen and (max-width: 768px) {
                width: auto;
            }
        }

        @media screen and (max-width: 768px) {
            margin-top: 24px;
        }
    }

    @media screen and (max-width: 1440px) {
        margin-top: 75px;
    }
}

.star-rating {
    display: flex;
    align-items: center;
    gap: 2px;
    font-size: 20px;

    .checked {
        color: #FFAD31;
    }

    .missed {
        color: #DBDBDB;
    }
}

.custom-select {
    width: 280px;
    position: relative;

    select {
        appearance: none;
        /*  safari  */
        -webkit-appearance: none;
        /*  other styles for aesthetics */

        width: 100%;
        font-size: 1.15rem;
        padding: 8px 16px;
        background-color: #F9F9F9;
        border: none;

        color: #100E0E;
        cursor: pointer;
        border-radius: 8px;
        font-size: 16px;
    }
}


.custom-select::after {
    content: "";
    position: absolute;
    right: 1rem;
    pointer-events: none;

    border: solid #706e6e;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
}

.custom-select::after {
    top: 30%;

    border-color: #0071e4;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}


.recomendationWindow {
    position: absolute;
    background-color: #F3F8FF;
    border-radius: 32px;
    top: 100px;
    right: 0;
    padding: 24px;

    width: 394px;

    .rec-head {
        display: flex;
        align-items: start;
        justify-content: start;
        gap: 16px;
        margin-bottom: 16px;

        .title {
            display: grid;
            text-align: start;
            gap: 8px;

            #rec-title {
                font-size: 24px;
                font-weight: 600;

                @media screen and (max-width: 768px) {
                    font-size: 20px;
                }
            }

            p {
                margin: 0;
            }

        }

        img {
            @media screen and (max-width: 768px) {
                width: 32px;
            }
        }

        @media screen and (max-width: 768px) {
            gap: 5px;
            justify-content: start;
        }
    }

    @media screen and (max-width: 1440px) {
        position: initial;
        top: 0;
        right: 0;

        width: inherit;
    }
}
</style>