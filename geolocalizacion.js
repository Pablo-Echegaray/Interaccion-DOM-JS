const d = document,
  n = navigator;
export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const success = (position) => {
    let coords = position.coords;
    console.log(position);

    $id.innerHTML = ` <p>Tu posición actual es:</p>
    <ul>
       <li>Latitud: <b>${coords.latitude}</b></li>
       <li>Longitud: <b>${coords.longitude}</b></li>
       <li>Precisión: <b>${coords.accuracy}</b> metros</li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude}, ${coords.longitude}, 20z" target="_blank" rel="noopener"> Ver en Google Maps </a>
    `;
  };

  const error = (err) => {
    $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
    console.log(`Error ${err.code}: ${err.message}`);
  };

  n.geolocation.getCurrentPosition(success, error, options);
}

//enableHighAccuracy: true -> Le indicamos al dispositivo que haga el mejor esfuerzo posible para obtener la ubicacion. De esta manera aceleramos el hardware apra que trabaje al 100%.

//timeout -> el tiempo de espera permitido para encontrar la ubicacion.

//maximumAge -> para que no se guarde en catche las lecturas, para que cada vez que tome una lectura no tome como referencia la anterior

//watchPosition -> nos permite ver cualquier cambio que haya sucedido en la posicion en tiempo real.

//clase 95 terminada
