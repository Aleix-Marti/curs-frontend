console.log('Hello JavaScript!');
/**
// Variables i condicionals

// console.log( document.getElementById('hello') );


var a = '2';
var b = 3;

var c;

// c = parseInt(a) + b;


//boolean => true / false  1 / 0


if ( a == b ) {
  console.log('iguals en valor i tipus!');
} else {
  console.log('diferents!');
}

c = ( a == b) ? 'iguals' : 'diferent';



if ( (a == b) && ( a == '2' ) ) {
  console.log('es compleix tot!');
} else {
  console.log(' hi ha algo que no es compleix');
}

if ( (a == b) || ( a == '2' ) ) {
  console.log('es compleix una de les dos!');
} else {
  console.log('no es comleix res');
}

if ( ! (a == b) ){
  console.log('no es compleix a == b');
}


let mood = 'test';

switch (mood) {
  case 'happy':
    console.log('😀')
    break;
  
  case 'sad':
    console.log('😔')
    break;

  case 'crazy':
    console.log('🤪')
    break;

  default:
    console.log('🙃')
  }



  // alert('Hola!');



var op1 = +prompt('Escriu el primer operand');
var op2 = +prompt('Escriu el segon operand');
var operacio = prompt('Escriu operació: (a)+, (b)- , (c)/, (d)*');
var resultat=0;

switch(operacio){
  case'a':
    resultat = op1 + op2;
    console.log('El resultat és: ' +resultat);
    break;

  case'b':
    resultat = op1 - op2;
    console.log('El resultat és: ' +resultat);
    break;

  case 'c':
    resultat= op1/op2;
    console.log ('El resultat és: ' +resultat);
    break;

  case 'd':
  default:
    resultat=op1*op2;
    console.log('El resultat és: ' +resultat);

}

*/



/*
// funcions

function mostra_text() {
  console.log('La meva primera funció!');
}

mostra_text();

function mostra_text_param( text ) {
  console.log('El text rebut és: ' + text);
}

mostra_text_param( 'Pikachu' );

const poke = mostra_text_param( 'Ditto' );

function mult( op1, op2 ) {
  let result = op1*op2;
  return result;
}

let producte = mult(5,6);
console.log("El restultat del producte és: " + producte);

let div = function(div1,div2) {
  let divisio = div1/div2
  return divisio;
}

console.log( 'la divisió és: ' + div(25,5) );


const botoSaluda = document.getElementById( 'salutacio' );
//console.log(boto);
botoSaluda.addEventListener('click', function(){
  alert('Hola!');
})

const botoPregunta = document.getElementById( 'pregunta' );
//console.log(boto);
botoPregunta.addEventListener('click', demanaNom );

function demanaNom(){
  let nom = prompt('Hola! Qui ets?');
  alert('Hola ' + nom );
}

*/

/**
// funcions + operacions


var op1 = 0;
var op2 = 0;



const sum = document.getElementById( 'suma' );
const rest = document.getElementById( 'rest' );
const multi = document.getElementById( 'mult' );
const divi = document.getElementById( 'div' );
const mod = document.getElementById( 'mod' );

sum.addEventListener('click', function(){
  demanarDades();
  alert( 'El restultat de sumar ' + op1 + ' + ' + op2 + ' és: ' + (+op1 + +op2) );
} );

rest.addEventListener('click', function(){
  demanarDades();
  alert( 'El restultat de restar ' + op1 + ' - ' + op2 + ' és: ' +  (+op1 - +op2) );
});

divi.addEventListener('click', dividir );
multi.addEventListener('click', multiplicar );
mod.addEventListener('click', modul );

function demanarDades(){
  op1 = +prompt('Operand 1');
  op2 = +prompt('Operand 2');
}

// function suma(){
//   demanarDades();
//   alert( 'El restultat de sumar ' + op1 + ' + ' + op2 + ' és: ' + (+op1 + +op2) );
// }
// function resta(){
//   demanarDades();
//   alert( 'El restultat de restar ' + op1 + ' + ' + op2 + ' és: ' +  op1 - op2 );
// }

function multiplicar(){
  demanarDades();
  alert( 'El restultat de sumar ' + op1 + ' * ' + op2 + ' és: ' + op1*op2);
}

function dividir(){
  demanarDades();
  alert( 'El restultat de sumar ' + op1 + ' / ' + op2 + ' és: ' + op1/op2);
}
function modul(){
  let num = +prompt('Entra un número');

  if ( (num % 2) == 0 ) {

    alert('El número ' + num + ' és parell');
  } else {
    alert('El número ' + num + ' és senar');
  }
}


function demana(){
  let nom = prompt('Entra el teu nom');
  return nom;
}

function mostra(){
  let text = demana();
  alert('El teu nom és: ' + text );
}

// mostra();
*/
