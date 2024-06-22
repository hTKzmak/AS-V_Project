<script setup>
import coins from '../assets/images/delivery/coins.png'
import card from '../assets/images/delivery/card.png'
import buying from '../assets/images/delivery/buying.png'
import columns from '../assets/images/delivery/columns.png'
import passed from '../assets/images/delivery/passed.png'

let data = [
    { img: coins, title: 'Оплата наличными', text: 'Оплатить товар наличными вы можете как в магазине, так и при доставке на дом – у наших курьеров всегда есть сдача. Перед тем, как расплатиться, у вас есть возможность удостовериться в надлежащем качестве устройства, распаковав коробку.' },
    { img: card, title: 'Банковской картой в магазине/курьеру', text: 'Неважно, забираете ли вы товар сами из магазина или заказали доставку – в любом случае вы можете расплатиться таким способом, ведь у наших курьеров всегда есть терминалы.' },
    { img: buying, title: 'Онлайн оплата +8% комиссия', text: 'Оплата через платежную систему на сайте при помощи банковской карты, яндекс деньги, web money и др. Обратите внимание, комиссия зависит от способа оплаты.' },
]
</script>

<template>
    <div class="container">
        <div class="delivery-blocks">
            <div class="delivery-block">
                <img id="first-img" src="../assets/images/sam.png" alt="#">
                <div class="imgAndText">
                    <img src="../assets/images/sam.png" alt="#">
                    <p>в пределах МКАД при заказе от 30 000₽ за пределами МКАД или при меньшей сумме стоимость доставки
                        350₽</p>
                </div>
                <div class="title">
                    <span>Бесплатная доставка за 3 часа</span>
                    <p>в пределах МКАД при заказе от 30 000₽ за пределами МКАД или при меньшей сумме стоимость доставки
                        350₽</p>
                </div>
            </div>
            <div class="delivery-block">
                <img id="mainImg" src="../assets/images/kamikadze.png" alt="#">
                <div class="title">
                    <span>Доставка по России</span>
                    <p>3-5 дней в зависимости от города через СДЭК или Почту России. Точная стоимость доставки известна
                        при оформлении заказа</p>
                </div>
            </div>
        </div>

        <div class="pickup-points">
            <span id="pickup-title">Пункт самовызова</span>

            <div class="points-list">
                <div class="point">
                    <span id="street">ул Барклая 8</span>

                    <div class="point-main">
                        <div class="time-and-metro">
                            <p><img src="../assets/icons/stickman.svg" alt="#">5 минут от</p>
                            <p><img src="../assets/icons/metro.svg" alt="#">Багратионовская</p>
                        </div>

                        <span id="time">
                            <img src="../assets/icons/clock.svg" alt="clock">
                            ежедневно 10:00 — 22:00
                        </span>
                    </div>
                </div>
                <div class="point">
                    <span id="street">ул Барклая 8</span>

                    <div class="point-main">
                        <div class="time-and-metro">
                            <p><img src="../assets/icons/stickman.svg" alt="#">5 минут от</p>
                            <p><img src="../assets/icons/metro.svg" alt="#">Багратионовская</p>
                        </div>

                        <span id="time">
                            <img src="../assets/icons/clock.svg" alt="clock">
                            ежедневно 10:00 — 22:00
                        </span>
                    </div>
                </div>
            </div>

            <div class="map" style="width: auto"><iframe width="100%" height="400px" frameborder="0" scrolling="no"
                    marginheight="0" marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                        href="https://www.gps.ie/">gps tracker sport</a></iframe></div>
        </div>

        <div class="happy-delivery">
            <div class="happy-main">
                <div class="imTired">
                    <div class="moscow">актуально в Москве</div>
                    <img src="../assets/images/happy.png" alt=":)">
                </div>
                <div class="title">
                    <span>Доставка, которая радует</span>
                    <p>согласуем с вами удобное время <br /> курьер позвонит за час до доставки <br /> любые ваши
                        проверки
                        техники перед оплатой</p>
                </div>
            </div>
        </div>

        <div class="paying-methods">
            <span id="title">Оплачивайте как угодно</span>
            <div class="paying-lists">
                <div class="part-one">
                    <div class="paying-item" v-for="elem in data">
                        <div class="main">
                            <img :src="elem.img" alt="#">
                            <span>{{ elem.title }}</span>
                        </div>
                        <p>{{ elem.text }}</p>
                    </div>
                </div>
                <div class="part-two">
                    <div class="paying-item">
                        <div class="main">
                            <img :src="columns" alt="#">
                            <span>Безналичный расчет</span>
                        </div>
                        <p>Мы всегда действуем в интересах покупателей, поэтому предоставляем возможность оплатить товар
                            при помощи безналичного расчета. Обратитесь к нашим менеджерам по телефону <b>+7 (812)
                                704-86-97</b>, чтобы получить всю необходимую информацию для осуществления оплаты этим
                            способом.
                        </p>
                    </div>
                    <div class="paying-item">
                        <div class="main">
                            <img :src="passed" alt="#">
                            <span>Кредит</span>
                        </div>
                        <p>Иногда желание стать владельцем гаджета не совсем совпадает с возможностью сразу оплатить всю
                            сумму. Но огорчаться не следует – вы можете приобрести любой товар в кредит. Мы сотрудничаем
                            со многими банками, поэтому оформление кредита происходит очень быстро и просто. Уточнить
                            все моменты для получения кредитных средств вы можете у наших менеджеров, позвонив по
                            указанному телефону <b>+7 (812) 704-86-97</b></p>
                    </div>
                </div>
            </div>
        </div>

        <div class="choose-gadget">
            <div class="title">
                <span>Выбирайте технику, а мы позаботимся о доставке</span>
                <RouterLink to="/">пойти выбирать</RouterLink>
            </div>
            <img src="../assets/images/delivery/hand.png" alt="#">
        </div>
    </div>
</template>

<style lang="scss">
.delivery-blocks {

    margin-top: 90px;

    display: flex;
    justify-content: space-between;
    gap: 24px;

    .delivery-block {
        background: linear-gradient(269.84deg, #1A63D1 0.08%, #7FA6F2 99.92%);
        color: #F9F9F9;
        border-radius: 16px;

        position: relative;

        width: 50%;
        height: 212px;

        display: flex;
        align-items: center;

        img {
            position: inherit;

            @media screen and (max-width: 768px) {
                position: unset;
            }
        }

        #first-img {
            position: inherit;
            top: -30px;
            left: 20px;

            @media screen and (max-width: 1440px) {
                top: 0;
                left: 0;
                width: 119px;
            }

            @media screen and (max-width: 768px) {
                display: none;
            }
        }

        &:first-child {
            #mainImg {
                top: -30px;
                left: 20px;

                @media screen and (max-width: 1440px) {
                    width: 160px;
                }

                @media screen and (max-width: 768px) {
                    display: none;
                }
            }

            .imgAndText {
                display: none;

                @media screen and (max-width: 768px) {
                    display: flex;
                    align-items: center;
                    position: relative;

                    img {
                        position: unset;

                        width: 153px;
                        margin-bottom: -130px;
                        margin-left: -10px;
                    }
                }
            }

            .title {
                p {
                    @media screen and (max-width: 768px) {
                        display: none;
                    }
                }
            }
        }

        &:last-child {
            img {
                top: -75px;

                @media screen and (max-width: 1440px) {
                    top: -25px;
                    width: 173px;
                }

                @media screen and (max-width: 768px) {
                    position: absolute;
                    top: 200px;
                    right: 0;
                }
            }
        }

        .title {
            width: 361px;
            display: flex;
            flex-direction: column;
            gap: 8px;


            span {
                font-size: 32px;
                font-weight: 700;

                @media screen and (max-width: 1440px) {
                    font-size: 24px;
                }

                @media screen and (max-width: 768px) {
                    font-size: 20px;
                }
            }

            p {
                font-size: 20px;
                width: 295px;
                line-height: 23.44px;
                margin: 0;

                @media screen and (max-width: 1440px) {
                    width: auto;
                    font-size: 16px;
                }

                @media screen and (max-width: 768px) {
                    font-size: 14px;
                    line-height: 16.41px;
                }
            }

            @media screen and (max-width: 1440px) {
                width: auto;
            }
        }

        @media screen and (max-width: 1440px) {
            width: 50%;
            height: 245px;

            display: flex;
            flex-direction: column;
            align-items: start;

            justify-content: space-around;

            padding: 24px;
        }

        @media screen and (max-width: 768px) {
            flex-direction: column-reverse;
            width: auto;

            overflow: hidden;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
}

.pickup-points {
    background-color: #F3F8FF;
    border-radius: 16px;
    padding: 32px 48px 24px;

    margin-top: 24px;

    #pickup-title {
        font-size: 32px;
        font-weight: 700;
    }

    .points-list {
        display: flex;
        flex-direction: column;
        gap: 8px;

        margin-top: 16px;
        margin-bottom: 16px;

        .point {
            display: flex;
            align-items: center;
            gap: 8px;

            background-color: #FFFFFF;
            border-radius: 16px;
            padding: 32px 48px;

            #street {
                font-weight: 700;
                font-size: 20px;

                @media screen and (max-width: 768px) {
                    font-size: 16px;
                }
            }

            .point-main {
                display: flex;
                align-items: center;
                gap: 8px;

                #time {
                    display: flex;
                    align-items: center;
                    gap: 4px;

                    color: #878787;
                    font-weight: 500;

                    @media screen and (max-width: 768px) {
                        font-size: 14px;
                    }
                }

                .time-and-metro {
                    display: flex;
                    align-items: center;
                    gap: 4px;

                    margin-left: 16px;
                    margin-right: 32px;

                    background-color: #F9F9F9;
                    border-radius: 100px;

                    p {
                        margin: 0;
                        padding: 4px 8px;

                        &:last-child {
                            color: #585656;
                        }

                        @media screen and (max-width: 768px) {
                            font-size: 11px;
                        }
                    }

                    @media screen and (max-width: 1440px) {
                        margin: 0;
                    }

                }

                @media screen and (max-width: 768px) {
                    flex-direction: column;
                    align-items: start;
                }
            }


            @media screen and (max-width: 1440px) {
                flex-direction: column;
                align-items: start;
            }

            @media screen and (max-width: 768px) {
                padding: 16px;
            }
        }
    }

    .map {
        iframe {
            border-radius: 16px;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 16px;
    }
}

.happy-delivery {
    background-color: #F3F8FF;

    border-radius: 16px;

    padding: 16px;
    margin-top: 24px;

    height: 233px;

    overflow: hidden;
    position: relative;

    color: #0071E4;

    .moscow {
        background-color: #FFFFFF;
        padding: 16px;
        border-radius: 8px;
        width: inherit;

        position: absolute;
        top: 24px;
        right: 24px;

        @media screen and (max-width: 768px) {
            margin-top: 0;
            position: unset;
            font-size: 12px;
            width: auto;
            padding: 8px;
        }
    }


    .happy-main {
        display: flex;
        align-items: center;

        .imTired {
            @media screen and (max-width: 768px) {
                display: flex;
                align-items: center;
                gap: 15px;
            }

        }

        .title {
            margin-top: -13rem;

            span {
                font-size: 40px;
                font-weight: 700;

                @media screen and (max-width: 1440px) {
                    font-size: 20px;
                }

                @media screen and (max-width: 768px) {
                    font-size: 16px;
                }
            }

            p {
                font-size: 16px;
                line-height: 25px;
                font-weight: 600;

                @media screen and (max-width: 768px) {
                    font-size: 14px;
                }
            }

            @media screen and (max-width: 1440px) {
                margin-top: -11rem;
            }

            @media screen and (max-width: 768px) {
                margin-top: 0;
            }
        }

        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column-reverse;
        }

    }

    img {
        @media screen and (max-width: 768px) {
            width: 105px;
            margin-bottom: -50px;
        }
    }

}

.paying-methods {
    background-color: #F9F9F9;
    padding: 32px 40px;
    margin-top: 42px;
    border-radius: 16px;

    #title {
        font-size: 40px;
        font-weight: 700;

        @media screen and (max-width: 768px) {
            font-size: 20px;
        }
    }

    .part-one,
    .part-two {
        display: flex;
        justify-content: space-between;
        gap: 24px;

        .paying-item {
            width: 100%;
        }

        @media screen and (max-width: 1440px) {
            flex-direction: column;
        }
    }

    .paying-lists {

        margin-top: 24px;
        display: grid;
        gap: 16px;

        .paying-item {
            background-color: #FFFFFF;
            padding: 16px;
            border-radius: 16px;

            .main {
                display: flex;
                align-items: center;
                gap: 16px;

                img {
                    @media screen and (max-width: 768px) {
                        width: 32px;
                    }
                }

                span {
                    font-style: 18px;
                    font-weight: 700;

                    @media screen and (max-width: 768px) {
                        font-size: 16px;
                    }
                }
            }

            p {
                font-size: 16px;
                color: #585656;

                @media screen and (max-width: 768px) {
                    font-size: 14px;
                }
            }

            @media screen and (max-width: 768px) {
                width: auto;
            }
        }
    }

    @media screen and (max-width: 768px) {
        padding: 16px;
    }
}

.choose-gadget {
    margin-top: 24px;
    margin-bottom: 33px;

    height: 320px;

    background-color: #F9F9F9;
    padding: 16px 48px;
    border-radius: 16px;

    overflow: hidden;

    position: relative;

    display: flex;
    align-items: center;

    .title {

        width: 615px;
        display: flex;
        flex-direction: column;
        gap: 32px;

        span {
            font-size: 40px;
            font-weight: 700;

            @media screen and (max-width: 1440px) {
                font-size: 32px;
            }

            @media screen and (max-width: 768px) {
                font-size: 20px;
            }
        }

        a {
            border-radius: 8px;
            padding: 18px;
            font-size: 16px;
            border: none;
            background-color: #0071e4;
            color: #fff;
            cursor: pointer;
            width: 288px;
            text-align: center;

            @media screen and (max-width: 768px) {
                margin: 0 auto;
                width: 80%;
            }
        }

        @media screen and (max-width: 768px) {
            width: auto;
        }
    }

    img {
        position: absolute;
        right: 0;
        bottom: -45%;

        @media screen and (max-width: 1440px) {
            width: 215px;
            right: 35px;
            bottom: -35px;
        }

        @media screen and (max-width: 768px) {
            position: unset;
            margin-bottom: -32px;
            margin-top: 16px;
            width: 107px;
        }
    }

    @media screen and (max-width: 1440px) {
        height: 212px;
    }

    @media screen and (max-width: 768px) {
        padding: 16px;
        flex-direction: column;
        height: auto;
        text-align: center;
    }
}
</style>