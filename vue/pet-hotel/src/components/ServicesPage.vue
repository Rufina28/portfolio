<template>
  <div class="background"></div>
  <div class="container">
    <div class="card"><img src="@/assets/hotel1.jpg" alt="">
      <div class="info">
        <p>Номер"Люкс"</p>
        <p>1500р./сутки</p>
        <button>Забронировать</button>
      </div>
    </div>
    <div class="card"><img src="@/assets/hotel2.jpg" alt="">
      <div class="info">
        <p>Номер"Эконом"</p>
        <p>700р./сутки</p>
        <button>Забронировать</button>
      </div>
    </div>
    <div class="card"><img src="@/assets/hotel3.jpg" alt="">
      <div class="info">
        <p>Номер"Комфорт"</p>
        <p>1000р./сутки</p>
        <button>Забронировать</button>
      </div>
    </div>
    <div class="card"><img src="@/assets/hotel4.jpg" alt="">
      <div class="info">
        <p>Номер"Комфорт+"</p>
        <p>1200р./сутки</p>
        <button>Забронировать</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
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

.container {
  margin-top: 40px;
  margin-left: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;

}

.card {
  width: 900px;
  height: 840px;
  color: rgb(214, 192, 126);
  margin-bottom: 87px;
}

.card img {
  width: 800px;
  height: 700px;
}

.info {
  text-align: center;
}

button {
  outline: 0;
  border: o;
  border-radius: 4px;
  background: lightblue;
  color: black;
  padding: 8px 12px;
  font-size: 1.5em;
}
</style>
