let canvas = document.querySelector("#canvas")
canvas.width= 1023
canvas.height= 470
let ctx = canvas.getContext("2d")
let altoCelda = 47
let anchoCelda=73

function Laberinto (cordX1,cordY1,cordX2,cordY2){
  this.cordX1=cordX1
  this.cordY1= cordY1
  this.cordX2 = cordX2
  this.cordY2=cordY2
  this.func = function(){
            // ctx.fillRect(this.cordX1,this.cordY1,this.cordX1,this.cordX2)
            ctx.moveTo(this.cordX1,this.cordY1)
            ctx.lineTo(this.cordX2,this.cordY2)
            ctx.strokeStyle="black"
            ctx.lineWidth=5
            ctx.stroke() 
          }

  this.colision= function(){
   
    let pLeft = this.cordX1
    let pRight = this.cordX1 + 5
    let pTop = this.cordY1
    let pBottom = this.cordY1+5
    if ((indiceX+daniX>pLeft)||(indiceX<pRight)||indiceY+daniX>pTop||indiceY<pBottom){
          colision=1
      
  }else{
     colision=0
  }
}}
let pared1 = new Laberinto (0,altoCelda,anchoCelda,altoCelda)
let pared2 = new Laberinto(anchoCelda,altoCelda*2,anchoCelda*2,altoCelda*2)
let pared3 = new Laberinto(anchoCelda,altoCelda*2,anchoCelda,altoCelda*4)
let pared4 = new Laberinto(anchoCelda,altoCelda*4,anchoCelda*3,altoCelda*4)
let pared5 = new Laberinto(anchoCelda*3,altoCelda*2,anchoCelda*3,altoCelda*4)
let pared6 = new Laberinto(anchoCelda*2,altoCelda,anchoCelda*2,altoCelda*3)
let pared7 = new Laberinto(anchoCelda*2,altoCelda,anchoCelda*5,altoCelda)
let pared8 = new Laberinto(0,(altoCelda*6)+36.3,anchoCelda,(altoCelda*6)+36.3)
let pared9 = new Laberinto(anchoCelda,altoCelda*5,anchoCelda*5,altoCelda*5)
let pared10 = new Laberinto(anchoCelda,altoCelda*5,anchoCelda,altoCelda*8)
let pared11 = new Laberinto(anchoCelda*2,altoCelda*10,anchoCelda*2,altoCelda*6)
let pared12 = new Laberinto(anchoCelda*2,altoCelda*6,anchoCelda*3,altoCelda*6)
let pared13 = new Laberinto(anchoCelda*3,altoCelda*6,anchoCelda*3,altoCelda*8)
let pared14 = new Laberinto(anchoCelda*3,altoCelda*8,anchoCelda*7,altoCelda*8)
let pared15 = new Laberinto(anchoCelda*7,altoCelda*8,anchoCelda*7,altoCelda*7)
let pared16 = new Laberinto(anchoCelda*7,altoCelda*7,anchoCelda*4,altoCelda*7)
let pared17 = new Laberinto(anchoCelda*4,altoCelda*7,anchoCelda*4,altoCelda*6)
let pared18 = new Laberinto(anchoCelda*5,altoCelda*2,anchoCelda*4,altoCelda*2)
let pared19 = new Laberinto(anchoCelda*4,altoCelda*2,anchoCelda*4,altoCelda*4)
let pared20 = new Laberinto(anchoCelda*4,altoCelda*3,anchoCelda*6,altoCelda*3)
let pared21 = new Laberinto(anchoCelda*6,altoCelda*3,anchoCelda*6,altoCelda*4)
let pared22 = new Laberinto(anchoCelda*7,0,anchoCelda*7,altoCelda*3)
let pared23 = new Laberinto(anchoCelda*7,altoCelda*2,anchoCelda*8,altoCelda*2)
let pared24 = new Laberinto(anchoCelda*8,altoCelda*2,anchoCelda*8,altoCelda*4)
let pared25 = new Laberinto(anchoCelda*8,altoCelda*4,anchoCelda*10,altoCelda*4)
let pared26 = new Laberinto(anchoCelda*9,altoCelda*4,anchoCelda*9,altoCelda*5)
let pared27 = new Laberinto(anchoCelda*8,altoCelda*7,anchoCelda*8,altoCelda*10)
let pared28 = new Laberinto(anchoCelda*8,altoCelda*7,anchoCelda*10,altoCelda*7)
let pared29 = new Laberinto(anchoCelda*10,altoCelda*7,anchoCelda*10,altoCelda*6)
let pared30 = new Laberinto(anchoCelda*8,altoCelda*6,anchoCelda*12,altoCelda*6)
let pared31 = new Laberinto(anchoCelda*12,altoCelda*6,anchoCelda*12,altoCelda*3)
let pared32 = new Laberinto(anchoCelda*12,altoCelda*3,anchoCelda*9,altoCelda*3)
let pared33 = new Laberinto(anchoCelda*9,altoCelda*2,anchoCelda*9,altoCelda*3)
let pared34 = new Laberinto(anchoCelda*9,altoCelda*2,anchoCelda*12,altoCelda*2)
let pared35 = new Laberinto(anchoCelda*9,altoCelda*2,anchoCelda*9,altoCelda*1)
let pared36 = new Laberinto(anchoCelda*13,0,anchoCelda*13,altoCelda*8)
let pared37 = new Laberinto(anchoCelda*13,altoCelda*8,anchoCelda*9,altoCelda*8)
let pared38 = new Laberinto(anchoCelda*10,altoCelda*12,anchoCelda*10,altoCelda*9)
let pared39 = new Laberinto(anchoCelda*10,altoCelda*12,anchoCelda*10,altoCelda*9)

let paredes = [pared1,pared2,pared3,pared4,pared5,pared6,pared7,pared8,pared9,pared10,
  pared11,pared12,pared13,pared14,pared15,pared16,
  pared17,pared18,pared19,pared20,pared21,pared22,
  pared23,pared24,pared25,pared26,pared27,pared28,
  pared29,pared30,pared31,pared32, pared33,pared34,
  pared35,pared36,pared37,pared38,pared39]
  let sprite = new Image()
  sprite.src="img/nn-run.png"
  let indiceX=0,indiceY=0;
  let daniX=0, daniY=70;
  let ancho1=64,alto1=64;
  let teclap=0;
  let colision=0

//PERSONAJES

function Personaje(src,ubicacionX,ubicacionY,recorteX,recorteY,positionX,positionY){
  this.source = src,
  this.ubicacionX = ubicacionX,
  this.ubicacionY=ubicacionY
  this.recorteX= recorteX,
  this.recorteY = recorteY
  this.positionX = positionX
  this.positionY=positionY
}
let objeto1 = new Personaje("img/llave.png",0,0,800,800,400,0)
let llave = new Image()
llave.src=objeto1.source
function dibujar(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  paredes.forEach(function(e){ e.func();
    e.colision()
  
  })
  // ctx.drawImage(sprite,indiceX*32,indiceY*32,32,32,ashX,ashY,64,64)

  ctx.drawImage(sprite,indiceX*142,indiceY*142,142,198,daniX,daniY,64,64)
  indiceX= indiceX+1;
  if(indiceX>4){
    indiceX=0;}
    ctx.drawImage(llave,objeto1.ubicacionX,objeto1.ubicacionY,objeto1.recorteX,objeto1.recorteY,objeto1.positionX,objeto1.positionY,64,64)
      
    }
    setInterval(dibujar,30) 

    document.onkeydown=function(event){
      if(event ==null){//Por si el navegador no reconoce el evento
        teclap=window.event.keyCode
      }
      else{
        teclap= event.keyCode
      }
      switch(teclap){
        case 40: // Tecla abajo
      //  colision==2?ashY = ashY-10:
      daniY = daniY+10;
      // indiceY=0
      break
      case 37: // Tecla izquierda
      // colision==1? ashX = ashX+10:
      daniX = daniX-10;
      // indiceY= 1
    break
    case 38: // Tecla arriba
    // colision==2?ashY = ashY+10:
    daniY = daniY-10;
    // indiceY=2
    break
    case 39: // Tecla derecha
    // colision==1? ashX=ashX-10: 
    daniX = daniX+10;
    // indiceY=3
    break
    default:
      break
      }}
// for (let i = 0; i < ancho.length; i++) {
//   if ((indiceX+ashX>ancho[i])&(indiceX<ancho[i]+5)){
//     colision=1
//   }
  
// }
// for (let i = 0; i < alto.length; i++) {
//   if ((indiceY+ashX>alto[i])&(indiceY<alto[i]+5)){
//     colision=2
//   


// ctx.fillStyle="blue"
// ctx.fillRect(10,40,50,50)


// let altoCelda = 47
// let anchoCelda=73
// let restoAncho = 36.3
// let altoPantalla=470
// let anchoPantalla=1023

// let sprite = new Image()
// sprite.src="img/ash.png"
// let indiceX=0,indiceY=0;
// let ashX=0, ashY=0;
// let ancho1=64,alto1=64;
// let teclap=0;
// let colision=0
// //VARIABLES QUE PODRIAN AYUDARNOS A HACER LAS COLISIONES
// let anchoCelda1=anchoCelda
// let anchoCelda2=anchoCelda*2
// let anchoCelda3=anchoCelda*3
// let anchoCelda4=anchoCelda*4
// let anchoCelda5=anchoCelda*5
// let anchoCelda6=anchoCelda*6
// let anchoCelda7=anchoCelda*7
// let anchoCelda8=anchoCelda*8
// let anchoCelda9=anchoCelda*9
// let anchoCelda10=anchoCelda*10
// let anchoCelda11=anchoCelda*11
// let anchoCelda12=anchoCelda*12
// let anchoCelda13=anchoCelda*13
// let altoCelda1=altoCelda
// let altoCelda2=altoCelda*2
// let altoCelda3=altoCelda*3
// let altoCelda4=altoCelda*4
// let altoCelda5=altoCelda*5
// let altoCelda6=altoCelda*6
// let altoCelda7=altoCelda*7
// let altoCelda8=altoCelda*8
// let altoCelda9=altoCelda*9
// let altoCelda10=altoCelda*10
// let altoCelda11=altoCelda*11
// let altoCelda12=altoCelda*12
// //ARRAYS QUE CONTIENEN LOS ANCHOS Y ALTOS DE LAS LINEAS
// let ancho=[anchoCelda1,anchoCelda2,anchoCelda3,anchoCelda4,anchoCelda5,anchoCelda6,anchoCelda7,anchoCelda8,anchoCelda9,anchoCelda10,anchoCelda11,anchoCelda12]
// let alto=[altoCelda1,
//    altoCelda2,
//    altoCelda3,
//    altoCelda4,
//    altoCelda5,
//    altoCelda6,
//    altoCelda7,
//    altoCelda8,
//    altoCelda9,
//    altoCelda10,
//    altoCelda11,
//    altoCelda12
// ]


// function dibujaCanvas(){
// let grd = ctx.createLinearGradient(0,0,0,470)
// grd.addColorStop(0,"#C0AE88")
// grd.addColorStop(1,"white")
// ctx.fillStyle = grd
// ctx.fillRect(0,0,1023,470)
// ctx.strokeStyle="#351F11"

//     ctx.moveTo(0,altoCelda)
//     ctx.lineTo(anchoCelda,altoCelda)
//     ctx.moveTo(anchoCelda,altoCelda*2)
//     ctx.lineTo(anchoCelda*2,altoCelda*2)
//     ctx.moveTo(anchoCelda,altoCelda*2)
//     ctx.lineTo(anchoCelda,altoCelda*4)
//     ctx.moveTo(anchoCelda,altoCelda*4)
//     ctx.lineTo(anchoCelda*3,altoCelda*4)
//     ctx.moveTo(anchoCelda*3,altoCelda*2)
//     ctx.lineTo(anchoCelda*3,altoCelda*4)
//     ctx.moveTo(anchoCelda*2,altoCelda)
//     ctx.lineTo(anchoCelda*2,altoCelda*3)
//     ctx.moveTo(anchoCelda*2,altoCelda)
//     ctx.lineTo(anchoCelda*5,altoCelda)
//     ctx.moveTo(0,(altoCelda*6)+36.3)
//     ctx.lineTo(anchoCelda,(altoCelda*6)+36.3)
//     ctx.moveTo(anchoCelda,altoCelda*5)
//     ctx.lineTo(anchoCelda*5,altoCelda*5)
//     ctx.moveTo(anchoCelda,altoCelda*5)
//     ctx.lineTo(anchoCelda,altoCelda*8)
//     ctx.moveTo(anchoCelda*2,altoCelda*10)
//     ctx.lineTo(anchoCelda*2,altoCelda*6)
//     ctx.moveTo(anchoCelda*2,altoCelda*6)
//     ctx.lineTo(anchoCelda*3,altoCelda*6)
//     ctx.moveTo(anchoCelda*3,altoCelda*6)
//     ctx.lineTo(anchoCelda*3,altoCelda*8)
//     //
//     ctx.moveTo(anchoCelda*3,altoCelda*8)
//     ctx.lineTo(anchoCelda*7,altoCelda*8)
//     ctx.moveTo(anchoCelda*7,altoCelda*8)
//     ctx.lineTo(anchoCelda*7,altoCelda*7)
//     ctx.moveTo(anchoCelda*7,altoCelda*7)
//     ctx.lineTo(anchoCelda*4,altoCelda*7)
//     ctx.moveTo(anchoCelda*4,altoCelda*7)
//     ctx.lineTo(anchoCelda*4,altoCelda*6)
//     ctx.moveTo(anchoCelda*5,altoCelda*2)
//     ctx.lineTo(anchoCelda*4,altoCelda*2)
//     ctx.moveTo(anchoCelda*4,altoCelda*2)
//     ctx.lineTo(anchoCelda*4,altoCelda*4)
//     ctx.moveTo(anchoCelda*4,altoCelda*3)
//     ctx.lineTo(anchoCelda*6,altoCelda*3)
//     ctx.moveTo(anchoCelda*6,altoCelda*3)
//     ctx.lineTo(anchoCelda*6,altoCelda*4)
//     ctx.moveTo(anchoCelda*7,0)
//     ctx.lineTo(anchoCelda*7,altoCelda*3)
//     ctx.moveTo(anchoCelda*7,altoCelda*2)
//     ctx.lineTo(anchoCelda*8,altoCelda*2)
//     ctx.moveTo(anchoCelda*8,altoCelda*2)
//     ctx.lineTo(anchoCelda*8,altoCelda*4)
//     ctx.moveTo(anchoCelda*8,altoCelda*4)
//     ctx.lineTo(anchoCelda*10,altoCelda*4)
//     ctx.moveTo(anchoCelda*9,altoCelda*4)
//     ctx.lineTo(anchoCelda*9,altoCelda*5)
//     ctx.moveTo(anchoCelda*8,altoCelda*7)
//     ctx.lineTo(anchoCelda*8,altoCelda*10)
//     ctx.moveTo(anchoCelda*8,altoCelda*7)
//     ctx.lineTo(anchoCelda*10,altoCelda*7)
//     ctx.moveTo(anchoCelda*10,altoCelda*7)
//     ctx.lineTo(anchoCelda*10,altoCelda*6)
//     ctx.moveTo(anchoCelda*8,altoCelda*6)
//     ctx.lineTo(anchoCelda*12,altoCelda*6)
//     ctx.moveTo(anchoCelda*12,altoCelda*6)
//     ctx.lineTo(anchoCelda*12,altoCelda*3)
//     ctx.moveTo(anchoCelda*12,altoCelda*3)
//     ctx.lineTo(anchoCelda*9,altoCelda*3)
//     ctx.moveTo(anchoCelda*9,altoCelda*2)
//     ctx.lineTo(anchoCelda*9,altoCelda*3)
//     ctx.moveTo(anchoCelda*9,altoCelda*2)
//     ctx.lineTo(anchoCelda*12,altoCelda*2)
//     ctx.moveTo(anchoCelda*9,altoCelda*2)
//     ctx.lineTo(anchoCelda*9,altoCelda*1)
//     ctx.moveTo(anchoCelda*13,0)
//     ctx.lineTo(anchoCelda*13,altoCelda*8)
//     ctx.moveTo(anchoCelda*13,altoCelda*8)
//     ctx.lineTo(anchoCelda*9,altoCelda*8)
//     ctx.moveTo(anchoCelda*10,altoCelda*12)
//     ctx.lineTo(anchoCelda*10,altoCelda*9)
//     ctx.moveTo(anchoCelda*10,altoCelda*9)
//     ctx.lineTo(anchoCelda*13,altoCelda*9)
//     ctx.lineWidth= 5
// ctx.stroke()
// //   ctx.drawImage(sprite,indiceX*32,indiceY*32,32,32,ashX,ashY,64,64)

// //   indiceX= indiceX+1;
// //   if(indiceX>4){
// //     indiceX=0;}
// //     colision=0
// // for (let i = 0; i < ancho.length; i++) {
// //   if ((indiceX+ashX>ancho[i])&(indiceX<ancho[i]+5)){
// //     colision=1
// //   }
  
// // }
// // for (let i = 0; i < alto.length; i++) {
// //   if ((indiceY+ashX>alto[i])&(indiceY<alto[i]+5)){
// //     colision=2
// //   }
  
// // }
// //  setTimeout("dibujaCanvas()",30)
  
// }


