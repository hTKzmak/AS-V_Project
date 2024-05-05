<script>
import { RouterLink } from 'vue-router'
import discountImg from '../assets/images/discount.png'
import deliveryImg from '../assets/images/delivery.png'
import walletImg from '../assets/images/wallet.png'
import columnsImg from '../assets/images/columns.png'
import approvalImg from '../assets/images/approval.png'

export default {
    data() {
        return {
            data: [
                { id: 1, img: discountImg, title: 'Акции и подарки', description: 'Постоянные акции, бонусы и скидки. Покупайте технику Apple по самым выгодным ценам', gradient: 'linear-gradient(180.04deg, #FE94A6 0.04%, #F2F2F2 65.84%)' },
                { id: 2, img: deliveryImg, title: 'Доставим за 3 часа', description: 'Быстрая и бесплатная доставка по Москве. Доставим за 3 часа в день заказа. Также доступна быстрая доставка по всей России или самовывоз', gradient: 'linear-gradient(180.04deg, #E685FF 0.04%, #F2F2F2 65.84%)' },
                { id: 3, img: walletImg, title: 'Удобные способы оплаты', description: 'Наличными или картой при получении, оплата на сайте или в кредит', gradient: 'linear-gradient(180.04deg, #7DE9FF 0.04%, #F2F2F2 65.84%)' },
                { id: 4, img: columnsImg, title: 'Покупка в кредит', description: 'Получите самое выгодное кредитное предложение от более чем 30 ведущих банков страны', gradient: 'linear-gradient(180.04deg, #FFE685 0.04%, #F7F7F7 65.84%)' },
                { id: 5, img: approvalImg, title: 'Гарантия', description: 'Все товары, представленные в нашем сайте, имеют гарантию от нашего магазина или компании Apple', gradient: 'linear-gradient(180.04deg, #ADFFC1 0.04%, #F2F2F2 65.84%)' },
            ]
        }
    }
}
</script>

<template>
    <h2 class="benefits-title">Наши преимущества</h2>
    <div class="benefits-list container">
        <div class="benefits-item" v-for="info in data" :id=info.id :style="{ background: info.gradient }">
            <img :src=info.img alt="benefits-image">
            <h3>{{ info.title }}</h3>
            <p>{{ info.description }}</p>
            <RouterLink to="/lol">подробнее</RouterLink>
        </div>
    </div>
</template>

<style lang="scss">
.benefits-title {
    text-align: center;
    font-size: 32px;
}

.benefits-list {
    display: flex;
    justify-content: space-between;
    gap: 5px;

    .benefits-item {
        background: linear-gradient(180.04deg, #FE94A6 0.04%, #F2F2F2 65.84%);

        padding: 24px 8px 32px;
        width: 228px;
        height: 450px;

        position: relative;

        text-align: center;

        border-radius: 16px;

        .img {
            width: 160px;
            height: 160px;
            background-color: red;
            margin: 0 auto;
        }

        h3 {
            font-size: 24px;
            margin: 16px auto 8px;
        }

        p {
            font-size: 16px;
            color: #585656;
            width: 215px;
            margin: 0 auto;
        }

        a {
            position: absolute;
            bottom: 32px;
            margin: 0 auto;
            left: 8px;
            right: 8px;

            border: 1px solid #0071E4;
            padding-top: 17px;
            padding-bottom: 17px;

            border-radius: 8px;
        }
    }

}
</style>