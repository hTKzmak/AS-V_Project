<script setup>
import { useModalStore } from '@/stores/ModalStore'
import { useBucketStore } from '@/stores/BucketStore';
import EmptyBucket from './EmptyBucket.vue';
const modalStore = useModalStore()
const bucketStore = useBucketStore()
function deleteItem(id) {
    bucketStore.deleteItem(id)
}


function changeHandle() {
    // modalStore.isShown = true
    // modalStore.typeModal.value = 'Bucket'
    // console.log(modalStore.typeModal + ' ' + modalStore.isShown)
    modalStore.changeModal('Success')
    console.log(modalStore.typeModal)
}


</script>

<template>
    <!-- v-if="bucket.value.length()!=0" -->
    <EmptyBucket v-if="bucketStore.buckLength == 0" />
    <div v-if="bucketStore.buckLength != 0" class="bucket">
        <h1>Оформление заказа</h1>
        <div class="bucket_contain">
            <div class="list custom-scrollbar-min">
                <div v-for="(item, index) in bucketStore.bucket" :key="index" class="product_card">
                    <button class='close' @click="deleteItem(item.id)"><img src="..\assets\icons\modals\close.png"
                            alt=""></button>
                    <img class="prod_img" :src="item.image">

                    <div class="mobileProductInfo">
                        <img class="prod_img" :src="item.image">
                        <p>{{ item.title }}</p>
                    </div>

                    <div class="text-field">
                        <p class="productTitle">{{ item.title }}</p>
                        <div class="priceAndCount">
                            <div class="price-field">
                                <p v-if="item.oldPrice !== null" style="text-decoration: line-through; color: grey;">
                                    {{ item.oldPrice }}₽ </p>
                                <p v-if="item.lastPrice !== null" style="font-weight: 700;"> {{ item.lastPrice }}₽</p>
                            </div>
                            <div class="counter-field">
                                <button @click="bucketStore.countDown(item.id)" class="change-count">-</button>
                                <p style="color: #0071E4;">{{ item.count }}</p>
                                <button @click="bucketStore.countUp(item.id)" class="change-count">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list custom-scrollbar-min">
                <form>
                    <div class="info_field">
                        <div class="cost">
                            <p>Доставка:</p>
                            <p>0₽</p>
                        </div>
                        <div class="cost">
                            <p>Cумма заказа:</p>
                            <p>{{ bucketStore.totPrice }}₽</p>
                        </div>
                        <div class="cost bald">
                            <p class="bald">Итого:</p>
                            <p class="bald">{{ bucketStore.totPrice }}₽</p>
                        </div>
                    </div>
                    <div class="info_field">
                        <h3>Выберите способ оплаты</h3>
                        <!-- <select class="payment-select">
                            <option>Наличными</option>
                        </select> -->
                        <div class="custom-select">
                            <select name="" id="">
                                <option value="All">Все модели</option>
                            </select>
                        </div>
                    </div>
                    <div class="info_field">
                        <h3>Выберите способ доставки</h3>



                        <div class="radio-group">
                            <label>
                                <input type="radio" name="debt" value="yes">
                                <p class="radio-answer">Самовывоз</p>
                            </label>
                            <label>
                                <input type="radio" name="debt" value="no" checked>
                                <p class="radio-answer">Доставка</p>
                            </label>
                        </div>



                    </div>
                    <div class="info_field">
                        <h3>Введите телефон</h3>
                        <input placeholder="+7 900 123 45 67" class="text_input" type="tel">
                    </div>
                    <div class="info_field">
                        <h3>Введите email</h3>
                        <input placeholder="необязательно" class="text_input" type="email">
                    </div>
                    <input @click="changeHandle()" value="оформить заказ" type="submit" class="buttonElem">
                </form>
                <div class="last-info">
                    <p class="recall">либо позвоните или напишите нам</p>
                    <h2>+7 (812) 704-86-97</h2>
                    <div class="social-media">
                        <a href="#!"><img src="../assets/icons/social_media/whatsapp.svg" alt="whatsapp"></a>
                        <a href="#!"><img src="../assets/icons/social_media/telegram.svg" alt="telegram"></a>
                        <a href="#!"><img src="../assets/icons/social_media/vk.svg" alt="vk"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// кастомный селект
.custom-select {
    // width: 280px;
    position: relative;

    select {
        appearance: none;
        /*  safari  */
        -webkit-appearance: none;
        /*  other styles for aesthetics */

        width: 100%;
        font-size: 1.15rem;
        padding: 8px 16px;
        background-color: #F9F9F9;
        border: none;

        width: 100%;

        color: #100E0E;
        cursor: pointer;
        border-radius: 8px;
        font-size: 16px;
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


// Исправляю селекторы и инпуты
.arrow {
    border: solid #706E6E;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;

}

.up-arr {
    border-color: #0071E4;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
}

.down-arr {
    border-color: #0071E4;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}


.payment-select-wrapper {
    max-width: 300px;
    margin: 20px;
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
    background-image: url('../assets/icons/modals/arrow.svg');
    background-repeat: no-repeat;
    background-position: right 10px top 50%;
    background-size: 16px 16px;
}

.payment-select:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

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



.counter-field {
    // position: absolute;
    // right: 20px;
    // bottom: 5px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    background-color: #FAFAFA;
    gap: 10px;
    padding: 5px;
    border-radius: 8px;

    p {
        background-color: #FFF;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 22px;
        height: 24px;
        text-align: center;
        padding: 5px
    }
}

.recall {
    font-size: 16px;
    text-align: center
}

h2 {
    font-size: 24px;
}

h3 {
    font-weight: 700;
}

p {
    font-size: 20px;
    font-weight: 500;
}

h1 {
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 20px;
        text-align: left;
    }
}

select,
option {
    border: 1px solid white;
    outline: none;
}

.change-count {
    border: none;
    background-color: none;
    color: grey;
}

.last-info {
    margin-top: 30px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    p,
    h2,
    div {
        padding: 0;
        margin: 0;
    }

    @media screen and (max-width: 768px) {
        margin-top: 24px;
        width: 120%;
        margin-bottom: 26px;
    }
}

.social-media {
    display: flex;
    align-items: center;
    gap: 10px;
}

.buttonElem {
    border-radius: 16px;
    padding: 13px 16px;
    font-size: 20px;
    border: none;
    background-color: #0071E4;
    color: #FFF;

    display: flex;
    align-items: center;
    gap: 5px;

    width: auto;

    cursor: pointer;
}

.text_input {
    // width: 226px;
    width: auto;
    height: 19px;
    padding: 15px;
    border: 1px solid #DBDBDB;
    border-radius: 8px;
}

.text-field {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 70%;

    p {
        padding: 0;
        margin: 0;
    }

    .productTitle {
        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    .price-field {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .priceAndCount {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 768px) {
            margin-left: 20px;
        }
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
}

.prod_img {
    width: 64px;
    height: 64px;
}

.product_card {
    height: 100px;
    display: flex;
    width: 90%;
    position: relative;
    align-items: center;
    justify-content: start;
    box-shadow: 0px 4px 8px 0px #0000000D;
    border-radius: 8px;
    padding: 5px;

    p {
        font-size: 16px;
    }

    .mobileProductInfo {
        display: none;

        @media screen and (max-width:768px) {
            display: flex;
            align-items: start;
            gap: 8px;
        }

        img {
            display: none;

            @media screen and (max-width:768px) {
                display: flex;
            }
        }
    }

    img {
        @media screen and (max-width:768px) {
            display: none;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        padding: 8px 8px 16px;
        gap: 6px;
        width: 100%;
    }
}

.close {
    background: none;
    border: none;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 10px;
    right: 10px;
    top: 5px;
    right: 20px;

    @media screen and (max-width: 768px) {
        display: none;
    }

}

.cost {
    display: flex;
    justify-content: space-between;
}

.bald {
    font-weight: 700;
}

.info_field {
    // width: 80%;
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;

    p,
    h3 {
        margin: 0;
    }
}

.bucket_contain {
    display: flex;
    gap: 10px;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
}

.bucket {
    @media screen and (max-width: 768px) {
        max-height: 360px;
        // width: 90%;
    }

}

form {
    width: 90%;
    // height: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media screen and (max-width: 768px) {
        width: auto;
        margin-top: 16px;
    }
}

.list {
    width: 50%;
    max-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    // overflow-y: scroll;
    overflow-y: auto;
    gap: 20px;

    @media screen and (max-width: 768px) {
        max-height: 100%;
        // width: 100%;
        width: auto;
        overflow-y: visible;
        justify-content: center;
        align-items: center;
    }
}
</style>