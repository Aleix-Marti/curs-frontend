
// seleccionem tote les cartes (si ja existeixen al HTML) i els hi afegim un event al click
const cards = document.querySelectorAll('.card');
cards.forEach( card => card.addEventListener('click', selectCard) );

// preparem unes variables per guardar les cartes seleccionades
var c1 = '';
var c2 = '';

// com a alternativa, es poden guardar les cartes seleccionaes a un array: seleccionades.push()
// var seleccionades = []

// es pot tenir un comptador que s'incrementi cada cop que es selecciona una carta
var cont = 0;


// quan seleccionem una carta, es comprova si ja n'hi ha alguna de guardada i s'incrementa el comptador
// si no en tenim cap, la primera es guarda a c1
// si ja en tenim una, la segona es guarda a c2
// un cop tenim les 2, executem la funció de lluita
function selectCard() {

  // la primera es guarda a c1, s'incrementa el comptador i sortim de la funció
  if (c1 == '') {
    c1 = this.id;
    this.classList.toggle('hidden');
    this.style.backgroundColor = 'lime';
    cont++;
    return
  }

  // la segona es guarda a c2, s'incrementa el comptador, i si ja en tenim 2, s'executa la funció de lluita
  if (c2 == '') {
    c2 = this.id;
    this.classList.toggle('hidden');
    this.style.backgroundColor = 'coral';
    cont++;
  }

  if ( cont == 2 ) {
    fight()
    return;
  }
 
}

// obtenim els valors de les cartes selecciones a c1 i c2 i es mostra el guanyador
function fight(){

  // let attack1 = document.querySelector(`#${c1} .attack`).innerText;
  let attack1 = document.querySelector(`#${c1}`).dataset.attack;
  let name1 = document.querySelector(`#${c1} .name`).innerText;
  
  // let attack2 = document.querySelector(`#${c2} .attack`).innerText;
  let attack2 = document.querySelector(`#${c2}`).dataset.attack;
  let name2 = document.querySelector(`#${c2} .name`).innerText;

  console.log(attack1,attack2);

  if ( attack1 > attack2 ) {
    document.querySelector('#msg').innerText = `${name1} guanya contra ${name2}`;
  } else {
    document.querySelector('#msg').innerText = `${name2} guanya contra ${name1}`;
  }

}