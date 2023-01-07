<template>
  <PageHeader msg="Welcome to Mexico Vue.js App"/>

  <MainPage v-if="page === 'home'"/>
  <InfoPage v-if="page === 'info'"/>
  <PhotoPage v-if="page === 'photo'"/>
  <CulturePage v-if="page === 'culture'"/>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import MainPage from './components/MainPage.vue'
import InfoPage from './components/InfoPage.vue'
import PhotoPage from './components/PhotoPage.vue'
import CulturePage from './components/CulturePage.vue'


export default {
  name: 'App',
  data: function() {
    return {
      page: 'home',
    } 
  },
  components: {
    PageHeader,
    MainPage,
    InfoPage,
    PhotoPage,
    CulturePage,
  },
  beforeMount: function() {
    let path = window.location.hash.replace('#', '')

    console.log('path:', path)

    if (path) this.page = path
  },
}
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
