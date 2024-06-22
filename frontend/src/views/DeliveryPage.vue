<script>

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
</style>