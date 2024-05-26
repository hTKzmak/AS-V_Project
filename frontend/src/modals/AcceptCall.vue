<script>

</script>

<template>
    <form>
        <div class="text_field">
        <h1>Заявка отправлена!</h1>
        <p class="info_text">Менеджер позвонит вам через 3 минуты</p>
        </div>
        <input value="Хорошо" type="submit" class="buttonElem">
    </form>
</template>

<style scoped lang="scss">
    .buttonElem{
        border-radius: 8px;
        font-size: 16px;
        height: 56px;
        width: 43%;
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
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

    }
    .input_field{
        padding: 20px;
        border: 1px solid #DBDBDB;
        border-radius: 8px;
        margin:5px;
        font-size: 24px;
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
        width: 100%;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: #585656;
    }
</style>