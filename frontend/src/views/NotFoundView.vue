<script>
import ButtonElem from '@/components/UI/ButtonElem.vue';
import { RouterLink } from 'vue-router'

export default {
  components: {
    ButtonElem
  }
}
</script>


<template>
  <div class="error-page">
    <h1>Ошибка 404</h1>
    <p>Кажется, такой страницы больше не существует.</p>
    <!-- <ButtonElem title="вернуться на главную"/> -->
    <RouterLink class="buttonElem" to="/">вернуться на главную</RouterLink>
    <img class="img" src="../assets/404.png" alt="404 image">
  </div>
</template>

<style lang="scss">
.error-page {
  display: grid;
  justify-content: center;
  text-align: center;
  margin-top: 72px;
  margin-bottom: 72px;

  h1 {
    margin: 0;

    @media screen and (max-width:768px) {
      font-size: 32px;
    }
  }

  p {

    color: #585656;

    @media screen and (max-width: 768px) {
      width: 14rem;
      margin: 10px auto;
    }
  }

  .buttonElem {
    margin: 15px auto;
    width: 280px;
    height: 50px;
  }

  .img {
    margin: 10px auto;

    @media screen and (max-width: 768px) {
      width: 280px;
      margin: 10px auto;
    }
  }

}
</style>
