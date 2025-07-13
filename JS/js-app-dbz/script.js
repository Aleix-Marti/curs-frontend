(function() {

  const baseURL = 'https://dragonball-api.com/api'

  const template = document.querySelector('#card-template')
  const container = document.querySelector('#cards') 

  // Funció que clona un template i li posa la informació rebuda per paràmetre (char)
  const setCharacter = async (char) => {
    // console.log(char)

    // clonar el template
    const clone = template.content.cloneNode(true)
    const card = clone.querySelector('.card')
    // console.log(clone)
    // console.log(card)

    // selecciona els elements per a posar-hi informació
    const name = card.querySelector('.card__name')
    const img = card.querySelector('.card__image')
    const ki = card.querySelector('.card__ki')
    const origin = card.querySelector('.card__origin')
    const info = card.querySelector('.card__info__text')
    const select = card.querySelector('.card__select')
    const showDesc = card.querySelector('.card__desc')

    // omple informació en base al rebut per paràmetre
    name.innerText = char.name
    img.src = char.image
    ki.innerHTML = `<strong>Ki: </strong>${char.ki}`
    // info.innerText = await getSingleCharacterDesc( char.id ) // obtenir la descripció
    info.innerText = char.description
    origin.innerHTML = `<strong>Origin: </strong>${ await getOrigin(char.id) }`


    // afegeix lògica al botons: selecció de la carta
    select.addEventListener('click', (e) => {
      const card = e.target.closest('.card')
      card.classList.toggle('selected');
    })
    
    // afegeix lògica al botons: mostra més informació
    showDesc.addEventListener('click', (e) => {
      const card = e.target.closest('.card')
      card.classList.toggle('show');
    })

    container.appendChild(card)


  }

  // Obtenir informació bàsica de 10 personatges
  // En aquesta consulta 
  const getCharacters = async () => {
    const resp = await fetch(`${baseURL}/characters`)
    const data = await resp.json()
    const { items } = data
    // console.log(items)
    items.forEach( char => {
      setCharacter(char)
    });
    // return items
  }

  const getOrigin = async ( id ) => {
    const resp = await fetch(`${baseURL}/characters/${id}`)
    const data = await resp.json()
    const { originPlanet } = data
    console.log(originPlanet)
    return originPlanet.name
  }

  getCharacters()
  

})()