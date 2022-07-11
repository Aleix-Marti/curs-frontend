/*
* https://www.guru99.com/while-vs-do-while.html
*/


let x  = 10;
let y = 10;

do {
  x++;
  // console.log('do while ' + x);
  // x = prompt('Entra un número major que 10');
} while (x < 10);


while (y < 10) {
  y++;
  // console.log('while ' + y);
  // y = prompt('Entra un número major que 10');
}

for( let i = 0; i < 10; i++ ){
  console.log('for: ' + i);
}

const fruites = ['pera', 'poma', 'maduixa', 'kiwi', 'plàtan'];
console.log(fruites.length);
console.log(fruites[3]);

for( let i = 0; i < fruites.length; i++ ){
  console.log('for: ' + i + ' : ' + fruites[i]);
  if ( fruites[i] == "maduixa" ) break;
}

fruites.forEach( function(fruit){
  console.log('foreach: ' + fruit);
})