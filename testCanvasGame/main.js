
let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")
canvas.width = window.innerWidth * .9
canvas.height = 487
// En lugar de pintar un rectangulo rosa, seteo el background del canvas con el color
// para consumir menos recursos.
canvas.style.background = "pink"


// Le cambié el nombre a algunas propiedades para MI comodidad, no porque estuvieran mal.
// Agregué el parámetro "color" para debuggear mejor cuál pared estaba tocando. Pueden sacarlo.
function Rectangulo(positionX, positionY, ancho, alto, color) {
    this.x = positionX;
    this.y = positionY;
    this.width = ancho;
    this.height = alto;
    this.color = color || "black";

    this.dibujar = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

let girl = new Image()
girl.src = "hero.png"

// Convertí al héroe en una clase para poder darle métodos.
class Hero {
    constructor() {
        // Propiedades.
        this.src = girl;
        this.frame = 0;
        this.x = 50;
        this.y = 50;
        this.width = 64;
        this.height = 64;
        this.collide = false;

        // Métodos.
        this.draw = function(){
            ctx.drawImage(this.src, this.frame * 256, 0, 256, 256, this.x, this.y, this.width, this.height)
        }
        this.checkCollision = function (wall) {
            // Defino los bordes del héroe.
            this.top = this.y;
            this.bottom = this.y + this.height;
            this.left = this.x;
            this.right = this.x + this.width;

            // Defino los bordes de la pared.
            const wallTop = wall.y;
            const wallBottom = wall.y + wall.height;
            const wallLeft = wall.x;
            const wallRight = wall.x + wall.width;

            // Compruebo si los bordes chocan.
            if (
                this.left < wallRight &&
                this.right > wallLeft &&
                this.top < wallBottom &&
                this.bottom > wallTop

            ) {
                this.collide = true;
            }

        }
    }
}
// Genero un array vacío y voy pusheando paredes nuevas.
let paredes = []
paredes.push(new Rectangulo(100, 300, 100, 10, "red"))
paredes.push(new Rectangulo(300, 50, 20, 150, "blue"))
paredes.push(new Rectangulo(600, 150, 20, 150))
paredes.push(new Rectangulo(500, 300, 100, 10))


// Instancio al héroe.
let heroe = new Hero();

function dibujoCanvas() {
    // En cada ciclo: borro todo el canvas, dibujo al héroe, aumento el frame para animarlo y evito que pase del sexto,
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    heroe.draw()
    heroe.frame++
    heroe.frame >= 6 ? heroe.frame = 0 : null;
    // luego por cada pared del array, la dibujo y le pregunto al héroe si la chocó.
    paredes.forEach(pared => {
        pared.dibujar()
        heroe.checkCollision(pared)
    })
}
// Reitero la función "dibujoCanvas" 8 veces por segundo.
setInterval(dibujoCanvas, 1000 / 8)


// En todo el documento escucho los eventos de teclado.
document.addEventListener("keydown", (e) => {
    e.preventDefault();
    

    // En lugar de utilizar la propiedad "keyCode" que está quedando obsoleta, utilizo "key"
    // https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent/key .
    // Al presionar una de las teclas, si el héroe NO está chocando con una pared, se va a mover en esa dirección 3px.
    // En caso de estar tocando una pared, rebotará 15px en sentido contrario.
    // La cantidad de píxeles de rebote es un número "mágico", inventado... no es lo ideal. Les dejo la tarea de mejorar esa parte.
    // También habría que evitar que cambie la dirección del movimiento en el eje secundario. Es decir:
    // si toco el lado izquierdo de una pared, así como está el código, al presionar la tecla ABAJO va a ir para arriba.
    // Con tiempo se puede corregir. 
    switch (e.key) {
        // Arriba
        case "ArrowUp":
        case "w":
        case "W":
            if (!heroe.collide) {
                heroe.y -= 3;
            } else {
                heroe.y += 15;
                heroe.collide = false;
            }
            break;

        // Abajo
        case "ArrowDown":
        case "s":
        case "S":
            if (!heroe.collide) {
                heroe.y += 3;
            } else {
                heroe.y -= 15;
                heroe.collide = false;

            }
            break;

        // Izquierda
        case "ArrowLeft":
        case "a":
        case "A":
            if (!heroe.collide) {
                heroe.x -= 3;
            } else {
                heroe.x += 15;
                heroe.collide = false;
            }
            break;

        // Derecha
        case "ArrowRight":
        case "d":
        case "D":
            if (!heroe.collide) {
                heroe.x += 3;
            } else {
                heroe.x -= 15;
                heroe.collide = false;
            }
            break;

        default:
            break;
    }
})

