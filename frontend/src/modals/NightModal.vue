
<script>

</script>

<template>
<div class="night_cont">
        <img src="../assets/icons/modals/amimir.png" alt="sheissleepingfr">
        <form>
            <div class="text_field">
            <h1>Ваш заказ создан!</h1>
            <p class="info_text">Но все менеджеры уже спят(</p>
            </div>
            <p class="info_text">Мы позвоним вам, чтобы подтвердить<br> заказ в 9 часов утра по Москве</p>
            <input value="продолжить покупки" type="submit" class="buttonElem">
        </form>
    </div>
</template>

<style lang="scss" scoped>
    .night_cont{
        display: flex;
        @media screen and (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
    }
    img{
        @media screen and (max-width: 768px) {
            width: 137px;
            height: 128px;
        }
    }
    .social-media{
    display: flex;
    flex-direction: row;
    gap: 10px;
}
     .buttonElem{
        border-radius: 8px;
        border: 1px solid #F9F9F9;
        background-color: transparent;
        color: #F9F9F9;
        font-size: 16px;
        height: 56px;
        width: 180px;
        margin: 10px;
        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }
    form{
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 20px;
        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }
    .inputs{
        width: 90%;
        align-items: row;
        flex-wrap: wrap;

    }
    .input_field{
        padding: 20px;
        border: 1px solid #DBDBDB;
        border-radius: 8px;
        margin:5px;
        font-size: 16px;
    }
    .text_field{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
    }
        h1{
            margin: 0;
            padding: 0;
        width: 100%;
        text-align: start;
        font-size: 40px;
        font-weight: 700;
        color: #BADAFF;
        @media screen and (max-width: 768px) {
            font-size: 20px;
        }
    }
    h2{
        font-size: 24px;
        margin: 0;
    }
    .info_text{
        width: 100%;
        text-align: left;
        font-size: 20px;
        font-weight: 500;
        color: #BADAFF;
        margin: 0;
        @media screen and (max-width: 768px) {
            font-size: 14px;
        }
    }
    .last-info{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }
</style>