<script>

</script>

<template>
    <form>
        <div class="text_field">
            <h1>Нашли дешевле?</h1>
            <p class="info_text">Пришлите ссылку на этот товар в другом магазине и мы сделаем вам скидку</p>
        </div>
        <div class="inputs">
            <input placeholder="ссылка на этот товар в другом магазине" class="input_field first" type="url">
            <div class="other-inputs">
                <input placeholder="цена в другом магазине" class="input_field" type="number">
                <input placeholder="+7" class="input_field" type="tel">
            </div>
        </div>
        <input value="получить скидку" type="submit" class="buttonElem">
    </form>
</template>

<style scoped lang="scss">
.buttonElem {
    border-radius: 8px;
    font-size: 16px;
    height: 56px;
    width: 89%;
    margin: 10px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.inputs {
    width: 90%;
    align-items: row;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        width: auto;
    }

    .first {
        width: 93%;

        @media screen and (max-width: 768px) {
            width: auto;
        }
    }

    .input_field {
        padding: 20px;
        border: 1px solid #DBDBDB;
        border-radius: 8px;
        margin: 5px;
        font-size: 16px;
        margin-left: 0;
        margin-right: 0;
    }

    .other-inputs {
        display: flex;
        justify-content: space-between;
        gap: 8px;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            gap: 0;
        }

        .input_field {
            &:first-child {
                width: 204px;

                @media screen and (max-width: 768px) {
                    width: auto;
                }
            }

            &:last-child {
                width: 60%;

                @media screen and (max-width: 768px) {
                    width: auto;
                }
            }
        }
    }
}


.text_field {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        align-items: start;
        justify-content: left;
    }
}

h1 {
    margin: 10px;
    padding: 0;
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        text-align: left;
        width: auto;
        font-size: 20px;
        margin-left: 0;
    }
}

.info_text {
    width: 60%;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: #585656;
    margin-top: 0;

    @media screen and (max-width: 768px) {
        text-align: left;
        width: auto;
        margin-top: 0;
    }
}
</style>