<template>
  <div class="background"></div>
  <div class="container">
    <h1 class="main-heading">Мексика</h1>
    <div class="slideshow">
      <button class="slide-btn slide-btn-1"></button>
      <button class="slide-btn slide-btn-2"></button>
      <button class="slide-btn slide-btn-3"></button>
      <div class="slideshow-wrapper">
        <div class="slide">
          <img class="slide-img" src="@/assets/img1.jpg">
        </div>
        <div class="slide">
          <img class="slide-img" src="@/assets/img2.jpg">
        </div>
        <div class="slide">
          <img class="slide-img" src="@/assets/img3.jpg">
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div class="communications">
      <button> Twiter</button>
      <button> VKontakte</button>
      <button> Facebook</button>
      <a href="https://www.youtube.com/watch?v=gX2-TzGPXoI">YouTube</a>
    </div>
  </footer>
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

@keyframes slideshow {
  0% {
    left: 0;
  }

  10% {
    left: 0;
  }

  15% {
    left: -100%;
  }

  25% {
    left: -100%;
  }

  30% {
    left: -200%;
  }

  40% {
    left: -200%;
  }

  60% {
    left: -200%;
  }

  70% {
    left: -200%;
  }

  75% {
    left: -100%;
  }

  85% {
    left: -100%;
  }

  90% {
    left: 0%;
  }
}
.main-heading{
  font-family:Brush Script MT, Brush Script Std, cursive;
color:green;
z-index: 1;

}
.background {
	background: url('@/assets/mexico.jpg');
	z-index: -1;
    width: 100%;
    height: 100%;
    position: fixed;
    filter: blur(3px);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 800px;
  height: 600px;
}

.main-heading {
  padding: 2rem 0 2rem 0;
}


.carousel-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 50;
}

.slideshow {
  height: 100%;
  overflow: hidden;
  position: relative;
}

.slideshow-wrapper {
  display: flex;
  width: 300%;
  height: 100%;
  position: relative;
  animation: slideshow 20s infinite;
}

.slide {
  width: 100%;
  height: 100%;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-btn {
  background-color: #bbb;
  border-radius: 50%;
  border: .2rem solid black;
  width: 1.2rem;
  height: 1.2rem;
  outline: none;
  cursor: pointer;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 70;
}

.slide-btn-1 {
  left: 45%;
}

.slide-btn-2 {
  left: 50%;
}

.slide-btn-3 {
  left: 55%;
}

.slide-btn-4 {
  left: 60%;
}

.slide-btn-1:focus~.slideshow-wrapper {
  animation: none;
  left: 0;
}

.slide-btn-2:focus~.slideshow-wrapper {
  animation: none;
  left: -100%;
}

.slide-btn-3:focus~.slideshow-wrapper {
  animation: none;
  left: -200%;
}

.communications{
  margin-top: 300px;
    display: flex;
    justify-content: space-around;
}

a{
  text-decoration: none;
  color: red;
}
</style>
