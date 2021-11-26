const d = document,
  n = navigator,
  ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera()
        );
      },
    };

  $id.innerHTML = `
       <ul>
         <li>User Agent <b>${ua}</b></li>
         <li>Plataforma: <b>${
           isMobile.any() ? isMobile.any() : isDesktop.any()
         }</b></li>
         <li>Navegador: <b>${isBrowser.any()}</b></li>
       </ul>
    `;

  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p`;
  }

  if (isDesktop.linux()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p`;
  }

  if (isDesktop.mac()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para Mac OS</mark></p`;
  }

  if (isDesktop.windows()) {
    $id.innerHTML += `<p><mark>Descarga nuestro software para Windows</mark></p`;
  }

  /* Redirecciones
  if (isMobile.android()) {
    window.location.href = "https://www.unlam.edu.ar/";
  }
}*/

//userAgent = es una cadena de texto que nos da cierta informacion sobre el dispositivo y el navegador desde los cuales se esta visualizando el sitio web.

//En los años 2012/2013 comenzaba a acrecentarse la "moda" de generar sitios web que se adapten a dispositivos mobiles. Si bien ya por esos años los nuevos websites ya se creaban con un diseño base orientado a dispositivos mobiles, existían grandes sitios con buenas cantidades de informacion que debian ser adaptados. Esto ocasiono el surgimiento de una practica denominada "Adaptive designe", que en lineas generales consistia en generar varios fronts de manera que en base al dispositivo desde donde se este accediendo al dominio, este cambie o redireccione hacia un dominio con un diseño exclusivo, por ejemplo, para un dispositivo mobile. Con el tiempo estas practicas fueron quedando de lado ya que todos los grandes sitios migraron hacia un diseño directamente responsivo.

//regexp => la variable bandera "i" le indica al buscador de la expresion regular, que no distinga entre mayusculas y minusculas.

//obs studio software de grabacion

//Clase 92 finalizada
