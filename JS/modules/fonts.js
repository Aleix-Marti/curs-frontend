function turnItalic() {

  const b = document.querySelector('body'); // seleccionar el body

  const btn = document.createElement("button"); // crear un botó

  const txt = document.createTextNode("Italic"); // crear un text

  btn.appendChild(txt); // assignar el text al botó

  // afegir un event listener al botó, a l'event click, es canvia la tipografia per cursiva
  btn.addEventListener('click', () => {
    b.style.fontStyle = 'italic';
  })

  b.appendChild(btn); // afegir el botó al body
}

export { turnItalic } // exportar la funció