const d = document;

export default function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)), //obtengo el valor expresado en dias
      hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    $countdown.innerHTML = `<h3>Faltan ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
    console.log(countdownDate, now, limitTime);

    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    } //cuando el limite de tiempo llega a 0 se ejecuta el mensaje y se detiene el intervalo
  }, 1000);
}
//para hacer calculos con fechas es necesario pasar los datos a milisegundos con getTime()

//Math.floor() -> Si se pasa 45.95 a getFloor, éste devuelve 45; si se le pasa -45.95,  devuelve -46. Devuelve el valor entero redondeado más bajo

// % -> El operador modulo nos sirve para obtener el residuo de una division

//("0" +Math.floor(limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).slice(-2) -> Al momento que concatenamos el "0" delante de toda la expresion, nos convierte toda la expresion en un string. El cero lo concatenamos porque cuando los minutos sean de un solo digito justamente tendremos ese unico numero sin el cero delante. Entonces por eso concatenamos ese cero, pero al hacerlo, cuando tengamos un valor de los minutos de 2 digitos estos seran en realidad 3 digitos, ya que el cero estara presente tambien (minutos: 011). Para quitar el cero cuando la expresion es de 2 digitos utilizamos el metodo slice() de los arrays y strings que pasandole como valor un numero negativo empezara a contar de atras hacia adelante para eliminar el cero. Entonces pasandole como valor al slice(-2) cuando haya tres digitos eliminara el primero (que sera el cero) y cuando haya 2 digitos (09) no encontrara ningun elemento en esa posicion por lo que el cero permanecera. Es importante aplicar el slice() a toda la expersion dado que la expresion en su completud es un string, para ello debemos encerrarla en su totalidad entre parentesis y de esta forma podemos aplicar el metodo slice.
