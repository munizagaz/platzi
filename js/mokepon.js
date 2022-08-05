let ataqueJugador = "";
let ataquePC = "";
let vidasJugador = 3;
let vidasPC = 3;
let resultado;

function iniciarJuego(){

    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    
    let btnFuego = document.getElementById("boton-fuego");
    btnFuego.addEventListener("click", ataqueFuego);
    let btnTierra = document.getElementById("boton-tierra");
    btnTierra.addEventListener("click", ataqueTierra);
    let btnAgua = document.getElementById("boton-agua");
    btnAgua.addEventListener("click", ataqueAgua);

    let seccionAtaques = document.getElementById("elije-ataque");
    seccionAtaques.style.display = "none";

    let seccionReiniciar = document.getElementById("reinciar");
    seccionReiniciar.style.display = "none"

    let btnReiniciar = document.getElementById("boton-reiniciar");
    btnReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador (){

    let radioHipodoge = document.getElementById("hipodoge");
    let radioCapipepo = document.getElementById("capipepo");
    let radioRatigueya = document.getElementById("ratigueya");
    let radioLangostelvis = document.getElementById("langostelvis");
    let radioTucapalma = document.getElementById("tucapalma");
    let radioPydos = document.getElementById("pydos");

    let spanMascotaJugador = document.getElementById("mascota-jugador");

    if (radioHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge";
        seleccionarMascotaPC()
        //alert("Seleccionaste a Hipodoge");
    } else if (radioCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo";
        seleccionarMascotaPC()
        //alert("Seleccionaste a Capipepo");
    } else if (radioRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya";
        seleccionarMascotaPC()
        //alert("Seleccionaste a Ratigueya");
    } else if (radioLangostelvis.checked){
        spanMascotaJugador.innerHTML = "Langostelvis";
        seleccionarMascotaPC()
        //alert("Seleccionaste a Langostelvis");
    } else if (radioTucapalma.checked){
        spanMascotaJugador.innerHTML = "Tucapalma";
        seleccionarMascotaPC()
        //alert("Seleccionaste a Tucapalma");
    } else if (radioPydos.checked){
        spanMascotaJugador.innerHTML = "Pydos";
        seleccionarMascotaPC()
        //alert("Seleccionaste a Pydos");
    } else {
        alert("No seleccionaste ninguna mascota.");
    }


}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function seleccionarMascotaPC (){
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
    //let spanEnemigoVidas = document.getElementById("enemigo-vidas");
    let mascotaPC = aleatorio(1, 6);

    if (mascotaPC == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge";
        //alert("Seleccionaste a Hipodoge");
    } else if (mascotaPC == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo";
        //alert("Seleccionaste a Capipepo");
    } else if (mascotaPC == 3){
        spanMascotaEnemigo.innerHTML = "Ratigueya";
        //alert("Seleccionaste a Ratigueya");
    } else if (mascotaPC == 4){
        spanMascotaEnemigo.innerHTML = "Langostelvis";
        //alert("Seleccionaste a Langostelvis");
    } else if (mascotaPC == 5){
        spanMascotaEnemigo.innerHTML = "Tucapalma";
        //alert("Seleccionaste a Tucapalma");
    } else {
        spanMascotaEnemigo.innerHTML = "Pydos";
        //alert("Seleccionaste a Pydos");
    }

    let seccionAtaques = document.getElementById("elije-ataque");
    seccionAtaques.style.display = "block";

    let seccionMascota = document.getElementById("elije-mascota");
    seccionMascota.style.display = "none";
}

function ataqueFuego(){

    /*let spanAtaqueJugador = document.getElementById("ataque-jugador");
    spanAtaqueJugador.innerHTML = "FUEGO";*/
    ataqueJugador = "FUEGO";
    ataqueMascotaPC();
    atacar();
}
function ataqueTierra(){

    /*let spanAtaqueJugador = document.getElementById("ataque-jugador");
    spanAtaqueJugador.innerHTML = "TIERRA";*/
    ataqueJugador = "TIERRA";
    ataqueMascotaPC();
    atacar();
}
function ataqueAgua(){

    /*let spanAtaqueJugador = document.getElementById("ataque-jugador");
    spanAtaqueJugador.innerHTML = "AGUA";*/
    ataqueJugador = "AGUA";
    ataqueMascotaPC();
    atacar();
}
function ataqueMascotaPC(){
    /*let spanAtaquePC = document.getElementById("ataque-enemigo");*/
    let ataqueAleatorioEnemigo

    ataqueAleatorioEnemigo = aleatorio(1, 3);

    if(ataqueAleatorioEnemigo == 1){
        /*spanAtaquePC.innerHTML = "FUEGO";
        ataquePC = 1*/
        ataquePC = "FUEGO"
    } else if(ataqueAleatorioEnemigo == 2){
        /*spanAtaquePC.innerHTML = "TIERRA"
        ataquePC = 2*/
        ataquePC = "TIERRA"
    } else {
        /*spanAtaquePC.innerHTML = "AGUA"
        ataquePC = 3*/
        ataquePC = "AGUA"
    }
  
}
function mensajeAtaques (){
    let parrafo = document.createElement("p");
    let seccionMensaje = document.getElementById("mensajes");

    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataquePC + " - " + resultado;
    seccionMensaje.appendChild(parrafo);
}
function perdidosPC(){
    let spanVidasPC = document.getElementById("enemigo-vidas");

    if (vidasPC >0){
        vidasPC = vidasPC- 1;
        spanVidasPC.innerHTML = vidasPC;
    }else {
        vidasPC = 0;
        spanVidasPC.innerHTML = vidasPC;
        //mensajeFinal("El enemigo no tiene mas vidas, GANASTE! 🙂")
    }
}
function perdidosJugador(){
    let spanVidasJugador = document.getElementById("jugador-vidas");

    if (vidasJugador >0){
        vidasJugador = vidasJugador - 1;
        spanVidasJugador.innerHTML = vidasJugador;
    }else {
        vidasJugador = 0;
        spanVidasJugador.innerHTML = vidasJugador;
        //mensajeFinal("No tienes mas vidas, PERDISTE! ☹")
        
    }
}
function atacar(){

    /*let spanResultado = document.getElementById("resultado")*/
 
    
    
    if(ataqueJugador == ataquePC){
        resultado = "EMPATE 😒"
    } else if (ataqueJugador == "FUEGO" && ataquePC == "TIERRA"){
        resultado = "GANASTE 🎉"
        perdidosPC()
    } else if (ataqueJugador == "AGUA" && ataquePC == "FUEGO"){
        resultado = "GANASTE 🎉"
        perdidosPC()
    }else if (ataqueJugador == "TIERRA" && ataquePC == "AGUA"){
        resultado = "GANASTE 🎉"
        perdidosPC()
    }else{
        resultado = "PERDISTE 🍆"
        perdidosJugador()
    }

    mensajeAtaques();

    if (vidasJugador == 0){
        mensajeFinal("No tienes mas vidas, PERDISTE! ☹")
    }else if (vidasPC == 0){
        mensajeFinal("El enemigo no tiene mas vidas, GANASTE! 🙂")
    }
}
function mensajeFinal (resultado){
    let parrafo = document.createElement("p");
    let seccionMensaje = document.getElementById("mensajes");

    let btnFuego = document.getElementById("boton-fuego");
    btnFuego.disabled = true;
    let btnTierra = document.getElementById("boton-tierra");
    btnTierra.disabled = true;
    let btnAgua = document.getElementById("boton-agua");
    btnAgua.disabled = true;

    parrafo.innerHTML = resultado;
    seccionMensaje.appendChild(parrafo);

    let seccionReiniciar = document.getElementById("reinciar");
    seccionReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload();
}




window.addEventListener("load", iniciarJuego);
