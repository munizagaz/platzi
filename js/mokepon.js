function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}
function seleccionarMascotaJugador (){

    let radioHipodoge = document.getElementById("hipodoge");
    let radioCapipepo = document.getElementById("capipepo");
    let radioRatigueya = document.getElementById("ratigueya");
    let radioLangostelvis = document.getElementById("langostelvis");
    let radioTucapalma = document.getElementById("tucapalma");
    let radioPydos = document.getElementById("pydos");

    let spanMascotaJugador = document.getElementById("mascota-jugador");
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
    let spanJugadorVidas = document.getElementById("jugador-vidas");
    let spanEnemigoVidas = document.getElementById("enemigo-vidas");

    if (radioHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge";
        //alert("Seleccionaste a Hipodoge");
    } else if (radioCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo";
        //alert("Seleccionaste a Capipepo");
    } else if (radioRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya";
        //alert("Seleccionaste a Ratigueya");
    } else if (radioLangostelvis.checked){
        spanMascotaJugador.innerHTML = "Langostelvis";
        //alert("Seleccionaste a Langostelvis");
    } else if (radioTucapalma.checked){
        spanMascotaJugador.innerHTML = "Tucapalma";
        //alert("Seleccionaste a Tucapalma");
    } else if (radioPydos.checked){
        spanMascotaJugador.innerHTML = "Pydos";
        //alert("Seleccionaste a Pydos");
    } else {
        alert("No seleccionaste ninguna mascota.");
    }
}

window.addEventListener("load", iniciarJuego);