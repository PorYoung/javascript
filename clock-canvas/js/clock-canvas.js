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
var preDate = null,h = 0,m = 0,s = 0,curDate = null,curHour = 0,curMinute = 0,curSecond = 0,hflag = 0,mflag = 0,sflag = 0; 
//定义小球
var balls = [],g = 2;
//在DOM中指定容器内创建canvas,可以指定宽高，默认为浏览器可见区域的宽高
function createCanvas(id,w,h){
	//判断传入参数是否为string，默认为根元素或body
	if(typeof(id)!=="string") var ele = document.documentElement || document.body;
	else var ele = document.getElementById(id);
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
		HEIGHT = document.documentElement.clientHeight;		
	}
	RADIUS = parseInt(WIDTH/200);
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	
	return canvas.getContext('2d');
}

//绘制时钟数字
function drawClock(ctx){
	var draw = function(ctx,startX,startY,num){
			for(var i = 0;i < digit[num].length;i++){
			for(var j = 0;j < digit[num][i].length;j++){
				if(digit[num][i][j] === 1){
					ctx.beginPath();
					ctx.arc(startX+RADIUS*j*2+GAP*j,startY+RADIUS*i*2+GAP*i,RADIUS,
							0,Math.PI*2,false);
					ctx.fillStyle = "rgb(223,231,245)";
					ctx.fill();
					//添加小球
					var aBall = {
						x: startX+RADIUS*j*2+GAP*j,
						y: startY+RADIUS*i*2+GAP*i,
						vx: -5,
						vy: -5
					}
					balls.push(aBall);
				}
			}
		}
	}
	var startX = WIDTH/10 + RADIUS, startY = HEIGHT/5 + RADIUS, GAP = RADIUS;
	var num = parseInt(h/10);
	draw(ctx,startX,startY,num);
	startX += RADIUS*7+GAP*9;
	num = parseInt(h%10);
	draw(ctx,startX,startY,num);
	//画冒号
	startX += RADIUS*7*2+GAP*10;
	num = 10;
	draw(ctx,startX,startY,num);
	startX += RADIUS*4*2+GAP*7;
	num = parseInt(m/10);
	draw(ctx,startX,startY,num);
	startX += RADIUS*7*2+GAP*10;
	num = parseInt(m%10);
	draw(ctx,startX,startY,num);
	//画冒号
	startX += RADIUS*7*2+GAP*10;
	num = 10;
	draw(ctx,startX,startY,num);
	startX += RADIUS*4*2+GAP*7;
	num = parseInt(s/10);
	draw(ctx,startX,startY,num);
	startX += RADIUS*7*2+GAP*10;
	num = parseInt(s%10);
	draw(ctx,startX,startY,num);
}

//绘制彩色小球
function drawBalls(ctx){
	for(var i = 0;i < balls.length;i++){
		ctx.beginPath();
		ctx.arc(balls[i].x,balls[i].y,RADIUS,
			0,Math.PI*2,false);
		ctx.fillStyle = "rgb(112,132,145)";
		ctx.fill();
	}
}

//更新时间和小球位置
function update(){
	curDate = new Date();
	curSecond = curDate.getSeconds();
	curMinute = curDate.getMinutes();
	curHour = curDate.getHours();
	
	for(var i = 0;i < balls.length;i++){
		if(balls[i].x <= 0 || balls[i].x >= WIDTH){
			balls[i] = balls[i+1];
			i--;
			continue;
		}
		balls[i].x += balls[i].vx;
		balls[i].vy += g;
		balls[i].y += balls[i].vy;
	}
	balls.length = Math.min(balls.length,500);
}

window.onload = function(){
	var context = createCanvas();
	preDate = new Date();
	h = preDate.getHours();
	m = preDate.getMinutes();
	s = preDate.getSeconds();
	drawClock(context);
	setInterval(function(){
		update();
		if(curSecond !== s){
			s = curSecond;
			if(curMinute !== m){
				m = curMinute;	
			}
			if(curHour !== h){
				h = curHour;
			}
			context.clearRect(0,0,WIDTH,HEIGHT);
			drawClock(context);
		}
//		drawBalls(context);
	},100);
}

