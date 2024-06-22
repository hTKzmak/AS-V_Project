<script setup>
// import { ref } from 'vue';
// import { useModalStore } from '@/stores/ModalStore'
import { useCurrentProductStore } from '../stores/CurrentProductStore'
import ButtonElem from '@/components/UI/ButtonElem.vue';
// const modalStore = useModalStore()
const CurrentProductStore = useCurrentProductStore()

</script>

<template>
    <div class="OneCLickContainer">
        <p class="smallInfo" id="desktop-smallInfo">Купить в кредит</p>
        <div class="mobile-credit">
            <img class="prodImg" :src="CurrentProductStore.image" alt="">

            <div class="mobile-info">
                <h2>{{ CurrentProductStore.name }}</h2>
                <div class="mobile-price">
                    <p class="oldPrice">{{ CurrentProductStore.oldPrice }} ₽</p>
                    <p class="currPrice">{{ CurrentProductStore.price }} ₽</p>
                </div>

            </div>
        </div>


        <img class="prodImg desk-credit" :src="CurrentProductStore.image" alt="">
        <div class="textField">
            <p class="smallInfo desk-credit">Купить в 1 клик</p>
            <h2 class="desk-credit">{{ CurrentProductStore.name }}</h2>
            <p class="oldPrice desk-credit">{{ CurrentProductStore.oldPrice }} ₽</p>
            <p class="currPrice desk-credit">{{ CurrentProductStore.price }} ₽</p>
            <input placeholder="+7" class="input_field" type="tel">
            <!-- props: ['title', 'img', 'action', 'addedItemStyle'] -->
            <div style="width: 256px; height: 56px;">
                <ButtonElem title="оформить заказ" addedItemStyle="false" />
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

.desk-credit {
    @media screen and (max-width: 768px) {
        display: none;
    }
}

.mobile-credit {
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        max-width: 260px;
    }
}

.OneCLickContainer {
    display: flex;
    margin-top: 20px;

    #desktop-smallInfo {
        display: none;

        @media screen and (max-width: 768px) {
            display: flex;
        }

    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
}

.mobile-price {
    display: flex;
    align-items: center;
    gap: 20px;
}



button {
    height: 56px;
    font-size: 16px;
    border-radius: 8px;
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
        font-size: 16px;
    }
}

h2 {
    font-size: 28px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
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
        font-size: 14px;
    }
}

.social-media {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: -10px;
}

.last-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

}

.prodImg {
    width: 150px;
    height: 162px;
    margin-right: 30px;

    @media screen and (max-width: 768px) {
        width: 56px;
        height: 60px;
        margin-right: 16px;
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
    width: 212px;
    height: 16px;
    border: 1px solid #DBDBDB;
    border-radius: 8px;
    // margin:5px;
    font-size: 24px;
}

.text_field {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
