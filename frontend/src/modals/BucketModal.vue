<script setup>
import { useModalStore } from '@/stores/ModalStore'
import { useBucketStore } from '@/stores/BucketStore';
import EmptyBucket from './EmptyBucket.vue';
const modalStore = useModalStore()
const bucketStore = useBucketStore()
    function deleteItem(id){
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
    <EmptyBucket v-if="bucketStore.buckLength==0"/>
    <div v-if="bucketStore.buckLength!=0" class="bucket">
        <h1>Оформление заказа</h1>
        <div class="bucket_contain">
            <div class="list">
                <div v-for="(item, index) in bucketStore.bucket" :key="index" class="product_card">
                    <button class='close' @click="deleteItem(item.id)"><img src="..\assets\icons\modals\close.png" alt=""></button>
                    <img class="prod_img" :src="item.image">
                    <div class="text-field">
                        <p>{{item.title}}</p>
                        <div style="display: flex; gap: 10px;"><p v-if="item.oldPrice" style="text-decoration: line-through; color: grey;">{{ item.oldPrice }}₽ </p><p style="font-weight: 700;"> {{ item.lastPrice }}₽</p>
                            <div class="counter-field">
                                <button @click="bucketStore.countDown(item.id)" class="change-count">-</button>
                                <p style="color: #0071E4;">{{item.count}}</p>
                                <button @click="bucketStore.countUp(item.id)" class="change-count">+</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="list">
                <form>
                    <div class="info_field">
                        <div class="cost"><p>Доставка:</p><p>0₽</p></div>
                        <div class="cost"><p>Cумма заказа:</p><p>{{bucketStore.totPrice}}₽</p></div>
                        <div class="cost bald"><p class="bald">Итого:</p><p class="bald">{{bucketStore.totPrice}}₽</p></div>
                    </div>
                    <div class="info_field">
                        <h3>Выберите способ оплаты</h3>
                        <select class="payment-select">
                            <option>Наличными</option>
                        </select>
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
                    <div  class="social-media">
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
            -webkit-appearance: none;  /* Remove default arrow in Webkit browsers */
            -moz-appearance: none; /* Remove default arrow in Firefox */
            appearance: none; /* Remove default arrow in modern browsers */
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

        .radio-answer{
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
    justify-content: center;
    gap: 20px;
}

.radio-group label {
    display: flex;
    align-items: center;
    font-size: 14px;
}

.radio-group input[type="radio"] {
    margin-right: 8px;
    accent-color: blue; /* Modern way to style radio button in many browsers */
}

/* Optional: Custom styling for radio buttons for better cross-browser support */
.radio-group input[type="radio"] {
    appearance: none;
    border: 2px solid #ccc;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    position: relative;
    cursor: pointer;
}

.radio-group input[type="radio"]:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: blue;
}
// 



    .counter-field{
        position: absolute;
        right: 20px;
        bottom: 5px;
        align-self: flex-end;
        display: flex;
        align-items: center;
        background-color: #FAFAFA;
        gap: 10px;
        padding: 5px;
        border-radius: 8px;
        p{
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
    .recall{
        font-size: 16px;
        text-align: center
    }
    h2{
        font-size: 24px;
    }
    h3{
        font-weight: 700;
    }
    p{
        font-size: 20px;
        font-weight: 500;
    }
    h1{
        width: 100%;
        text-align: center;
        font-size: 32px;
        font-weight: 700;
    }
    select, option{
        border: 1px solid white;
        outline: none;
    }
    .change-count{
        border: none;
        background-color: none;
        color: grey;
    }
    .last-info{
        margin-top: 30px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        p,h2,div{
            padding: 0;
            margin: 0;
        }
    }
    .social-media{
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

        cursor: pointer;
    }
    .text_input{
        width: 226px;
        height: 19px;
        padding: 15px;
        border: 1px solid #DBDBDB;
        border-radius: 8px;
    }
    .text-field{
        display: flex;
        flex-direction: column;
        gap: 10px;
        p{
            padding: 0;
            margin: 0;
        }
    }
    .prod_img{
        width: 64px;
        height: 64px;
    }
    .product_card{
        height: 100px;
        display: flex;
        width: 90%;
        position: relative;
        align-items: center;
        justify-content: start;
        box-shadow: 0px 4px 8px 0px #0000000D;
        border-radius: 8px;
        padding: 5px;
        p{
            font-size: 16px;
        }
    }
    .close{
        background: none;
        border: none;
        width: 24px;
        height: 24px;
        position: absolute;
        top: 10px;
        right: 10px;
        @media screen and (max-width: 768px) {
display: none;
        }
        
    }
    .cost{
        display: flex;
        justify-content: space-between;
    }
    .bald{
        font-weight: 700;
    }
    .info_field{
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        p, h3{
            margin: 0;
        }
    }
    .bucket_contain{
        display: flex;
        gap: 10px;
        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
        }
    }
    .bucket{
        @media screen and (max-width: 768px) {
            max-height: 360px;
        }

    }
    form{
        width: 100%;
        // height: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .list{
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
            width: 100%;
            overflow-y: visible;
            justify-content: center;
            align-items: center;
        }
    }
</style>