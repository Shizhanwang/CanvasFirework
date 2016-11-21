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
		},40);
	}
	
	var bubbles = [];
	function loop(){
		/*var ranX = Math.random()*canvasW;*/
		var ranX = canvasW*0.5
		/*var ranY = Math.random()*canvasH;*/
		var ranY = canvasH*0.8;
		/*var ranY = 20;*/
		var color = getRandomColor();
		ctx.fillStyle = "#000";
		ctx.clearRect(0,0,canvasW,canvasH);
		var bubble = new Bubble(ranX,ranY,5,color);
		bubble.xVel = Math.random()*4-2;
		bubbles.push(bubble);
		
		var bubbleLength = bubbles.length;
		
		for (var i in bubbles) {
			var bu = bubbles[i];
			bu.draw();
			bu.updatePoint();
		}
		
		
		if(bubbleLength>200){
			bubbles.shift();
		}
	}
	
	function getRandomColor(){
		return "rgba("+Math.round(Math.random()*155+100)+","+Math.round(Math.random()*155+100)+","+Math.round(Math.random()*155+100)+",1)"
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
		this.yVel = -10;
		this.xVel = 0;
		this.gravity = 0.1;
		this.counter = 0;
		
		this.draw = function(){
			ctx.beginPath();
			ctx.fillStyle = this.color;
			/*this.counter =this.counter>360?0:this.counter;
			ctx.fillStyle = "hsl("+this.counter+",100%,50%)"*/
			ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
			ctx.fill();
			ctx.closePath();
		}
		
		this.updatePoint = function(){
			this.yVel += this.gravity;
			this.y += this.yVel;
			this.x += this.xVel;
			this.counter += 5;
		}
		
	}
	
	
/*
					 H(Hue):表示颜色的类型(例如红色,绿色或者黄色).取值范围为0—360.
					 其中每一个值代表一种颜色.
 					S(Saturation):颜色的饱和度.从0到1.有时候也称为纯度.(0表示灰度图,1表示纯的颜色) 
 					B(Brightness or Value):颜色的明亮程度.从0到1.(0表示黑色,1表示特定饱和度的颜色) 
					ctx.fillStyle = "hsl("+this.counter+",100%,50%)";
	*/
	
	
	
	
	
}
