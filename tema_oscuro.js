const d = document;
/* export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]"); //si le pasamos corchetes el lenguaje entiende que debe tomar todos los elementos que contengan el atributo descripto dentro de los corchetes

  console.log($selectors);

  let moon = "🌙",
    sun = "☀️";

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      //console.log($themeBtn.textContent);
      if ($themeBtn.textContent === moon) {
        $selectors.forEach((el) => el.classList.add(classDark));
        $themeBtn.textContent = sun;
      } else {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
      }
    }
  });
}
 */
//localStorage: nos permite almacenar informacion en el navegador del usuario de manera que aquello que pretendamos guardar, persista a la hora de recargar la pagina. En este caso vamos a guardar la persistencia del theme dark para que a la hora de recargar la pagina este se mantenga. El localStorage soporta hasta 5mb de informacion guardada en su interior.

//para poder consultar al LocalStorage si existe una variable que almacene esta informacion debemos llamar a DOMContentLoaded pero dado que la funcion darkTheme en index.js se esta ejecutando dentro del evento DOMContentLoaded, no podemos llamar a dicho evento dentro de dicho evento. Por lo tanto o debemod utilizar aqui window.load o directamente ir a index.js y sacar a darkTheme() del evento DOMContentLoaded y de esta manera podremos llamar a dicho evento desde el interior de nuestra funcions darkTheme().

//----------------------------------------------------------------------------------------------------

//refactorizamos el codigo de darkTheme() para poder aplicar la persistencia del tema oscuro al recargar la pagina almacenando informacion en el localStorage

const ls = localStorage;

export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  console.log($selectors);

  let moon = "🌙",
    sun = "☀️";

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");
  };

  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}

//getItem(): metodo para obtener una variable de tipo localStorage del localStorage.

//setItem(): metodo para establecer una variable de tipo localStorage.

//en la consola del desarrollador en la pestaña aplication se encuentra el localStorage. Este esta compuesto por "key" y "Value". En el metodo setItem("key", "value") el primer parametro corresponde al "Key" y el segundo al "Value".
