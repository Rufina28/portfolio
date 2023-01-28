<template>
	<div class="background"></div>
	<div class="name">
		<H2>Достопримечательности Мексики</H2>
	</div>
	<div class="container">
		<div class="card"><img src="@/assets/galery1.jpg" alt="">
			<div class="name">
				<button> Чичен-Ица</button>
			</div>
		</div>
		<div class="card"><img src="@/assets/galery2.jpg" alt="">
			<div class="name">
				<button> Дворец изящных искусств</button>
			</div>
		</div>
		<div class="card"><img src="@/assets/galery3.jpg" alt="">
			<div class="name">
				<button> День мертвых</button>
			</div>
		</div>
		<div class="card"><img src="@/assets/galery4.jpg" alt="">
			<div class="name">
				<button> Город майя Тулум</button>
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
	/* z-index: -1;
	width: 100%;
	height: 100%;
	position: fixed; */
	filter: blur(3px);
}

.name {
	margin-top: 50px;
}

.container {
	position: relative;
	margin-top: 40px;
	/* margin-left: 100px; */
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

@media screen and (max-width: 1800px) {
  .container {
    grid-template-columns: auto;
  }
}

</style>
