<template>
  <div class="background"></div>
  <div class="modal">
    <div class="form">
      <form action="#" id="form" class="form__body d-flex flex-column">
        <div class="form__item">
          <input type="text" name="name" class="form__body_input _req" placeholder="Имя*">
        </div>

        <input type="text" name="name" class="form__body_input _req" placeholder="Фамилия">



        <div class="form__item">

          <input type="text" name="name" class="form__body_input _req" placeholder="Телефон*">
        </div>
        <input type="text" name="email" class="form__body_input _req _email" placeholder="Email">

        <button type="submit" class="form__btn subscribe btn">
          Перезвоните мне
        </button>
      </form>
    </div>
  </div>


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

.modal {
  width: 350px;
  height: 256px;
  padding: 20px 20px;
  border-radius: 35px;
  background: rgb(36 35 35);
}

.container {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;

}

.card {
  width: 900px;
  height: 840px;
  color: rgb(214, 192, 126);
  margin: auto;
}

.card img {
  width: 800px;
  height: 625px;
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

@media screen and (max-width: 1800px) {
  .container {
    grid-template-columns: auto;
  }
}
</style>
