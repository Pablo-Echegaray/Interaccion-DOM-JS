export default function hamburgerMenue(panelBtn, panel, menuLink) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}
//.panel-btn * : es un selector css con el cual le indicamos que todo aquello que se encuentre dentro del elemento con clase panel-btn tambien reciba las aplicaciones realizadas sobre el boton..

//de esta manera obtenemos un codigo muy limpio y reutilizable. Aplicamos los eventos no directamente a los elementos, sino que utilizamos la delegacion de eventos aplicandolos al document.

//matches() recibe un selector valido de css

//a panelBtn le agregamos la clase is-active tambien dado que la documentacion de hamburger nos dice que si queremos la animacion del boton, el boton debe tener dicha clase.

//La ventaja de modularizar es la reutilizacion de codigo
