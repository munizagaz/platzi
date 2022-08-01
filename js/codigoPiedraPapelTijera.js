function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
      resultado = "Piedra 🥌"
    } else if (jugada == 2) {
      resultado = "Papel 📃"
    } else if (jugada == 3) {
      resultado = "Tijera ✂️"
    } else {
      resultado = "MAL ELEGIDO"
    }
    return resultado
}

  // 1 es piedra, 2 es papel, 3 es tijera
  let jugador = 0
  let pc = 0
  let triunfos = 0
  let perdidas = 0
  
  while (triunfos < 3 && perdidas < 3) {
    
    jugador = prompt("Escribe: \n1 para PIEDRA 🥌 \n2 para PAPEL 📃 \n3 para TIJERA ✂")
    pc = aleatorio(1,3)

    alert("La PC elige " + eleccion(pc))
    alert("Tú eliges " + eleccion(jugador))
    
    // COMBATE
    if (pc == jugador) {
      alert("EMPATE 😒")
    } else if (jugador == 1 && pc == 3) {
      alert("GANASTE 😄")
      triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1) {
      alert("GANASTE 😄")
      triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
      alert("GANASTE 😄")
      triunfos = triunfos + 1
    } else {
      alert("PERDISTE 😝")
      perdidas = perdidas + 1
    }
  }
  
  alert("Ganaste " + triunfos + " veces. \nPerdiste " + perdidas + " veces.")