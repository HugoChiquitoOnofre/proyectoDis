
// alert(localStorage.getItem('playerNumQuestionsG') + " " + localStorage.getItem('playerNames'));

const playerNamesA = JSON.parse(localStorage.getItem('playerNamesG'));
const playerNumQuestionsA = JSON.parse(localStorage.getItem('playerNumQuestionsG'));
const playerNumCorrectA = JSON.parse(localStorage.getItem('playerNumCorrectG'));
var mensaje1 = playerNamesA[0];
var preguntas1 = playerNumQuestionsA[0];
var aciertos1 = playerNumCorrectA[0];
var errores1= preguntas1 - aciertos1;

var mensaje2 = playerNamesA[1];
var preguntas2 = playerNumQuestionsA[1];
var aciertos2 = playerNumCorrectA[1];
var errores2= preguntas2 - aciertos2;

var mensaje3 = playerNamesA[2];
var preguntas3 = playerNumQuestionsA[2];
var aciertos3 = playerNumCorrectA[2];
var errores3= preguntas3 - aciertos3;

var mensaje4 = playerNamesA[3];
var preguntas4 = playerNumQuestionsA[3];
var aciertos4 = playerNumCorrectA[3];
var errores4 = preguntas4 - aciertos4;

// Mostrar la variable en HTML
document.getElementById("mensaje").textContent = mensaje1;
document.getElementById("mensaje2").textContent = mensaje2;
document.getElementById("mensaje3").textContent = mensaje3;
document.getElementById("mensaje4").textContent = mensaje4;

if(playerNumQuestionsA[0] == 0){
    document.getElementById("myChart2").style.display = "none";
    document.getElementById("leyenda1").style.display = "block";
} else{
    document.getElementById("myChart2").style.display = "block";
    document.getElementById("leyenda1").style.display = "none";
}

if(playerNumQuestionsA[1] == 0){
    document.getElementById("myChart3").style.display = "none";
    document.getElementById("leyenda2").style.display = "block";
} else{
    document.getElementById("myChart3").style.display = "block";
    document.getElementById("leyenda2").style.display = "none";
}

switch(playerNumQuestionsA[2]){
    case -1:
        document.getElementById("myChart4").style.display = "none";
        document.getElementById("leyenda3").style.display = "none";
        break;
    case 0:
        document.getElementById("myChart4").style.display = "none";
        document.getElementById("leyenda3").style.display = "block";
        break;
    default:
        document.getElementById("myChart4").style.display = "block";
        document.getElementById("leyenda3").style.display = "none";
        break;
}


switch(playerNumQuestionsA[3]){
    case -1:
        document.getElementById("myChart5").style.display = "none";
        document.getElementById("leyenda4").style.display = "none";
        break;
    case 0:
        document.getElementById("myChart5").style.display = "none";
        document.getElementById("leyenda4").style.display = "block";
        break;
    default:
        document.getElementById("myChart5").style.display = "block";
        document.getElementById("leyenda4").style.display = "none";
        break;
}

var ctx2 = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx2, {
    type: 'doughnut',
    data: 	
    {
                datasets: [{
                    data: [errores1, aciertos1],
                    backgroundColor: ['red', '#25a5be'],
                    label: 'Comparacion de aciertos'
                }],
                labels: [
                    'Errores',
                    'Aciertos'
                ]},
    options: {}
});

var ctx2 = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx2, {
    type: 'doughnut',
    data: 	
    {
                datasets: [{
                    data: [errores2, aciertos2],
                    backgroundColor: ['red', '#25a5be'],
                    label: 'Comparacion de aciertos'
                }],
                labels: [
                    'Errores',
                    'Aciertos'
                ]},
    options: {}
});

var ctx2 = document.getElementById('myChart4').getContext('2d');
var chart = new Chart(ctx2, {
    type: 'doughnut',
    data: 	
    {
                datasets: [{
                    data: [errores3, aciertos3],
                    backgroundColor: ['red', '#25a5be'],
                    label: 'Comparacion de aciertos'
                }],
                labels: [
                    'Errores',
                    'Aciertos'
                ]},
    options: {}
});
var ctx2 = document.getElementById('myChart5').getContext('2d');
var chart = new Chart(ctx2, {
    type: 'doughnut',
    data: 	
    {
                datasets: [{
                    data: [errores4, aciertos4],
                    backgroundColor: ['red', '#25a5be'],
                    label: 'Comparacion de aciertos'
                }],
                labels: [
                    'Errores',
                    'Aciertos'
                ]},
 options: {}
});
