class Snake{
	constructor(vt,contexte){
		this.v = vt;
		this.x = 0;
		this.y = 0
		this.fill = "#444";
		this.stroke = '#fff';
		this.ctx = contexte;
		this.r = 3;
		this.path = [{x:this.x,y:this.y}];
		this.maxParts = 150;
	}
	drowCircle() {
		this.ctx.strokeStyle = this.stroke;
		this.ctx.fillStyle = this.fill;
		this.ctx.beginPath();
		var rayon = this.r;
		for(var i  = 1; i<this.path.length;i++){
			var newRayon = rayon*i.map(0,this.path.length,1,0.1);
			this.ctx.arc(this.path[i].x + 2 * (rayon + newRayon)*this.v.x, this.path[i].y+ 2 * (newRayon+rayon)*this.v.y, rayon, 0, 2 * Math.PI);
			rayon = newRayon;
		}
		//this.ctx.fill();
		this.ctx.stroke();

	}
	updatePosition(e){
		//calculatiing the coordenate of the mouse		
		var mouseX = e.clientX.map(0,size.x,size.x/2,-size.x/2);
		var mouseY = e.clientY.map(0,size.y,-size.y/2,size.y/2);
		this.v.x = mouseX / Math.sqrt(Math.pow(mouseX,2.0) + Math.pow(mouseY,2.0));
		this.v.y = mouseY / Math.sqrt(Math.pow(mouseX,2.0) + Math.pow(mouseY,2.0));

		this.path.splice(0,0,{x:this.x,y:this.y});
		if(this.path.length > this.maxParts ){
			this.path.pop();
		}

		console.log(this.path);

		this.x += this.v.x / 2;
		this.y += this.v.y / 2;
	}
}