<script setup>
import { useModalStore } from '@/stores/ModalStore'
const modalStore = useModalStore()
function successHandle() {
    modalStore.changeModal('AcceptedCall')
}
</script>

<template>
    <form>
        <div class="text_field">
            <h1>Закажите обратный звонок</h1>
            <p class="info_text">Менеджер позвонит вам через 3 минуты</p>
        </div>
        <div class="inputs">
            <input placeholder="+7" class="input_field" style="width: 43%;" type="tel">
        </div>
        <input @click="successHandle()" value="заказать звонок" type="submit" class="buttonElem">
    </form>
</template>

<style scoped lang="scss">
.buttonElem {
    border-radius: 8px;
    font-size: 16px;
    height: 56px;
    width: 43%;
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
}

.inputs {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        width: 100%;

        input{
            width: 100%;
            margin: 0;
        }
    }

}

.input_field {
    padding: 20px;
    border: 1px solid #DBDBDB;
    border-radius: 8px;
    margin: 5px;
    font-size: 24px;
}

.text_field {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        align-items: unset;
        justify-content: unset;
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
        font-size: 20px;
        text-align: left;
        margin-left: 0;
        margin-bottom: 0;
    }
}

.info_text {
    width: 80%;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: #585656;

    @media screen and (max-width: 768px) {
        text-align: start;
    }
}
</style>