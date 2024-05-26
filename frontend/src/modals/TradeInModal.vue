<script>

</script>

<template>
    <form>
        <div class="text_field">
        <h1>Обменяйте старое устройство по Trade-In</h1>
        </div>
        <div class="inputs trade-desk">
            <input placeholder="какое устройство вы хотите сдать?" class="input_field" style="width: 91%;" type="text">
            <input placeholder="+7" class="input_field" style="width: 40%;" type="tel">
            <input value="получить скидку" type="submit" class="buttonElem" style="width: 40%;">
        </div>
        <div class="inputs trade-mobile">
            <input placeholder="какое устройство вы хотите сдать?" class="input_field" style="width: 91%;" type="text">
            <input placeholder="+7" class="input_field" style="width: 90%;" type="tel">
            <input value="обменять устройство" type="submit" class="buttonElem" style="width: 100%;">
        </div>
        
    </form>
</template>

<style scoped lang="scss">

    .buttonElem{
        border-radius: 8px;
        font-size: 16px;
        height: 56px;
        width: 89%;
        margin: 10px;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .inputs{
        display: flex;
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
        align-items: center;
        justify-content: center;
    }
        h1{
            margin: 10px;
            padding: 0;
        width: 100%;
        text-align: center;
        font-size: 32px;
        font-weight: 700;
        @media screen and (max-width: 768px) {
           font-size: 20px;
        }
    }
    .info_text{
        width: 60%;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: #585656;
    }

    .trade-mobile{
        display: none;
        @media screen and (max-width: 768px) {
           display: flex;
           flex-direction: column;
        }
    }
    .trade-desk{
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
</style>