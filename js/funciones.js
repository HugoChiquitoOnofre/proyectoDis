var options = document.querySelectorAll("#opciones li");
var question;
var answer;
var listaRespuestas=[];
var respuestaCorrecta;
var playerNames = [];
var playerNumQuestions = [-1, -1, -1, -1];
var playerNumCorrect = [0, 0, 0, 0];
// var window.playerNames = [];
// var window.playerNumQuestions = [-1, -1, -1, -1];
// var window.playerNumCorrect = [0, 0, 0, 0];
var numPlayer;
var buttonsFlag = 0;

// import{getwindow.playerNames, getwindow.playerNumQuestions, getwindow.playerNumCorrect} from './exportVar.js';
// console.log(getwindow.playerNames, getwindow.playerNumQuestions, getwindow.playerNumCorrect);
// var window.playerNames = getwindow.playerNames();
// var window.playerNumQuestions = getwindow.playerNumQuestions();
// var window.playerNumCorrect = getwindow.playerNumCorrect();

function generarPregunta(nivel){
    var flag = 0;
    do{
        var num = 0;
        var res = 0;
        var texto = "Calcular ";
        var cuenta = "";
        var numSigno = 1;
        var signo = "";
        for(var i=0; i<2; i++){
            var levMath;
            if(nivel == 1 || nivel == 2){
                num = Math.floor(Math.random()*9)+1;
            } else{
                num = Math.floor(Math.random()*40)+1;
            }
            
            if(i===0){
                cuenta = cuenta + num;
            } else{
                numSigno = Math.floor(Math.random()*50)+1;
                switch(true){
                case numSigno>=1 && numSigno<=15:
                    signo = "+";
                    break;
                case numSigno>=16 && numSigno<=30:
                    signo = "-";
                    break;
                case numSigno>=31 && numSigno<=45 && nivel>1:
                    num = Math.floor(Math.random()*10)+1;
                    signo = "*";
                    break;
                case numSigno>=46 && nivel>1:
                    num = Math.floor(Math.random()*10)+1;
                    signo = "/";
                    break;
                }
                cuenta = cuenta + signo + num;
            }
        }
        texto = texto + cuenta;
        res = eval(cuenta);
        if(res-Math.trunc(res)==0){
            flag = 1;
        }
    }while(flag===0);
    question = texto;
    answer = res;
}

// function mostrarFormulario(){
//     var boton = document.getElementById("boton");
//     var formulario = document.getElementById("formular");
//     formulario.style.display = "block";
//     boton.style.display = "none";
// }

function cambiarPregunta() {
    // getChecked();
    generarPregunta(3);
    generarOpciones();
 
    document.getElementById("pregunta").textContent = question;
 
    var opciones = document.getElementById("opciones");
    opciones.innerHTML = "";
 
    for (var i = 0; i < 4; i++) {
       var opcion = document.createElement("li");
       var input = document.createElement("input");
       input.type = "radio";
       input.name = "respuesta";
    //    input.value = "opcion" + (i + 1);
 
       opcion.appendChild(input);
       opcion.appendChild(document.createTextNode(listaRespuestas[i]));
 
       opciones.appendChild(opcion);
    }
    var options = [];
    options = document.querySelectorAll("#opciones li");
    for (var i = 0; i < opciones.length; i++) {
        options[i].addEventListener("click", function() {
            // Obtener el radio correspondiente al <li> actual
            var radio = this.querySelector("input[type='radio']");
            // Marcar el radio
            radio.checked = true;
        });
    }
    // resaltarOpcionSeleccionada();    
 }

function generarOpciones(){
    if(listaRespuestas.length==0){
        for(var i=0; i<=3; i++){
            listaRespuestas.push(Math.floor(Math.random()*answer+30)+(answer-30));
        }
    } else{
        for(var i=0; i<=3; i++){
            listaRespuestas[i] = Math.floor(Math.random()*answer+30)+(answer-30);
        }
    }
    for(var i=0; i<listaRespuestas.length; i++){
        if(listaRespuestas[i]==answer){
            while(listaRespuestas[i]==answer){
                listaRespuestas[i] = Math.floor(Math.random()*answer+30)+(answer-30);
            }
        }
    }
    respuestaCorrecta = Math.floor(Math.random()*3)+0;
    listaRespuestas[respuestaCorrecta] = answer;
}

function mostrarFormJugadores(){
    var boton = document.getElementById("boton");
    var pForm = document.getElementById("players-form");
    pForm.style.display = "block";
    boton.style.display = "none";
}

function ocultarElementosDeInicio() {
    document.getElementById("image-baner").style.display = "none";
    document.getElementById("eslogan").style.display = "none";

    var h2 = document.getElementById("mensaje-banner");
    h2.textContent = "Nuevo texto";
}

function mostrarCuentaReg(){
    // Ocultar elementos no necesarios
    var pForm = document.getElementById("players-form");
    
    // Mostrar cronometro
    var cronometro = document.getElementById("cuentaReg");
    cronometro.style.display = "block";
    pForm.style.display = "none";
    isPaused = false;
}

function mostrarBotones(){
    var cronometro = document.getElementById("cuentaReg");
    var buttons = document.getElementById("buttons-container");
    buttons.style.display = "block";
    cronometro.style.display = "none";
}

function mostrarFormulario(){
    var buttons = document.getElementById("buttons-container");
    var formulario = document.getElementById("formular");
    formulario.style.display = "block";
    buttons.style.display = "none";
}
 
var indicePreguntaActual = 0;
var flagError = 0; 
document.getElementById("opciones").addEventListener("click", function() {
    var opciones = document.getElementsByName("respuesta");
    var respuestaSeleccionada = -1;
 
    for (var i = 0; i < opciones.length; i++) {
       if (opciones[i].checked) {
          respuestaSeleccionada = i;
          break;
       }
    }
 
    if (respuestaSeleccionada === respuestaCorrecta) {
        opciones[respuestaSeleccionada].parentNode.style.color = "white";
        opciones[respuestaSeleccionada].parentNode.style.backgroundColor = "green";
        flagError = 0;
    } else {
        opciones[respuestaSeleccionada].parentNode.style.color = "white";
        opciones[respuestaSeleccionada].parentNode.style.backgroundColor = "red";
        flagError = 1;
    }
   
    for (var i = 0; i < options.length; i++) {
        opciones[i].style.display = "none";
    }


    for (var i = 0; i < options.length; i++) {
        var radio = options[i].querySelector("input[type='radio']");
        radio.style.display = "";
    }
    
    if(flagError === 1){
        document.getElementById("error").style.display = "block";
        document.getElementById("correcto").textContent = "Respuesta correcta: " + answer;
    } else{
        document.getElementById("error").style.display = "none";
        document.getElementById("correcto").textContent = "¡Correcto!";
        window.playerNumCorrect[numPlayer] = window.playerNumCorrect[numPlayer] + 1;
    }
    document.getElementById("letrero").style.display = "block";

    setTimeout(function() {
        document.getElementById("letrero").style.display = "none";
    }, 3000);

    setTimeout(function() {
        for (var i = 0; i < options.length; i++) {
            var radio = options[i].querySelector("input[type='radio']");
            radio.style.display = "";
        }
        cambiarPregunta();
        var cronometro = document.getElementById("cuentaReg");
        var formulario = document.getElementById("formular");
        formulario.style.display = "none";
        cronometro.style.display = "block";
        
    resetTimer();
    var textTest = "";
    for(var i=0; i<window.playerNames.length; i++){
        textTest = textTest + window.playerNames[i] + ", NQ: " + window.playerNumQuestions[i] + ", NC: " + window.playerNumCorrect[i] + ";\n";
    }
    // alert(textTest);
    document.getElementById("letrero").style.display = "none";
    }, 2000);


 });

 function getChecked(){
    var options1 = document.getElementsByName("respuesta");
    // Recorrer cada <li> y asignar el evento click
    for (var i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function() {
            // Obtener el radio correspondiente al <li> actual
            var radio = this.querySelector("input[type='radio']");
            // Marcar el radio
            radio.checked = true;
        });
    }
}

getChecked();


var timerInterval;
    var isPaused = true;

    // Obtiene las referencias a los elementos del cronómetro
    var hoursElement = document.getElementById('hours');
    var minutesElement = document.getElementById('minutes');
    var secondsElement = document.getElementById('seconds');

    // Establece el tiempo inicial en segundos (cuenta regresiva de 10 segundos)
    var initialTime = 10;
    var currentTime = Math.floor(Math.random() * 50) + 10;

    // Función para actualizar el cronómetro
    function updateTimer() {
      if (isPaused) {
        return;
      }

      var hours = Math.floor(currentTime / 3600);
      var minutes = Math.floor((currentTime % 3600) / 60);
      var seconds = currentTime % 60;

      // Actualiza el contenido de las cajas de horas, minutos y segundos
      hoursElement.innerHTML = pad(hours);
      minutesElement.innerHTML = pad(minutes);
      secondsElement.innerHTML = pad(seconds);

      // Verifica si se ha alcanzado el tiempo final
      if (currentTime <= 0) {
        clearInterval(timerInterval);
        if(buttonsFlag === 0){
            botones();
        }
        mostrarBotones();
        cambiarPregunta();
      } else{
        currentTime--;
      }
    }

    // Función para agregar ceros iniciales a los números menores a 10
    function pad(num) {
        return (num < 10) ? '0' + num : num;
    }

    // Pausa o reanuda el cronómetro al hacer clic en el botón de pausa
    function pauseTimer() {
        isPaused = !isPaused;

        // Cambia el texto del botón según el estado de pausa
        var pauseButton = document.getElementById('pauseButton');
        pauseButton.innerHTML = isPaused ? "Reanudar" : "Pausar";
    }

    function resetTimer() {
        clearInterval(timerInterval);
        currentTime = Math.floor(Math.random() * 50) + 10;
        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    }

    // Actualiza el cronómetro cada segundo
    timerInterval = setInterval(updateTimer, 1000);

/////////////////////////////////////////////////////////////////////////////////

var playersInputsContainer = document.getElementById('players-inputs');

    document.getElementsByName('num-players').forEach(function(radio) {
      radio.addEventListener('change', function() {
        playersInputsContainer.innerHTML = '';

        var numPlayers = parseInt(this.value);

        if (numPlayers >= 2 && numPlayers <= 4) {
          for (var i = 1; i <= numPlayers; i++) {
            var playerNameInput = document.createElement('input');
            playerNameInput.type = 'text';
            playerNameInput.name = 'player' + i;
            playerNameInput.placeholder = 'Nombre del Jugador ' + i;
            playerNameInput.required = true;
            playerNameInput.classList.add('form-input');
            playersInputsContainer.appendChild(playerNameInput);
          }
        }
      });
    });


document.getElementsByName('dificultad').forEach(function(radio) {
  radio.addEventListener('change', function() {
    dificultad = parseInt(this.value);
  });
});
    
document.getElementById('players-form').addEventListener('submit', function(event) {
  event.preventDefault();

    var playerNameInputs = playersInputsContainer.getElementsByTagName('input');

    for (var i = 0; i < playerNameInputs.length; i++) {
        window.playerNames.push(playerNameInputs[i].value);
        window.playerNumQuestions[i] = 0;
    }
    mostrarCuentaReg();
});

///////////////////////////////////////////////////////////////////////////
function botones(){
    // var players = ['Juan', 'María', 'Roberto', 'Manuel'];
    buttonsFlag=1;
    var playerButtonsContainer = document.getElementById('player-buttons-container');
    var selectedPlayerElement = document.getElementById('selected-player');
    window.playerNames.forEach(function(player, index) {
        var button = document.createElement('button');
        button.classList.add('player-button');
        button.textContent = window.playerNames[index];
        
        button.addEventListener('click', function() {
        selectedPlayerElement.textContent = 'Jugador seleccionado: ' + player + ". Index: " + index;
        numPlayer = index;
        // alert(index + ", " + numPlayer);
        window.playerNumQuestions[index] = window.playerNumQuestions[index] + 1;
        mostrarFormulario();
        // Si deseas realizar alguna otra acción con el jugador seleccionado, puedes hacerlo aquí
        });

        playerButtonsContainer.appendChild(button);
    });
}

function terminarPartida(){
    localStorage.setItem('playerNamesG', JSON.stringify(playerNames));
    localStorage.setItem('playerNumQuestionsG', JSON.stringify(playerNumQuestions));
    localStorage.setItem('playerNumCorrectG', JSON.stringify(playerNumCorrect));
    var outText = document.getElementById("salida");
    var cronometro = document.getElementById("cuentaReg");
    cronometro.style.display = "none";
    isPaused=true;
    outText.style.display = "block";
}
