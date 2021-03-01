/* ==========================================================================
   Dom Objects
========================================================================== */

const pokeListItems = document.querySelectorAll('.list-item');
const leftContainer = document.querySelector('.main-screen hide')
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFrontImage = document.querySelector('.poke-front-image');
const pokeBackImage = document.querySelector('.poke-back-image');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const form = document.querySelector('form')

/* ==========================================================================
   Grab API 
========================================================================== */

// Calls individual Pokemon

async function fetchPokeData(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  
  try {
    const response = await axios.get(url)
    console.log(response)
    let data = response.data
    
    //Append to above DOM
    pokeName.textContent = data['name'];
    pokeId.textContent = '#' + data['id']
    pokeWeight.textContent = data['weight'];
    pokeHeight.textContent = data['height'];
    pokeFrontImage.src = data['sprites']['front_default'] || '';
    pokeBackImage.src = data['sprites']['back_default'] || '';
    
    return response
  } catch (err) {
    console.error(err)
  }
}

// Grabs entire list of Pokemon 

let prevUrl = null;
let nextUrl = null;

const fetchPokeList = url => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const { results, previous, next } = data;
      prevUrl = previous;
      nextUrl = next;

      for (let i = 0; i < pokeListItems.length ; i++) {
        const pokeListItem = pokeListItems[i];
        const resultData = results[i];

        if (resultData) {
          const { name, url } = resultData;
          const urlArray = url.split('/'); // We split up array here 
          const id = urlArray[urlArray.length - 2]; // Then access index -2 for "id"
          pokeListItem.textContent = id + '. ' + (name);
        } else {
          pokeListItem.textContent = '';
        }
      }
    });
};


/* ==========================================================================
   Event Listeners 
========================================================================== */

const leftButtonClick = () => {
  if (prevUrl) {
    fetchPokeList(prevUrl);
  }
};

const rightButtonClick = () => {
  if (nextUrl) {
    fetchPokeList(nextUrl);
  }
};

const listItemClick = (e) => {
  if (!e.target) return;

  const listItem = e.target;
  if (!listItem.textContent) return;

  const id = listItem.textContent.split('.')[0];
  
  fetchPokeData(id);
};

leftButton.addEventListener('click', leftButtonClick);

rightButton.addEventListener('click', rightButtonClick);

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const inputValue = document.querySelector('#pokemon-search').value
  
  fetchPokeData(inputValue)
  document.querySelector('#pokemon-search').value = ""
})

for (const pokeListItem of pokeListItems) {
  pokeListItem.addEventListener('click', listItemClick);
}


// URL used to start the app
fetchPokeList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');


    











