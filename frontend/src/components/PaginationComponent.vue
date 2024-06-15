<script setup>
import { ref, computed } from 'vue';
import { useCounterStore } from '@/stores/AppleStore';
import { useLikeStore } from '@/stores/LikeStore';
import { useReviewStore } from '@/stores/ReviewStore';
const appleStore = useCounterStore();
const likeStore = useLikeStore()
const reviewStore = useReviewStore()
const left_sign = "<";
const right_sign = ">";

const props = defineProps({
    page: String,
});

// Текущая страница
const currentPage = ref(1);
let totalPages = ref(10)

// Общее количество страниц
if (props.page == 'list'){
    totalPages = computed(() => appleStore.menuListarr.length);
    console.log(totalPages.value)
} else if(props.page == 'like'){
    totalPages = computed(() => likeStore.menuListarr.length);
    console.log(totalPages.value)
} else if(props.page == 'review'){
  totalPages = computed(() => reviewStore.menuListarr.length);
  console.log(totalPages.value)
}


// Функция для перехода к следующей странице
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;

    if (props.page == 'list'){
        appleStore.goToPage(currentPage.value);
        console.log('We went to page ' + currentPage.value + ' in LIST')
    } else if(props.page == 'like'){
        likeStore.goToPage(currentPage.value);
        console.log('We went to page ' + currentPage.value + ' in LIKE')
    }else if(props.page == 'review'){
        reviewStore.goToPage(currentPage.value);
        console.log('We went to page ' + currentPage.value + ' in REVIEW')
    }
  }
};

// Функция для перехода к предыдущей странице
const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
    if (props.page == 'list'){
        appleStore.goToPage(currentPage.value);
        console.log('We went to page ' + currentPage.value + ' in LIST')
    } else if(props.page == 'like'){
        likeStore.goToPage(currentPage.value);
        console.log('We went to page ' + currentPage.value + ' in LIKE')
    } else if(props.page == 'review'){
      reviewStore.goToPage(currentPage.value);
        console.log('We went to page ' + currentPage.value + ' in LIKE')
    }
  }
};

// Вычисляемые видимые страницы
const visiblePages = computed(() => {
  const pages = [];
  const total = totalPages.value;
  const current = currentPage.value;

  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    if (current > 3) {
      pages.push('...');
    }
    if (current > 2) {
      pages.push(current - 1);
    }
    if (current !== 1 && current !== total) {
      pages.push(current);
    }
    if (current < total - 1) {
      pages.push(current + 1);
    }
    if (current < total - 2) {
      pages.push('...');
    }
    pages.push(total);
  }


  return pages;
});
</script>

<template>
  <div v-if="props.page=='list'" class="pagination">
    <button @click="previousPage" class="arrow-button">{{ left_sign }}</button>
    <div class="page-numbers">
      <button 
        v-for="page in visiblePages" 
        :key="page" 
        @click="page !== '...' ? (currentPage = page, appleStore.goToPage(page)) : null" 
        :class="['page-button', currentPage === page ? 'active' : '']" 
        :disabled="page === '...'"
      >
        {{ page }}
      </button>
    </div>
    <button @click="nextPage" class="arrow-button">{{ right_sign }}</button>
  </div>


  <div v-if="props.page=='like'" class="pagination">
    <button @click="previousPage" class="arrow-button like">{{ left_sign }}</button>
    <div class="page-numbers like">
      <button 
        v-for="page in visiblePages" 
        :key="page" 
        @click="page !== '...' ? (currentPage = page, likeStore.goToPage(page)) : null" 
        :class="['page-button like', currentPage === page ? 'active' : '']" 
        :disabled="page === '...'"
      >
        {{ page }}
      </button>
    </div>
    <button @click="nextPage" class="arrow-button like">{{ right_sign }}</button>
  </div>

  <div v-if="props.page=='review'" class="pagination for-review">
    <button @click="previousPage" class="arrow-button like">{{ left_sign }}</button>
    <div class="page-numbers like">
      <button 
        v-for="page in visiblePages" 
        :key="page" 
        @click="page !== '...' ? (currentPage = page, reviewStore.goToPage(page)) : null" 
        :class="['page-button like', currentPage === page ? 'active' : '']" 
        :disabled="page === '...'"
      >
        {{ page }}
      </button>
    </div>
    <button @click="nextPage" class="arrow-button like">{{ right_sign }}</button>
  </div>
</template>



<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 80px;
}


.for-review{
  justify-content: left;
}

.page-numbers {
  display: flex;
  gap: 5px;
}

.page-button, .arrow-button {
  border: none;
  background: none;
  color: #333;
  font-size: 24px;
  font-weight: 400;
  cursor: pointer;
}

.page-button.active {
  color: #007bff;
  font-weight: bold;
}

.page-button:hover, .arrow-button:hover {
  color: #007bff;
}

.arrow-button {
  color: #ccc;
}

.arrow-button:hover {
  color: #333;
}

.page-button[disabled] {
  cursor: default;
}
</style>