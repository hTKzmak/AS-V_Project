<script>
import PaginationComponent from '../components/PaginationComponent.vue';
import RecSlider from '../components/ReviewPage/RecSlider.vue'
import { useReviewStore } from '@/stores/ReviewStore';

export default {
    components: { RecSlider, PaginationComponent },
    data() {
        return {
            reviewStore: useReviewStore()
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="review-content">

            <div class="title">
                <h1>Отзывы о покупках</h1>
            </div>

            <div class="reviews-list">
                <div class="review-item" v-for="elem in reviewStore.paginatedData" :key="elem">
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


            <PaginationComponent page="review" />


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

    .pag {
        @media screen and (max-width: 1440px) {
            text-align: center;
        }
    }

    .title {

        display: flex;
        align-items: center;
        gap: 24px;

        h1 {
            text-align: start;
            margin: 0;

            font-size: 40px;

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

        margin-top: 24px;

        width: inherit;
    }
}
</style>