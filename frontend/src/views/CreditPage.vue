<script>
import ButtonElem from '../components/UI/ButtonElem.vue'
import likeIcon from '../assets/icons/credit/like.svg'
import fastIcon from '../assets/icons/credit/fast.svg'
import eyeIcon from '../assets/icons/credit/eye.svg'

export default {
    components: { ButtonElem },
    data() {
        return {
            creditInfo: [
                { icon: likeIcon, title: '80% заявок одобряют', text: 'Максимально высокая вероятность одобрения' },
                { icon: fastIcon, title: '10 минут на заполнение', text: '1 анкета для всех банков сразу' },
                { icon: eyeIcon, title: 'Без скрытых платежей', text: 'плата за рассрочку заранее включена в стоимость товаров' },
            ],
            creditWays: [
                { step: 1, text: 'Выберите товар и оформите заказ с оплатой в кредит' },
                { step: 2, text: 'Согласуйте условия кредитования с нашим менеджером' },
                { step: 3, text: 'Получите решение от банков и выберите лучшие условия' },
                { step: 4, text: 'Ожидайте доставку вашего заказа (или самовывоз)' },
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="credit-banner">
            <img src="../assets/images/credit/woman.png" alt="#">
            <div class="title">
                <h3>От 10 000 до 600 000₽</h3>
                <p>в кредит, за 30 минут без похода в банк</p>
            </div>
        </div>

        <div class="credit-info">
            <div class="info-blocks-list">
                <div class="info-block" v-for="elem in creditInfo">
                    <div class="imgAndTitle">
                        <img :src="elem.icon" alt="#">
                        <span>{{ elem.title }}</span>
                    </div>
                    <p>{{ elem.text }}</p>
                </div>
            </div>

            <div class="main-block">
                <div class="info">
                    <img src="../assets/images/credit/person.png" alt="#">
                    <div class="title">
                        <span>Выберите из списка товаров понравившийся продукт и заполните анкету</span>
                        <RouterLink to="list_of_products/smartphones">Выбрать продукт</RouterLink>
                    </div>
                </div>
                <div class="message">
                    <img src="../assets/images/credit/like.png" alt="#">
                    <p>Предварительно с вами свяжется сотрудник нашего магазина <br /> и ответит на все ваши вопросы
                        связанными с покупкой в кредит</p>
                </div>
            </div>
        </div>

        <div class="credit-ways">
            <h3>Получите кредит в 4 шага</h3>
            <div class="credit-list">
                <div class="line"></div>
                <div class="credit-item" v-for="elem in creditWays">
                    <span id="number">{{ elem.step }}</span>
                    <p>{{ elem.text }}</p>
                </div>
            </div>
        </div>

        <div class="credit-footer">
            <div class="conditions">
                <h3>Условия для получения кредита</h3>
                <ul>
                    <li>
                        <div class="elipse">
                            <div class="second-elipse"></div>
                        </div>
                        Возраст - от 18 до 69 лет
                    </li>
                    <li>
                        <div class="elipse">
                            <div class="second-elipse"></div>
                        </div>
                        Наличие постоянного источника дохода (работа, пенсия)
                    </li>
                    <li>
                        <div class="elipse">
                            <div class="second-elipse"></div>
                        </div>
                        Наличие паспорта гражданина РФ
                    </li>
                </ul>
            </div>
            <div class="window">
                <div class="title">
                    <h3>Не откладывайте покупки на потом</h3>
                    <p>Купить желаемую технику в кредит на самых выгодных условиях</p>
                    <ButtonElem title="заполнить заявку" addedItemStyle='false' />
                </div>
                <img src="../assets/images/credit/iphone.png" alt="#">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@mixin titleStyle {
    font-size: 32px;
    color: #0071E4;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 20px;
        text-align: start;
    }
}

.elipse {
    padding: 16px;
    background-color: #FFF;
    border-radius: 100px;
    border: 2px solid #0071E4;

    position: relative;

    .second-elipse {
        padding: 10px;
        background-color: #FFF;
        border-radius: 100px;
        border: 2px solid #0071E4;
        position: absolute;
        top: 4px;
        left: 4px;

        @media screen and (max-width: 768px) {
            padding: 7px;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 13px;
    }
}

.credit-banner {
    background: linear-gradient(269.84deg, #0071E4 0.08%, #7EBEFF 99.92%);
    color: #F9F9F9;

    width: inherit;
    height: 189px;

    overflow: hidden;
    border-radius: 16px;

    display: flex;
    align-items: center;

    margin-top: 23px;

    padding-left: 87px;

    gap: 80px;

    img {
        margin-top: 15px;

        @media screen and (max-width: 768px) {
            margin: 0;
            width: 221px;
        }
    }

    .title {

        text-align: left;
        margin-left: 80px;

        h3,
        p {
            margin: 0;
        }

        h3 {
            font-size: 40px;
            line-height: 46.88px;
            font-weight: 700;

            @media screen and (max-width: 1440px) {
                font-size: 32px;
                line-height: 37.5px;
            }

            @media screen and (max-width: 768px) {
                font-size: 20px;
                line-height: 23.44px;
            }
        }

        p {
            font-size: 24px;
            line-height: 28.13px;

            @media screen and (max-width: 1440px) {
                font-size: 20px;
                line-height: 23.44px;
            }

            @media screen and (max-width: 768px) {
                font-size: 16px;
                line-height: 18.75px;
                margin: 8px 0;
            }
        }

        @media screen and (max-width: 1440px) {
            margin-left: 0;
            margin-right: 40px;
        }

        @media screen and (max-width: 768px) {
            text-align: center;
            margin: 0;
            width: 230px;
            margin-top: 24px;
        }
    }

    @media screen and (max-width: 1440px) {
        margin-top: 75px;
        padding-left: 0;
        gap: 15px;
        justify-content: space-between;
    }

    @media screen and (max-width: 768px) {
        height: 240px;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
    }
}

.credit-info {

    display: flex;
    justify-content: space-between;
    margin-top: 56px;
    gap: 40px;

    .info-blocks-list {

        display: grid;
        gap: 16px;

        .info-block {
            background-color: #F3F8FF;
            width: 389px;
            padding: 23px 32px 45px 24px;
            border-radius: 16px;

            .imgAndTitle {
                display: flex;
                align-items: center;
                gap: 8px;

                span {
                    font-size: 24px;
                    color: #282626;
                    font-weight: 700;

                    @media screen and (max-width: 768px) {
                        font-size: 16px;
                    }
                }

                @media screen and (min-width: 768px) and (max-width: 1440px) {
                    display: grid;
                }
            }

            p {
                font-size: 16px;
                color: #585656;
                margin-bottom: 0;
                width: 360px;

                @media screen and (max-width: 1440px) {
                    width: auto;
                }

                @media screen and (max-width: 768px) {
                    font-size: 14px;
                }
            }

            @media screen and (max-width: 1440px) {
                padding: 18px 16px;
            }

            @media screen and (max-width: 768px) {
                width: auto;
            }

        }

        @media screen and (max-width: 1440px) {
            display: flex;
            justify-content: space-between;
        }

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
    }

    .main-block {
        background-color: #F3F8FF;
        width: inherit;
        border-radius: 16px;
        padding: 24px 32px;

        .info {
            display: flex;
            align-items: start;
            gap: 44px;

            .title {
                margin-top: 32px;
                display: grid;

                span {
                    font-size: 32px;
                    font-weight: 600;

                    @media screen and (max-width: 768px) {
                        font-size: 20px;
                    }
                }

                a {
                    margin-top: 16px;
                    padding: 18px 79px;

                    font-size: 16px;
                    border-radius: 8px;
                    
                    background-color: #0071E4;
                    color: #FFF;
                    
                    text-align: center;
                    
                    width: fit-content;

                    @media screen and (max-width: 768px) {
                        width: auto;
                        padding: 18px;
                    }
                }

                @media screen and (Max-width: 768px) {
                    margin-top: 0;
                    gap: 16px;
                }
            }

            img {
                @media screen and (Max-width: 768px) {
                    width: 100px;
                }
            }

            @media screen and (Max-width: 768px) {
                flex-direction: column;
                margin-top: 0;
                gap: 16px;
            }
        }


        .message {
            display: flex;
            align-items: center;
            gap: 10px;
            width: inherit;

            padding: 7px 8px;

            border-radius: 16px;
            background-color: #FFFFFF;

            @media screen and (Max-width: 768px) {
                flex-direction: column;
                align-items: start;
                padding: 17px;
                font-size: 14px;
            }

            img {
                @media screen and (Max-width: 768px) {
                    width: 40px;
                }
            }
        }

    }

    @media screen and (max-width: 1440px) {
        flex-direction: column;
    }
}

.credit-ways {

    h3 {
        @include titleStyle;
        text-align: center;
    }

    .credit-list {
        position: relative;

        display: flex;
        justify-content: center;
        align-items: start;

        margin-top: 30px;
        gap: 16px;

        .line {
            position: absolute;

            width: 961px;
            height: 4px;

            background-color: #F3F8FF;

            top: 20px;


            @media screen and (max-width: 1440px) {
                display: none;
            }
        }

        .credit-item {
            width: 288px;
            text-align: center;
            z-index: 1;

            span {
                font-size: 40px;
                font-weight: 700;
                border-radius: 16px;

                color: #0071E4;
                background-color: #F3F8FF;

                padding: 8px 20px;

                @media screen and (max-width: 768px) {
                    font-size: 20px;
                    padding: 4px 11px;
                    border-radius: 8px;
                }
            }

            p {
                color: #282626;
                font-size: 20px;

                @media screen and (max-width: 768px) {
                    font-size: 14px;
                    text-align: start;
                }
            }

            @media screen and (max-width: 768px) {
                display: flex;
                align-items: center;
                gap: 8px;
            }
        }

        @media screen and (max-width: 1440px) {
            flex-wrap: wrap;
        }

        @media screen and (max-width: 768px) {
            justify-content: start;
            flex-wrap: nowrap;
            flex-direction: column;
        }

    }

}

.credit-footer {
    margin-top: 88px;

    display: flex;
    align-items: start;
    justify-content: space-between;

    .conditions {
        h3 {
            @include titleStyle;
            text-align: left;
            margin-top: 0;

            @media screen and (max-width: 1440px) {
                font-size: 32px;
                text-align: center;
            }

            @media screen and (max-width: 768px) {
                font-size: 20px;
                text-align: start;
            }
        }

        ul {
            display: grid;
            gap: 12px;

            li {
                display: flex;
                align-items: center;
                gap: 12px;
                font-size: 20px;
                text-align: start;
            }
        }
    }

    .window {
        background-color: #F3F8FF;
        padding: 32px;
        overflow: hidden;

        height: 258px;

        display: flex;
        gap: 80px;
        align-items: center;
        justify-content: space-between;

        .title {
            width: 288px;

            span, h3 {
                font-size: 32px;
                font-weight: 600;
                line-height: 37.5px;

                @media screen and (max-width: 768px) {
                    font-size: 20px;
                    line-height: 23.44px;
                }
            }

            button {
                width: 100%;
                border-radius: 8px;
                font-size: 16px;
                padding: 18px;
            }

            @media screen and (max-width: 768px) {
                width: 250px;
            }
        }

        img {
            margin-top: 17rem;

            @media screen and (max-width: 768px) {
                margin-top: -4rem;
            }
        }

        @media screen and (max-width: 1440px) {
            margin-top: 93px;
        }

        @media screen and (max-width: 768px) {
            margin-top: 26px;
            height: 294px;
            flex-direction: column;

            border-radius: 16px;
        }
    }

    @media screen and (max-width: 1440px) {
        align-items: unset;
        flex-direction: column;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        margin-top: 24px;
    }
}
</style>