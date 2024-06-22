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
        <p class="smallInfo" id="mobile-title">Сообщить о поступлении</p>
        <div class="mobile-credit">
            <img class="prodImg" :src="CurrentProductStore.image" alt="">

            <div class="mobile-info">
                <p class="smallInfo" id="desktop-title">Сообщить о поступлении</p>
                <h2>{{ CurrentProductStore.name }}</h2>
            </div>
        </div>


        <img class="prodImg desk-credit" :src="CurrentProductStore.image" alt="">
        <div class="textField">
            <p class="smallInfo desk-credit">Купить в 1 клик</p>
            <h2 class="desk-credit">{{ CurrentProductStore.name }}</h2>
            <input placeholder="+7" class="input_field" type="tel">
            <!-- props: ['title', 'img', 'action', 'addedItemStyle'] -->
            <div style="width: 256px; height: 56px;">
                <ButtonElem title="сообщить о поступлении" addedItemStyle="false" />
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

.mobile-info{
    #desktop-title{
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
}

.OneCLickContainer {
    display: flex;
    margin-top: 20px;

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

}

#mobile-title {
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        text-align: start;
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
    margin: 10px 0;
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
