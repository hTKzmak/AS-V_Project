<template>
  <div class="contacts-container container">
    <section class="contact-info">
      <h2 class="contacts-title">Контакты</h2>
      <div class="phone-section">
        <p class="contacts-title-mobile">Контакты</p>
        <p class="phone-text">Можно позвонить</p>
        <a href="tel:+78127048697" class="phone-number">+7 (812) 704-86-97</a>
        <p class="availability">на связи с 10:00 до 22:00</p>
      </div>
      <div class="callback-section">
        <p class="callback-text">Можем позвонить мы</p>
        <a href="#" class="callback-link">заказать звонок</a>
      </div>
      <div class="contact-methods">
        <p class="write-text">Можно написать</p>
        <div class="icons">
          <a href="https://wa.me/79123456789" aria-label="WhatsApp">
            <img src="../../assets/icons/social_media/whatsapp.svg" alt="WhatsApp" class="icon-img">
          </a>
          <a href="https://t.me/username" aria-label="Telegram">
            <img src="../../assets/icons/social_media/telegram.svg" alt="Telegram" class="icon-img">
          </a>
          <a href="https://vk.com/username" aria-label="VK">
            <img src="../../assets/icons/social_media/vk.svg" alt="VK" class="icon-img">
          </a>
          <a href="mailto:info@AppleShops.ru" class="email-text">info@AppleShops.ru</a>
        </div>
      </div>
    </section>
    <section class="address-section">

      <div class="address-and-map">
        <ul class="address-list">
          <p style="margin-bottom: 15px;">Можно приехать</p>
          <li>г. Санкт-Петербург, Лиговский проспект 10/118</li>
          <li>г. Санкт-Петербург, Лиговский проспект 10/118</li>
          <li>г. Санкт-Петербург, Лиговский проспект 10/118</li>
          <li>г. Санкт-Петербург, Лиговский проспект 10/118</li>
        </ul>
        <div class="map">
          <iframe class="map-img" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.9678965935734!2d30.360167012651555!3d59.9326748748074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631a3530d71b9%3A0xf49c938b06567eeb!2z0JvQuNCz0L7QstGB0LrQuNC5INC_0YAuLCAxMCAvIDExOCwg0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsIDE5MTAzNg!5e0!3m2!1sru!2sru!4v1717878428517!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>" 
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style scoped>
:root {
  --font-family: 'SF Pro Display', sans-serif;
  --primary-color: rgba(0, 113, 228, 1);
  --secondary-color: rgba(40, 38, 38, 1);
  --gray-color: gray;
}

.contacts-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}




.contacts-title {
  font-size: 40px;

}

.contacts-title-mobile {
  display: none;
}

.phone-section, .callback-section, .contact-methods {
  margin-bottom: 20px;
}

.phone-text, .callback-text, .write-text {
  font-family: var(--font-family);
  font-size: 24px;
  font-weight: 700;
  line-height: 28.64px;
  text-align: left;
}

.phone-number {
  font-family: var(--font-family);
  font-size: 32px;
  font-weight: 700;
  line-height: 38.19px;
  text-align: left;
  color: rgba(0, 113, 228, 1);
  text-decoration: none;
}

.availability {
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 500;
  line-height: 19.09px;
  text-align: left;
  color: var(--gray-color);
}

.callback-link {
  font-family: var(--font-family);
  font-size: 24px;
  font-weight: 700;
  line-height: 28.64px;
  text-align: left;
  text-decoration: underline;
}

.email-text {
  font-family: var(--font-family);
  font-size: 24px;
  font-weight: 500;
  line-height: 28.64px;
  text-align: left;
  color: var(--secondary-color);
}

.contact-methods .icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
}

.contact-methods .icons a {
  margin-right: 10px;
}

.icon-img {
  width: 32px;
  height: 32px;
  border-radius: 6.1px 0 0 0;
}

.address-section {
  background-color: #f0f4f8;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 20px;
}

.address-section p {
  font-family: var(--font-family);
  font-size: 24px;
  font-weight: 700;
  line-height: 28.64px;
  text-align: left;
  margin: 0;
}

.address-and-map {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.address-list {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  min-width: 355px;
  
}

.address-list li {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 16px;
  line-height: 18.75px;
  text-align: left;
  color: var(--secondary-color);
  padding: 5px;

}

.map {
  flex-shrink: 0;
}

.map-img {  

  height: auto;
  border-radius: 10px;

  height: 262px;


}


@media (min-width: 768px) and (max-width: 1440px) {
  .contacts-container {
    flex-direction: column;
    padding-top: 70px;

  }

  .contact-info {
    width: 100%; /* Полная ширина на мобильных устройства
  }

  .contact-info {
    width: 100%; /* Полная ширина на мобильных устройствах */
    margin-left: 0; /* Сбрасываем отступ слева */
  }

  .address-section {
    padding: 20px; /* Возвращаем отступы */
    margin-top: 20px; /* Возвращаем отступ сверху */
  }

  .address-and-map {
    flex-direction: column; /* Располагаем элементы столбцом */
    align-items: flex-start; /* Выравниваем по левому краю */
  }

  .address-list {
    margin-right: 0; /* Сбрасываем отступ справа */
    margin-bottom: 20px; /* Возвращаем отступ снизу */
  }

  .map-img {
    min-width: 90vw; /* Занимает всю доступную ширину */
    min-height: 260px ;
    height: auto; /* Автоматическая высота */
  }
}

@media (min-width: 1440px) {
  .contacts-container {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .contact-info {
    width: 40%;

  }

  .address-section {
    width: 74%;
    padding: 20px;
    margin-top: 0;
  }

  .address-and-map {
    flex-direction: row;
    align-items: flex-start;
  }

  .address-list {
    margin-right: 20px;
  }

  .map-img {
    width: 500px;
    height: 350px;
  }

  .contacts-title {
    display: block;
  }
}

@media (max-width: 768px) {
  .contacts-title-mobile {
    display: block;
    font-size: 40px;
    font-weight: 700;
    line-height: 28.64px;
    text-align: left;
    margin-bottom: 10px;
    
  }

  .contacts-container {
   padding-top: 70px;
  justify-content: left;

  }

.address-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
}
.map-img {
  content: url("../../assets/icons/map/Без названия_31-10-2022_14-41-22 1.png");
  width: 90vw;
  align-self: center;
}
.address-and-map{
 align-items: start;

}
}


</style>
