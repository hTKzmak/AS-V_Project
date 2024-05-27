<script>
import ProductInfo from '../components/ProductPage/ProductInfo.vue';
import DeliveryQA from '../components/ProductPage/DeliveryQA.vue';
import Nothing from '../components/ProductPage/Nothing.vue';
import Watched from '../components/ProductPage/Watched.vue'
import ButtonElem from '../components/UI/ButtonElem.vue'

export default {
    components: {
        ProductInfo,
        DeliveryQA,
        Nothing,
        Watched,
        ButtonElem
    }
}
</script>

<template>
    <ProductInfo />
    <DeliveryQA />
    <Nothing />

    <div class="lastChance container">
        <img src="../assets/img.png" alt="Product">
        <h1>Oculus Quest 2</h1>
        <p>Уже почти ваш</p>
        <ButtonElem title="Выбрать модель" addedItemStyle="false"/>
    </div>

    <Watched/>
</template>

<style lang="scss">
.lastChance{
    display: none;
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: center;

    h1{
        margin: 24px 0 0;

        @media screen and (max-width: 768px) {
            font-size: 32px;
        }
    }

    p{
        font-size: 24px;
        font-weight: 500;
        margin-top: 16px;
        margin-bottom: 24px;
    }

    img{
        width: 320px;
        margin: 0 auto;
    }

    button{
        margin: 0 auto;
        padding: 12px 60px;
    }

    @media screen and (max-width: 1440px) {
        display: grid;
    }
}
</style>