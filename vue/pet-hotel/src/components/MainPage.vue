<template>
 <div class="background"></div>
 <section class="main swiper mySwiper">
    <div class="wrapper swiper-wrapper">
        <div class="slide swiper-slide">
          <img class="image" src="@/assets/body1.jpg" alt="...">
        </div>
        <div class="slide">
          <img class="image" src="@/assets/body2.jpg" alt="..." >
        </div>
        <div class="slide">
          <img class="image" src="@/assets/body3.jpg" alt="...">
        </div>
        <div class="slide">
          <img class="image" src="@/assets/body4.jpg" alt="...">
        </div>
    </div>

 <div class="swiper-button-next nav-btn"></div>
    <div class="swiper-button-prev nav-btn"></div>
    <div class="swiper-pagination-bullet"></div>
  </section>
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
  </div>--> 
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

.main{
  height: 500px;
  width: 500px;
}
.wrapper, .slider {
    /*position: relative;*/
    overflow: hidden;
    height: 500px;
  width: 500px; 
}
.slider .image {
  width: 500px;
  object-fit: cover;
}

img{
  width: 696px;
}


 .nav-btn{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgb(255, 255, 255, 0.3);
 }   
 .nav-btn:hover{
  background: rgba(255, 255, 255 0.4);
 }

 .swiper-button-next{
  right: 50px;
 }
 .swiper-button-prev{
  left: 50px;
 }

 .nav-btn::before,
 .nav-btn::after{
font-size: 25px;
color: #fff;
  }
  .swiper-pagination-bullet{
    opacity: 1;
    height: 12px;
    width: 12px;
    background-color: #fff;
    visibility: hidden;
  }
  .swiper-pagination-bullet-active {
    border: 2px solid #fff;
    background-color: #c87e4f;

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
