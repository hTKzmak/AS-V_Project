<script setup>
import { ref, onMounted, computed } from 'vue';
// import { useModalStore } from '@/stores/ModalStore'
import { useCurrentProductStore } from '../stores/CurrentProductStore'
import ButtonElem from '@/components/UI/ButtonElem.vue';
// const modalStore = useModalStore()
const CurrentProductStore = useCurrentProductStore()
console.log(CurrentProductStore.image)

const value = ref(6);
const MonthPayment = ref(Math.round(CurrentProductStore.price / value.value))
const min = 2;
const max = 36;
const marks = [2, 6, 12, 18, 24, '', 36];
const tooltipPosition = ref('0px');

const updateTooltip = () => {
  const slider = document.querySelector('.slider-range');
  const sliderWidth = slider.offsetWidth;
  const left = (value.value - min) / (max - min) * sliderWidth;
  tooltipPosition.value = `calc(${left}px - (${left / sliderWidth} * 20px))`;
  MonthPayment.value = ref(CurrentProductStore.price / value.value)
};

onMounted(() => {
  updateTooltip();
});

// Хранилище или состояние для данных
const selectedBank = ref('Любой');
const age = ref('');
const phone = ref('');
const debt = ref('no');

let selectedBankGlow = ref(false);
let ageGlow = ref(false);
let phoneGlow = ref(false);
let debtGlow = ref(false);

// Валидация телефона
const isValidPhone = (phone) => {
  const phoneRegex = /^\+7\d{10}$/;
  return phoneRegex.test(phone);
};

// Вычисляемое свойство для проверки всех условий
const isFormValid = computed(() => {
  return (
    isValidPhone(phone.value) &&
    +age.value >= 18 &&
    debt.value === 'no' &&
    selectedBank.value !== 'Любой'
  );
});

// Функция для обработки отправки формы
const handleSubmit = () => {
  if (isFormValid.value) {
    // Ваш код для обработки отправки формы
    console.log('Форма отправлена');
  } else {
    console.log('Форма невалидна');
  }
};

const handleNonSubmit = () => {
  if (isFormValid.value) {
    // Ваш код для обработки отправки формы
    console.log('Форма отправлена');
  } else {
    console.log('Форма невалидна');
    if (selectedBank.value == 'Любой') {
      selectedBankGlow.value = true
    }
    if (age.value < 18) {
      ageGlow.value = true
    }
    if (phone.value == 'Любой') {
      selectedBankGlow.value = true
    }
    if (selectedBank.value == 'Любой') {
      selectedBankGlow.value = true
    }
  }
};


</script>

<template>
  <div class="OneCLickContainer">
    <img class="prodImg desk-credit" :src="CurrentProductStore.image" alt="">
    <div class="textField custom-scrollbar-min">
      <p class="smallInfo desk-credit">Купить в кредит</p>
      <h2 class="desk-credit">{{ CurrentProductStore.name }}</h2>
      <p class="oldPrice desk-credit">{{ CurrentProductStore.oldPrice }} ₽</p>
      <p class="currPrice desk-credit">{{ CurrentProductStore.price }} ₽</p>

      <div class="mobile-credit">
        <img class="prodImg" :src="CurrentProductStore.image" alt="">

        <div class="mobile-info">
          <p class="smallInfo">Купить в кредит</p>
          <h2>{{ CurrentProductStore.name }}</h2>
          <div class="mobile-price">
            <p class="oldPrice">{{ CurrentProductStore.oldPrice }} ₽</p>
            <p class="currPrice">{{ CurrentProductStore.price }} ₽</p>
          </div>
        </div>
      </div>

      <h4>Выберите банк</h4>
      <div class="payment-select-wrapper">
        <div class="custom-select">
          <select v-model="selectedBank">
            <option>Любой</option>
            <!-- Добавьте другие варианты банков здесь -->
            <option>Банк 1</option>
            <option>Банк 2</option>
          </select>
        </div>
      </div>

      <h4>Срок кредита</h4>
      <div class="slider-container">
        <input type="range" v-model="value" :min="min" :max="max" @input="updateTooltip" class="slider-range">
        <div class="slider-values">
          <span v-for="mark in marks" :key="mark">{{ mark }}</span>
        </div>
        <div class="slider-tooltip number-check" :style="{ left: tooltipPosition }">{{ value }}</div>
      </div>

      <h4>Приблизительный <br> ежемесячный платеж</h4>
      <p class="MonthPayment">{{ Math.round(MonthPayment.value) }}₽</p>

      <h4>Есть задолженность <br> по кредитам?</h4>
      <div class="radio-group">
        <label>
          <input type="radio" name="debt" value="yes" v-model="debt">
          <p class="radio-answer">Да</p>
        </label>
        <label>
          <input type="radio" name="debt" value="no" v-model="debt">
          <p class="radio-answer">Нет</p>
        </label>
      </div>

      <h4>Ваш возраст?</h4>
      <input placeholder="" class="input_field age" type="number" v-model="age">

      <h4>Напишите свой номер и мы позвоним<br> Вам в течение 5 минут</h4>
      <input placeholder="+7" class="input_field" type="tel" v-model="phone">

      <div style="width: 256px; height: 56px;">
        <ButtonElem title="отправить заявку" addedItemStyle="false"
          :action="isFormValid ? handleSubmit : handleNonSubmit" />
      </div>

      <p class="smallInfo">Либо позвоните или напишите нам </p>
      <div class="last-info">
        <h3>+7 (812) 704-86-97</h3>
        <div class="social-media">
          <a href="#!"><img src="../assets/icons/social_media/whatsapp.svg" alt="whatsapp"></a>
          <a href="#!"><img src="../assets/icons/social_media/telegram.svg" alt="telegram"></a>
          <a href="#!"><img src="../assets/icons/social_media/vk.svg" alt="vk"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
}

.glow-red {
  box-shadow: 0 0 5px red
}

// кастомный селект
.custom-select {
  // width: 280px;
  position: relative;

  select {
    appearance: none;
    /*  safari  */
    -webkit-appearance: none;
    /*  other styles for aesthetics */

    font-size: 1.15rem;
    padding: 8px 16px;
    background-color: #F9F9F9;
    border: none;

    width: 280px;

    color: #100E0E;
    cursor: pointer;
    border-radius: 8px;
    font-size: 16px;

    @media screen and (max-width: 768px) {
      width: 210px;
    }
  }
}


.custom-select::after {
  content: "";
  position: absolute;
  right: 1rem;
  pointer-events: none;

  border: solid #706e6e;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
}

.custom-select::after {
  top: 20%;

  border-color: #0071e4;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}



.payment-select-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: left;
  min-width: 280px;
  max-width: 300px;
}

.payment-select-wrapper label {
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}

.payment-select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fafafa;
  -webkit-appearance: none;
  /* Remove default arrow in Webkit browsers */
  -moz-appearance: none;
  /* Remove default arrow in Firefox */
  appearance: none;
  /* Remove default arrow in modern browsers */
  background-image: url('../assets/icons/arrow.svg');
  background-repeat: no-repeat;
  background-position: right 10px top 50%;
  background-size: 16px 16px;
}

.payment-select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.desk-credit {
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.mobile-credit {
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  }
}

// Стили для Radio
.radio-answer {
  font-weight: 400;
  font-size: 16px;
}

.radio-container {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.radio-container p {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.radio-group {
  display: flex;
  justify-content: left;
  gap: 20px;
}

// Стилизация radio

.radio-group {
  label {
    display: flex;
    justify-content: left;
    gap: 10px;
    align-items: baseline;

    input[name="debt"] {
      margin: 0;
    }
  }
}

.radio-group input[type="radio"]~.b-input {
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  background: #f1f5f9;
  transition: background 250ms;
  border: 1px solid #94a3b8;
  border-radius: 9.98rem;
}

.radio-group input[type="radio"]~.b-input::after {
  content: "";
  position: absolute;
  display: none;
  left: 3px;
  top: 3px;
  height: 24px;
  width: 24px;
  border-radius: 3rem;
  background: rgb(0, 113, 228);
  transition: background 250ms;
}

.radio-group input:checked~.b-input::after {
  display: block;
}

.radio-group:hover input[type="radio"]:not([disabled])~.b-input,
.radio-group input[type="radio"]:focus~.b-input {
  background: #e2e8f0;
  border-color: #64748b;
}

.radio-group input:focus~.b-input {
  box-shadow: 0 0 0 0px #60a5fa;
}

.radio-group input[type="radio"]:checked~.b-input {
  background: rgb(255, 255, 255);
  border-color: #1d4ed8;
}

.radio-group input[type="radio"]:disabled~.b-input::after {
  background: #ffffff;
}

.radio-group:hover input[type="radio"]:not([disabled]):checked~.b-input,
.radio-group input[type="radio"]:checked:focus~.b-input {
  background: rgba(37, 99, 235, 0.29);
  border-color: rgba(30, 64, 175, 0.53);
}

// -----------------------------------------------------------




select,
option {
  padding: 10px;
  width: 260px;
  height: 40px;
  border: 1px solid white;
  outline: none;
}

.MonthPayment {
  color: #0071E4;
  font-weight: 500;
  font-size: 32px;
}

h4 {
  font-size: 20px;
  font-weight: 700;
}

//----------------------------------------- Слайдер -----------------------------------------------
.slider-container {
  position: relative;
  width: 80%;
  max-width: 334px;
  padding: 0;
  margin: 0;
}

.slider-range {
  width: 100%;
  margin: 30px 0 10px 0;
  background: #0071E4;
  color: #0071E4;
  border: 1px solid #0071E4;
  height: 1px;

}

.slider-values {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}

.slider-values span {
  font-size: 14px;
  color: #666;
}

.slider-tooltip {
  position: absolute;
  top: -5px;
  // left: 50%;
  transform: translateX(-20%);
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-weight: bold;
  color: #333;
  pointer-events: none;
  white-space: nowrap;
}

input[type="range"] {
  -webkit-appearance: none;
  /* Убирает стандартное оформление браузера */
  width: 100%;
  /* Задает ширину слайдера */
}

/* Стили для дорожки слайдера */
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  /* Высота дорожки */
  background: #007bff;
  /* Цвет дорожки */
  border-radius: 5px;
  /* Скругление углов */
  border: 0;
  /* Убирает границы */
}

input[type="range"]::-moz-range-track {
  width: 100%;
  height: 4px;
  background: #007bff;
  border-radius: 5px;
  border: 0;
}

input[type="range"]::-ms-track {
  width: 100%;
  height: 4px;
  background: transparent;
  /* Прозрачный фон для дорожки в IE */
  border-color: transparent;
  color: transparent;
}

/* Стили для ползунка */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 25px;
  /* Ширина ползунка */
  height: 25px;
  /* Высота ползунка */
  background: #007bff;
  /* Цвет ползунка */
  border-radius: 50%;
  /* Скругление углов */
  cursor: pointer;
  /* Курсор при наведении */
  margin-top: -10px;
  /* Смещение, чтобы центрировать ползунок на дорожке */
}

input[type="range"]::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #007bff;
  border-radius: 50%;
  cursor: pointer;
}

input[type="range"]::-ms-thumb {
  width: 25px;
  height: 25px;
  background: #007bff;
  border-radius: 50%;
  cursor: pointer;
}

/* Для IE нужно дополнительно стилизовать заполненную часть дорожки */
input[type="range"]::-ms-fill-lower {
  background: #007bff;
  border-radius: 5px;
}

input[type="range"]::-ms-fill-upper {
  background: #ddd;
  border-radius: 5px;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------

.number-check {
  z-index: 3;
}

.point {
  width: 18px;
  height: 18px;
  padding: 5px;
  border-radius: 180px;
  margin-top: 20px;
  background-color: #0071E4;
}


button {
  height: 56px;
  font-size: 16px;
  border-radius: 8px;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    width: 230px;
  }
}

img {
  height: 32px;
  width: 32px;

  @media screen and (max-width: 768px) {
    height: 24px;
    width: 24px;
  }
}

h3 {
  font-size: 24px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
}

h2 {
  font-size: 28px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
}

.mobile-price {
  display: flex;
}

.oldPrice {
  font-size: 20px;
  font-weight: 400;
  color: #706E6E;
  text-decoration: line-through;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
}

.currPrice {
  font-size: 32px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
}

.smallInfo {
  font-size: 16px;
  font-weight: 500;
  color: #585656;

  @media screen and (max-width: 768px) {
    width: 10rem;
  }
}

.social-media {
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: -10px;
}

.last-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.prodImg {
  width: 150px;
  height: 162px;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    margin: 5px;
    width: 56px;
    height: 60px;
  }
}

.OneCLickContainer {
  display: flex;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 0;
    padding-top: 20px;
    padding-right: 20px;
  }
}

.buttonElem {
  border-radius: 8px;
  font-size: 16px;
  height: 56px;
  width: 43%;
  margin: 10px;
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

}

.input_field {
  padding: 20px;
  width: 209px;
  height: 16px;
  border: 1px solid #DBDBDB;
  border-radius: 8px;
  margin: 5px;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    width: 185px;
  }
}

.age {
  width: 40px;
}

.textField {
  display: flex;
  flex-direction: column;
  align-items: self-start;
  justify-content: start;
  overflow-y: scroll;
  width: 90%;
  max-height: 480px;

  gap: 4px;

  @media screen and (max-width: 768px) {
    overflow-y: visible;
  }
}

h1 {
  margin: 10px;
  padding: 0;
  width: 100%;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
}

.info_text {
  width: 80%;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #585656;
}
</style>