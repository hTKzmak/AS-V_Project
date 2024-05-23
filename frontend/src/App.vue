<script>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Menu from './components/Menu.vue'
import CatalogTab from './components/CatalogTab.vue'

export default {
  components: {
    Header, Footer, CatalogTab, Menu
  },
  data() {
    return {
      // для отображения CatalogTab (это отдельный компонент для мобильной и планшетной версии каталогов)
      showCatalog: false
    }
  },
  methods: {
    // ф-ия для изменения значения showCatalog, который помогает отображать или не отображать компонент
    toggleCatalog() {
      this.showCatalog = !this.showCatalog
    }
  }
}

</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <CatalogTab :showCatalog="showCatalog" @toggle-catalog="toggleCatalog"/>
  <Menu :showCatalog="showCatalog" @toggle-catalog="toggleCatalog"/>
  <Footer />

</template>

<style></style>
