<script>
import InfoBlocks from '../components/ListOfProducts/InfoBlocks.vue'
import TagsAndSort from '../components/ListOfProducts/TagsAndSort.vue'
import Filter from '../components/ListOfProducts/Filter.vue';
import ProductsList from '../components/ProductsList.vue';

import speedImg from '../components/ProductPage/assets/icons/speed.svg';
import cashImg from '../components/ProductPage/assets/icons/cash.svg';
import bankImg from '../components/ProductPage/assets/icons/bank.svg';
import sequrityImg from '../components/ProductPage/assets/icons/sequrity.svg';
import { useCounterStore } from '@/stores/AppleStore';

export default {
    components: {
        InfoBlocks,
        TagsAndSort,
        Filter,
        ProductsList
    },
    data() {
        return {
            advantagesData: [
                { id: 1, img: speedImg, title: 'Доставка за 2 часа', text: 'Быстро и бесплатно доставляем все заказы по Москве' },
                { id: 2, img: cashImg, title: 'Удобная оплата', text: 'Все виды наличного и безналичного расчета' },
                { id: 3, img: bankImg, title: 'Кредит', text: 'Выгодные кредитные предложения от самых популярных банков' },
                { id: 4, img: sequrityImg, title: 'Гарантия', text: 'Предоставляем целый год сервисного обслуживания' },
            ],
        }
    },
    setup() {
        const appleStore = useCounterStore()
        return {
            appleStore,
            count: 12
        }
    }
}
</script>

<template>
    <InfoBlocks />
    <TagsAndSort />

    <div class="fff">
        <Filter></Filter>
        <ProductsList :count="count" :data="appleStore.data" />
    </div>



    <div class="advantages container">
        <div class="advantage-item" v-for="elem in advantagesData" :id=elem.id>
            <div class="imgAndTitle">
                <img :src=elem.img alt="#">
                <h3>{{ elem.title }}</h3>
            </div>
            <p>{{ elem.text }}</p>
        </div>
    </div>

    <div class="info container">
        <h1>Новые модели Айфонов по выгодным ценам</h1>
        <ul>
            <p>Для тех, кто хочет приобрести новый телефон магазин Istoreapple.ru предлагает:</p>
            <li>Низкие цены на все виды устройств, недорогие аксессуары;</li>
            <li>Оригинальные подарки бренда;</li>
            <li>Новая линейка смартфонов и проверенные старые модели;</li>
            <li>Лаконичный дизайн, большой выбор цветов и оттенков;</li>
            <li>Все товары в каталоге есть в наличии и доступны для покупки в кредит и рассрочку;</li>
            <li>Быстрая доставка по Санкт-Петербургу и области;</li>
            <li>Гарантия на все модели телефонов;</li>
            <li>Все способы оплаты!</li>
            <li>Товары, представленные на официальном сайте Istoreapple.ru, сертифицированы. Мы занимаемся продажей
                айфонов с
                2013 года. Вы всегда можете прочитать отзывы о покупке наших клиентов, позвонить в магазин и получить
                консультацию по любой модели Apple.</li>
        </ul>
    </div>
</template>

<style lang="scss">

.fff{
    display: flex;
    flex-direction: row;

    .products-list{
        justify-content: center;
    }
}

.advantages {
    display: none;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 24px;
    margin-bottom: 24px;

    .advantage-item {
        text-align: center;
        width: 250px;

        .imgAndTitle {

            img {
                width: 60px;

                @media screen and (max-width: 768px) {
                    width: 35px;
                }
            }

            h3 {
                font-weight: 700;
                margin: 0;
            }

            @media screen and (max-width: 768px) {
                display: flex;
                align-items: center;
                gap: 16px;
            }

        }


        p {
            color: #585656;
            margin-top: 4px;
        }

        @media screen and (max-width: 768px) {
            text-align: start;
            width: 265px;
        }
    }

    @media screen and (max-width: 1440px) {
        display: flex;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 768px) {
        display: grid;
        justify-content: start;
        gap: 16px;
    }
}
</style>