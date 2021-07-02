// const bgSound=new Audio("./Sonic_The_Hedgehog_3_-_Hydrocity_Zone_Act_2SNES_remix__128kbps_.mp3");
// bgSound.play();

if(!sessionStorage.getItem("User")){
  window.location.replace("./index.html");
}

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
canvas.height = window.innerHeight - 100;
canvas.width = window.innerWidth;
var ballRadius = 15;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 7;
var dy = -7;
var paddleHeight = 10;
var paddleWidth = 200;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5;
let sessionstored = +sessionStorage.getItem("rows");
var brickColumnCount = 1;
if (sessionstored && sessionstored <= 5) {
  brickColumnCount = sessionstored;
}
var brickPadding = 10;
var brickOffsetTop = 100;
var brickOffsetLeft = 30;
var brickWidth = (canvas.width - 2 * brickOffsetLeft - 4 * brickPadding) / 5;
var brickHeight = 30;

let score=0;
var lives = 3;
var bricks = [];

for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}
function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

window.ontouchmove = (e) => {
  paddleX =
    parseInt(e.changedTouches[0].clientX) -
    canvas.getBoundingClientRect().top -
    document.documentElement.scrollTop -
    paddleHeight / 2;
};
function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          let hit = new Audio("./sounds/Respawn.mp3");
          dy = -dy;
          hit.play();
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            brickColumnCount += 1;

            sessionStorage.setItem("rows", brickColumnCount);

            let user=JSON.parse(sessionStorage.getItem("User"));
            if(user.score){
                user["score"]+=score;
            }else{
                user["score"]=score;
            }
            
            sessionStorage.setItem("User", JSON.stringify(user));
            let popup = document.getElementById("popup");
            popup.style.display = "flex";
            if (brickColumnCount == 6) {
              popup.innerHTML =
                "<div><h1>You have won the game.</h1><button class='shadow-lg' onClick='replay()'>Replay</button><button class='shadow-lg' onclick='leaderboard()'>Leaderboard</button></div>";
            }

            setTimeout(() => {
              if (brickColumnCount == 6) {
                postData("https://bricksbackend.azurewebsites.net").then(
                  (data) => {
                    console.log(data); // JSON data parsed by `data.json()` call
                  }
                );
              } else {
                document.location.reload();
              }
            }, 3000);
          }
          if (dx == 7) {
            dx++;
          }
          if (dy == -7) {
            dy--;
          }
        }
      }
    }
  }
}
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.strokeStyle = "#000";
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#eee";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawBricks(color) {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
        var brickY = c * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
         
        // ctx.fillRect(brickX, brickY, brickWidth, brickHeight);
        // base_image = new Image();
        // base_image.src = `Images/brick.png`;
        // ctx.drawImage(base_image, brickX, brickY, brickWidth, brickHeight);

        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
function drawScore() {
  ctx.font = "16px Merriweather";
  ctx.fillStyle = "#fff";
  ctx.fillText("Score: " + score, brickOffsetLeft, 20);
}
function drawLives() {
  ctx.font = "16px Merriweather";
  ctx.fillStyle = "#fff";
  ctx.fillText("Lives: " + lives, canvas.width - 3 * brickOffsetLeft, 20);
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks("#fb7e5c");
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      const liveGone = new Audio(
        "./sounds/2D_Breakout_Game_JavaScript_-_FULL_GAME_sounds_life_lost.mp3"
      );
      lives--;
      liveGone.play();
      if (!lives) {
        let user=JSON.parse(sessionStorage.getItem("User"));
        if(user.score){
            user["score"]+=score;
        }else{
            user["score"]=score;
        }
        postData("https://bricksbackend.azurewebsites.net").then(
            (data) => {
              console.log(data); // JSON data parsed by `data.json()` call
            }
        );
        let popup = document.getElementById("popup");
        popup.style.display = "flex";
        popup.innerHTML =
                "<div><h1>You have lost all of your lives.</h1><button class='shadow-lg' onClick='replay()'>Replay</button><button class='shadow-lg' onclick='leaderboard()'>Leaderboard</button></div>";
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = dx;
        dy = -dy;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 15;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 15;
  }
  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}
draw();

async function postData(url = '', data = {
    "name" : JSON.parse(sessionStorage.getItem("User")).name,
    "endpoint" : "A",
    "score" : (+JSON.parse(sessionStorage.getItem("User")).score)
}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer", 
    body: JSON.stringify(data),
  });
  return response.json();
}

function replay(){
    sessionStorage.setItem("rows", 1);
    let user=JSON.parse(sessionStorage.getItem("User"));
    user.score=0;
    sessionStorage.setItem("User", user);
    document.location.reload();
}

function leaderboard(){
    window.location.replace("./leaderboard.html");
}