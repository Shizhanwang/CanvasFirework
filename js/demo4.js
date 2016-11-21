window.onload = function(){
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	var canvasW = window.innerWidth;
	var canvasH = window.innerHeight;
	
	var timer = "";
	
	//初始化函数
	init();
	/**
	 * 将动态创建的canvas标签赋值宽高，并且添加页面当中
	 * draw()函数功能为创建一个粒子
	 */
	function init(){
		canvas.width = canvasW;
		canvas.height = canvasH;
		document.body.appendChild(canvas);
		/*draw();*/
		
		timer = setInterval(function(){
			loop();
		},400);
	}
	
	var bubbles = [];
	function loop(){
		var ranX = Math.random()*canvasW;
		var ranY = Math.random()*canvasH;
		/*var ranY = 20;*/
		var color = getRandomColor();
		ctx.fillStyle = "#000";
		ctx.clearRect(0,0,canvasW,canvasH);
		var bubble = new Bubble(ranX,ranY,20,color);
		
		bubbles.push(bubble);
		
		var bubbleLength = bubbles.length;
		
		for (var i in bubbles) {
			var bu = bubbles[i];
			bu.draw();
			bu.updatePoint();
		}
		
		
		if(bubbleLength>5){
			bubbles.shift();
		}
	}
	
	function getRandomColor(){
		return "rgba("+Math.round(Math.random()*155+100)+","+Math.round(Math.random()*155+100)+","+Math.round(Math.random()*155+100)+",0.4)"
	}
	
	/*function draw(){
		ctx.fillStyle = "rgba(255,255,255,0.4)";
		ctx.arc(canvasW/2,canvasH/2,20,0,Math.PI*2,true);
		ctx.fill();
	}*/
	
	
	function Bubble(x,y,r,color){
		this.x = x;
		this.y = y;
		this.r = r;
		this.color = color;
		this.yVel = 5;
		
		this.draw = function(){
			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
			ctx.fill();
			ctx.closePath();
		}
		
		this.updatePoint = function(){
			this.y += this.yVel;
		}
		
	}
	
	

	
	
	
	
	
	
}
