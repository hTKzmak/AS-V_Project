<script setup>
import { ref } from 'vue';
    let last = ref([
    {
        name: 'iPhone 14 Pro Max Deep Purple',
        image: '../assets/icons/modals/last.png'
    },
    {
        name: 'iPhone 14 Pro Max Deep Purple',
        image: '../assets/icons/modals/last.png'
    },
    {
        name: 'iPhone 14 Pro Max Deep Purple',
        image: '../assets/icons/modals/last.png'
    },
    {
        name: 'iPhone 14 Pro Max Deep Purple',
        image: '../assets/icons/modals/last.png'
    },
    {
        name: 'iPhone 14 Pro Max Deep Purple',
        image: '../assets/icons/modals/last.png'
    }
    ])
</script>

<template >
    <div>
        <form>
        <img src="../assets/icons/modals/box.png" alt="">
        <div class="text_field">
        <h1>В корзине пока ничего нет</h1>
        <p class="info_text">Но вы можете легко это исправить</p>
        </div>
        <input value="начать покупки" type="submit" class="buttonElem">
        <p class="check_last">Кстати, вы это смотрели</p>
        <div class="last">
            <div v-for="(item, index) in last" :key="index" class="product_card">
                <img src='../assets/icons/modals/last.png' alt="">
                <p class="prodName">{{ item.name }}</p>
            </div>
        </div>
    </form>
</div>
</template>

<style scoped lang="scss">
.check_last{
    font-size: 20px;
    @media screen and (max-width: 768px) {
        font-size: 16px;
        }
}
.prodName{
    margin: 0;
    font-size: 14px;
    text-align: center;
    @media screen and (max-width: 768px) {
        text-align: left;
        }
}
.product_card{
    width: 80px;
    @media screen and (max-width: 768px) {
        display: flex;
        min-width: 175px;
        height: 64px;
        }
}
.last{
    display: flex;
    gap: 25px;
    @media screen and (max-width: 768px) {
            max-width: 380px;
            overflow-x: scroll;
        }
}
     .buttonElem{
        border-radius: 8px;
        font-size: 16px;
        height: 56px;
        width: 43%;
        margin: 10px;
        @media screen and (max-width: 768px) {
            width: 80%;
        }
    }
    form{
        width: 100%px;
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
        @media screen and (max-width: 768px) {
            font-size: 20px;
        }
    }
    img{
        width: 56px;
        @media screen and (max-width: 768px) {
            width: 48px;
            height: 48px;
        }
    }
    .info_text{
        width: 100%;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: #585656;
    }
</style>