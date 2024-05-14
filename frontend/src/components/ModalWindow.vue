
<script setup>
import { useModalStore } from '@/stores/ModalStore'
import BucketModal from '../modals/BucketModal.vue'
import BetterPrice from '../modals/BetterPrice.vue'
import BucketSucces from '@/modals/BucketSucces.vue';
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

        function closeHandle(){
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
    <div :class='modalStore.isShown ? "overlay" : "overlay hidden"' >
    <div v-if='modalStore.isShown' class="window">
        <button class='close' @click="closeHandle()"><img src="..\assets\icons\modals\close.png" alt=""></button>
        <div class="container" v-if='modalStore.typeModal=="Bucket"'>
            <BucketModal/>
        </div>
        <div class="container" v-if='modalStore.typeModal=="Better"'>
            <BetterPrice/>
        </div>
        <div class="container" v-if='modalStore.typeModal=="Success"'>
            <BucketSucces/>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
    .overlay{
        display: inline;
        align-items: center;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Здесь можно изменить цвет и степень затемнения */
        z-index: 1;
    }
    // .overlay::before{

    // }
    .window{
        display: flex;
        align-self: center;
        position: fixed;
        left: 50%;
        top: 30%;
        margin-left: -350px;
        margin-top: -75px;


        background-color: white;
        width: 720px;
        min-height: 100px;
        max-height: 520px;
        align-items: center;
        border-radius: 16px;
        z-index: 1;

        @media screen and (max-width: 768px) {
            align-items: start;
            max-width: 400px;
            max-height: 90%;
            margin-left: -200px;
            overflow: scroll;
        }
    }
    .hidden{
        display: none
    }
    .close{
        position: absolute;
        right: 20px;
        top: 20px;
        height: 30px;
        width: 30px;
        color: black;
        background-image: url('..\assets\icons\modals\close.svg');
        border: none;
        background-color: transparent;
    }
    .container{
        margin: 0;
        padding: 20px;
        width: 680px;
        min-height: 100px;
        max-height: 520px;
        @media screen and (max-width: 768px) {
            max-height: 100%;
            // overflow: scroll;
        }
    }
</style>