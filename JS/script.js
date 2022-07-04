console.log('Hello JavaScript!');

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

  console.log('post alert');

  let op1 = +prompt('Escriu el primer operand');
  let op2 = parseInt(prompt('Escriu el segon operand'));
  let operacio = prompt('Escriu operació: (a)+, (b)- , (c)/, (d)*');


  let result = op1 + op2;


  alert('El resulat és: ' + result);
