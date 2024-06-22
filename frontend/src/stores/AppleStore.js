import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

// В данном Store предполагается получить данные о продуктах с бека (BASE_URL)
// Здесь ещё находится функция по поиску товаров (43 строка кода - searchFunc)


// Старые данные
// let BASE_URL = 'https://dummyjson.com/products'

// Новые данные (Бекенд Арсена)
// let BASE_URL = 'http://localhost:1452/'

let BASE_URL = 'https://angular-final-project-backend.onrender.com/'


let productsList = ref([])
let catalogsList = reactive([])
// let dataSortedByDate = ref([])
// let dataSortedByRate = ref([])
// ------------ФИЛЬТРАЦИЯ ТОВАРА ПО НАЖАТИЮ В HEADER -------------
let categoryProducts = ref([])
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

// БЛИЖАЙШИЕ ТОВАРЫ
let closeProds = ref([])


// РАБОТА С ТЕГАМИ
let tagList = ref([])
let titlePage = ref('')
// получение всех товаров

// fetch(BASE_URL + 'api/products/')
//     .then(res => res.json())
//     .then(json => {
//         json.map(elem => {
//             let res = {
//                 id: elem.id,
//                 title: elem.name,
//                 price: elem.price,
//                 image: elem.images[0],
//                 rating: elem.rating,
//                 discount: elem.discount_price,
//                 is_available: elem.is_available,
//                 category: elem.category,
//                 guarantee: elem.guarantee,
//                 count_review: elem.count_review,
//                 color: elem.color,
//                 characteristics: elem.characteristics,
//                 memo: elem.characteristics.find(c => c.characteristic === "Объем встроенной памяти")
//                 // Если что-то ещё надо, то можно ещё что-то добавить
//             }
//             productsList.value.push(res)
//         })
//     })  


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
        categoryData: categoryProducts.value,
        data: ref([]),
        updatedData: ref([]),
        catalogData: catalogsList,
        inputValue: '',

        BASE_URL: BASE_URL,

        searchData: reactive([]),
        route: useRoute(),
        // dataSortedByDate: dataSortedByDate,
        // dataSortedByRate: dataSortedByRate,
        

        closeProds:closeProds,

        tagList: ref([]),
        nameFiltered: ref(false),
        currName: ref(''),

        minPrice:ref(0),
        maxPrice:ref(100),
        minDiag:ref(0),
        maxDiag:ref(10),
        prices:ref([]),
        stableData:ref([]),

        totalFilters: ref(0)
    }),
    actions: {
      addFiltersCount(num){
        this.totalFilters = num;
      },



        getData() {
            categoryProducts.value = []
            this.categoryProducts = []
            fetch(BASE_URL + 'api/products/')

            .then(res => res.json())
            .then(json => {
                this.productsList = []
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
                        color: elem.color,
                        createdAt: elem.createdAt,
                        titlePage: titlePage,
                        memo: elem.category !== 'Часы' ? elem.characteristics.find(c => c.characteristic === "Объем встроенной памяти") : undefined,
                        diag: 0,
                        characteristics: elem.characteristics
                        // Если что-то ещё надо, то можно ещё что-то добавить
                    }
                    this.data.push(res)
                }),
                // this.data.map(product => {
                //     product.diag = product.characteristics.find(
                //       characteristic => characteristic.characteristic === "Диагональ"
                //     );
                //     return product.diag ? product.diag.value : null;
                //   });
                this.data = this.data.map(product => {
                    const diagonalCharacteristic = product.characteristics.find(
                      characteristic => characteristic.characteristic === "Диагональ"
                    );
                    const diagonalValue = diagonalCharacteristic ? diagonalCharacteristic.value : null;
                  
                    return {
                      ...product,
                      diag: +diagonalValue
                    };
                  });
                // this.dataSortedByDate = this.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                // this.dataSortedByRate = this.data.sort((a, b) => b.count_review - a.count_review);
                this.filterByCategory(this.route.params.category)
                // console.log(this.dataSortedByDate)
                // console.log(this.dataSortedByRate)

        })
        },
        getValue() {
            return(this.data.sort((a, b) => (new Date(b.createdAt)) - (new Date(a.createdAt))))
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

        changeCategory(){
            localStorage.tags = JSON.stringify(this.tagList)

            currentPage.value = 1
            menuListarr.value = []
            // category.value = route.params.category;
            console.log(this.route.params.category)
            this.filterByCategory(this.route.params.category)
        },

        filterByCategory(category){
            localStorage.tags = JSON.stringify(this.tagList)
            this.categoryData = []

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
                    this.categoryData = this.data.filter(prod => prod.category == 'Гаджеты')
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
                case 'onSale':
                  this.categoryData = this.data.filter(prod => prod.discount != null)
                break; 
                default:
                    this.categoryData = this.data
              }
              this.stableData = this.categoryData

              this.prices =  this.data.map(product => product.price);
              this.minPrice = Math.min(...this.prices);
              this.maxPrice = Math.max(...this.prices);

              
              menuListarr.value = []
              this.getVisibleRecipes()
              totalItems = this.categoryData.length;
              if((totalItems/itemsPerPage) >= 1){
                for (let i = 0; i < totalItems/itemsPerPage; i++) {
                menuListarr.value.push(i)
              }
              }
              if (totalItems/itemsPerPage < 1){

                menuListarr.value.push(1)
            }

        },

        getTags(route){
            this.categoryData = []
            this.filterByCategory(route)
            this.tagList = categoryProducts.value.reduce((acc, product) => {
                if (!acc.some(item => item.title === product.title)) {
                  acc.push({ id: product.id, title: product.title });
                }
                return acc;
              }, []);   
            localStorage.tags = JSON.stringify(this.tagList)

            switch (route) {
                case 'smartphones':
                    this.titlePage = 'Смартфоны IPhone'
                  break;
                case 'pads':
                    this.titlePage = 'Планшеты Apple'
                  break;
                  case 'accessories':
                    this.titlePage = 'Аксессуары Apple'
                    break;
                case 'gadgets':
                    this.titlePage = 'Гаджеты Apple'
                break;
                case 'all':
                    this.titlePage = 'Продукты Apple'
                break;
                case 'laptops':
                    this.titlePage = 'Компьютеры Apple'
                break;
                case 'watches':
                    this.titlePage = 'Часы Apple'
                break; 
                default:
                    this.titlePage = 'Продукты Apple'
              }

            return(this.tagList)

        },
        getOnMountedTags(){
            const productsFromStorage = localStorage.getItem('tags');
            if (productsFromStorage) {
              this.tagList = JSON.parse(productsFromStorage);
              console.log(this.tagList)
            } else{
                this.getTags()
            }
            return(this.tagList)
        },

    baseSort(){
        this.categoryData.sort((a, b) => a.id - b.id);
        this.getVisibleRecipes()
        },
    sortPriceUp(){
        this.categoryData.sort((a, b) => a.price - b.price);
        this.getVisibleRecipes()
        },
    sortPriceDown(){
        this.categoryData.sort((a, b) => b.price - a.price );
        this.getVisibleRecipes()
        },

    sortByPrice(min, max){
        this.categoryData = this.stableData
        let sortedByPriceData = []
        sortedByPriceData = this.categoryData.filter(e => (e.price>=min) && (e.price<=max))
        this.categoryData = sortedByPriceData
        menuListarr.value = []
        this.getVisibleRecipes()
        totalItems = this.categoryData.length;
              if((totalItems/itemsPerPage) >= 1){
                for (let i = 0; i < totalItems/itemsPerPage; i++) {
                menuListarr.value.push(i)
              }
              }
              if (totalItems/itemsPerPage < 1){
                menuListarr.value.push(1)
              }
    },


    sortByDiag(min, max){
        this.categoryData = this.stableData
        let sortedByPriceDiag = []
        sortedByPriceDiag = this.categoryData.filter((e => e.diag >= min) && (e => e.diag <= max))  
        this.categoryData = sortedByPriceDiag
        menuListarr.value = []
        this.getVisibleRecipes()
        totalItems = this.categoryData.length;
              if((totalItems/itemsPerPage) >= 1){
                for (let i = 0; i < totalItems/itemsPerPage; i++) {
                menuListarr.value.push(i)
              }
              }
              if (totalItems/itemsPerPage < 1){
                menuListarr.value.push(1)
              }
    },


    getFilteredByMem(memoryValues){
        this.categoryData = this.stableData
        if(memoryValues.length!=0){
            this.categoryData = this.filterProductsByMemory(memoryValues)
        }
        menuListarr.value = []
        this.getVisibleRecipes()
        totalItems = this.categoryData.length;
              if((totalItems/itemsPerPage) >= 1){
                for (let i = 0; i < totalItems/itemsPerPage; i++) {
                menuListarr.value.push(i)
              }
              }
              if (totalItems/itemsPerPage < 1){
                menuListarr.value.push(1)
              }
    },
    filterProductsByMemory(memoryValues) {
        this.categoryData = this.stableData
        return this.categoryData.filter(product => {
            const memoryCharacteristic = product.characteristics.find(
              characteristic => characteristic.characteristic === "Объем встроенной памяти"
            );
            return memoryCharacteristic && memoryValues.includes(parseInt(memoryCharacteristic.value));
          });
      },


      getFilteredByProc(memoryValues){
        this.categoryData = this.stableData
        if(memoryValues.length!=0){
            this.categoryData = this.filterProductsByProc(memoryValues)
        }
        menuListarr.value = []
        this.getVisibleRecipes()
        totalItems = this.categoryData.length;
              if((totalItems/itemsPerPage) >= 1){
                for (let i = 0; i < totalItems/itemsPerPage; i++) {
                menuListarr.value.push(i)
              }
              }
              if (totalItems/itemsPerPage < 1){
                menuListarr.value.push(1)
              }
    },
    filterProductsByProc(memoryValues) {
        this.categoryData = this.stableData
        return this.categoryData.filter(product => {
            const memoryCharacteristic = product.characteristics.find(
              characteristic => characteristic.characteristic === "Процессор",
            );
            return memoryCharacteristic && memoryValues.includes(memoryCharacteristic.value);
          });
      },

      getFilteredByWidth(memoryValues){
        this.categoryData = this.stableData
        if(memoryValues.length!=0){
            this.categoryData = this.filterProductsByWidth(memoryValues)
        }
        menuListarr.value = []
        this.getVisibleRecipes()
        totalItems = this.categoryData.length;
              if((totalItems/itemsPerPage) >= 1){
                for (let i = 0; i < totalItems/itemsPerPage; i++) {
                menuListarr.value.push(i)
              }
              }
              if (totalItems/itemsPerPage < 1){
                menuListarr.value.push(1)
              }
    },
    filterProductsByWidth(memoryValues) {
        this.categoryData = this.stableData
        return this.categoryData.filter(product => {
          return memoryValues.some(value => product.title.includes(value));
        })
      },



    filterByName(name){
        
        console.log('finding all products with name '+name)
        this.categoryData = this.data.filter(prod => prod.title == name)
        this.getVisibleRecipes()
        menuListarr.value = []
              this.getVisibleRecipes()
              totalItems = this.categoryData.length;
              if((totalItems/itemsPerPage) >= 1){
                for (let i = 0; i < totalItems/itemsPerPage; i++) {
                menuListarr.value.push(i)
              }
              }
              if (totalItems/itemsPerPage < 1){
                menuListarr.value.push(1)
              }
    
        this.nameFiltered = true
        console.log(this.nameFiltered + ' ' + this.currName + ' ' + name)
        if ((this.currName == name) && (this.nameFiltered)){
            this.nameFiltered = false
            this.changeCategory()
        }
        this.currName = name
    },

// -------------------------------ПАГИНАЦИЯ---------------------------
        goToPage(pageNumber) {
            currentPage.value = pageNumber;
            this.getVisibleRecipes()
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
  },

// ПОИСК БЛИЖАЙШИХ ТОВАРОВ
getCloseProds(id){
    // let name = this.data[id].title
    // this.closeProds = this.data.find(p => p.title == name)
    console.log(id)
    console.log(productsList[1])
},


    }
})
