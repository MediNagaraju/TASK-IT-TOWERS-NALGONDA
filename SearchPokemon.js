const searchBtn=document.getElementById('searchBtn').addEventListener('click',SearchPokemon)

function SearchPokemon(){
    const query=document.getElementById('searchInput').value.toLowerCase().trim()
    if(query){
        const apiUrl=`https://pokeapi.co/api/v2/pokemon/${query}`
        fetch(apiUrl)
        .then(response =>{
            if(!response.ok){
                throw new Error('Pokemon Not Found')
            }
            return response.json()
        })
        .then(data =>{
            displayPokemon(data)
        })
        .catch(error =>{
            console.error('Error',error);
            displayError(error.message)
        })
    }
}


function displayPokemon(pokemon){
    const pokemon_details= document.getElementById('pokemon-details')
    pokemon_details.innerHTML=`
    <div class='pokemon-name'>
    <h4>${pokemon.name.toUpperCase()}</h4>
    </div>

    <div class='pokemon-img'>
    <img src=${pokemon.sprites.front_default} alt=${pokemon.name}>
    </div>
    <div id='pokemon-details'>
    <p><strong>Height: </strong>${pokemon.height /10}m</p>
    <p><strong>Weight: </strong>${pokemon.weight /10}kg</p>
    <p><strong>Type: </strong>${pokemon.types.map(type=>type.type.name).join(',')}</p>
    </div>
    `
}

function displayError(message){
    const pokemonInfo=document.getElementById('pokemon-details')
    pokemonInfo.innerHTML=`<p>${message}</p>`
}