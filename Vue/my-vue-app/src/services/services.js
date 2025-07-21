const FIGHTERS_URL = 'https://retoolapi.dev/nJCkCJ/data'


export const getCharacters = async () => {
  const response = await fetch('https://dragonball-api.com/api/characters')
  const data = await response.json()
  const { items } = data
  // console.log(data)
  return items
}

export const getPokes = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const data = await response.json()
  const { results } = data

  const pokes = results.map ( res => getPokeByName( res.name ))
  console.log(pokes)
  const pokemons = await Promise.all( pokes )
  console.log(pokemons)
  return pokemons

  // console.log(results)
  // // return items
  // return results
}

const getPokeByName = async ( name ) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await response.json()
  const pokeInfo = {
    name: data.name,
    types: data.types.map(type => type.type.name),
    image: data.sprites.front_default 
  }
  return pokeInfo
}


export const getFighters = async () => {
  const response = await fetch(FIGHTERS_URL)
  console.log(response)
  const data = await response.json()
  console.log(data)
  return data
}


export const getSingleFighter = async ( id ) => {
  const response = await fetch(`${FIGHTERS_URL}/${id}`)
  const data = await response.json()
  console.log(data)
  return data
}

export const addFighter = async ( dataToSend ) => {
  const response = await fetch(FIGHTERS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      });

      console.log(response)
  
  return response
}