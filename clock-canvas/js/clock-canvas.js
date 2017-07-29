//定义数字点阵
digit =
    [
        [
            [0,0,1,1,1,0,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,0,1,1,0],
            [0,0,1,1,1,0,0]
        ],//0
        [
            [0,0,0,1,1,0,0],
            [0,1,1,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [1,1,1,1,1,1,1]
        ],//1
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,1,1],
            [1,1,1,1,1,1,1]
        ],//2
        [
            [1,1,1,1,1,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,1,0,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//3
        [
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,0],
            [0,0,1,1,1,1,0],
            [0,1,1,0,1,1,0],
            [1,1,0,0,1,1,0],
            [1,1,1,1,1,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,1,1]
        ],//4
        [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,1,1,1,1,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//5
        [
            [0,0,0,0,1,1,0],
            [0,0,1,1,0,0,0],
            [0,1,1,0,0,0,0],
            [1,1,0,0,0,0,0],
            [1,1,0,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//6
        [
            [1,1,1,1,1,1,1],
            [1,1,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,0,0,1,1,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0],
            [0,0,1,1,0,0,0]
        ],//7
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,1,1,0]
        ],//8
        [
            [0,1,1,1,1,1,0],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [1,1,0,0,0,1,1],
            [0,1,1,1,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,1,1],
            [0,0,0,0,1,1,0],
            [0,0,0,1,1,0,0],
            [0,1,1,0,0,0,0]
        ],//9
        [
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ]//:
    ];

//定义画布宽和高,点的半径
var WIDTH = 1024, HEIGHT = 768, RADIUS = parseInt(WIDTH/200);
//定义时间
var preDate = null,h = 0,m = 0,s = 0,curDate = null,curHour = 0,curMinute = 0,curSecond = 0,hflag = {one:0,ten:0},mflag = {one:0,ten:0},sflag = {one:0,ten:0}; 
//定义小球
var balls = [];
var color = ["rgb(239,206,232)","rgb(243,215,181)","rgb(253,255,223)","rgb(218,249,202)","rgb(199,179,129)"];
//在DOM中指定容器内创建canvas,可以指定宽高，默认为浏览器可见区域的宽高
function createCanvas(id,w,h){
	//判断传入参数是否为string，默认为根元素或body
	if(typeof(id)!=="string") var ele = document.documentElement || document.body;
	else var ele = document.getElementById(id);
//	ele.style.overflow = "hidden";
	var canvas = document.createElement('canvas');
	canvas.id = "canvas";
	canvas.style.height = "100%";
	canvas.style.width = "100%";
	canvas.innerHTML = "您的浏览器不支持canvas，请更换浏览器再试";
	ele.appendChild(canvas);
	
	//初始化canvas的宽和高
	if(!isNaN(w)&&!isNaN(h)&&w!=0&&h!=0){
		WIDTH = parseInt(w);
		HEIGHT = parseInt(h);	
	}else{
		WIDTH = document.documentElement.clientWidth;
		HEIGHT = document.documentElement.clientHeight-30;		
	}
	RADIUS = parseInt(WIDTH/200);
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	
	return canvas.getContext('2d');
}

//绘制时钟数字
function drawClock(ctx){
	var draw = function(ctx,startX,startY,num,flag){
			for(var i = 0;i < digit[num].length;i++){
			for(var j = 0;j < digit[num][i].length;j++){
				if(digit[num][i][j] === 1){
					ctx.beginPath();
					ctx.arc(startX+RADIUS*j*2+GAP*j,startY+RADIUS*i*2+GAP*i,RADIUS,
							0,Math.PI*2,false);
					ctx.fillStyle = "rgb(223,231,245)";
					ctx.fill();
					//添加小球
					if(flag){
						var aBall = {
						x: startX+RADIUS*j*2+GAP*j,
						y: startY+RADIUS*i*2+GAP*i,
						vx: parseInt(Math.pow(-1,i)*10*Math.random()),
						vy: -5,
						g: 2,
						time: curDate.getTime()
						}
						balls.push(aBall);	
					}
				}
			}
		}
	}
	var startX = WIDTH/10 + RADIUS, startY = HEIGHT*1/5 + RADIUS, GAP = RADIUS;
	var num = parseInt(h/10);
	if(hflag.ten === 1){
		draw(ctx,startX,startY,num,true);
	}else draw(ctx,startX,startY,num,false);
	startX += RADIUS*7+GAP*9;
	num = parseInt(h%10);
	if(hflag.one === 1){
		draw(ctx,startX,startY,num,true);
	}else draw(ctx,startX,startY,num,false);
	//画冒号
	startX += RADIUS*7*2+GAP*10;
	num = 10;
	draw(ctx,startX,startY,num);
	startX += RADIUS*4*2+GAP*7;
	num = parseInt(m/10);
	if(mflag.ten === 1){
		draw(ctx,startX,startY,num,true);
	}else draw(ctx,startX,startY,num,false);
	startX += RADIUS*7*2+GAP*10;
	num = parseInt(m%10);
	if(mflag.one === 1){
		draw(ctx,startX,startY,num,true);
	}else draw(ctx,startX,startY,num,false);
	//画冒号
	startX += RADIUS*7*2+GAP*10;
	num = 10;
	draw(ctx,startX,startY,num);
	startX += RADIUS*4*2+GAP*7;
	num = parseInt(s/10);
	if(sflag.ten === 1){
		draw(ctx,startX,startY,num,true);
	}else draw(ctx,startX,startY,num,false);
	startX += RADIUS*7*2+GAP*10;
	num = parseInt(s%10);
	if(sflag.one === 1){
		draw(ctx,startX,startY,num,true);
	}else draw(ctx,startX,startY,num,false);
}

//绘制彩色小球
function drawBalls(ctx){
	for(var i = 0;i < balls.length;i++){
		ctx.beginPath();
		ctx.arc(balls[i].x,balls[i].y,RADIUS,
			0,Math.PI*2,false);
		ctx.fillStyle = color[parseInt(6*Math.random()-1)];
		ctx.fill();
	}
}

//更新时间和小球位置
function update(){
	curDate = new Date();
	curSecond = curDate.getSeconds();
	curMinute = curDate.getMinutes();
	curHour = curDate.getHours();
	var ind = 0;
	for(var i = 0;i < balls.length;i++){
		if(balls[i].y <= 0 || curDate.getTime()-balls[i].time >= 20000 ) continue;
		if(balls[i].y >= HEIGHT){
			balls[i].vy = -balls[i].vy*0.75;
		}
		if(balls[i].x <= 0){ balls[i].vx = -balls[i].vx*0.95;}
		if(balls[i].x >= WIDTH){ balls[i].vx = -balls[i].vx*0.95;}
		balls[ind++] = balls[i];
		balls[i].x += balls[i].vx;
		balls[i].vy += balls[i].g;
		balls[i].y += balls[i].vy;
	}
	balls.length = Math.min(ind,1000);
}

window.onload = function(){
	var context = createCanvas();
	preDate = new Date();
	h = curHour = preDate.getHours();
	m = curMinute = preDate.getMinutes();
	s = curSecond = preDate.getSeconds();
	drawClock(context);
	setInterval(function(){
		update();
		if(curSecond !== s){
			sflag.ten=parseInt(s/10)===parseInt(curSecond/10)?0:1;
			sflag.one=parseInt(s%10)===parseInt(curSecond%10)?0:1;
			if(curMinute !== m){
				mflag.ten=parseInt(m/10)===parseInt(curMinute/10)?0:1;
				mflag.one=parseInt(m%10)===parseInt(curMinute%10)?0:1;
			}
			if(curHour !== h){
				hflag.ten=parseInt(h/10)===parseInt(curHour/10)?0:1;
				hflag.one=parseInt(h%10)===parseInt(curHour%10)?0:1;
			}
//			context.clearRect(0,0,WIDTH,HEIGHT);
//			drawClock(context);
//			sflag.one = sflag.ten = mflag.one = mflag.ten = hflag.one = hflag.ten = 0;
		}
//		s = curSecond;
//		h = curHour;
//		m = curMinute;
//		update();
		context.clearRect(0,0,WIDTH,HEIGHT);
		drawClock(context);
		drawBalls(context);
		s = curSecond;
		h = curHour;
		m = curMinute;
		sflag.one = sflag.ten = mflag.one = mflag.ten = hflag.one = hflag.ten = 0;
	},50);
}

