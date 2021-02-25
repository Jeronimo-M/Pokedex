// Grab Data from API

async function fetchData(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  
  try {
    const response = await axios.get(url)
    // console.log(response)
    let data = response.data[0]
    // console.log(response.data)
    // showPokeData(data)
    return response
  } catch (err) {
    console.error(err)
  }
}

// fetchData('pikachu')

function showPokeData(data) {
  
  // console.log("inside funct", data)
  dataContainer = document.querySelector('.left-container-screen')
  console.log(dataContainer)

  const pokeData = `
    <h1>Name: ${data.name}<h1>
    `
  console.log(pokeData)
  dataContainer.insertAdjacentHTML('beforeend', pokeData)
}

showPokeData()