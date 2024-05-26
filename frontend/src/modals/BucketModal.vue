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
                        <div style="display: flex; gap: 10px;"><p style="text-decoration: line-through; color: grey;">{{ item.oldPrice }}₽ </p><p style="font-weight: 700;"> {{ item.lastPrice }}₽</p>
                            <button class="change-count">-</button>
                            <p style="color: #0071E4;">{{item.count}}</p>
                            <button class="change-count">+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list">
                <form>
                    <div class="info_field">
                        <div class="cost"><p>Доставка:</p><p>0₽</p></div>
                        <div class="cost"><p>Cумма заказа:</p><p>{{bucketStore.totPrice}}₽</p></div>
                        <div class="cost bald"><p>Итого:</p><p>{{bucketStore.totPrice}}₽</p></div>
                    </div>
                    <div class="info_field">
                        <h3>Выберите способ оплаты</h3>
                        <select>
                            <option>Наличными</option>
                        </select>
                    </div>
                    <div class="info_field">
                        <h3>Выберите способ доставки</h3>
                        <div style="display: flex;">
                        <div>
                            <input type="radio" id="delivery" name="delivery" checked />
                            <label for="delivery">Доставка</label>
                        </div>
                        <div>
                            <input type="radio" id="self" name="self" />
                            <label for="self">Самовывоз</label>
                        </div>
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
                    <p>либо позвоните или напишите нам</p>
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
        padding: 20px;
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
        width: 320px;
        height: 100px;
        display: flex;
        position: relative;
        width: 90%;
        align-items: center;
        justify-content: start;
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
        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
        }
    }
    .bucket{

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
        overflow-y: scroll;
        @media screen and (max-width: 768px) {
            max-height: 100%;
            width: 100%;
            overflow-y: visible;
            justify-content: center;
            align-items: center;
        }
    }
</style>



