<script>

</script>

<template>
    <div class="form">
        <div class="container form-container">
            <img src="../assets/images/mobile.png" alt="#">
            <div class="form-template">
                <h1>Подписка на <br> рассылку акций!</h1>
                <p>Подпишитесь на рассылку, чтобы <br> узнавать о всех акциях первым</p>
                <div class="form-place">
                    <h2>Скидка 10%</h2>
                    <p>на первую покупку за подписку</p>
                    <form action="#">
                        <input type="tel" placeholder="+7">
                        <input type="submit" value="подписаться">
                    </form>
                </div>
                <form class="form-mobile" action="#">
                    <input type="tel" placeholder="+7">
                    <input type="submit" value="подписаться">
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.form {
    background-color: #F9F9F9;
    padding-top: 40px;
    padding-bottom: 40px;

    .form-container {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 86px;

        img {
            @media screen and (min-width: 769px) and (max-width: 1440px) {
                width: 30vw;
            }

            @media screen and (max-width: 768px) {
                display: none;
            }
        }

        .form-template {

            h1,
            p {
                text-align: start;
                margin: 0;
            }

            p {
                font-size: 24px;
                color: #585656;
                margin-top: 8px;
            }

            .form-place {
                background: linear-gradient(90.34deg, #F7355D 0.3%, #9747FF 101.33%);
                border-radius: 16px;
                padding: 16px 32px 32px;
                margin-top: 25px;

                h2 {
                    font-size: 40px;
                    color: #FFF;
                    margin: 0;


                    @media screen and (max-width: 1439px) {
                        font-size: 20px;
                    }
                }

                p {
                    color: #FFF;
                    margin: 0;

                    @media screen and (max-width: 1439px) {
                        font-size: 16px;
                    }
                }

                form {

                    display: flex;
                    align-items: center;
                    gap: 16px;

                    input {
                        border: 1px solid #DBDBDB;
                        border-radius: 8px;
                        margin-top: 16px;
                    }

                    input[type="tel"] {
                        font-size: 24px;
                        color: #878787;
                        outline: none;
                        padding: 15px 22px;
                    }

                    input[type="submit"] {
                        font-size: 16px;
                        color: #585656;
                        padding: 20px 33px;
                    }

                    @media screen and (max-width: 1439px) {
                        display: none;
                    }

                }


                @media screen and (max-width: 1440px) {
                    padding: 8px 16px;
                    width: fit-content;
                }

                @media screen and (max-width: 768px) {
                    width: auto;
                }

            }

            .form-mobile {
                display: none;

                input {
                    border: 1px solid #DBDBDB;
                    border-radius: 8px;
                    margin-top: 16px;
                }

                input[type="tel"] {
                    font-size: 24px;
                    color: #878787;
                    outline: none;
                    padding: 15px 22px;

                    @media screen and (max-width: 1439px) {
                        width: 20vw;
                    }

                    @media screen and (max-width: 768px) {
                        width: auto;
                    }
                }

                input[type="submit"] {
                    font-size: 16px;
                    color: #585656;
                    padding: 20px 33px;
                }

                @media screen and (max-width: 1439px) {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                @media screen and (max-width: 768px) {
                    display: grid;
                    gap: 0;
                }
            }

            @media screen and (max-width: 768px) {
                width: 100%;
            }

        }

        @media screen and (min-width: 769px) and (max-width: 1440px) {
            align-items: start;
        }
    }

    @media screen and (max-width: 1440px) {
        background-color: #fff;
    }
}
</style>