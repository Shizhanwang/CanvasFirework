window.onload = function(){
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	var canvasW = window.innerWidth;
	var canvasH = window.innerHeight;
	
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
		draw();
	}
	
	
	function draw(){
		ctx.fillStyle = "rgba(255,255,255,0.4)";
		ctx.arc(canvasW/2,canvasH/2,20,0,Math.PI*2,true);
		ctx.fill();
	}
	
	
	
	
	

	
	
	
	
	
	
}
