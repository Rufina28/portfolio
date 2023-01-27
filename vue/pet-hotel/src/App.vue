<template>
  <PageHeader/>

  <div class="page">
  <MainPage v-if="page === 'home'"/>
  <ServicesPage v-if="page === 'Services'"/>
  <AdmissionPage v-if="page === 'Admission'"/>
</div>

  <PageFooter/>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import MainPage from './components/MainPage.vue'
import ServicesPage from './components/ServicesPage.vue'
import AdmissionPage from './components/AdmissionPage.vue'
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
    ServicesPage,
    AdmissionPage,
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
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 25px;
  min-height: 100%;
  position: relative;
  height: 100%;
}

.page {
  min-height: 100%;
  padding-top: 40px;
  padding-bottom: 60px;
  box-sizing: border-box;
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

.background {
  top: 0;
}

</style>
