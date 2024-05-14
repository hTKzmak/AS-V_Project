<script>

</script>

<template>
    <form>
        <div class="text_field">
        <h1>Нашли дешевле?</h1>
        <p class="info_text">Пришлите ссылку на этот товар в другом магазине и мы сделаем вам скидку</p>
        </div>
        <div class="inputs">
            <input placeholder="ссылка на этот товар в другом магазине" class="input_field" style="width: 91%;" type="url">
            <input placeholder="цена в другом магазине" class="input_field" style="width: 40%;" type="number">
            <input placeholder="+7" class="input_field" style="width: 43%;" type="tel">
        </div>
        <input value="получить скидку" type="submit" class="buttonElem">
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
    }
    .info_text{
        width: 60%;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: #585656;
    }
</style>