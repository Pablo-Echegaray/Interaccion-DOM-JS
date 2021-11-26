import hamburgerMenue from "./hamburgerMenue.js";
//en vanilla JS debemos indicar la extension del documento en el import
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulario.js";
import speechReader from "./narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenue(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  /* countdown("countdown", "Jul 01, 2021 10:00:00", "Feliz Cumpleaños a mi"); */
  scrollTopButton(".scroll-top-btn");
  //aca estaba darkTheme()
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/1hcwpD4akZAFXXma6" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13104.818590797397!2d-58.50700193314208!3d-34.80079287401053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd04f67eac1f7%3A0xad5a22c11051585f!2sBosques%20De%20Ezeiza.!5e0!3m2!1ses-419!2sar!4v1612157717686!5m2!1ses-419!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

//Eventos de teclado: keyup: cuando soltamos la tecla - keydown: cuando la presionamos - keypress: mientras la presionamos
d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
//la sacamos fuera del evento para poder llamar a DOMContentLoaded internamente y de esta manera consultar el localStorage ni bien es cargado el arbol del DOM para que persista el tema oscuro.
darkTheme(".dark-theme-btn", "dark-mode");

networkStatus();
speechReader();

//Aquellas funciones que utilicen el DOMContentLoaded de manera interna no pueden estar insertas dentro del DOMContentLoaded del index.js, deben ejecutarse fuera de dicho evento. Como lo es el caso de darkTheme() y networkStatus()
