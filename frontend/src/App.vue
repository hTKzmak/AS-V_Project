<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header/Header.vue'
</script>

<template>
  <!-- <header class="container">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/not_found">404</RouterLink>
      </nav>
  </header> -->

  <Header/>

  <main class="container">
    <RouterView />
  </main>

</template>

<style>
</style>
