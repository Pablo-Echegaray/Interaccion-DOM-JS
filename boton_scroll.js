const d = document,
  w = window;
export default function scrollTopButton(btn) {
  const $scrollBtn = d.querySelector(btn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop; //si el browser no soporta el primer valor aplica el segundo

    if (scrollTop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }

    //console.log(w.pageYOffset, d.documentElement.scrollTop); //me devuelve la posicion del scroll en px
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}

//window.scrollTo({}) -> recibe un objeto como parametro donde le podemos indicar si queremos un efecto en el movimiento del scroll con la propiedad "behavior" y con la propiedad top a donde queremos que se ubique el scroll
