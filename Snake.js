class Snake{
	constructor(vt,contexte){
		this.v = vt;
		this.oldV = null;
		this.x = 0;
		this.y = 0
		this.fill = "#444";
		this.stroke = '#fff';
		this.ctx = contexte;
		this.snake = null;
		this.r = 10;
		this.flag = true;
		this.parent = null;
		this.counter = 1;
	}
	drowCircle() {
		this.ctx.strokeStyle = this.stroke;
		this.ctx.fillStyle = this.fill;
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		ctx.fill();
		this.ctx.stroke();
		if(this.snake ){
			this.snake.drowCircle();
			this.flag = false;
		}
	}
	updatePosition(e){
		//calculatiing the coordenate of the mouse		
		this.oldV = this.v;
		console.log(this.parent);
		if(this.parent === null){
			var mouseX = e.clientX.map(0,size.x,size.x/2,-size.x/2);
			var mouseY = e.clientY.map(0,size.y,-size.y/2,size.y/2);

			this.v.x = mouseX / Math.sqrt(Math.pow(mouseX,2.0) + Math.pow(mouseY,2.0));
			this.v.y = mouseY / Math.sqrt(Math.pow(mouseX,2.0) + Math.pow(mouseY,2.0));
		}else{
			this.v = this.parent.oldV;
		}

		this.x += this.v.x / 2;
		this.y += this.v.y / 2;

		if(this.snake){
			this.snake.updatePosition();
		}else{
			//calculating distance btwn the circle's center and the canvas's center;
			var dist = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
			if(dist >= (this.r * 1.5) && snake.counter < 20 ){
				snake.counter ++;
				this.snake = new Snake(this.v,this.ctx);
				this.snake.r = this.r * 0.8;
				this.snake.fill = this.stroke;
				this.snake.stroke = this.fill;
				this.snake.parent = this;
			}
		}
		this.drowCircle();
	}
}