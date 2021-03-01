/* ==========================================================================
   Dom 
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


/* ==========================================================================
   Grab API 
========================================================================== */

async function fetchPokeData(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  
  try {
    const response = await axios.get(url)
    console.log(response)
    let data = response.data
    
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

// fetchData('bulbasaur')

// Grab entire list of Pokemon 

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
          const urlArray = url.split('/');
          const id = urlArray[urlArray.length - 2];
          pokeListItem.textContent = id + '. ' + (name);
        } else {
          pokeListItem.textContent = '';
        }
      }
    });
};

// Referenced to video https://www.youtube.com/watch?v=tFVdxGgJPCo for tips on fetchPokeList





const handleLeftButtonClick = () => {
  if (prevUrl) {
    fetchPokeList(prevUrl);
  }
};

const handleRightButtonClick = () => {
  if (nextUrl) {
    fetchPokeList(nextUrl);
  }
};

const handleListItemClick = (e) => {
  if (!e.target) return;

  const listItem = e.target;
  if (!listItem.textContent) return;

  const id = listItem.textContent.split('.')[0];
  fetchPokeData(id);
};


// adding event listeners
leftButton.addEventListener('click', handleLeftButtonClick);
rightButton.addEventListener('click', handleRightButtonClick);
for (const pokeListItem of pokeListItems) {
  pokeListItem.addEventListener('click', handleListItemClick);
}


// initialize App
fetchPokeList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');


// const showPokeData = (data) => {  
  
//   console.log("inside funct", data)
    
//   console.log(leftContainer)

//     // const pokeData = `
//   pokeName.textContent = capitalize(data['name']);
//   pokeId.textContent = '#' + data['id'].toString().padStart(3, '0');
//   pokeWeight.textContent = data['weight'];
//   pokeHeight.textContent = data['height'];
//   pokeFrontImage.src = data['sprites']['front_default'] || '';
//   pokeBackImage.src = data['sprites']['back_default'] || '';
//       <h1 class="poke-name"> Name: ${data.name}<h1>
//       <img class="poke-front-image" src=${data.sprites.front_default}>
//       <img class="poke-back-image" src=${data.sprites.back_default}>
//       <div class="details">
//         <span>Height: ${data.height}</span>
//         <span>Weight: ${data.weight}</span>
//         <span>Index #: ${data.id}</span>
//       </div>
//       `
//     console.log(pokeData)
//     leftContainer.insertAdjacentHTML('beforeend', pokeData)
// }


/* ==========================================================================
  Add Event Listeners
========================================================================== */

// Search Field in right container

// const form = document.querySelector('form')
// // console.log(form)

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   const inputValue = document.querySelector('#pokemon-search').value
//   // console.log(inputValue)
//   removePokemon()
//   fetchData(inputValue)
//   document.querySelector('#pokemon-search').value = ""
// })

// const pTags = document.querySelectorAll('p')
// pTags.addEventListener('click', (e) => {
//   e.preventDefault()
//   const inputValue = document.querySelectorAll('p').value
//   // console.log(inputValue)
//   // removePokemon()
//   fetchData(inputValue)
//   document.querySelector('#pokemon-search').value = ""
  
// })

// console.log(pTags)
// const listItemClick = (e) => {
//   if (!e.target) return;

//   const listItem = e.target;
//   if (!listItem.textContent) return;
//   console.log(listItem.textContent)

//   const pokemon = listItem.textContent.split('.')[0];
//   fetchData(pokemon);

//   for (const pTag of pTags) {
//     pTags.addEventListener('click', listItemClick);
//   }
// }
// const leftButton = document.querySelector('.left-button');
// const rightButton = document.querySelector('.right-button');
// let prevUrl = null;
// let nextUrl = null;

// const rightButtonClick = () => {
//   if (nextUrl) {
//     fetchPokeList(nextUrl);
//   }
// };

// // leftButtonClick.addEventListener('click', handleLeftButtonClick);
// rightButton.addEventListener('click', rightButtonClick);


// // Remove previous search history

// function removePokemon() {
//   console.log(leftContainer)

//   while (leftContainer.lastChild) {
//     leftContainer.removeChild(leftContainer.lastChild)
//   }
// }
    











