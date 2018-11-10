var canvas = document.getElementById('workSpace');
var ctx = canvas.getContext('2d');
var PI = Math.PI;
var v = {
	x: Math.cos(PI/4),
	y: Math.sin(PI/4)
}
var snake = new Snake(v,ctx);
ctx.translate(canvas.width/2,canvas.height/2)
ctx.scale(	-1, 1)
var size = {x:document.getElementsByTagName('body')[0].offsetWidth,y:document.getElementsByTagName('body')[0].offsetHeight	};




canvas.addEventListener('mousemove',function(e){
	drowAll(e);
})

function drowAll(e){
	snake.updatePosition(e);
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function drowArrow(tox, toy,b,f){
    var headlen = 10;   // length of head in pixels
    var angle = Math.atan2(toy,tox);
    this.ctx.beginPath();
    ctx.strokeStyle =b?b:'#fff';
	ctx.fillStyle = f?f:'#fff';
    ctx.moveTo(0, 0);
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));
    ctx.stroke();
}

function update(){
	ctx.clearRect(-canvas.height,canvas.height,canvas.width,-canvas.width);
	snake.drowCircle();
	//drowArrow(snake.v.x * 20, snake.v.y*20);
}

setInterval(update,10);