/* create by PorYoung
 * 2017-7-30
 * build language : javascript
 * 
 * 
 */

//define the default variables
var WIDTH = 600, HEIGHT = 600;
//"up":上,"right":右,"down":下,"left":左
var left="left",up="up",down="down",right="right";
var snake = new(function () {
    this.body_radius=10;
    this.direction=left;
    this.MAX_LENGTH=200;
    this.startX=WIDTH/2+this.body_radius;
    this.startY=HEIGHT/2+this.body_radius;
    this.color=["rgb(210,220,230)","rgb(215,225,235)","rgb(225,220,225)","rgb(200,210,225)","rgb(215,225,215)"];
    this.body=[{x:this.startX,y:this.startY,color:this.color[parseInt(Math.random()*6-1)]},{x:this.startX+this.body_radius*2,y:this.startY,color:this.color[parseInt(Math.random()*6-1)]}];
    this.food={x:this.body_radius,y:this.body_radius,isAte:false,hasAteNum:0};
    this.drawSnake=function(ctx){
        for(var i = 0;i < this.body.length;i++){
            ctx.beginPath();
            ctx.arc(this.body[i].x,this.body[i].y,this.body_radius,0,2*Math.PI,false);
            ctx.fillStyle = this.body[i].color;
            ctx.fill();
            // ctx.closePath();
        }
    };
    this.drawFood=function (ctx) {
        ctx.beginPath();
        ctx.arc(this.food.x,this.food.y,this.body_radius,0,1.5*Math.PI,false);
        ctx.fillStyle = "gold";
        ctx.fill();
        ctx.closePath();
    };
    this.move=function () {
        for(var i = this.body.length-1;i > 0;i--){
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        switch(this.direction){
            case up:
                this.body[0].y -= this.body_radius*2;
                break;
            case right:
                this.body[0].x += this.body_radius*2;
                break;
            case down:
                this.body[0].y += this.body_radius*2;
                break;
            case left:
                this.body[0].x -= this.body_radius*2;
                break;
            default:
                alert('ERROR!READY TO RESTART!');
                window.location.reload();
                break;
        }
    };
    this.turn=function (code) {
        switch (code){
            case "38":
            case "87":
                this.direction = this.direction===down?down:up;
                break;
            case "39":
            case "68":
                this.direction = this.direction===left?left:right;
                break;
            case "40":
            case "83":
                this.direction = this.direction===up?up:down;
                break;
            case "37":
            case "65":
                this.direction = this.direction===right?right:left;
                break;
            default:
                alert("STOP");
                break;
        }
    };
    this.eat=function () {
        if(this.body[0].x<=this.food.x+this.body_radius&&this.body[0].y<=this.food.y+this.body_radius&&this.body[0].x>=this.food.x-this.body_radius&&this.body[0].y>=this.food.y-this.body_radius){
            this.food.isAte = true;
            this.food.hasAteNum++;
            this.food.x = parseInt(Math.random()*60)*10+this.body_radius;
            this.food.y = parseInt(Math.random()*60)*10+this.body_radius;
        }
    };
    this.addNode = function () {
        if(this.food.isAte === true){
            var aNode = {x:this.body[this.body.length-1].x+this.body_radius*2,y:this.body[this.body.length-1].y,color:this.color[parseInt(Math.random()*6-1)]};
            this.body.push(aNode);
            this.food.isAte = false;
        }
    };
    this.isDead = function () {
        // if(this.body[0].x > WIDTH || this.body[0].x < 0 || this.body[0].y > HEIGHT || this.body[0].y < 0){
        //     alert("HIT THE WALL!GAME OVER!");
        //     window.location.reload();
        // }
        if(this.body[0].x > WIDTH){ this.body[0].x =  0;}
        if(this.body[0].y > WIDTH){ this.body[0].y =  0;}
        if(this.body[0].x < 0){ this.body[0].x =  WIDTH;}
        if(this.body[0].y < 0){ this.body[0].y =  HEIGHT;}
        for(var i = 1;i < this.body.length;i++){
            if(this.body[0].x<=this.body[i].x+this.body_radius&&this.body[0].y<=this.body[i].y+this.body_radius&&this.body[0].x>=this.body[i].x-this.body_radius&&this.body[0].y>=this.body[i].y-this.body_radius){
                alert("EAT YOURSELF!GAME OVER!");
                window.location.reload();
            }
        }
    }
})();
// window.onkeyup = function (event) {
//     var e = event || window.event;
//     snake.turn(e.keyCode.toString());
// };

//create a canvas
//return the context of canvas
function createCanvas(){
	var container = document.createElement('div');
	var canvas = document.createElement('canvas');
	canvas.innerHTML = "您的浏览器不支持canvas,请更换浏览器再试";
	canvas.id = "canvas";
	document.body.appendChild(container);
	container.appendChild(canvas);
	container.style.textAlign = "center";
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	canvas.style.border = "1px solid #ccc";
	return canvas.getContext('2d');
}

function startGame(){
	var context = createCanvas();
	addEventListener("keyup",function (event) {
        var e = event || window.event;
        snake.turn(e.keyCode.toString());
    },false);
	setInterval(function () {
	    context.clearRect(0,0,WIDTH,HEIGHT);
        snake.drawSnake(context);
        snake.drawFood(context);
        snake.eat();
        snake.addNode();
        snake.move();
        snake.isDead();
    },100);
}

