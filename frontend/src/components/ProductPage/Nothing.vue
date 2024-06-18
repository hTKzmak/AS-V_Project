<script></script>

<template>
    <div class="container">
        <div class="nothing-main">
            <img src="./assets/images/ears.png" alt="Nothing Ear">
            <div class="title">
                <h1>Купить Nothing Ear(1)</h1>
                <h2>в наличии в Санкт-Петербурге</h2>
            </div>
        </div>
        <div class="nothing-blocks-list">
            <div class="nothing-block">
                <img src="./assets/images/ears1.png" alt="Nothing Ear">
                <div class="title">
                    <h1>Подзаголовок</h1>
                    <p>Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration
                        motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance,
                        lightness and durability.</p>
                </div>
            </div>
            <div class="nothing-second-block">
                <div class="title">
                    <h1>Текст про OS</h1>
                    <p>Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration
                        motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance,
                        lightness and durability.</p>
                </div>
                <img src="./assets/images/ears2.png" alt="Nothing Ear">
            </div>
            <div class="nothing-block">
                <img src="./assets/images/ears3.png" alt="Nothing Ear">
                <div class="title">
                    <h1>Подзаголовок</h1>
                    <p>Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration
                        motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance,
                        lightness and durability.</p>
                </div>
            </div>
            <div class="nothing-second-block">
                <div class="title">
                    <h1>Текст про OS</h1>
                    <p>Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration
                        motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance,
                        lightness and durability.</p>
                </div>
                <img src="./assets/images/ears4.png" alt="Nothing Ear">
            </div>
            <div class="nothing-block">
                <img src="./assets/images/ears5.png" alt="Nothing Ear">
                <div class="title">
                    <h1>Подзаголовок</h1>
                    <p>Design that goes beyond the surface. Dual-side Gorilla® Glass gives toughness. Advanced vibration
                        motors make touch responses life-like. The symmetrical bezels and aluminium frame adds elegance,
                        lightness and durability.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.nothing-main {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 34px;
    padding-bottom: 54px;

    img {
        @media screen and (max-width: 768px) {
            margin: 0 auto;
        }
    }

    .title {
        margin-top: 16px;

        h1 {
            margin-bottom: 16px;
            text-align: start;

            @media screen and (max-width: 1440px) {
                width: 365px;
            }

            @media screen and (max-width: 768px) {
                text-align: center;
                font-size: 24px;
            }
        }
        
        h2 {
            font-weight: 400;
            
            @media screen and (max-width: 768px) {
                font-size: 16px;
            }
        }

        @media screen and (max-width: 768px) {
            text-align: center;
            ;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center;
        gap: 0;
        padding-bottom: 0;
    }
}

.nothing-blocks-list {

    display: grid;


    .nothing-block,
    .nothing-second-block {
        display: flex;
        align-items: center;

        img {
            @media screen and (max-width: 1440px) {
                width: 550px;
            }

            @media screen and (max-width: 768px) {
                width: auto;
            }
        }

        .title {
            width: 419px;
            margin-top: -30px;

            h1 {
                text-align: start;
                line-height: 38.73px;
                font-size: 32px;
                margin: 0;
            }

            p {
                line-height: 19.36px;
                margin-top: 8px;
                margin-bottom: 8px;
            }

            @media screen and (max-width: 1440px) {
                margin-top: 0;
            }

            @media screen and (max-width: 768px) {
                width: auto;
            }
        }

        @media screen and (max-width: 1440px) {
            flex-direction: column;
            align-items: unset;

            margin-top: 24px;
            margin-bottom: 24px;
        }

        @media screen and (max-width: 768px) {
            // width: 320px;
            width: auto;
        }
    }

    .nothing-block {
        gap: 56px;

        @media screen and (max-width: 768px) {
            gap: 26px;
        }
    }

    .nothing-second-block {
        justify-content: space-between;

        @media screen and (max-width: 1440px) {
            flex-direction: column-reverse;
            gap: 56px;
        }

        @media screen and (max-width: 768px) {
            gap: 26px;
        }
    }

    @media screen and (max-width: 1440px) {
        padding: 24px 90px;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        display: contents;
    }
}
</style>