<script>
import ProductItem from '../ProductItem.vue';
import { useCounterStore } from '@/stores/AppleStore';
import { useRecentStore } from '@/stores/RecentStore';

export default {
    components: {
        ProductItem
    },
    setup() {
        const appleStore = useCounterStore()

        const recentStore = useRecentStore()
        return {
            appleStore, recentStore,
            count: 4
        }
    }
}
</script>

<template>
    <div class="watched container">
        <h2>Вы смотрели</h2>
        <div class="watchedList">
            <div v-for="index of recentStore.recentProducts.slice(1, 5)" :key="index">
                <ProductItem :id="+index.id" :title="index.title" :price="index.price" :image="index.image" :rating="index.rating" :discount="index.discount" :is_available="index.is_available"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.watched {
    padding-top: 24px;
    padding-bottom: 40px;

    h2 {
        font-size: 40px;
        font-weight: 700;

        @media screen and (max-width: 768px) {
            font-size: 20px;
        }
    }

    .watchedList{
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: start;

        overflow-x: auto;
    }
}
</style>