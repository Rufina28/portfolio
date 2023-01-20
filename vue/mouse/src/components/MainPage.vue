<template>
 <div class="game">
            <div id="mouse"></div>
            <div id="cheese"></div>
            <div id="cactus"></div>
        </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String
  }
}
console.log('Mouse game')

window.onload = () => {
    console.log('window loaded')

    const mouse = document.getElementById('mouse')

    console.log('mouse:', mouse)

    window.addEventListener('keypress', () => {
        console.log('jupm')

        mouse.classList.add('jump')

        setTimeout(() => {
            mouse.classList.remove('jump')
        }, 800)
    })
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@keyframes cheese {
	0% {
		left: 110%;
	}

	100% {
		left: -20%;
	}
}

@keyframes run {
	0% {
		background-position-x: 0px;
	}

	100% {
		background-position-x: -2560px;
	}
}

@keyframes cactus {
	0% {
		left: 110%;
	}

	100% {
		left: -400px;
	}
}

@keyframes jump {
	0% {
		top: 475px;
	}

	30% {
		top: 100px;
	}

	70% {
		top: 100px;
	}

	100% {
		top: 475px;
	}
}

html,
body {
	width: 100%;
	min-width: 1280px;
	height: 100%;
	min-height: 720px;
	margin: 0;
	padding: 0;
	overflow: hidden;
}

.page {
	width: 100%;
	height: 100%;
	display: flex;
	background: black;
}

.game {
	position: relative;
	width: 1280px;
	height: 720px;
	margin: auto;
	background: url('@/assets/mouse-run.png');
	background-size: contain;
	overflow: hidden;
	animation: run 8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

/* .game {
	width: 600px; 
	height: 0px;
	border-bottom: 1px solid#000;
		/* display: flex;
		justify-content: right;
		box-sizing: content-box; */
/* padding: 150px; */


#mouse {
	width: 90px;
	height: 90px;
	background-image: url('@/assets/mouse.png');
	box-sizing: border-box;
	background-size: contain;
	position: absolute;
	top: 475px;
}

.jump {
	animation: jump .8s;
}

#cheese {
	width: 140px;
	height: 140px;
	background-image: url('@/assets/cheese.png');
	box-sizing: border-box;
	background-size: contain;
	position: absolute;
	top: 300px;
	animation: cheese 3s infinite linear;
}

#cactus {
	width: 140px;
	height: 140px;
	background-image: url('@/assets/cactus.png');
	box-sizing: border-box;
	background-size: contain;
	position: absolute;
	top: 440px;
	animation: cactus 4s infinite linear;
}

</style>
