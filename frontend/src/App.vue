<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Menu from './components/Menu.vue'
import CatalogTab from './components/CatalogTab.vue'
</script>

<template>
  <Header/>

  <main>
    <RouterView />
  </main>

  <CatalogTab/>
  <Menu/>
  <Footer/>

</template>

<style>
</style>
