<script>
export default {

}
</script>

<template>
    <div>
        <form>
            <div class="text_field">
                <h1>Заказ принят в работу</h1>
                <p class="info_text">Наш менеджер перезвонит вам через 5 минут.</p>
            </div>
            <p class="info_text">Либо вы можете связаться с нами самостоятельно</p>
            <div class="last-info">
                <h2>+7 (812) 704-86-97</h2>
                <div class="social-media">
                    <a href="#!"><img src="../assets/icons/social_media/whatsapp.svg" alt="whatsapp"></a>
                    <a href="#!"><img src="../assets/icons/social_media/telegram.svg" alt="telegram"></a>
                    <a href="#!"><img src="../assets/icons/social_media/vk.svg" alt="vk"></a>
                </div>
            </div>
            <input value="продолжить покупки" type="submit" class="buttonElem">
        </form>
    </div>
</template>

<style scoped lang="scss">
.social-media {
    display: flex;
    flex-direction: row;
    gap: 10px;

    @media screen and (max-width: 768px) {

        gap: 4px;

        a>img {
            width: 24px;
        }
    }
}

.buttonElem {
    border-radius: 8px;
    border: 1px solid #0071E4;
    background-color: transparent;
    color: #0071E4;
    font-size: 16px;
    height: 56px;
    width: 180px;
    margin: 10px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media screen and (max-width: 768px) {
        gap: 8px;
    }
}

.inputs {
    width: 90%;
    align-items: row;
    flex-wrap: wrap;

}

.input_field {
    padding: 20px;
    border: 1px solid #DBDBDB;
    border-radius: 8px;
    margin: 5px;
    font-size: 16px;
}

.text_field {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1 {
    margin: 10px;
    padding: 0;
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 20px;
        text-align: left;
    }
}

h2 {
    font-size: 24px;
    margin: 0;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
}

.info_text {
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #585656;
    margin: 0;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        text-align: left;
    }
}

.last-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 768px) {
        justify-content: space-between;
        width: 100%;
        gap: 0;
    }
}
</style>