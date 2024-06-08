<script>
import AppleImage from '../../assets/images/apple.png'
import HelpImage from '../../assets/images/help.png'

export default {
    data() {
        return {
            infoBlocksData: [
                { id: 1, image: AppleImage, title: 'Только оригинальная продукция Appleс гарантией и бесплатной доставкой' },
                { id: 2, image: HelpImage, title: 'Мы работаем с 10:00 до 22:00', text: 'В это время доступна доставка, самовывоз и клиентский отдел. Создать заказ на сайте можно в любое время суток' },
            ]
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="info-blocks">
            <div class="info-block" v-for="elem in infoBlocksData" :id="elem.id">
                <div class="info-blocks-text">
                    <img :src="elem.image" alt="#">
                    <div class="title">
                        <h3>{{ elem.title }}</h3>
                        <p>{{ elem.text }}</p>
                    </div>
                </div>
                <p id="secondtext">{{ elem.text }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@mixin textStyle($fontSize, $fontWeight, $fontColor) {
    font-size: $fontSize;
    font-weight: $fontWeight;
    color: $fontColor;
}

.info-blocks {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    margin-top: 24px;

    .info-block {
        background: linear-gradient(91.71deg, #89E5FF 0%, #709FFA 99.62%);
        padding: 16px 20px;
        border-radius: 16px;

        width: auto;

        .info-blocks-text {
            display: flex;
            align-items: center;
            gap: 15px;
            margin: 0;

            .title {

                text-align: left;

                h3,
                p {
                    margin: 0;
                }

                h3 {
                    @include textStyle(22px, 700, #FFF);

                    @media screen and (max-width: 1440px) {
                        @include textStyle(16px, 700, #0071E4);
                    }
                }

                p {
                    @include textStyle(14px, 400, #FFF);

                    @media screen and (max-width: 1440px) {
                        @include textStyle(14px, 400, #0071E4);
                    }
                }
            }

            @media screen and (max-width: 768px) {
                justify-content: center;
                text-align: center;
            }
        }

        #secondtext {
            display: none;

            @media screen and (max-width: 768px) {
                display: flex;
                margin: 0;
                text-align: center;
                @include textStyle(12px, 400, #878787);
            }
        }


        @media screen and (max-width: 1440px) {
            width: auto;

            img {
                width: 32px;
            }
        }

        @media screen and (max-width: 768px) {
            align-items: start;
            padding: 8px;
            gap: 4px;
        }

        &:first-child {
            @media screen and (max-width: 1440px) {
                background: #EBF8FF;

                .info-blocks-text{
                    align-items: start;
                    
                    .title {
                        display: flex;
                        gap: 24px;
    
                        h3 {
                            @include textStyle(14px, 400, #0071E4);
                        }
                    }
                }

            }
        }

        &:last-child {
            @media screen and (max-width: 1440px) {
                background: #F8F8F8;

                .title {
                    display: flex;
                    gap: 24px;

                    p {
                        @include textStyle(14px, 400, #878787);
                    }
                }
            }

            @media screen and (max-width: 768px) {

                .info-blocks-text {
                    display: flex;

                    p {
                        display: none;
                    }
                }
            }

        }
    }

    @media screen and (max-width: 1440px) {
        display: grid;
        justify-content: inherit;
        gap: 8px;
        margin-top: 80px;
    }
}
</style>