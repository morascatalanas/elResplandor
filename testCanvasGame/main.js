
let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")
canvas.width=1023
canvas.height=487
let girl= new Image()
girl.src = "hero.png"
let puntoX=0
let puntoY=0
let ubicacionX=20
let ubicacionY=30
let ancho=64
let alto=64
let auxiliar = 0
let tecla=0
colision=0
let chocaron=false

function Rectangulo(positionX,positionY,ancho,alto){
        this.positionX=positionX
        this.positionY= positionY
        this.ancho = ancho
        this.alto=alto

            this.left=positionX
            this.right=positionX+ancho
            this.top=positionY
            this.bottom=positionY+alto
        
            this.colision=function (uX,w,uY,h) {
            if((this.left<(uX+w)& (this.right>uX)& (this.bottom>uY)&(this.top<(uY+h)))){
                chocaron=true
            }else{
                chocaron=false
            }   
            
            }
            this.dibujar=function(){
                ctx.fillStyle="blue"
                ctx.fillRect(this.positionX,this.positionY,this.ancho,this.alto)
             
            }
            
        
}
let pared = new Rectangulo(100,300,100,10)
let pared2=new Rectangulo(300,50,20,150)
let paredes= [pared2,pared]
function dibujoCanvas(){
     ctx.fillStyle="pink"
     ctx.fillRect(0,0,canvas.width,canvas.height)
     ctx.drawImage(girl,puntoX*256,puntoY,256,256,ubicacionX,ubicacionY,ancho,alto)
    // ctx.fillStyle="red"
    //  ctx.fillRect(100,100,200,50)
    paredes.forEach(p=>{
        p.dibujar()
        p.colision(ubicacionX,ancho,ubicacionY,alto)
        
    })
    // pared.dibujar()
    //  pared2.dibujar()
     puntoX=puntoX+1
    
     if(puntoX>6){
        puntoX=0
    }
    // for (let i = 0; i < paredes.length; i++) {
    //    if((paredes[i].left<(ubicacionX+ancho)&& (paredes[i].right>ubicacionX)&& (paredes[i].bottom>ubicacionY)&&(paredes[i].top<(ubicacionY+alto)))){
    //             chocan()
    //           }else{
    //            chocaron=false
    //           }
        
    // }
    //  paredes.forEach(function(e){
    //       if((e.left<(ubicacionX+ancho)&& (e.right>ubicacionX)&& (e.bottom>ubicacionY)&&(e.top<(ubicacionY+alto)))){
    //         chocan()
    //       }else{
    //        chocaron=false
    //       }
    //   })
    
    //  e.colision(ubicacionX,ancho,ubicacionY,alto))
    // ctx.fillStyle="blue"
    // ctx.fillRect(pared.positionX,pared.positionY,pared.ancho,pared.alto)
    
    // if((pared.left<(ubicacionX+ancho)& (pared.right>ubicacionX)& (pared.bottom>ubicacionY)&(pared.top<(ubicacionY+alto)))){
    //     colision=1
    // }else{
    //     colision=0
    // }
    // if(ubicacionY<5 || ubicacionX<5||ubicacionX+ancho>canvas.width|| ubicacionY+alto>canvas.height){
    //     colision=1
    // }else{
    //     colision=0
    // }
    
     setTimeout("dibujoCanvas()",1000/60)
}


function chocan(){
    console.log("chocann")
   
    chocaron=true
}
document.onkeydown=function(event){
    if(event==null){
        tecla = window.event.keyCode
    }else{
        tecla = event.keyCode
    

    }
    switch(tecla){
        case 40:
            if( chocaron==true ){
               
                ubicacionY-=10
                
            }else{
        ubicacionY= ubicacionY+10}
        break
        case 37:
            if(chocaron==true){
                ubicacionX+=10
            }else{
            ubicacionX=ubicacionX-10}
            break
        case 38:
        if(chocaron==true){
            ubicacionY+=10
        }else{
        ubicacionY= ubicacionY-10}

        break
        case 39:
            if(chocaron==true){
                ubicacionX-=10
            }else{
            ubicacionX=ubicacionX+10}
    }
}