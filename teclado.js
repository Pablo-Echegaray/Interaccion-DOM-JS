const d = document;
//la deteccion de los eventos del teclado debe asignarse al nodo raiz, en este caso el document.
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage);
  const limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  /* console.log(e.keyCode);
  console.log(e.key);
  console.log(limitsBall, limitsStage); */

  //const move = (direction) => {};
  //las felchas up & down nos mueven la barra de scroll por default. Si aplicamos un preventDefault() fuera ddel switch estaremos evitando el comportamiento de todas las teclas por lo que nada funcionaria. Entonces debemos hacerlo caso por caso.
  switch (e.keyCode) {
    case 37:
      //e.preventDefault();//de esta manera el scroll no funcionara en ninguna ocasión
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault(); //aplicandolo aquí, el scroll volvera a funcionar cuando la pelotita llegue a coliconar con el otro elemento
        x--;
      } //mientras el limite izquierdo de la pelotita sea mayor al limite izquierdo del contenedor, decrementa x.
      break;
    case 38:
      //e.preventDefault();
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      // e.preventDefault();
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      //e.preventDefault();
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
  /* console.log(e.type);
  console.log(e.key);
  console.log(e.keyCode); //el codigo numerico que se le da a cada letra y boton del teclado
  console.log(`Tecla control: ${e.ctrlKey}`); //boolean
  console.log(`Tecla alt: ${e.altKey}`); //boolean
  console.log(`Tecla shift: ${e.shiftKey}`); //boolean
  console.log(e); */

  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado");
  }

  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmacion con el teclado");
  }

  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado un aviso con el teclado");
  }
}
//estos atajos de teclado se llaman shortcuts

//colisiones: detectar  cuando un objeto choca con otro.

//¿Cómo podriamos hacer coliciones en JavaScript? Todos los elementos del DOM tienen un metodo que se llama getBounding ClientRect() que lo que nos da es un objeto con la anchura la altura, la posición en X la posición en Y, y que tan alejado esta de los márgenes top right bottom y left. Con ello lograremos limitar el movimiento de la pelota.

// en el plano cartesiano la ordenada Y contiene valores positivos hacia arriba y negativos hacia abajo. Pero en la web es al reves, los valores negativos son hacia arriba y los positivos hacia abajo.

//Quizas la pelotita se salga un poco del plano a pesar de las coliciones, esto es porque el objeto getBounding ClientRect() maneja valores con decimales de top-right-bottom-left. En caso de ser muy meticulosos pudieramos redondear estos valores con el objeto Math().
