<script>
import { onMounted, ref, watch } from 'vue';
import { useCounterStore } from '@/stores/AppleStore';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const appleStore = useCounterStore();
    const listSort = ref('base');
    let tagsData = ref([])
    const route = useRoute()
    let titlePage = ref('')
    let category = ref(route.params.category)

    const totalFilters = ref(appleStore.totalFilters)

    function getTags(route){
        tagsData.value = appleStore.getTags(route)
    }

    watch(listSort, (newSort) => {
      if (newSort === 'none' || newSort === 'base') {
        appleStore.baseSort();
      } else if (newSort === 'price_up') {
        appleStore.sortPriceUp();
      } else if (newSort === 'price_down') {
        appleStore.sortPriceDown();
      }
    });

    watch(
      () => appleStore.totalFilters, // Наблюдайте за изменениями в appleStore.totalFilters
      (newFilters) => {
        totalFilters.value = newFilters;
      },
      { deep: true }
    );

    watch(
            () => route.params.category,
            (newRoute) => {
              getTags(newRoute)
              category.value = newRoute
            }
            
        );

    onMounted(() => {
        tagsData.value = appleStore.getOnMountedTags()
    })
    return {
      appleStore,
      listSort,
      tagsData,
      category,
      totalFilters,
        getTags
    };
  },
  methods: {
    showFilterFunc() {
      this.$emit('toggle-filter');
    },
    reRender() {
      console.log('ReRend')
      this.$router.go(0);
      this.forceRenderKey++;
    }
  },
};
</script>

<template :key="forceRenderKey">
    <div class="container">
      <h2>{{ appleStore.titlePage }}</h2>
      <div class="tagsAndSort">
        <div class="tags-list">
          <div class="tags-list" v-if="category != 'onSale'">
          <div class="tag-item" v-for="elem in tagsData" :key="elem.id" @click="appleStore.filterByName(elem.title)">
            {{ elem.title }}
          </div>
         </div>
        </div>
  
        <div class="filterAndSort">
          <div class="filter-item">
            <button @click="showFilterFunc">
              <img src="../../assets/icons/filter.svg" alt="#">
              Фильтр
            </button>
  
            <div class="erase-filter">
              <div class="count">{{ totalFilters }}</div>
              <button @click="reRender">Сбросить фильтр</button>
            </div>
          </div>
  
          <div class="sort">
            Сортировать
            <div class="custom-select">
              <select name="#" id="#" v-model="listSort">
                <option class="like-option" value="none">по умолчанию</option>
                <option class="like-option" value="price_up">цена вверх</option>
                <option class="like-option" value="price_down">цена вниз</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  


<style lang="scss">
h2 {
    font-size: 40px;
    margin-left: 20px;

    @media screen and (max-width: 1440px) {
        margin: 16px 0 16px 0;
        font-size: 32px;
    }

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
}

.tagsAndSort {

    display: flex;
    justify-content: space-between;

    .tags-list {

        margin: 20px 0;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        width: 60rem;

        .tag-item {
            background-color: #F9F9F9;
            color: #585656;

            padding: 8px;
            border-radius: 8px;
            font-size: 16px;

            cursor: pointer;
            user-select: none;

            transition: 0.3s;

            width: max-content;

            &:hover {
                background-color: #0071E4;
                color: #FFF;
            }

            @media screen and (max-width: 768px) {
                margin-left: 8px;
            }

            &:first-child {
                @media screen and (max-width: 768px) {
                    margin-left: 0;
                }
            }
        }

        @media screen and (max-width: 1440px) {
            width: auto;
        }

        @media screen and (max-width: 768px) {
            // для firefox
            display: ruby;
            // для chrome
            display: -webkit-inline-box;

            overflow-x: auto;
            flex-wrap: inherit;
            width: auto;
        }
    }

    .filterAndSort {

        display: flex;
        justify-content: space-between;
        align-items: center;

        .filter-item {

            display: none;
            align-items: center;
            gap: 16px;

            button {
                font-size: 16px;
                display: none;
                align-items: center;
                gap: 8px;

                @media screen and (max-width: 1440px) {
                    display: flex;
                }
            }

            .erase-filter {

                display: flex;
                align-items: center;
                gap: 8px;

                .count {
                    color: #fff;
                    background-color: #0071E4;
                    border-radius: 100px;
                    padding: 8px 13px;
                    font-size: 16px;
                    width: fit-content;
                    text-align: center;
                }

                button {
                    color: #0071E4;
                    background: transparent;
                    border: none;
                    text-align: start;
                }
            }

            @media screen and (max-width: 1440px) {
                display: flex;
            }
        }


        .sort {
            display: flex;
            align-items: center;
            gap: 8px;

            .custom-select {
                width: 170px;
                position: relative;

                select {
                    appearance: none;
                    /*  safari  */
                    -webkit-appearance: none;
                    /*  other styles for aesthetics */

                    width: 100%;
                    font-size: 1.15rem;
                    padding: 8px 16px;
                    background-color: #F9F9F9;
                    border: none;

                    color: #100E0E;
                    cursor: pointer;
                    border-radius: 8px;
                    font-size: 16px;
                }
            }


            .custom-select::after {
                content: "";
                position: absolute;
                right: 1rem;
                pointer-events: none;

                border: solid #706e6e;
                border-width: 0 3px 3px 0;
                display: inline-block;
                padding: 5px;
            }

            .custom-select::after {
                top: 30%;

                border-color: #0071e4;
                transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
            }

        }

        @media screen and (max-width: 768px) {
            display: grid;
            justify-content: start;
            gap: 10px;
        }

    }


    @media screen and (max-width: 1440px) {
        display: grid;
    }
}
</style>
