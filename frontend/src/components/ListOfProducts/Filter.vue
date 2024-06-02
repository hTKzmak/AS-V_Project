<script>
import DualRangeInput from 'https://unpkg.com/dual-range-input@latest/script.js';

import speedImg from '../../components/ProductPage/assets/icons/speed.svg';
import cashImg from '../../components/ProductPage/assets/icons/cash.svg';
import bankImg from '../../components/ProductPage/assets/icons/bank.svg';
import sequrityImg from '../../components/ProductPage/assets/icons/sequrity.svg';


export default {
    data() {
        return {
            rostlerData: [
                {
                    id: 1, title: 'title', list: [
                        { id: 1, text: 'text' },
                        { id: 2, text: 'text' },
                        { id: 3, text: 'text' },
                    ]
                },
                {
                    id: 2, title: 'title', list: [
                        { id: 1, text: 'text' },
                        { id: 2, text: 'text' },
                        { id: 3, text: 'text' },
                        { id: 4, text: 'text' },
                        { id: 5, text: 'text' },
                    ]
                },
            ],

            advantagesData: [
                { id: 1, img: cashImg, title: 'Оплата', text: 'Все виды наличного и безналичного расчета' },
                { id: 2, img: speedImg, title: 'Доставка за 2 часа', text: 'Быстро и бесплатно доставляем все заказы по Москве' },
                { id: 3, img: bankImg, title: 'Кредит', text: 'Выгодные кредитные предложения от самых популярных банков' },
                { id: 4, img: sequrityImg, title: 'Гарантия', text: 'Предоставляем целый год сервисного обслуживания' },
            ],

            // выбранные списки, в которых хранятся id выбранных нами категории (нужен для отображения выьранного фильтра)
            choosenRoster: [],
            // отображение чек-боксов выбранного нами фильтра
            showCheckboxList: {},

        }
    },
    methods: {
        showCheckboxListFunc(elem) {
            this.showCheckboxList[elem.id] = !this.showCheckboxList[elem.id];
            if (this.showCheckboxList[elem.id] === true && !this.choosenRoster.includes(elem.id)) {
                this.choosenRoster.push(elem.id)
            }
            else {
                const filteredNumbers = this.choosenRoster.filter((number) => number !== elem.id);
                this.choosenRoster = filteredNumbers
            }

            console.log(this.choosenRoster)
        }
    }
}
</script>

<template>
    <div class="filter-desktop">
        <div class="filter-info">
            <div class="price-range">
                <h3>Цена</h3>
                <input type="range" name="price-range">
                <div class="price-count">
                    <input type="text" name="price-min-count" placeholder="от 33 400₽">
                    <input type="text" name="price-max-count" placeholder="до 127 400₽">
                </div>
            </div>
            <div class="rosters-list">
                <div class="roster-item" v-for="elem in rostlerData">
                    <div class="rostler-item-main" :id="elem.id" @click="showCheckboxListFunc(elem)">
                        <div class="title">
                            <p>{{ elem.title }}</p>
                        </div>
                        <button>
                            <i v-if="!showCheckboxList[elem.id]" class="arrow down"></i>
                            <i v-else class="arrow up"></i>
                        </button>
                    </div>
                    <ul v-show="showCheckboxList[elem.id]" class="rostler-item-list" v-for="index in elem.list"
                        :id="index.id">
                        <li>
                            <input type="checkbox" name="" id="">
                            <p>{{ index.text }}</p>
                        </li>
                    </ul>
                </div>

            </div>

            <!-- тут преимущества (бери готовый с list of products page) -->
            <div class="advantages-filter">
                <div class="advantage-filter-item" v-for="elem in advantagesData" :id=elem.id>
                    <img :src=elem.img alt="#">
                    <div class="title">
                        <h3>{{ elem.title }}</h3>
                        <p>{{ elem.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.filter-desktop {
    background-color: #F9F9F9;
    // width: 60rem;

    .filter-info {
        padding: 32px 24px 32px 140px;

        .price-range {

            h3 {
                margin: 0 0 16px 0;
                font-size: 20px;
                font-weight: 500;
            }

            input[type="range"] {
                width: 100%;
            }

            .price-count {
                display: flex;
                gap: 52px;

                input[type="text"] {
                    width: 95px;
                    padding: 10px 16px;

                    background-color: #FFF;

                    border: 1px solid #E7E7E7;
                    border-radius: 8px;

                    text-align: center;

                    font-size: 16px;
                }
            }



        }

        .advantages-filter {

            display: grid;
            gap: 8px;
            margin-top: 100px;

            .advantage-filter-item {

                background-color: #fff;
                border-radius: 8px;
                padding: 16px 24px;

                display: flex;
                gap: 8px;
                align-items: center;

                img{
                    width: 45px;
                }

                .title{
                    h3, p{
                        margin: 0;
                    }

                    h3{
                        font-weight: 700;
                    }

                    p{
                        font-size: 14px;
                        color: #585656;
                        margin-top: 4px;
                    }
                }
            }
        }

        .rosters-list {

            margin-top: 24px;
            display: grid;
            row-gap: 8px;

            .roster-item {

                .rostler-item-main {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    padding-left: 24px;
                    padding-right: 24px;

                    background-color: #FFFFFF;
                    border-radius: 8px;
                }


                .rostler-item-list {

                    margin: 0;
                    padding-left: 24px;
                    padding-right: 24px;

                    background-color: #FFFFFF;

                    li {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        height: 45px;

                        input[type="checkbox"] {
                            width: 24px;
                            height: 24px;
                            border: 1px solid #878787;
                            border-radius: 8px;
                        }
                    }
                }
            }

        }
    }

}

.arrow {
    border: solid #706E6E;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;

}

.up {
    border-color: #0071E4;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
}

.down {
    border-color: #0071E4;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}
</style>