// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  let isShown = ref(false)
  let typeModal = ref('noProduct')
  
  console.log('Started to '+ typeModal.value + ' is shown: ' + isShown.value)

    const changeModal = (newModal) => {
        isShown.value = true
        typeModal.value = newModal
        console.log('Changed to '+ typeModal.value + ' is shown: ' + isShown.value)
    }

    const closeModal = () => {
      isShown.value = false
      console.log(isShown.value)
    }

  return { isShown, typeModal, changeModal, closeModal }
})
