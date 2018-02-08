var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-10;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX1 = (canvas.width-paddleWidth)/2;
var paddleX2 =(canvas.width-paddleWidth)/2; 
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var rightP2 = false;
var leftP2 = false;

function reset(){
	paddleX1 = (canvas.width-paddleWidth)/2;
	paddleX2 = paddleX1;
	x = canvas.width/2;
	y = canvas.height-10;
}


function drawBall(){
	
ctx.beginPath();
	ctx.arc(x,y,ballRadius,0,Math.PI*2);
	ctx.fillStyle="#0095dd";
	ctx.fill();
	ctx.closePath();

}
function drawPaddle1(){
	ctx.beginPath();
	ctx.rect(paddleX1,canvas.height-paddleHeight,paddleWidth,paddleHeight);
	ctx.fillStyle="#0095dd";
	ctx.fill();
	ctx.closePath();
}
function drawPaddle2(){
	ctx.beginPath();
	ctx.rect(paddleX2,0,paddleWidth,paddleHeight);
	ctx.fillStyle="#0095dd";
	ctx.fill();
	ctx.closePath();
}

function draw(){
	ctx.clearRect(0,0,480,320);
	drawBall();
	drawPaddle1();
	drawPaddle2();
	
	//Controlling The Paddle 1
	if(rightPressed && paddleX1<canvas.width-paddleWidth){
		paddleX1+=7;
	}else if(leftPressed && paddleX1>0){
		paddleX1-=7;
	}
	//Controlling Paddle 2
	if(rightP2 &&paddleX2<canvas.width-paddleWidth){
		paddleX2+=7;
	}else if(leftP2&&paddleX2>0){
		paddleX2-=7;
	}
	//Bouncing the ball
		if(y+dy<0+ballRadius){
			if(x>paddleX2&&x<paddleX2+paddleWidth){
				dy = -dy;
			}else{
				alert("Player 1 Wins!!!!");
				reset();
			}
			
		}
	if(x+dx>canvas.width-ballRadius){
		dx=-dx;
	}if(x+dx<0+ballRadius){
		dx=-dx;
	}if(y+dy>canvas.height-ballRadius){
		if(x>paddleX1&&x<paddleX1+paddleWidth){
			dy=-dy;
		}else{
			
			alert("Player 2 Wins!!!");
			reset();
		}
		//document.location.reload();
	}
		x+=dx;
		y+=dy;
		
}
document.addEventListener("keydown",keydownhandle,false);
document.addEventListener("keyup",keyuphandle,false);
function keydownhandle(e){
	if(e.keyCode==39){
		rightPressed = true;
	}else if(e.keyCode==37){
		leftPressed=true;
	} 
	if(e.keyCode==68){
		rightP2=true;
			
	}else if(e.keyCode==65){
		leftP2=true;
	}
}
function keyuphandle(e){
	if(e.keyCode==39){
		rightPressed=false;
	}else if(e.keyCode==37){
		leftPressed = false;
	}
	if(e.keyCode==68){
		rightP2=false;
			
	}else if(e.keyCode==65){
		leftP2=false;
	}
}
setInterval(draw,10);
