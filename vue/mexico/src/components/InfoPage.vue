<template>
  <main>
    <div class="background"></div>
    <div class="info">
      <h1>Города Мексики</h1>
      <p>Мексика представляет собой неповторимый коктейль, в котором гармонично сплелись испанская, индейская
        и карибская культуры. Уникальный местный колорит, богатая история воинственного народа, потрясающие
        природные пейзажи и зажигательный темперамент мексиканцев заманивают туристов со всего мира. Мы
        постараемся детально разобраться, как живёт эта яркая страна, чем Мексика и её жители способны
        удивить даже бывалого туриста и на что непременно стоит обратить внимание, странствуя по
        мексиканским долинам. Вас ждёт захватывающее путешествие на родину текилы и тортильи, которое не
        оставит ни единого сомнения в том, что Мексика – это колоритная сказка с острым привкусом чили на
        губах!</p>
    </div>
    <section>
      <div class='imgblock'>
        <img src='@/assets/mexico1.jpg'>
        <span>Мехико</span>
      </div>
      <div class='imgblock'>
        <img src='@/assets/cancun.jpg'>
        <span>Канкун</span>
      </div>
      <div class='imgblock'>
        <img src='@/assets/guadalajara.jpg'>
        <span>Гвадалахара</span>
      </div>
      <div class='imgblock'>
        <img src='@/assets/merida.jpg'>
        <span>Мерида</span>
      </div>
      <div class='imgblock'>
        <img src='@/assets/acapulco.jpg'>
        <span>Акапулько</span>
      </div>
      <div class='imgblock'>
        <img src='@/assets/oaxaca.jpg'>
        <span>Оахака</span>
      </div>
      <div class='imgblock'>
        <img src='@/assets/valladolid.jpg'>
        <span>Вальядолид</span>
      </div>
      <div class='imgblock'>
        <img src='@/assets/tijuana.jpg'>
        <span>Тихуана</span>
      </div>
        <div class='imgblock'>
        <img src='@/assets/ciudadjuarez.jpg'>
        <span>Cьюдад-Хуарес</span>
      </div>
        <div class='imgblock'>
        <img src='@/assets/carmen.jpg'>
        <span>Плайя-дель-Кармен</span>
      </div>
      <div class='imgblock'>
        <img src='@/assets/akumal.jpg'>
        <span>Акумаль</span>
      </div>
      <div class='imgblock'>
        <img src='@/assets/morelos.jpg'>
        <span>Пуэрто Морелос</span>
      </div>
      <div class='imgblock'>
        <img src='@/assets/aventures.jpg'>
        <span>Пуэрто Авентурас</span>
      </div>
      <div class='imgblock'>
        <img src='@/assets/allende.jpg'>
        <span>Сан-Мигель-Альенде</span>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'InfoPage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
	background: url('@/assets/bodyinfo.jpg');
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
}

p {
  color: azure;
  text-align: justify;
  font-size: 20px;
}

.imgblock {
  position: relative;
  display: inline-block;
}

.imgblock img {
  height: 160px;
  width: 250px;
}

.imgblock span {
  /*background: rgba(0,0,0,0.7); (полупрозрачность)*/
  background: #222;
  color: #fff;
  border-radius: 2px;
  position: absolute;
  right: 0;
  bottom: 10px;
  font-size: 18px;
  padding: 3px 5px;
}

/*.img {
	background: url('@/assets/information.jpg');
	height: 900px;
	width: 1800px;
}*/
</style>
