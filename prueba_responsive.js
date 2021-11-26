const d = document;

export default function responsiveTester(form) {
  const $form = d.getElementById(form);
  let tester;
  //abrir ventana
  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      //alert("Formulario enviado");
      tester = window.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
      );
    }
  });
  //cerrar ventana
  d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) tester.close();
  });
}
//para trabajar con los metodos window opener y window close, lo correcto es almacenar la referencia a la ventana que abrimos en una variable.
