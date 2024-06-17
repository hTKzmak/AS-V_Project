import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useLikeStore = defineStore('like', () => {

  // ------------ПАГИНАЦИЯ ОТФИЛЬТРОВАННОГО ТОВАРА -------------
  let paginatedData = ref([])
  // текущая страница
  let currentPage = ref(1);
  // кол-во нужных рецептов
  let itemsPerPage = 6;
  // длина всех данных
  let totalItems = paginatedData.value.length;
  // возращает итоговое кол-во страниц


  let likedProducts = reactive([])
  const productsFromStorage = localStorage.getItem('likedProducts');
  if (productsFromStorage) {
    likedProducts = JSON.parse(productsFromStorage);
    console.log(likedProducts)
  }

  let menuListarr = ref([]);
  menuListarr.value = []
  getVisibleRecipes()
  totalItems = likedProducts.length;
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




  //   let buckLength = ref('4')
  //   let BuckExist = ref(bucket.value.length); 
  //   let totPrice = ref(0);
  //    bucket.value.forEach(element => {
  //        totPrice.value+=element.lastPrice
  //    });
  //    function deleteItem(id){
  //        bucket.value = bucket.value.filter((item)=> +item.id != id)
  //        totPrice.value=0
  //        bucket.value.forEach(element => {
  //        totPrice.value+=element.lastPrice
  //        // BuckExist.value = BuckExist.value - 1
  //        });
  //        buckLength.value--
  //        console.log(id)
  //        console.log(buckLength.value)
  //        console.log('length ' + BuckExist.value)

  //    }

  let likedProductsLength = ref(likedProducts.length)
  function addFavourite(id, title, price, image, rating, discount, is_available, count_review) {
    let findIndex = likedProducts.findIndex(elem => elem.id === id)
    if (findIndex !== -1) {

      // localStorage.likedProducts = JSON.stringify(likedProducts)
      likedProducts.splice(findIndex, 1)

      menuListarr.value = []
      getVisibleRecipes()
      totalItems = likedProducts.length;
      console.log(Math.ceil(totalItems / itemsPerPage))
      for (let i = 0; i < totalItems / itemsPerPage; i++) {
        menuListarr.value.push(i)
      }
      if (totalItems / itemsPerPage < 1) {
        menuListarr.value.push(1)
      }

      localStorage.setItem('likedProducts', JSON.stringify(likedProducts))
      console.log(likedProducts)
      likedProductsLength.value--
      console.log(likedProductsLength)
      // console.log(localStorage.getItem(JSON.stringify(('likedProducts'))))
      // console.log(likedProducts)
      return (false)
    } else {
      likedProducts.push({
        id: id, title: title, price: price,
        image: image, rating: rating, discount: discount, is_available: is_available, count_review: count_review
      })

      menuListarr.value = []
      getVisibleRecipes()
      totalItems = likedProducts.length;
      console.log(Math.ceil(totalItems / itemsPerPage))
      for (let i = 0; i < totalItems / itemsPerPage; i++) {
        menuListarr.value.push(i)
      }
      if (totalItems / itemsPerPage < 1) {
        menuListarr.value.push(1)
      }

      localStorage.likedProducts = JSON.stringify(likedProducts)
      console.log(likedProducts)
      likedProductsLength.value++
      console.log(likedProductsLength)
      return (true)
      //    console.log(localStorage.getItem(JSON.stringify('likedProducts')))
    }

    // if (findIndex !== -1){
    //     likedProducts = likedProducts.filter(elem => elem.id !== id)
    // }else{
    //     likedProducts.push({id: id, title: title, price: price,
    //         image: image, rating: rating, discount: discount, is_available: is_available})
    //        console.log(likedProducts)
    // }

    // likedProducts.push({id: id, title: title, price: price,
    //     image: image, rating: rating, discount: discount, is_available: is_available})
    //    console.log(likedProducts)

  }
  function baseSort() {
    likedProducts.sort((a, b) => a.id - b.id);
    localStorage.likedProducts = JSON.stringify(likedProducts)
    console.log('Sorted Array')
    getVisibleRecipes()
  }
  function sortPriceUp() {
    likedProducts.sort((a, b) => a.price - b.price);
    localStorage.likedProducts = JSON.stringify(likedProducts)
    console.log('Sorted Array')
    getVisibleRecipes()

  }
  function sortPriceDown() {
    likedProducts.sort((a, b) => b.price - a.price);
    localStorage.likedProducts = JSON.stringify(likedProducts)
    console.log('Sorted Array')
    getVisibleRecipes()

  }
  function sortRateUp() {
    likedProducts.sort((a, b) => a.rating - b.rating);
    localStorage.likedProducts = JSON.stringify(likedProducts)
    console.log('Sorted Array')
    getVisibleRecipes()

  }
  function sortRateDown() {
    likedProducts.sort((a, b) => b.rating - a.rating);
    localStorage.likedProducts = JSON.stringify(likedProducts)
    console.log('Sorted Array')
    getVisibleRecipes()

  }

  // ФУНКЦИИ ПАГИНАЦИИ
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
    paginatedData.value = likedProducts.slice(startIndex, endIndex);
    console.log(paginatedData.value)
  }

  return { likedProducts, likedProductsLength, paginatedData, currentPage, itemsPerPage, totalItems, menuListarr, addFavourite, sortPriceUp, sortPriceDown, sortRateUp, sortRateDown, baseSort, goToPage, nextPage, previousPage, totalPages, getVisibleRecipes, }
})