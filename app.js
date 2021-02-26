/* ==========================================================================
   Grab API 
========================================================================== */

// Grab individual Pokemon data 

async function fetchData(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  
  try {
    const response = await axios.get(url)
    // console.log(response)
    let data = response.data
    
    showPokeData(data)
    return response
  } catch (err) {
    console.error(err)
  }
}

// fetchData('pikachu')

// Grab entire list of Pokemon 




async function fetchPokeList() {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`
  
  try {
    const listResponse = await axios.get(url)
    console.log(listResponse)
    let pokeArray = listResponse.data.results
    console.log(pokeArray)
    appendPokeList(pokeArray) // invoking appendPokeList function

    // show data here?
    return listResponse
  } catch (err) {
    console.error(err)
  }
}

fetchPokeList()

function appendPokeList(pokeArray) {
  const pokeList = document.querySelector('.right-screen-top')
  pokeArray.forEach((pokemon) => {
    const pokeName = document.createElement('p')
    
    pokeName.textContent = pokemon.name
    console.log(pokeName)
    console.log(pokemon.name)
    pokeList.appendChild(pokeName)
  }) 
}




/* ==========================================================================
   Call API Data and Display to DOM 
========================================================================== */

// Grab data from API and attach info to left container screen



const showPokeData = (data) => {  
  
  // console.log("inside funct", data)
    const leftContainer = document.querySelector('.left-container-screen')
    console.log(leftContainer)

    const pokeData = `
      <h1>Name: ${data.name}<h1>
      <img src=${data.sprites.front_default}>
      <img src=${data.sprites.back_default}>
      <div class="details">
        <span>Height: ${data.height}</span>
        <span>Weight: ${data.weight}</span>
        <span>Abilities: ${data.moves[0].move}
      </div>
      `
    // console.log(pokeData)
    leftContainer.insertAdjacentHTML('beforeend', pokeData)
}


/* ==========================================================================
  Add Event Listeners
========================================================================== */

// Search Field in right container

const form = document.querySelector('form')
// console.log(form)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#pokemon-search').value
  // console.log(inputValue)
  removePokemon()
  fetchData(inputValue)
  document.querySelector('#pokemon-search').value = ""
})

// Remove previous search history

function removePokemon() {
    const leftContainer = document.querySelector('.left-container-screen')
    console.log(leftContainer)
    while (leftContainer.lastChild) {
      leftContainer.removeChild(leftContainer.lastChild)
    }
  }

// List in right container 

// const rightList = document.querySelector('.right-screen-top')
// console.log(rightList)

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const inputValue = document.querySelector('#pokemon-search').value
//   // console.log(inputValue)
//   removePokemon()
//   fetchData(inputValue)
//   document.querySelector('#pokemon-search').value = ""
// })



/* ==========================================================================
  Generate List for Right Container
========================================================================== */






