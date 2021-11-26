const d = document,
  w = window;
//Vamos a estar usando el objeto matchMedia que cuelga de window.
//Parametros -> id : elemento al cual va a estar revisando --- mq : la media query valida en css en la cual definimos que pasaremos del enlace al contenido ya embebido --- mobileContent : el contenido html que queremos ver a nivel movil --- desktopContent : el contenido html que queremos que se caergue dinamicamente a nivel escritorio pc.
export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breakpoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    } //e.matches boolean -> cuando se cumpla la mediaquery devolvera true, de lo contrario false
    console.log(e.matches);
  };
  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint); //dado que el listener del breakpoint no se ejecuta a la carga de la pagina, sino que lo hace cuando detecta un cambio en el tamaaño de la ventana, ejecutamos la funcion responsive por fuera del listener.
}
//esto mismo podria hacerse con el evento resize, pero de esta manera seria mas adecuado, agregandole un listener al objeto matchMedia.

//De esta manera hacemos un responsive responmsable porque en version mobile no cargara el archivo embebido y le ahorrara datos al usuario.
