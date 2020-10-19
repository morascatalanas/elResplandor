let miPersonaje
const anchoPared=5;
const largoPared=50;
function startGame() {
    miAreaDejuego.start();
     // ancho, alto, color, x, y, vertical
    miPersonaje= new component(20,20,"red",0,0,false);
    misParedes=[
        new component(largoPared,anchoPared,"black",30,30,false),
        new component(anchoPared,largoPared,"black",30,30,true)
    ]
  }
  
  var miAreaDejuego = {
    canvas : document.getElementById('canvas'),
    start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      this.interval = setInterval(updateGameArea, 20);
      window.addEventListener('keydown', function (e) {
        miAreaDejuego.key = e.keyCode;
      })
      window.addEventListener('keyup', function (e) {
        miAreaDejuego.key = false;
      })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
  }
// CONSTRUCTOR QUE DIBUJA LOS COMPONENTE DEL JUEGO
  function component(ancho, alto, color, x, y,vertical) {
    this.ancho = ancho;
    this.alto = alto;
    this.x = x;
    this.y = y;
    this.vertical=vertical;
    this.speedX=0;
    this.speedY=0;
    this.update= function(){
     ctx = miAreaDejuego.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    },
    this.nuevaPosicion=function () {
        this.x+=this.speedX;
        this.y+=this.speedY;
    },
    this.colision=function (obj) {
        // MI PERSONAJE
        let miDrc=this.x + (this.ancho);
        let miIzq=this.x;
        let miTop=this.y;
        let miBase=this.y + (this.alto);

        // PAREDES

        let paredDrc= obj.x + (obj.ancho);
        let paredIzq= obj.x;
        let paredTop= obj.y;
        let paredBase=obj.y + (obj.alto);
        let vertical= obj.vertical;

        let colision

        if (vertical) {
            // <>
            
            if (miTop > paredBase || miBase < paredTop ) {
                colision=false
            } else if(miDrc ==  paredIzq || miBase < paredTop ||  miIzq==paredDrc){
             colision=true
               
            }
        }else{
            if ( miTop > paredBase|| miBase < paredTop ) {
                colision=false
            } else if(miDrc == paredIzq || miBase > paredTop ) {
                colision=true
            }
        }
        return colision
    }
    
  }

  function updateGameArea() {
    miAreaDejuego.clear();
   miPersonaje.speedX = 0;
    miPersonaje.speedY = 0;
    if (miAreaDejuego.key && miAreaDejuego.key == 37){
      if (miPersonaje.colision(misParedes[1])) {
        miPersonaje.x+=miPersonaje.speedX
      } else {
        miPersonaje.speedX = -1;  
        
      }
      }
    if (miAreaDejuego.key && miAreaDejuego.key == 39) {
      if (miPersonaje.colision(misParedes[1])) {
        miPersonaje.x-=miPersonaje.speedX
      } else {
      miPersonaje.speedX = 1; 
        
      }  
    }
    if (miAreaDejuego.key && miAreaDejuego.key == 38) {
      miPersonaje.speedY = -1;
     }
    if (miAreaDejuego.key && miAreaDejuego.key == 40) {
      miPersonaje.speedY = 1; 
     }

    miPersonaje.nuevaPosicion()
    miPersonaje.update();
    miPersonaje.colision(misParedes[1])
    for (let i = 0; i < misParedes.length; i++) {
        misParedes[i].update()    
  
        
    }
    
  }