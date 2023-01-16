<template>
  <header>
    <div class="background"></div>
    <nav class="menu">
      <ul>
        <li><a href="#" @click="navigate('home')">Главная</a></li>
        <li><a href="#Services" @click="navigate('Services')">Услуги</a></li>
        <li><a href="#Admission" @click="navigate('Admission')">Условия приема</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    msg: String
  },
  methods: {
    navigate: function (link) {
      console.log(link)
      console.log('this.$root:', this.$root.page)

      this.$root.page = link
      console.log('this.$root:', this.$root.page)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  background: black;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
}

nav ul {
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}

li {

  list-style-type: none;
  color: blanchedalmond;
}
</style>
