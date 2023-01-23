function turnBlue() { // crear una funció amb nom

  const b = document.querySelector('body'); // seleccionar el body

  const btn = document.createElement("button"); // crear un botó

  const txt = document.createTextNode("Turn blue."); // crear un text

  btn.appendChild(txt); // assignar el text al botó

  // afegir un event listener al botó, a l'event click, es canvia el color de fons per blau
  btn.addEventListener('click', () => {
    b.style.backgroundColor = 'blue';
  })

  b.appendChild(btn);
}



const turnRed = () => { // crear una funció "arrow function" i associar-la a una constant

  const b = document.querySelector('body'); // seleccionar el body

  const btn = document.createElement("button"); // crear un botó

  const txt = document.createTextNode("Turn red."); // crear un text

  btn.appendChild(txt); // assignar el text al botó

  // afegir un event listener al botó, a l'event click, es canvia el color de fons per vermell
  btn.addEventListener('click', () => {
    b.style.backgroundColor = 'red';
  })

  b.appendChild(btn); // afegir el botó al body
}

// exportar les funcions amb un alias
export {
  turnBlue as blue,
  turnRed as red
};