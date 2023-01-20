<template>
<footer> 
    <div class="info">
      <ul>
        <li>г.Новосибирск ул.Собачья, дом 32</li>
        <li>Круглосуточно</li>
        <li>+7 383 319 87 87</li>
        <li><a href="#"><img src="@/assets/vk.jpg"></a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
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

a {
  color: rgb(214, 192, 126);
  font-family: Comic Sans MS, Comic Sans, cursive;
  text-decoration: none;
}

</style>
