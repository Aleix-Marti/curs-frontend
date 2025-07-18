const url = 'https://pokeapi.co/api/v2/pokemon/';
const pokes = document.querySelector('#pokecards')
const num = document.querySelector('#numpokes')
const getBtn = document.querySelector('#getpokes')
const tpt = document.querySelector('#poketemplate')

// getBtn.onclick = () => {
//   let n = num.value;
//   console.log(n);
//   for( let i=0; i<n; i++) {
//     let rand = getRndInteger(1,999)
//     getPoke(rand)
//     // getPoke(i+1);
//   }
// }


function btnClick() {
  let n = num.value;
  // console.log(n);
  for( let i=0; i<n; i++) {
    let rand = getRndInteger(1,999)
    // console.log('rand',rand);
    getPoke(rand)
    // getPoke(i+1);
  }
}

getBtn.addEventListener('click', btnClick)


const getPoke = (id) => {
  // fetch(url+id)
  // fetch('https://pokeapi.co/api/v2/pokemon/'+id)
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then( data => data.json() )
  // .then( poke => printPoke(poke) )
  .then( poke => printNoTemplate(poke) )
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function printPoke(pokemon) {
  console.log('estem a print Poke');
  console.log(pokemon);
  console.log(pokemon.name);
  
  const clone = tpt.content.cloneNode(true);

    clone.querySelector('h2').innerText = pokemon.name;
    clone.querySelector('img').src = pokemon.sprites.front_default;
    clone.querySelector('.attack').innerText = pokemon.stats[1].base_stat;
    clone.querySelector('.defense').innerText = pokemon.stats[2].base_stat;

  pokes.appendChild(clone);
}

const paint = (card) => {
  console.dir(card)
  // card.querySelector('h2').style.color = 'orangered';
  // card.querySelector('img').style.display = 'none';
  // if( card.classList.contains('selected')){
  //   card.classList.remove('selected');
  //   // card.style.backgroundColor = 'transparent';

  // }else{
  //   card.classList.add('selected');
  //   // card.style.backgroundColor = 'lime';

  // }

  card.classList.toggle('selected');
}


function printNoTemplate(pokemon) {
  out = `<article class="card" onclick="paint(this)">
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="">
            <div>A: <span class="attack">${pokemon.stats[1].base_stat}</span></div>
            <div>D: <span class="defense">${pokemon.stats[2].base_stat}</span></div>
          </aricle>`;

  pokes.innerHTML += out;
}


function getJSON( id ) {
  fetch('dbz.json')
  .then( data => data.json() )
  .then( x => {
    console.log( x );
    console.log( x[3] ); // mostrar el 4rt element -- és un array i comença a comptar per 0
    console.log( x[3].name );
    console.log( x[3].image );

    const mypers = x.find( pers => pers.id == id ); // recorre l'array de tots els personatges i retorna el primer element que troba que té l'id que li passem
    console.log( mypers );
    console.log( mypers.name );
  } )
}