<template>
  <main>
    <div class="info">
            <h1>Мексика – всё, что нужно знать о Мексике для туристического отдыха</h1>
            <p>Мексика представляет собой неповторимый коктейль, в котором гармонично сплелись испанская, индейская
                и карибская культуры. Уникальный местный колорит, богатая история воинственного народа, потрясающие
                природные пейзажи и зажигательный темперамент мексиканцев заманивают туристов со всего мира. Мы
                постараемся детально разобраться, как живёт эта яркая страна, чем Мексика и её жители способны
                удивить даже бывалого туриста и на что непременно стоит обратить внимание, странствуя по
                мексиканским долинам. Вас ждёт захватывающее путешествие на родину текилы и тортильи, которое не
                оставит ни единого сомнения в том, что Мексика – это колоритная сказка с острым привкусом чили на
                губах!</p>
        </div>
        <div class="img"></div>
  </main>
</template>

<script>
export default {
  name: 'InfoPage', 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
	display: flex;
	justify-content: space-around;
}

a {
	/*color: white;*/
	font-family: Comic Sans MS, Comic Sans, cursive;
	text-decoration: none;
}

li {
	list-style-type: none;
	/*color: white;*/
}

/*p,h1,h2{
	color: white;*/

.info {
	display: flex;
	flex-direction: column;
}

.img {
	background: url('@/assets/information.jpg');
	height: 900px;
	width: 1800px;
}

</style>
