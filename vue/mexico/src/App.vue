<template>
  <PageHeader/>

  <MainPage v-if="page === 'home'"/>
  <CityPage v-if="page === 'city'"/>
  <PhotoPage v-if="page === 'photo'"/>
  <CulturePage v-if="page === 'culture'"/>

  <PageFooter/>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import MainPage from './components/MainPage.vue'
import CityPage from './components/CityPage.vue'
import PhotoPage from './components/PhotoPage.vue'
import CulturePage from './components/CulturePage.vue'
import PageFooter from './components/PageFooter.vue'


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
    CityPage,
    PhotoPage,
    CulturePage,
    PageFooter,
  },
  beforeMount: function() {
    let path = window.location.hash.replace('#', '')

    console.log('path:', path)

    if (path) this.page = path
  },
}
</script>

<style>

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 700px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  height: 100%;
  min-height: 700px;
}
</style>
