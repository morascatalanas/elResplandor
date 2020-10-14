let canvas = document.querySelector("#canvas")
canvas.width= 1000
canvas.height= 470
let ctx = canvas.getContext("2d")
let grd = ctx.createLinearGradient(0,0,0,450)
grd.addColorStop(0,"#C0AE88")
grd.addColorStop(1,"white")
ctx.fillStyle = grd
ctx.fillRect(0,0,1000,450)
ctx.strokeStyle="#351F11"
let altoCelda = 47
let anchoCelda=70
let restoAncho = 36.3
let altoPantalla=470
let anchoPantalla=1000

 let anchoCelda1=70
 let anchoCelda2=anchoCelda*2
 let anchoCelda3=anchoCelda*3
 let anchoCelda4=anchoCelda*4
 let anchoCelda5=anchoCelda*5
 let anchoCelda6=anchoCelda*6
 let anchoCelda7=anchoCelda*7
 let anchoCelda8=anchoCelda*8
 let anchoCelda9=anchoCelda*9
 let anchoCelda10=anchoCelda*10
 let anchoCelda11=anchoCelda*11
 let anchoCelda12=anchoCelda*12
 let anchoCelda13=anchoCelda*13
 let altoCelda1=altocelda
 let altoCelda2=altocelda*2
 let altoCelda3=altocelda*3
 let altoCelda4=altocelda*4
 let altoCelda5=altocelda*5
 let altoCelda6=altocelda*6
 let altoCelda7=altocelda*7
 let altoCelda8=altocelda*8
 let altoCelda9=altocelda*9
 let altoCelda10=altocelda*10
 let altoCelda11=altocelda*11
 let altoCelda12=altocelda*12
 let ancho=[anchoCelda1,anchoCelda2,anchoCelda3,anchoCelda4,anchoCelda5,anchoCelda6,anchoCelda7,anchoCelda8,anchoCelda9,anchoCelda10,anchoCelda11,anchoCelda12]
 let alto=[altoCelda1,
    altoCelda2,
    altoCelda3,
    altoCelda4,
    altoCelda5,
    altoCelda6,
    altoCelda7,
    altoCelda8,
    altoCelda9,
    altoCelda10,
    altoCelda11,
    altoCelda12
]

//DIBUJO LABERINTO
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
// ctx.moveTo(0,150)
// ctx.lineTo(36,150)
// //
// ctx.moveTo(55,150)
// ctx.lineTo(55,75)
// //
// ctx.moveTo(55,75)
// ctx.lineTo(165,75)
// //
// ctx.moveTo(165,75)
// ctx.lineTo(165,210)
// ctx.lineWidth= 5
// ctx.stroke()

// ctx.beginPath()
// ctx.moveTo(0,300)
// ctx.lineTo(55,300)
// ctx.moveTo(55,300)
// ctx.lineTo(55,395)
// ctx.moveTo(110,355)
// ctx.lineTo(165,355)
// ctx.moveTo(110,355)
// ctx.lineTo(110,450)
// ctx.moveTo(110,355)
// ctx.lineTo(110,450)
// ctx.moveTo(220,410)
// ctx.lineTo(385,410)
// ctx.moveTo(385,355)
// ctx.lineTo(385,410)
// ctx.moveTo(450,470)
// ctx.lineTo(450,290)
// ctx.moveTo(450,290)
// ctx.lineTo(520,290)
// ctx.moveTo(520,290)
// ctx.lineTo(520,165)
// ctx.lineWidth= 5
// ctx.stroke()

// ctx.beginPath()
// ctx.moveTo(110,150)
// ctx.lineTo(110,300)
// ctx.moveTo(110,300)
// ctx.lineTo(330,300)
// ctx.moveTo(275,250)
// ctx.lineTo(275,300)
// ctx.moveTo(275,220)
// ctx.lineTo(450,220)
// ctx.moveTo(450,220)
// ctx.lineTo(450,165)
// ctx.moveTo(220,0)
// ctx.lineTo(220,55)
// ctx.moveTo(220,55)
// ctx.lineTo(330,55)
// ctx.moveTo(385,0)
// ctx.lineTo(385,110)
// ctx.moveTo(385,110)
// ctx.lineTo(220,110)
// ctx.moveTo(220,110)
// ctx.lineTo(220,165)
// ctx.moveTo(220,165)
// ctx.lineTo(450,165)
// ctx.moveTo(630,0)
// ctx.lineTo(630,55)
// ctx.moveTo(580,0)
// ctx.lineTo(580,220)
// ctx.moveTo(580,220)
// ctx.lineTo(690,220)
// ctx.moveTo(520,470)
// ctx.lineTo(520,390)
// ctx.lineWidth= 5
// ctx.stroke()