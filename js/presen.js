const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

canvas.style.background = "#A03D1D"
ctx.strokeStyle = "#351F11";
ctx.fillStyle = "#590D09";


//zigzag
ctx.beginPath();
ctx.lineWidth = 13;
ctx.moveTo(0,107.5);
ctx.lineTo(70,152.5);
ctx.lineTo(140,107.5);
ctx.lineTo(210,152.5);
ctx.lineTo(280,107.5);
ctx.lineTo(350,152.5);
ctx.lineTo(420,107.5);
ctx.lineTo(490,152.5);
ctx.lineTo(560,107.5);
ctx.lineTo(630,152.5);
ctx.lineTo(700,107.5);
ctx.lineTo(770,152.5);
ctx.lineTo(840,107.5);
ctx.lineTo(910,152.5);
ctx.lineTo(980,107.5);
ctx.lineTo(1050,152.5);
ctx.stroke();


//lineas verticales
function fistLine(x,y){
  var x 
  var y 
  for (x =0; x<1050; x+=140){
ctx.beginPath();
ctx.moveTo(70+x,y+65);
ctx.lineTo(70+x,y)
ctx.stroke();
}
}

function secondLine(x,y){
  var x 
  var y 
  for (x =0; x<1050; x+=140){
ctx.beginPath();
ctx.moveTo(x,y+65);
ctx.lineTo(x,y)
ctx.stroke();
}
}

fistLine(1,-30)
secondLine(140,42.5)

function hexagonoA (x,y){
  for(x =0; x<1050; x+=140){
ctx.beginPath();
ctx.lineWidth = 20;
ctx.moveTo(x+0,y+42.5);
ctx.lineTo(x+35,y+62.5);
ctx.lineTo(x+35,y+92.5);
ctx.lineTo(x+0,y+112.5);
ctx.lineTo(x-35,y+92.5);
ctx.lineTo(x-35,y+62.5);
ctx.closePath();
ctx.stroke();
ctx.fill();
  }
}

hexagonoA(0,-70)

function hexagonoB (x,y){
  for(x =0; x<1050; x+=140){
ctx.beginPath();
ctx.lineWidth = 20;
ctx.moveTo(x+70,y+42.5);
ctx.lineTo(x+105,y+62.5);
ctx.lineTo(x+105,y+92.5);
ctx.lineTo(x+70,y+112.5);
ctx.lineTo(x+35,y+92.5);
ctx.lineTo(x+35,y+62.5);
ctx.closePath();
ctx.stroke();
ctx.fill();
  }
}

hexagonoB(0,0)

//Segunda linea
hexagonoA(0,105)
secondLine(140,220)
fistLine(1,150)
hexagonoB(0,175)
//zigzag
ctx.beginPath();
ctx.lineWidth = 13;
ctx.moveTo(0,280);
ctx.lineTo(70,325);
ctx.lineTo(140,280);
ctx.lineTo(210,325);
ctx.lineTo(280,280);
ctx.lineTo(350,325);
ctx.lineTo(420,280);
ctx.lineTo(490,325);
ctx.lineTo(560,280);
ctx.lineTo(630,325);
ctx.lineTo(700,280);
ctx.lineTo(770,325);
ctx.lineTo(840,280);
ctx.lineTo(910,325);
ctx.lineTo(980,280);
ctx.lineTo(1050,325);
ctx.stroke();

//Tercera linea
hexagonoA(0,275)
secondLine(140,390)
fistLine(1,327)
hexagonoB(0,350)
//zigzag
ctx.beginPath();
ctx.lineWidth = 13;
ctx.moveTo(0,455);
ctx.lineTo(70,500);
ctx.lineTo(140,455);
ctx.lineTo(210,500);
ctx.lineTo(280,455);
ctx.lineTo(350,500);
ctx.lineTo(420,455);
ctx.lineTo(490,500);
ctx.lineTo(560,455);
ctx.lineTo(630,500);
ctx.lineTo(700,455);
ctx.lineTo(770,500);
ctx.lineTo(840,455);
ctx.lineTo(910,500);
ctx.lineTo(980,455);
ctx.lineTo(1050,500);
ctx.stroke();

hexagonoA(0,450)
ctx.font ="100px Monospace "
ctx.fillStyle="white";
ctx.fillText("THE SHINING",150,250);

