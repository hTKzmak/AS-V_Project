// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useReviewStore = defineStore('review', () => {
    let reviewData = reactive([
        {
            id: 1, name: 'Эдуард 1', item: 'iPhone 14', text: 'Понравилось всё. Ребята в магазине работают шустро, за пару минут оформили, и уже через 3 часа телефон был у меня на руках. При получении курьер помог проверить телефон, и поклеить защитное стекло, так же покупал акционный набор аксессуаров, и их качество, как и телефона оказалось на высоте. Всё работает, всё быстро и доступно, 5/5.'
        },
        {
            id: 2, name: 'Эдуард 2', item: 'iPhone 14', text: 'Понравилось всё. Ребята в магазине работают шустро, за пару минут оформили, и уже через 3 часа телефон был у меня на руках. При получении курьер помог проверить телефон, и поклеить защитное стекло, так же покупал акционный набор аксессуаров, и их качество, как и телефона оказалось на высоте. Всё работает, всё быстро и доступно, 5/5.'
        },
        {
            id: 3, name: 'Эдуард 3', item: 'iPhone 14', text: 'Понравилось всё. Ребята в магазине работают шустро, за пару минут оформили, и уже через 3 часа телефон был у меня на руках. При получении курьер помог проверить телефон, и поклеить защитное стекло, так же покупал акционный набор аксессуаров, и их качество, как и телефона оказалось на высоте. Всё работает, всё быстро и доступно, 5/5.'
        },
        {
            id: 4, name: 'Эдуард 4', item: 'iPhone 14', text: 'Понравилось всё. Ребята в магазине работают шустро, за пару минут оформили, и уже через 3 часа телефон был у меня на руках. При получении курьер помог проверить телефон, и поклеить защитное стекло, так же покупал акционный набор аксессуаров, и их качество, как и телефона оказалось на высоте. Всё работает, всё быстро и доступно, 5/5.'
        },
        {
            id: 5, name: 'Эдуард 5', item: 'iPhone 14', text: 'Понравилось всё. Ребята в магазине работают шустро, за пару минут оформили, и уже через 3 часа телефон был у меня на руках. При получении курьер помог проверить телефон, и поклеить защитное стекло, так же покупал акционный набор аксессуаров, и их качество, как и телефона оказалось на высоте. Всё работает, всё быстро и доступно, 5/5.'
        },
        {
            id: 6, name: 'Эдуард 6', item: 'iPhone 14', text: 'Понравилось всё. Ребята в магазине работают шустро, за пару минут оформили, и уже через 3 часа телефон был у меня на руках. При получении курьер помог проверить телефон, и поклеить защитное стекло, так же покупал акционный набор аксессуаров, и их качество, как и телефона оказалось на высоте. Всё работает, всё быстро и доступно, 5/5.'
        },
    ])
    console.log(reviewData)
    let menuListarr = ref([]);
    let paginatedData = ref([])
    // текущая страница
    let currentPage = ref(1);
    // кол-во нужных рецептов
    let itemsPerPage = 3;
    // длина всех данных
    let totalItems = paginatedData.value.length;
    menuListarr.value = []
    getVisibleRecipes()
    totalItems = reviewData.length;
    console.log(Math.ceil(totalItems / itemsPerPage))
    if ((totalItems / itemsPerPage) >= 1) {
        for (let i = 0; i < totalItems / itemsPerPage; i++) {
            menuListarr.value.push(i)
        }
    }
    if ((totalItems / itemsPerPage) < 1) {
        menuListarr.value.push(1)
    }
    console.log(menuListarr.value)
    console.log(totalItems)

    function goToPage(pageNumber) {
        currentPage.value = pageNumber;
        console.log('We are going to page ' + pageNumber)
        getVisibleRecipes()
        console.log(paginatedData.value)
    }

    // перемещаемя на следующую страницу
    function nextPage() {
        if (menuListarr.value.length != currentPage.value) {
            currentPage.value++
            goToPage(currentPage.value)
        }
    }

    // перемещаемя на предыдущую страницу
    function previousPage() {
        if (menuListarr.value[0] != currentPage.value) {
            currentPage.value = currentPage.value - 1
            goToPage(currentPage.value)
        }
    }

    // хз :P
    function totalPages() {
        return Math.ceil(totalItems / itemsPerPage);
    }

    // ф-ия для изменения значение curretnPage в виде числа


    // отображает данные в зависимости от: startIndex (сколько продуктов должно быть на странице, умножая на текущий номер страницы - 1) 
    // и от endIndex (прибавляем значение startIndex на кол-во нужных объектов на странице)
    function getVisibleRecipes() {
        const startIndex = (currentPage.value - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        paginatedData.value = reviewData.slice(startIndex, endIndex);
        console.log(paginatedData.value)
    }

    return { reviewData, menuListarr, paginatedData, currentPage, itemsPerPage, totalItems, goToPage, nextPage, previousPage, totalPages, getVisibleRecipes }
})