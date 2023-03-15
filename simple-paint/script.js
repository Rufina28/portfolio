const canvas = document.getElementById('canvas')
const context = canvas.getContext("2d")
let paint = false

const brush = {
	width: 10,
	height: 10,
}

function init() {
	canvas.width = 900;
	canvas.height = 680;

	context.fillStyle = 'rgb(255, 255, 255)'
	context.fillRect(0, 0, canvas.width, canvas.height)
	
}

function setEvents() {

	canvas.addEventListener('mousedown', (e) => {
		const mouseX = e.offsetX
		const mouseY = e.offsetY

		paint = true;

		console.log(`x: ${mouseX}, y: ${mouseY}`);
		// addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop)
		// redraw()
	}, false)

	canvas.addEventListener('mouseup', (e) => {
		paint = false
		console.log(`paint: ${paint}`);
	}, false)

	canvas.addEventListener('mousemove', (e) => {
		if (paint) {
			const mouseX = e.offsetX
			const mouseY = e.offsetY

			console.log(`x: ${mouseX}, y: ${mouseY}`);

			// context.fillStyle = 'rgba(0, 0, 0, 0)'
			// context.fillRect(mouseX, mouseY, width, height)

			context.clearRect(mouseX, mouseY, brush.width, brush.height);
			context.strokeStyle = "#df4b26";
			context.lineCap = 'round';
			context.lineWidth = 10;

		
			// addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop)
			// redraw()
		}
	}, false)

	const tool = document.querySelector('.tools')
	tool.addEventListener('click', (e) => {
		console.log(e.target.id)
		if (e.target.id === 'small') {
			brush.width = 10
			brush.height = 10
		} else if (e.target.id === 'medium') {
			brush.width = 30
			brush.height = 30
		}
	}, false)

}

init()
setEvents()
