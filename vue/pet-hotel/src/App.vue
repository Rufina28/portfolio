<template>
  <PageHeader msg="Welcome to pet-hotel Vue.js App"/>

  <MainPage v-if="page === 'home'"/>
  <ServicesPage v-if="page === 'Services'"/>
  <AdmissionPage v-if="page === 'Admission'"/>
  
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import MainPage from './components/MainPage.vue'
import ServicesPage from './components/ServicesPage.vue'
import AdmissionPage from './components/AdmissionPage.vue'

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
    ServicesPage,
    AdmissionPage,
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
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  font-size: 25px;
  min-height: 700px;
}

nav ul {
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}

li {

  list-style-type: none;
}

a {
  color: rgb(214, 192, 126);
  font-family: Comic Sans MS, Comic Sans, cursive;
  text-decoration: none;
}

</style>
