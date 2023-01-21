<template>
  <div class="background"></div>
  <div id="carousel" class="carousel">
    <button class="arrow prev">⇦</button>
    <div class="gallery">
      <ul>
        <li><img src="@/assets/body1.jpg"></li>
        <li><img src="@/assets/body2.jpg"></li>
        <li><img src="@/assets/body3.jpg"></li>
        <li><img src="@/assets/body4.jpg"></li>
      </ul>
    </div>
    <button id="next" class="arrow next">⇨</button>
  </div>
  </template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String
  }
}
window.onload = () => {
  const rightBtn = document.getElementById('next')
  const gallery = document.querySelector('.gallery ul')
  const STEP = 500

  rightBtn.addEventListener('click', (e) => {
    console.log('rightBtn event:', e.target)
    let left = parseInt(gallery.style.left)
    let width = parseInt(gallery.style.width)
    console.log('gallery.style.left:', left)
    console.log('gallery.style.width:', width)

    if (!left) {
      gallery.style.left = 0
    }

    gallery.style.left = `${left - STEP}px`
    console.log('gallery.style.left:', gallery.style.left)
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  background: url('@/assets/body.jpg');
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
}

.carousel {
  position: relative;
  width: 100%;
  padding: 10px 40px;
  box-sizing: border-box;
  display: flex;
  /* margin-bottom: 350px; */
}

.carousel img {
  width: 500px;
  height: 500px;
}

.arrow {
  /*position: absolute;*/
  top: 60px;
  padding: 0;
  background: rgb(8, 8, 8);
  font-size: 24px;
  line-height: 24px;
  color: rgb(29, 28, 28);
  display: block;
}

.arrow:hover {
  background: #ccc;
  cursor: pointer;
}

.prev {
  left: 7px;
}

.next {
  right: 7px;
}

.gallery {
  width: 500px;
  overflow: hidden;
  height: 500px;
  position: relative;
}

.gallery ul {
  /* height: 130px; */
  width: 2000px;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: margin-left 250ms;
  font-size: 0;
  position: absolute;
  left: 0;
}

.gallery li {
  display: inline-block;
}

.info {
  color: rgb(214, 192, 126);
  display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.info img {
  height: 50px;
}

ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
