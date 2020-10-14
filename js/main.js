let canvas = document.querySelector("#canvas")
canvas.width= 1023
canvas.height= 470
let ctx = canvas.getContext("2d")
let grd = ctx.createLinearGradient(0,0,0,450)


ctx.lineWidth= 5
ctx.stroke()
let teclap=0;
let sprite = new Image()
sprite.src="img/ash.png"
let indiceX=0,indiceY=0;
let ashX=0, ashY=0;
let ancho1=64,alto1=64;

function dibujaCanvas(){
let grd = ctx.createLinearGradient(0,0,0,470)
grd.addColorStop(0,"#C0AE88")
grd.addColorStop(1,"white")
ctx.fillStyle = grd
ctx.fillRect(0,0,1023,470)
ctx.strokeStyle="#351F11"
let altoCelda = 47
let anchoCelda=70
let restoAncho = 36.3
let altoPantalla=470
let anchoPantalla=1000
    ctx.moveTo(0,altoCelda)
    ctx.lineTo(anchoCelda,altoCelda)
    ctx.moveTo(anchoCelda,altoCelda*2)
    ctx.lineTo(anchoCelda*2,altoCelda*2)
    ctx.moveTo(anchoCelda,altoCelda*2)
    ctx.lineTo(anchoCelda,altoCelda*4)
    ctx.moveTo(anchoCelda,altoCelda*4)
    ctx.lineTo(anchoCelda*3,altoCelda*4)
    ctx.moveTo(anchoCelda*3,altoCelda*2)
    ctx.lineTo(anchoCelda*3,altoCelda*4)
    ctx.moveTo(anchoCelda*2,altoCelda)
    ctx.lineTo(anchoCelda*2,altoCelda*3)
    ctx.moveTo(anchoCelda*2,altoCelda)
    ctx.lineTo(anchoCelda*5,altoCelda)
    ctx.moveTo(0,(altoCelda*6)+36.3)
    ctx.lineTo(anchoCelda,(altoCelda*6)+36.3)
    ctx.moveTo(anchoCelda,altoCelda*5)
    ctx.lineTo(anchoCelda*5,altoCelda*5)
    ctx.moveTo(anchoCelda,altoCelda*5)
    ctx.lineTo(anchoCelda,altoCelda*8)
    ctx.moveTo(anchoCelda*2,altoCelda*10)
    ctx.lineTo(anchoCelda*2,altoCelda*6)
    ctx.moveTo(anchoCelda*2,altoCelda*6)
    ctx.lineTo(anchoCelda*3,altoCelda*6)
    ctx.moveTo(anchoCelda*3,altoCelda*6)
    ctx.lineTo(anchoCelda*3,altoCelda*8)
    //
    ctx.moveTo(anchoCelda*3,altoCelda*8)
    ctx.lineTo(anchoCelda*7,altoCelda*8)
    ctx.moveTo(anchoCelda*7,altoCelda*8)
    ctx.lineTo(anchoCelda*7,altoCelda*7)
    ctx.moveTo(anchoCelda*7,altoCelda*7)
    ctx.lineTo(anchoCelda*4,altoCelda*7)
    ctx.moveTo(anchoCelda*4,altoCelda*7)
    ctx.lineTo(anchoCelda*4,altoCelda*6)
    ctx.moveTo(anchoCelda*5,altoCelda*2)
    ctx.lineTo(anchoCelda*4,altoCelda*2)
    ctx.moveTo(anchoCelda*4,altoCelda*2)
    ctx.lineTo(anchoCelda*4,altoCelda*4)
    ctx.moveTo(anchoCelda*4,altoCelda*3)
    ctx.lineTo(anchoCelda*6,altoCelda*3)
    ctx.moveTo(anchoCelda*6,altoCelda*3)
    ctx.lineTo(anchoCelda*6,altoCelda*4)
    ctx.moveTo(anchoCelda*7,0)
    ctx.lineTo(anchoCelda*7,altoCelda*3)
    ctx.moveTo(anchoCelda*7,altoCelda*2)
    ctx.lineTo(anchoCelda*8,altoCelda*2)
    ctx.moveTo(anchoCelda*8,altoCelda*2)
    ctx.lineTo(anchoCelda*8,altoCelda*4)
    ctx.moveTo(anchoCelda*8,altoCelda*4)
    ctx.lineTo(anchoCelda*10,altoCelda*4)
    ctx.moveTo(anchoCelda*9,altoCelda*4)
    ctx.lineTo(anchoCelda*9,altoCelda*5)
    ctx.moveTo(anchoCelda*8,altoCelda*7)
    ctx.lineTo(anchoCelda*8,altoCelda*10)
    ctx.moveTo(anchoCelda*8,altoCelda*7)
    ctx.lineTo(anchoCelda*10,altoCelda*7)
    ctx.moveTo(anchoCelda*10,altoCelda*7)
    ctx.lineTo(anchoCelda*10,altoCelda*6)
    ctx.moveTo(anchoCelda*8,altoCelda*6)
    ctx.lineTo(anchoCelda*12,altoCelda*6)
    ctx.moveTo(anchoCelda*12,altoCelda*6)
    ctx.lineTo(anchoCelda*12,altoCelda*3)
    ctx.moveTo(anchoCelda*12,altoCelda*3)
    ctx.lineTo(anchoCelda*9,altoCelda*3)
    ctx.moveTo(anchoCelda*9,altoCelda*2)
    ctx.lineTo(anchoCelda*9,altoCelda*3)
    ctx.moveTo(anchoCelda*9,altoCelda*2)
    ctx.lineTo(anchoCelda*12,altoCelda*2)
    ctx.moveTo(anchoCelda*9,altoCelda*2)
    ctx.lineTo(anchoCelda*9,altoCelda*1)
    ctx.moveTo(anchoCelda*13,altoCelda*2)
    ctx.lineTo(anchoCelda*13,altoCelda*8)
    ctx.moveTo(anchoCelda*13,altoCelda*8)
    ctx.lineTo(anchoCelda*9,altoCelda*8)
    ctx.moveTo(anchoCelda*10,altoCelda*12)
    ctx.lineTo(anchoCelda*10,altoCelda*9)
    ctx.moveTo(anchoCelda*10,altoCelda*9)
    ctx.lineTo(anchoCelda*13,altoCelda*9)
    ctx.lineWidth= 5
ctx.stroke()
  ctx.drawImage(sprite,indiceX*32,indiceY*32,32,32,ashX,ashY,64,64)
 

  
// if((x2<(ashX+ancho1))){
//   colisiona=1
//    }

  indiceX= indiceX+1;
  if(indiceX>4){
    indiceX=0;}
 setTimeout("dibujaCanvas()",30)
  
}

document.onkeydown=function(event){
  if(event ==null){//Por si el navegador no reconoce el evento
    teclap=window.event.keyCode
  }
  else{
    teclap= event.keyCode
  }
  switch(teclap){
    case 40: // Tecla abajo
    ashY = ashY+10;indiceY=0
   
  break
  case 37: // Tecla izquierda
  ashX = ashX-10;
  indiceY= 1
break
case 38: // Tecla arriba
ashY = ashY-10;
indiceY=2
break
case 39: // Tecla derecha
// colisiona==1? ashX=ashX-10:
ashX = ashX+10;indiceY=3
break
default:
  break
  }}