<template>
	<div class="background"></div>
	<div class="name">
		<H2>Достопримечательности Мексики</H2>
	</div>
	<div class="container">
		<div class="name">
		<a href="#" class="circle">Чичен-Ица<span class="circle"> Один из самых больших, величественных и наиболее хорошо восстановленных монументов эпохи майя. Знаменитые пирамиды и храмы Чичен-Ицы — самые известные из древних памятников полуострова Юкатан. Прогуливаясь среди каменных платформ, пирамид и церемониальных залов, начинаешь лучше понимать и ценить высокую цивилизацию далекой древности.</span></a>
		<div class="card"><img src="@/assets/galery1.jpg" alt="">
			</div>
		</div>
		<div class="name">
				<a href="#" class="circle">Дворец искусств<span class="circle"> Во дворце изящных искусств находятся уникальные архитектурные объекты, в его восьми залах проводятся концерты, конференции и редакционные презентации, а также залы для камерных концертов. Во дворце есть книжный магазин и кофейня. На верхнем этаже находится Национальный музей архитектуры.
Во дворце есть опера, пластическое искусство и музыка.</span></a>
		<div class="card"><img src="@/assets/galery2.jpg" alt="">
			</div>
		</div>
		<div class="name">
			<a href="#" class="circle"> День мертвых<span class="circle">День мёртвых – один из самых древних праздников мир. Начали его праздновать ещё индейские племена майя и ольмеков.Праздник, что сегодня приобрёл огромную популярность во всех регионах Мексики. В городе Оахака его отмечают маршем ростовых кукол с лицами-черепами, а в Мичоакане дети наряжаются в стариков, исполняя забавные танцы. Каждый уголок страны хранит собственные традиции, посвящённые Дню памяти мёртвых, празднику, что сумел объединить мексиканцев, позволить им переплести прошлое с тысячелетней историей и современность, что направлена в будущее.</span></a>

		<div class="card"><img src="@/assets/galery3.jpg" alt="">
			</div>
		</div>
		<div class="name">
				<a href="#" class="circle"> Город Тулум<span class="circle">Древний город индейцев майя, расположенный на полуострове Юкатан в Мексике, примерно в 120 км от популярного курорта Канкун. Древний город Тулум отличается от других городов майя тем, что построен на высоком обрыве на берегу Карибского моря. Почему племена индейцев майя предпочитали строить свои города в основном в глубине страны, а не на берегу, для меня остается загадкой.</span></a>


		<div class="card"><img src="@/assets/galery4.jpg" alt="">
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PhotoPage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.background {
	background: url('@/assets/body.jpg');
	filter: blur(3px);
}

.name {
	margin-top: 20px;
	display: inline-block;
}

.container {
	position: relative;
	margin-top: 40px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	z-index: 100;
}

.card {
	width: 900px;
	height: 840px;
	color: rgb(214, 192, 126);
	margin: auto;
}

.card img {
	width: 800px;
	height: 700px;
}

button {
	border-radius: 17px;
	background: #ade6b069;
	color: black;
	padding: 8px 12px;
	font-size: 1.5em;
	margin-top: 10px;
}

.circle {
  display:inline-grid;
  z-index: 1;
  left: 0;
  top: 0;
  width: 175px;
  height: 60px;
  padding-top: 30px;
  border-radius: 300px;
  border-width: 4px;
  border-style: solid;
  text-decoration: none;
  text-align: center;
  font-size: 25px;
  box-shadow: 2px 2px 7px hsla(0, 0%, 4%, 0.95);
  text-shadow: 0 1px 0 rgba(9 9 9 / 85%);
  letter-spacing: 1;
  transition: all .25s ease-in-out;
}

.circle:hover {
  z-index: 2;
  width: 400px;
  height: 400px;
  left: -15%;
  top: -15%;
  padding-top: 38px;
  font-size: 33px;
  border: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .3);
  
}

  a.circle {
	color: black;
}

.circle span.circle {
  display: block;
  opacity: 0;
  padding: 40% 20% 0 20%;
  font-size: 1px;
  line-height: 1.5;
  border: none;
  color: rgba(0, 0, 0, 1);
  transition: all .5s ease-in-out;
}

.circle span:hover {
  opacity: .85;
  font-size: 20px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, .5);
}

.circle span {
  background: rgba(102, 204, 0, .7);
}

@media screen and (max-width: 1800px) {
  .container {
    grid-template-columns: auto;
  }
}

</style>
