window.onload = function(){
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	var canvasW = window.innerWidth;
	var canvasH = window.innerHeight;
	
	//初始化函数
	init();
	/**
	 * 将动态创建的canvas标签赋值宽高，并且添加页面当中
	 */
	function init(){
		canvas.width = canvasW;
		canvas.height = canvasH;
		document.body.appendChild(canvas);
	}
	
	
	
	
	
	

	
	
	
	
	
	
}
