<template>
  <footer>
    <div class="communications">
      <a href="https://twitter.com" target="_blank"><div class="twitter"></div></a>
      <button> VKontakte</button>
      <button> Facebook</button>
      <a href="https://www.youtube.com/watch?v=gX2-TzGPXoI">YouTube</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  font-size: 1.1rem;
  font-family: arial;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.communications {
  display: flex;
  justify-content: space-around;
}

.twitter {
  width: 60px;
  height: 60px;
	background-image: url('@/assets/twit.png');
  background-size: contain;
}
</style>
