<template>
  <header>
            <nav class="menu">
                <ul>
                    <li><a href="#" @click="navigate('home')">Главная</a></li>
                    <li><a href="#services" @click="navigate('services')">Услуги</a></li>
                    <li><a href="#admission" @click="navigate('admission')">Условия приема</a></li>
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
