import EmptyBucket from '@/modals/EmptyBucket.vue';
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

// В данном Store предполагается получить данные о продуктах с бека (BASE_URL)
// Здесь ещё находится функция по поиску товаров (43 строка кода - searchFunc)


// Старые данные
// let BASE_URL = 'https://dummyjson.com/products'

// Новые данные (Бекенд Арсена)
// let BASE_URL = 'http://localhost:1452/api/products/'
let BASE_URL = 'http://localhost:1452/'
// let BASE_URL = 'https://angular-final-project-backend.onrender.com/'

let productsList = reactive([])
let catalogsList = reactive([])

// ------------ФИЛЬТРАЦИЯ ТОВАРА ПО НАЖАТИЮ В HEADER -------------
let categoryProducts = reactive([])
let category = ref('')

// ------------ПАГИНАЦИЯ ОТФИЛЬТРОВАННОГО ТОВАРА -------------
let paginatedData = ref(categoryProducts)
// текущая страница
let currentPage = ref(1);
// кол-во нужных рецептов
let itemsPerPage = 12;
// длина всех данных
let totalItems = paginatedData.value.length;
// возращает итоговое кол-во страниц
let menuListarr = ref([]);



// получение всех товаров
fetch(BASE_URL + 'api/products/')
    .then(res => res.json())
    .then(json => {
        json.map(elem => {
            let res = {
                id: elem.id,
                title: elem.name,
                price: elem.price,
                image: elem.images[0],
                rating: elem.rating,
                discount: elem.discount_price,
                is_available: elem.is_available,
                category: elem.category,
                guarantee: elem.guarantee,
                count_review: elem.count_review,
                createdAt: elem.createdAt,
                // Если что-то ещё надо, то можно ещё что-то добавить
            }
            productsList.push(res)
        })
    })

// получение всех категориев товаров (???)
for (let i = 0; i <= 7; i++) {
    fetch(BASE_URL + `api/category/${i}`)
        .then(res => res.json())
        .then(json => {
            for (let i of json) {
                if (!catalogsList.includes(i.category)) {
                    catalogsList.push(i.category)
                }
            }
        })
}

export const useCounterStore = defineStore('appleStore', {

    state: () => ({
        paginatedData: paginatedData,
        currentPage: currentPage,
        itemsPerPage: itemsPerPage,
        totalItems: totalItems,
        menuListarr: menuListarr,

        category: category,
        categoryData: categoryProducts,
        data: productsList,
        catalogData: catalogsList,
        inputValue: '',
        // BASE_URL: 'https://angular-final-project-backend.onrender.com/',
        BASE_URL: BASE_URL,
        searchData: reactive([]),
        route: useRoute(),
    }),
    actions: {
        getData() {

            fetch(BASE_URL + 'api/products/')
                .then(res => res.json())
                .then(json => {
                    json.map(elem => {
                        let res = {
                            id: elem.id,
                            title: elem.name,
                            price: elem.price,
                            image: elem.images[0],
                            rating: elem.rating,
                            discount: elem.discount_price,
                            is_available: elem.is_available,
                            category: elem.category,
                            guarantee: elem.guarantee,
                            count_review: elem.count_review,
                            // Если что-то ещё надо, то можно ещё что-то добавить
                        }
                        console.log(res)

                        // из-за этого метода дублировались товары в home page
                        // productsList.push(res)
                    }),
                        this.filterByCategory(this.route.params.category),
                        console.log(this.data)
                })

        },
        getValue(value) {
            this.inputValue = value
            console.log(this.inputValue)
        },
        searchFunc(value) {
            let filteredProducts = this.data.filter(elem => elem.title.toLowerCase().includes(value.toLowerCase()))

            if (filteredProducts && value) {
                this.searchData = filteredProducts
            }
            else if (filteredProducts && !value) {
                this.searchData = []
            }
            else {
                this.searchData = []
            }

            console.log(filteredProducts)
        },
        changeCategory() {
            currentPage.value = 1
            menuListarr.value = []
            // category.value = route.params.category;
            console.log(this.route.params.category)
            this.filterByCategory(this.route.params.category)

        },
        filterByCategory(category) {
            switch (category) {
                case 'smartphones':
                    this.categoryData = this.data.filter(prod => prod.category == 'Смартфоны')
                    break;
                case 'pads':
                    this.categoryData = this.data.filter(prod => prod.category == 'Планшеты')
                    break;
                case 'accessories':
                    this.categoryData = this.data.filter(prod => prod.category == 'Аксессуары')
                    break;
                case 'gadgets':
                    this.categoryData = this.data
                    break;
                case 'all':
                    this.categoryData = this.data
                    break;
                case 'laptops':
                    this.categoryData = this.data.filter(prod => prod.category == 'Компьютеры')
                    break;
                case 'watches':
                    this.categoryData = this.data.filter(prod => prod.category == 'Часы')
                    break;
                default:
                    this.categoryData = this.data
            }
            menuListarr.value = []
            this.getVisibleRecipes()
            totalItems = this.categoryData.length;
            if ((totalItems / itemsPerPage) >= 1) {
                for (let i = 0; i < totalItems / itemsPerPage; i++) {
                    menuListarr.value.push(i)
                }
            }
            if (totalItems / itemsPerPage < 1) {
                menuListarr.value.push(1)
            }
            console.log(menuListarr)
            console.log(totalItems)

            console.log('Get filtered by ' + category)
            console.log(this.categoryData)
        },

        goToPage(pageNumber) {
            currentPage.value = pageNumber;
            console.log('We are going to page ' + pageNumber)
            this.getVisibleRecipes()
            console.log(paginatedData.value)
        },

        // перемещаемя на следующую страницу
        nextPage() {
            if (menuListarr.value.length != currentPage.value) {
                currentPage.value++
                this.goToPage(currentPage.value)
            }
        },

        // перемещаемя на предыдущую страницу
        previousPage() {
            if (menuListarr.value[0] != currentPage.value) {
                currentPage.value = currentPage.value - 1
                this.goToPage(currentPage.value)
            }
        },

        // хз :P
        totalPages() {
            return Math.ceil(totalItems / itemsPerPage);
        },

        // ф-ия для изменения значение curretnPage в виде числа


        // отображает данные в зависимости от: startIndex (сколько продуктов должно быть на странице, умножая на текущий номер страницы - 1) 
        // и от endIndex (прибавляем значение startIndex на кол-во нужных объектов на странице)
        getVisibleRecipes() {
            const startIndex = (currentPage.value - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            paginatedData.value = this.categoryData.slice(startIndex, endIndex);
        }
    }
})