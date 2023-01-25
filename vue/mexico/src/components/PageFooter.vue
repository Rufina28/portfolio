<template>
  <footer>
    <div class="communications">
      <a href="https://viber.com" target="_blank">
        <div class="viber"></div>
      </a>
      <a href="https://VK.com" target="_blank">
        <div class="VK"></div>
      </a>
      <a href="https://telegram.org>" target="_blank">
        <div class="telegram"></div>
      </a>
      <a href="https://www.youtube.com/watch?v=gX2-TzGPXoI" target="_blank">
        <div class="YouTube"></div>
      </a>
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
  height: 60px;
  font-size: 1.1rem;
  font-family: arial;
  /*position: absolute;*/
  bottom: 0;
  /* width: 100%; */
}

.communications {
  display: flex;
  justify-content: space-around;
}

.VK {
  width: 60px;
  height: 60px;
  background-image: url('@/assets/vk.png');
  background-size: contain;
}

.viber {
  width: 60px;
  height: 60px;
  background-image: url('@/assets/viber.png');
  background-size: contain;
}

.telegram {
  width: 60px;
  height: 60px;
  background-image: url('@/assets/teleg.png');
  background-size: contain;
}

.YouTube {
  width: 60px;
  height: 60px;
  background-image: url('@/assets/youtub.png');
  background-size: contain;
}
</style>
