<script>
export default {
    props: ['title', 'img', 'action', 'addedItemStyle']
}
</script>

<template>
    <button v-on:click="action" :class="[addedItemStyle === 'false' ? 'btnStyle mainColor' : 'btnStyle addedItemStyle']">
        <img v-if="img" :src=img>
        {{ title }}
    </button>
</template>

<style>
.btnStyle {
    border-radius: 16px;
    padding: 13px 16px;
    font-size: 20px;
    border: none;
    color: #FFF;

    font-family: "SF Pro Display Medium", sans-serif;

    display: flex;
    align-items: center;
    gap: 5px;

    
    width: inherit;
    justify-content: center;
}

.mainColor {
    background-color: #0071E4;
    cursor: pointer;
}

.addedItemStyle {
    background-color: #52D116;
    cursor: not-allowed;
}
</style>
