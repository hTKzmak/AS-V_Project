<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Menu from './components/Menu.vue'
</script>

<template>
  <Header/>

  <main>
    <RouterView />
  </main>

  <Menu/>
  <Footer/>

</template>

<style>
</style>
