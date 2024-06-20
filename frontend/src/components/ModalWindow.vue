<script setup>
import { useModalStore } from '@/stores/ModalStore'
import BucketModal from '../modals/BucketModal.vue'
import BetterPrice from '../modals/BetterPrice.vue'
import CallbackModal from '../modals/CallbackModal.vue'
import AcceptCall from '../modals/AcceptCall.vue'
import BucketSucces from '@/modals/BucketSucces.vue';
import NightModal from '@/modals/NightModal.vue'
import OneClick from '@/modals/OneClick.vue'
import CreditModal from '@/modals/CreditModal.vue'
import TradeInModal from '@/modals/TradeInModal.vue'
import NoProuct from '@/modals/NoProuct.vue'
// import { onMounted } from 'vue';

// onMounted(() => {
//     console.log(currModal.value + ' ' + isModalOpen.value)
//     console.log(isModalOpen.value)
//     console.log(currModal.value)
// })

const modalStore = useModalStore()

// let currModal = modalStore.typeModal
// let isModalOpen = modalStore.isShown
// console.log(isModalOpen)
// console.log(currModal)
// let isModalOpen = true

function closeHandle() {
    // isModalOpen.value = !isModalOpen.value
    modalStore.isShown = !modalStore.isShown
    modalStore.typeModal = ''
    console.log(modalStore.isShown)
}

// watch(isModalOpen, (new) => {
//     console.log(new)
// })


//         const closeHandle = () => {
//     modalStore.closeModal()
//     isModalOpen = ref(modalStore.isShown)
//     console.log('After button pressed '+ isModalOpen.value)
// }



</script>

<template>
    <div :class='modalStore.isShown ? "overlay" : "overlay hidden"'>
        <div v-if='modalStore.isShown' :class='modalStore.typeModal == "night" ? "window night" : "window"'>
            <button class='close' @click="closeHandle()"><img src="..\assets\icons\modals\close.png" alt=""></button>
            <div class="container" v-if='modalStore.typeModal == "Bucket"'>
                <BucketModal />
            </div>
            <div class="container" v-if='modalStore.typeModal == "Better"'>
                <BetterPrice />
            </div>
            <div class="container" v-if='modalStore.typeModal == "Success"'>
                <BucketSucces />
            </div>
            <div class="container" v-if='modalStore.typeModal == "Callback"'>
                <CallbackModal />
            </div>
            <div class="container" v-if='modalStore.typeModal == "AcceptedCall"'>
                <AcceptCall />
            </div>
            <div class="container" v-if='modalStore.typeModal == "night"'>
                <NightModal />
            </div>
            <div class="container" v-if='modalStore.typeModal == "oneClick"'>
                <OneClick />
            </div>
            <div class="container" v-if='modalStore.typeModal == "credit"'>
                <CreditModal />
            </div>
            <div class="container" v-if='modalStore.typeModal == "tradeIn"'>
                <TradeInModal />
            </div>
            <div class="container" v-if='modalStore.typeModal == "noProduct"'>
                <NoProuct />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.overlay {
    display: inline;
    align-items: center;
    content: "";
    // position: absolute;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Здесь можно изменить цвет и степень затемнения */
    z-index: 1;
}

// .overlay::before{

// }
.window {
    display: flex;
    align-self: center;
    position: fixed;
    // left: 50%;
    // top: 30%;
    top: 50%;
    left: 50%;
    // margin-left: -350px;
    // margin-top: -75px;


    background-color: white;
    width: 720px;
    min-height: 100px;
    max-height: 520px;
    align-items: center;
    border-radius: 16px;
    z-index: 1;


    transform: translate(-50%, -50%);
    border-radius: 16px;
    // width: 352px;
    z-index: 1;

    @media screen and (max-width: 768px) {
        align-items: start;
        max-width: 380px;
        max-height: 90%;
        // margin-left: -200px;
        overflow-y: auto;
        // top: auto;
        // bottom: 75px;
        // border-radius: 16px 16px 0px 0px;
    }
}

.night {
    background: linear-gradient(112.87deg, #0E1114 35.17%, #102944 98.59%);

    .close {
        filter: brightness(100%);
    }
}

.hidden {
    display: none
}

.close {
    position: absolute;
    right: 20px;
    top: 20px;
    height: 30px;
    width: 30px;
    color: black;
    background-image: url('..\assets\icons\modals\close.svg');
    border: none;
    background-color: transparent;

    @media screen and (max-width: 768px) {
        right: 5px;
        top: 5px;
    }
}

.container {
    margin: 0;
    padding: 20px;
    width: 680px;
    min-height: 100px;
    max-height: 520px;

    @media screen and (max-width: 768px) {
        width: 340px;
        max-height: 100%;
        // overflow: scroll;
    }
}
</style>