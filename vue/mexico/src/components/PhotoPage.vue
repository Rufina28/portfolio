<template>
 <div class="container">
            <div class="card"><img src="@/assets/galery1.jpg" alt=""></div>
            <div class="card"><img src="@/assets/galery2.jpg" alt=""></div>
            <div class="card"><img src="@/assets/galery3.jpg" alt=""></div>
            <div class="card"><img src="@/assets/galery4.jpg" alt=""></div>
        </div>
</template>

<script>
export default {
  name: 'PhotoPage', 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
	position: relative;
	margin-top: 40px;
	margin-left: 100px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	z-index: 100;
}

.card {
	width: 900px;
	height: 840px;
	color: rgb(214, 192, 126);
}

.card img {
	width: 800px;
	height: 700px;
}
</style>
