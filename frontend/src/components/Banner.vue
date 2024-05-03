<script>
import ButtonElem from '@/components/UI/ButtonElem.vue';

export default {
  components: {
    ButtonElem
  }
}
</script>

<template>

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
      <li>Товары, представленные на официальном сайте Istoreapple.ru, сертифицированы. Мы занимаемся продажей айфонов с
        2013 года. Вы всегда можете прочитать отзывы о покупке наших клиентов, позвонить в магазин и получить
        консультацию по любой модели Apple.</li>
    </ul>
  </div>

  <div class="banner">
    <div class="container banner-title">
      <h1>iPhone 14 Pro Max</h1>
      <p>по лучшей цене в Москве</p>
      <ButtonElem title="подробнее" />
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
      <li>Товары, представленные на официальном сайте Istoreapple.ru, сертифицированы. Мы занимаемся продажей айфонов с
        2013 года. Вы всегда можете прочитать отзывы о покупке наших клиентов, позвонить в магазин и получить
        консультацию по любой модели Apple.</li>
    </ul>
  </div>
  
</template>

<style lang="scss">
.info {

  margin-top: 32px;
  margin-bottom: 32px;

  h1 {
    font-size: 32px;
    text-align: start;
  }

  ul {
    padding: 0;
    color: #585656;

    li {
      list-style-type: none;
    }
  }
}

.banner {
  background: #000 url('../assets/iphone.png') no-repeat;
  background-position: 170px top;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 360px;

  .banner-title {
    text-align: start;
    padding-left: 200px;

    h1 {
      margin: 0;
      text-align: start;

      @media screen and (max-width: 768px) {
        font-size: 20px;
      }
    }

    @media screen and (max-width: 768px) {
      padding-left: 100px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1440px) {
    background-position: 25px top;
    background-size: 165px;
    height: 217px;
  }

  @media screen and (max-width: 768px) {
    background-position: 20px top;
    background-size: 105px;
    height: 200px;
  }
}
</style>