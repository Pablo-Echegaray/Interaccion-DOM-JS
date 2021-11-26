const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarm(sound, btnPlay, btnStop) {
  let alarmTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;
  //la etiqueta audio aparacera en pantalla si le añadimos el atributo controls
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmTempo = setTimeout(() => {
        $alarm.play(); //metodo de audio, inicia el audio
      }, 2000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo);
      $alarm.pause(); //pausa el audio
      $alarm.currentTime = 0; //vuelve al inicio el audio, dado que no existe el metodo stop

      d.querySelector(btnPlay).disabled = false;
    }
  });
}
