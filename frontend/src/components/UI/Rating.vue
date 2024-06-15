<script setup>
const props = defineProps({
    count_review: Number,
    rating: Number,
    inSlider: Boolean,
})

let ratingCount = Math.round(props.rating)
</script>

<template>
    <div v-if="inSlider == true" class="star-rating">
        <span v-for="i in 5" :key="i" :class="{'fa fa-star checked' : i <= ratingCount, 'fa fa-star missed' : i > ratingCount}"></span>
        <RouterLink to="/review">{{ count_review }} отзывов</RouterLink>
    </div>
    <div v-else class="star-rating">
        <span v-for="i in 5" :key="i" :class="{'fa fa-star checked' : i <= ratingCount, 'fa fa-star missed' : i > ratingCount}"></span>
        <RouterLink to="/review">({{ count_review }})</RouterLink>
    </div>
</template>

<style lang="scss">
.star-rating {
    display: flex;
    align-items: center;
    gap: 2px;

    .fa {
        font-size: 20px;
    }

    .checked {
        color: #FFAD31;
    }

    .missed {
        color: #DBDBDB;
    }

    a {
        margin-left: 8px;
        font-size: 16px;
    }
}
</style>