<template>
 <div class="background"></div>
 <div class="slider">
    <div class="slider__wrapper">
      <div class="slider__items">
        <div class="slider__item">
          <img class="img-fluid" src="@/assets/body1.jpg" alt="...">
        </div>
        <div class="slider__item">
          <img class="img-fluid" src="@/assets/body2.jpg" alt="..." >
        </div>
        <div class="slider__item">
          <img class="img-fluid" src="@/assets/body3.jpg" alt="...">
        </div>
        <div class="slider__item">
          <img class="img-fluid" src="@/assets/body4.jpg" alt="...">
        </div>
      </div>
    </div>
    <a class="slider__control slider__control_prev" href="#" role="button" data-slide="prev"></a>
    <a class="slider__control slider__control_next" href="#" role="button" data-slide="next"></a>
  </div>
  <!-- <div id="carousel" class="carousel">
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
  </div>--> временно
  </template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String
  }
  

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

.slider__wrapper {
    position: relative;
    overflow: hidden;
}
.img-fluid{
  width: 500px;
  height: 400px;
  display: inline-block;
}

.slider {
      max-width: 800px;
    }

    /* дополнительные стили для этого примера */
    .slider__items {
      counter-reset: slide;
    }

    .slider__item {
      position: relative;
      counter-increment: slide;
    }

/*.carousel {
  position: relative;
  width: 100%;
  padding: 10px 40px;
  box-sizing: border-box;
  display: flex;
   margin-bottom: 350px;
} 

.carousel img {
  width: 500px;
  height: 500px;
}*/

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
