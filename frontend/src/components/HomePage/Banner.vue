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
    <div class="container">
      <img src="../../assets/images/iphone.png" alt="phone ( ͡° ͜ʖ ͡°)">
      <div class="banner-title">
        <h1>iPhone 14 Pro Max</h1>
        <p>по лучшей цене в Москве</p>
        <!-- <ButtonElem title="подробнее" addedItemStyle="false" /> -->
        <RouterLink to="/product/61">подробнее</RouterLink>
      </div>
    </div>
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
  background: #000;
  color: #FFF;
  height: 360px;
  overflow: hidden;
  margin-bottom: 32px;

  img {
    @media screen and (max-width: 1440px) {
      width: 110px;
      height: 276px;
    }

    @media screen and (max-width: 768px) {
      width: 65px;
      height: 163px;
    }
  }

  .container {
    display: flex;
    justify-content: start;

    .banner-title {
      margin: 100px 88px;

      h1 {
        margin: 0;
        text-align: start;
        font-weight: 700;

        @media screen and (max-width: 1440px) {
          font-size: 32px;
        }

        @media screen and (max-width: 768px) {
          font-size: 20px;
        }
      }

      p {
        @media screen and (max-width: 768px) {
          margin: 4px 0 16px;
        }
      }

      a {
        background-color: #0071E4;
        color: #FFF;

        display: ruby-text;
        
        font-size: 16px;
        font-family: "SF Pro Display Medium", sans-serif;
        
        border: none;
        border-radius: 8px;

        cursor: pointer;

        padding: 18px 40px;

        max-width: 80px;
          @media screen and (max-width: 1440px) {
              max-width: none;
          }

        @media screen and (max-width: 768px) {
          width: 100%;
          border-radius: 8px;
          font-size: 16px;
          height: 40px;
        }
      }

      @media screen and (max-width: 1440px) {
        margin: 35px 72px;
      }

      @media screen and (max-width: 768px) {
        margin: 17px 0 15px 14px;
      }
    }

  }


  @media screen and (min-width: 769px) and (max-width: 1440px) {
    height: 217px;
  }

  @media screen and (max-width: 768px) {
    height: 151px;
  }
}
</style>