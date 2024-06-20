<template>
    <div class="product_card">
        <img :src="props.image" alt="">
        <p class="prodName">{{ props.title }}</p>
    </div>
</template>


<script setup>
// import { computed } from 'vue';
const props = defineProps({
    id: Number,
    title: String,
    image: String,
});
// const productLink = computed(() => ({
//     name: 'product',
//     params: { id: props.id }
// }));
</script>


<style lang="scss" scoped>
.product_card {
    // width: 80px;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: flex;
        min-width: 175px;
        height: 64px;

        align-items: center;
        gap: 8px;
    }
}

.prodName {
    margin: 0;
    font-size: 14px;
    text-align: center;
    color: #100E0E;

    @media screen and (max-width: 768px) {
        text-align: left;
    }
}

img {
    width: 56px;

    @media screen and (max-width: 768px) {
        width: 48px;
        height: 48px;
    }
}
</style>