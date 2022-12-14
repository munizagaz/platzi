function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
      resultado = "Piedra π₯"
    } else if (jugada == 2) {
      resultado = "Papel π"
    } else if (jugada == 3) {
      resultado = "Tijera βοΈ"
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
    
    jugador = prompt("Escribe: \n1 para PIEDRA π₯ \n2 para PAPEL π \n3 para TIJERA β")
    pc = aleatorio(1,3)

    alert("La PC elige " + eleccion(pc))
    alert("TΓΊ eliges " + eleccion(jugador))
    
    // COMBATE
    if (pc == jugador) {
      alert("EMPATE π")
    } else if (jugador == 1 && pc == 3) {
      alert("GANASTE π")
      triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1) {
      alert("GANASTE π")
      triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
      alert("GANASTE π")
      triunfos = triunfos + 1
    } else {
      alert("PERDISTE π")
      perdidas = perdidas + 1
    }
  }
  
  alert("Ganaste " + triunfos + " veces. \nPerdiste " + perdidas + " veces.")