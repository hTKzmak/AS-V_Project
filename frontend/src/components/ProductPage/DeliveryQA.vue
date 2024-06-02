<script>
import qualityImg from './assets/icons/quality.svg';
import speedImg from './assets/icons/speed.svg';
import cashImg from './assets/icons/cash.svg';
import bankImg from './assets/icons/bank.svg';
import sequrityImg from './assets/icons/sequrity.svg';

export default {
    data() {
        return {
            qaData: [
                { id: 1, title: 'Телефоны новые или восстановленные?', text: 'Все телефоны в istoreapple.ru полностью оригинальные, с полной стандартной комплектацией.' },
                { id: 2, title: 'Почему у вас такие низкие цены?', text: 'Мы продаем американские и европейские смартфоны. На них цена на 15-20% дешевле, чем на смартфоны, выпущенные для Российского рынка. Для пользователя никакой разницы между Американскими и Российскими моделями нет. При желании, у нас есть и ростест модели, но цена на них будет выше.' },
                { id: 3, title: 'Могу ли я проверить устройство до оплаты?', text: 'Конечно! Мы гарантируем вам качество. Вы можете выполнить любые проверки техники перед оплатой' },
                { id: 4, title: 'Какой срок гарантии?', text: 'На всю технику, представленную у нас на сайте, мы предоставляем гарантию 365 дней. Обмен и возврат возможен в течение 14 дней.' },
            ],
            advantagesData: [
                { id: 1, img: qualityImg, title: 'Только оригинальная продукция', text: '' },
                { id: 2, img: speedImg, title: 'Доставка за 2 часа', text: 'Быстро и бесплатно доставляем все заказы по Москве' },
                { id: 3, img: cashImg, title: 'Удобная оплата', text: 'Все виды наличного и безналичного расчета' },
                { id: 4, img: bankImg, title: 'Кредит', text: 'Выгодные кредитные предложения от самых популярных банков' },
                { id: 5, img: sequrityImg, title: 'Гарантия', text: 'Предоставляем целый год сервисного обслуживания' },
            ],

        }
    }
}
</script>

<template>
    <div class="deliveryQA-content">
        <div class="delivery">
            <div class="container">
                <h2>Способы получения</h2>
                <div class="delivery-list">
                    <div class="delivery-item">
                        <h3>Курьером в Москве</h3>
                        <p><span>сегодня в 20:34</span> или в другой удобный вам день</p>
                        <p>бесплатно в пределах МКАД при заказе от 30000₽ или 300₽ если сумма заказа меньше</p>
                    </div>
                    <div class="delivery-item">
                        <h3>Самовызов</h3>
                        <div class="delivery-location">
                            <select id="selectLocation">
                                <option value="#">ул Барклая 8</option>
                            </select>
                            <p><span>сегодня в 22:00</span> или в другой удобный вам день</p>
                            <div class="time-and-metro">
                                <p id="time"><img src="../../assets/icons/stickman.svg" alt="#"> 5 минут от</p>
                                <p id="metro"><img src="../../assets/icons/metro.svg" alt="#">Багратионовская</p>
                            </div>
                        </div>
                    </div>
                    <div class="delivery-item">
                        <h3>Курьером в Москве</h3>
                        <p>От 3 до 5 дней в зависимости от вашего города. Доставляем через СДЭК или Почту России. Точная
                            стоимость доставки будет известна при оформлении заказа</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="qa">
            <div class="container">
                <div class="qa-list">
                    <div class="qa-item" v-for="elem in this.qaData" :id=elem.id>
                        <h3>{{ elem.title }}</h3>
                        <p>{{ elem.text }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="advantages container">
            <div class="advantage-item" v-for="elem in this.advantagesData" :id=elem.id>
                <div class="imgAndTitle">
                    <img :src=elem.img alt="#">
                    <h3>{{ elem.title }}</h3>
                </div>
                <p>{{ elem.text }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.deliveryQA-content {

    margin-top: 80px;
    margin-bottom: 80px;

    .delivery {
        background-color: #F1F8FF;
        padding: 24px;

        .delivery-list {

            display: flex;
            justify-content: space-between;
            align-items: start;

            .delivery-item {

                width: 360px;

                span,
                p {
                    margin: 0;
                }

                h3 {
                    font-weight: 700;
                    margin-top: 8px;
                    margin-bottom: 8px;
                }

                span {
                    color: #0071E4;
                }

                p {
                    color: #585656;
                }

                .delivery-location {
                    width: 384px;
                    padding: 8px 16px;
                    background-color: #fff;
                    border-radius: 16px;

                    display: grid;
                    gap: 4px;

                    #selectLocation {
                        width: inherit;
                        font-size: 20px;
                        border: none;
                        background: transparent;
                        padding: 0;
                        position: relative;

                        cursor: pointer;
                        
                        -webkit-appearance: none;
                        /* Убираем стандартную стрелку в Chrome и Safari */
                        -moz-appearance: none;
                        /* Убираем стандартную стрелку в Firefox */
                        appearance: none;
                        padding-right: 20px;
                        /* Добавляем немного отступа справа для новой стрелки */
                        background-image: url('../../assets/icons/arrow.svg');
                        /* Добавляем свою собственную стрелку */
                        background-repeat: no-repeat;
                        background-position: right center;

                        @media screen and (max-width: 768px) {
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            appearance: none;
                        }
                    }

                    p {
                        @media screen and (max-width: 768px) {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 4px;
                        }
                    }

                    .time-and-metro {

                        display: flex;
                        align-items: center;
                        gap: 4px;

                        background-color: #F9F9F9;
                        width: 253px;
                        justify-content: center;

                        border-radius: 16px;

                        #time,
                        #metro {
                            display: flex;
                            align-items: center;
                        }

                        #time {
                            color: #282626;
                        }

                        #metro {
                            color: #585656;
                        }
                    }

                    @media screen and (max-width: 768px) {
                        width: auto;
                    }
                }

                @media screen and (max-width: 768px) {
                    width: auto;
                }
            }

            @media screen and (max-width: 1440px) {
                display: grid;
                gap: 24px;
            }
        }

        @media screen and (max-width: 768px) {
            padding: 24px 16px;
        }
    }

    .qa {
        background-color: #F9F9F9;
        padding: 24px;

        .qa-list {
            display: flex;
            justify-content: space-between;
            gap: 24px;

            .qa-item {
                background-color: #fff;
                padding: 16px;
                border-radius: 16px;
                width: 288px;

                h3 {
                    font-weight: 700;
                    font-size: 24px;
                    margin: 0;
                }

                p {
                    margin-top: 8px;
                    color: #585656;
                }

                @media screen and (max-width: 1440px) {
                    width: auto;
                }
            }

            @media screen and (max-width: 1440px) {
                display: grid;
            }

        }

        @media screen and (max-width: 768px) {
            padding: 16px;
        }
    }

    .advantages {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-top: 24px;
        margin-bottom: 24px;

        .advantage-item {
            text-align: center;
            width: 250px;

            .imgAndTitle {
                h3 {
                    font-weight: 700;
                    margin: 0;
                }

                @media screen and (max-width: 768px) {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

            }


            p {
                color: #585656;
                margin-top: 4px;
            }

            @media screen and (max-width: 768px) {
                text-align: start;
                width: 265px;
            }
        }

        @media screen and (max-width: 1440px) {
            justify-content: center;
            flex-wrap: wrap;
        }

        @media screen and (max-width: 768px) {
            display: grid;
            justify-content: start;
            gap: 16px;
        }
    }
}
</style>