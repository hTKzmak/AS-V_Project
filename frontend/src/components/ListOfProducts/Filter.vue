<script>
import speedImg from '../../components/ProductPage/assets/icons/speed.svg';
import cashImg from '../../components/ProductPage/assets/icons/cash.svg';
import bankImg from '../../components/ProductPage/assets/icons/bank.svg';
import sequrityImg from '../../components/ProductPage/assets/icons/sequrity.svg';

import CustomMinMaxSlider from '../ListOfProducts/CustomMinMaxSlider.vue'
import { ref } from 'vue';


export default {
    components: {
        CustomMinMaxSlider
    },
    props: ['showFilter'],
    data() {
        return {
            // список для фильтрации товаров
            rostlerData: [
                {
                    id: 1, title: 'title 1', list: [
                        { id: 1, text: 'text 1' },
                        { id: 2, text: 'text 2' },
                        { id: 3, text: 'text 3' },
                    ]
                },
                {
                    id: 2, title: 'title 2', list: [
                        { id: 1, text: 'text 1' },
                        { id: 2, text: 'text 2' },
                        { id: 3, text: 'text 3' },
                        { id: 4, text: 'text 4' },
                        { id: 5, text: 'text 5' },
                    ]
                },
            ],

            // для отображения преимуществ
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


            // значения ползунков (мин и макс) (сюда надо вставить мин и макс цену из всех товаров)
            sliderMin: ref(0),
            sliderMax: ref(100),
            
            // булевое значение для отслеживания разрешения экрана (для двойного ползунка)
            isDesktop: window.innerWidth > 1440,

        }
    },
    methods: {
        // ф-ия показа списка чекбоксов определённого списка
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
        },

        // ф-ия для закрытия фильтра, чтобы она не отображалась
        showFilterFunc() {
            this.$emit('toggle-filter')
        }
    },
    // ф-ия для отслеживания разрешения экрана (нужен для двойного ползунка)
    mounted() {
        window.addEventListener("resize", () => {
            this.isDesktop = window.innerWidth > 1440;
        });
    },
}
</script>

<template>

    <div class="filter-main">

        <!-- ПК версия фильтрации -->

        <div class="filter-desktop">

            <div class="filter-info">

                <div class="price-range">
                    <h3>Цена</h3>

                    <!-- двойной ползунок (используется здесь 2 компонента для отображения одних и тех=же данных в разных размерах экрана) -->
                    <!-- в :max вставит максимальную цену, а в :min минимальную -->
                    <div v-if="isDesktop">
                        <CustomMinMaxSlider :min="0" :max="100" v-model:min-value="sliderMin"
                            v-model:max-value="sliderMax" />
                    </div>
                    <div v-else>
                        <CustomMinMaxSlider :min="0" :max="100" v-model:min-value="sliderMin"
                            v-model:max-value="sliderMax" />
                    </div>


                    <div class="price-count">
                        <div class="price-text-count">
                            <label>от</label>
                            <input type="number" :value="sliderMin">
                            <label>₽</label>
                        </div>
                        <div class="price-text-count">
                            <label>до</label>
                            <input type="number" :value="sliderMax">
                            <label>₽</label>
                        </div>
                    </div>

                </div>
                <div class="rosters-list">

                    <!-- объект для отображения списка -->

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

                        <!-- список чекбоксов для фильтрации -->

                        <ul v-show="showCheckboxList[elem.id]" class="rostler-item-list" v-for="index in elem.list"
                            :id="index.id">
                            <li>
                                <label class="b-contain">
                                    <span>{{ index.text }}</span>
                                    <input type="checkbox" />
                                    <div class="b-input"></div>
                                </label>
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


        <!-- мобильная версия фильтрации -->

        <div v-show="showFilter" class="filter-mobile">

            <div class="mobile-title">
                <span>Применить фильтры</span>
                <button @click="showFilterFunc"><img src="../../assets/icons/header/close.svg" alt="X"></button>
            </div>

            <div class="filter-info">

                <div class="price-range">
                    <h3>Цена</h3>

                    <!-- двойной ползунок (используется здесь 2 компонента для отображения одних и тех=же данных в разных размерах экрана) -->
                    <!-- в :max вставит максимальную цену, а в :min минимальную -->
                    <div v-if="isDesktop">
                        <CustomMinMaxSlider :min="0" :max="100" v-model:min-value="sliderMin"
                            v-model:max-value="sliderMax" />
                    </div>
                    <div v-else>
                        <CustomMinMaxSlider :min="0" :max="100" v-model:min-value="sliderMin"
                            v-model:max-value="sliderMax" />
                    </div>

                    <div class="price-count">
                        <div class="price-text-count">
                            <label>от</label>
                            <input type="number" :value="sliderMin">
                            <label>₽</label>
                        </div>
                        <div class="price-text-count">
                            <label>до</label>
                            <input type="number" :value="sliderMax">
                            <label>₽</label>
                        </div>
                    </div>
                </div>
                <div class="rosters-list">

                    <!-- объект для отображения списка -->

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

                        <!-- списко чекбоксов для фильтрации -->

                        <ul v-show="showCheckboxList[elem.id]" class="rostler-item-list" v-for="index in elem.list"
                            :id="index.id">
                            <li>
                                <!-- <input type="checkbox" name="" id=""> -->
                                <label class="b-contain">
                                    <span>{{ index.text }}</span>
                                    <input type="checkbox" />
                                    <div class="b-input"></div>
                                </label>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
.filter-main {
    background-color: #F9F9F9;

    // ПК ВЕРСИЯ ФИЛЬТРА
    .filter-desktop {

        .filter-info {
            padding: 32px 24px 32px 140px;

            .price-range {

                h3 {
                    margin: 0 0 16px 0;
                    font-size: 20px;
                    font-weight: 500;
                }

                input[type="range"] {
                    // width: 100%;
                }

                .price-count {
                    display: flex;
                    justify-content: space-between;
                    gap: 10px;

                    .price-text-count {
                        display: flex;
                        align-items: end;
                        gap: 4px;
                        overflow: hidden;

                        width: 95px;
                        padding: 10px 16px;

                        background-color: #FFF;
                        border: 1px solid #E7E7E7;
                        border-radius: 8px;

                        text-align: center;

                        font-size: 16px;

                        input[type="text"],
                        input[type="number"] {
                            background: transparent;
                            border: none;
                            outline: none;

                            font-size: 16px;
                            color: #100E0E;

                            width: 55px;
                        }
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

                    img {
                        width: 45px;
                    }

                    .title {

                        h3,
                        p {
                            margin: 0;
                        }

                        h3 {
                            font-weight: 700;
                        }

                        p {
                            font-size: 14px;
                            color: #585656;
                            margin-top: 4px;
                        }
                    }
                }

                @media screen and (max-width: 1440px) {
                    display: none;
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
                        }
                    }
                }

            }

            @media screen and (max-width: 1440px) {
                padding: 24px;
                overflow-y: auto;
                max-height: 424px;
            }
        }

        @media screen and (max-width: 1440px) {
            display: none;
        }


    }



    // МОБИЛЬНАЯ ВЕРСИЯ ФИЛЬТРА
    .filter-mobile {

        display: none;

        background-color: #F9F9F9;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        border-radius: 16px;

        width: 352px;

        z-index: 1;

        .mobile-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px;

            span {
                font-size: 24px;
                font-weight: 700;
            }

            button {
                img {
                    filter: brightness(0) saturate(100%) invert(54%) sepia(1%) saturate(597%) hue-rotate(13deg) brightness(99%) contrast(89%);
                }
            }
        }

        .filter-info {
            padding: 0 24px 24px;
            overflow-y: auto;
            max-height: 424px;

            .price-range {

                h3 {
                    margin: 0 0 16px 0;
                    font-size: 20px;
                    font-weight: 500;
                }

                input[type="range"] {
                    // width: 100%;
                }

                .price-count {
                    display: flex;
                    justify-content: space-between;
                    gap: 10px;

                    .price-text-count {
                        display: flex;
                        align-items: end;
                        gap: 4px;
                        overflow: hidden;

                        width: 95px;
                        padding: 10px 16px;

                        background-color: #FFF;
                        border: 1px solid #E7E7E7;
                        border-radius: 8px;

                        text-align: center;

                        font-size: 16px;

                        input[type="text"],
                        input[type="number"] {
                            background: transparent;
                            border: none;
                            outline: none;

                            font-size: 16px;
                            color: #100E0E;

                            width: 55px;
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
                        }
                    }
                }

            }
        }

        @media screen and (max-width: 1440px) {
            display: block;
        }
    }
}



// стилизация стрелки

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


// стилизация checkbox

.b-contain *,
.b-contain *::before,
.b-contain *::after {
    box-sizing: content-box !important;
}

.b-contain input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}

.b-contain span {
    line-height: 1.5;
    font-size: 1rem;
    font-family: inherit;
    color: #282626;
}

.b-contain {
    display: table;
    position: relative;
    padding-left: 2rem;
    cursor: pointer;
    margin-bottom: 0.4rem;
}

.b-contain input[type="checkbox"]~.b-input {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5rem;
    width: 1.5rem;
    background: rgb(255, 255, 255);
    transition: background 250ms;
    border: 1px solid rgb(135, 135, 135);
    border-radius: 0.5rem;
}



.b-contain input[type="checkbox"]~.b-input::after {
    content: "";
    position: absolute;
    display: none;
    left: 9px;
    top: 4px;
    width: 0.3rem;
    height: 0.6rem;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transition: background 250ms;
    transform: rotate(45deg);
}



.b-contain input[type="checkbox"]:disabled~.b-input::after {
    border-color: #ffffff;
}

.b-contain input:checked~.b-input::after {
    display: block;
}

.b-contain:hover input[type="checkbox"]:not([disabled])~.b-input,
.b-contain input[type="checkbox"]:focus~.b-input {
    background: #e2e8f0;
    border-color: #64748b;
}



.b-contain input:focus~.b-input {
    box-shadow: 0 0 0 2px #60a5fa;
}

.b-contain input[type="checkbox"]:checked~.b-input {
    background: rgb(0, 113, 228);
    border-color: rgb(0, 113, 228);
}



.b-contain input[type="checkbox"]:disabled~.b-input {
    opacity: 0.5;
    cursor: not-allowed;
}



.b-contain:hover input[type="checkbox"]:not([disabled]):checked~.b-input,
.b-contain input[type="checkbox"]:checked:focus~.b-input {
    background: #2563eb;
    border-color: #1e40af;
}
</style>