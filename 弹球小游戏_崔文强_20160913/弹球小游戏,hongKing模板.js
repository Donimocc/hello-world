/**
 * Created by houngking on 2016/9/12.
 */
window.onload = init;
window.onmousemove = mousemoveHandler;


var bg,ball,board,ctx;

var cWidth = 1000,cHeight = 800;

var boardX = 0,boardY =630;

var ballX = 400,ballY = 350;

var vx = 4, vy = 8;

var bricks = [];
function init() {
    trace("The Games is init.");

    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    bg =addImg( "assets/bg.png");
    board = addImg("assets/board.png");
    ball = addImg("assets/ball.png");

    createBricks();
    setInterval(gamesItvl,1000/60);
}


function isHitObj(x1,y1,w1,h1,x2,y2) {
    if(x2 >= x1 && x2 <= x1 + w1 && y2 >= y1 && y2<= y1 + h1){
        return true;
    }else {
        return false;
    }
}
function addBricks() {
    for(var i = 0; i < bricks.length;i++){
        var item = bricks[i];
        ctx.drawImage(item.item,item.x,item.y);
    }
}

function createBricks() {
    for(var i = 0 ;i<6;i++){
        for(var j = 0 ; j < 4 ; j ++){
            var item = addImg("assets/2.png");
            // item.x = 20 + 198 * i;
            // item.y = 95;
            var obj = {item:item,x:20 + 155 * i,y:25 + 60 *j};
            bricks.push(obj);
        }

    }
}
function moveBall() {
    ballX += vx;
    ballY += vy;

    if(ballX < 0){
        ballX = 0;
        vx *= -1;
    }else if(ballX > cWidth - ball.width){
        ballX = cWidth - ball.width;
        vx *= -1;
    }

    if(ballY < 20){
        ballY = 20;
        vy *= -1;
    }else if(ballY > 700){
        trace("Game Over!");
    }
    ctx.drawImage(ball,ballX,ballY);
}

function mousemoveHandler(e) {
    if(board) boardX = e.x - board.width / 2;
}

function gamesItvl() {
    clearCanvas();
    ctx.drawImage(bg,0,0);
    ctx.drawImage(board,boardX,boardY);
    moveBall();
    addBricks();

    testBallHit();
    testBricksHit();
}

function testBricksHit(){
    for(var i = bricks.length - 1;i>=0;i--){
        var item = bricks[i];
        var hit = isHitObj(item.x - 75,item.y - 50,item.item.width + 50,item.item.height + 50,ballX,ballY);
        if(hit){
            bricks.splice(i,1);
            vy *= -1;
        }
    }
}
function testBallHit() {
    var hit = isHitObj(boardX - 50,boardY - 50,board.width + 50,board.height + 50,ballX,ballY);
    if(hit){
        ballY = boardY - 50;
        vy *= -1;
    }
}
function clearCanvas() {
    ctx.clearRect(0,0,cWidth,cHeight);
}
function addImg(url) {
    var img = new Image();
    img.src = url;
    return img;
}

















function trace(msg) {
    console.log(msg);
}


