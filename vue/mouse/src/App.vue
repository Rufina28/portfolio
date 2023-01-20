<template>
  <PageHeader msg="Welcome to Mouse Vue.js App"/>
  <MainPage v-if="page === 'home'"/>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import MainPage from './components/MainPage.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
