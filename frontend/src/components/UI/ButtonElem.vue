<script>
export default {
    props: ['title', 'img']
}
</script>

<template>
    <button class="buttonElem">
        <img :src=img>
        {{title}}
    </button>
</template>

<style>
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
</style>