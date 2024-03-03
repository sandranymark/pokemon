document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonBox").innerHTML = `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokemonInfos">
        <h1>${capitalizeFirstLetter(data.name)}</h3>
        <p>#ID: ${data.id}</p>
        <p>Weight: ${data.weight}</p>
        <p>Height: ${data.height}</p>
        
        <p> Abilities: ${data.abilities.map(ability => ability.ability.name).join(' , ')} </p>
        <p> Moves:</p> <br><ul> ${data.moves.map(move => move.move.name).join(' , ')}</ul>

      </div> `;
    })
    .catch((err) => {
      document.querySelector(".pokemonBox").innerHTML = `
    <h4> Pokemon not found 😞</h4>
        `;
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}


//EMOJIS PÅ MAC
//Ctrl + Cmd + mellanslag: Öppnar emojis-fönstret.

//EMOJIS PÅ WINDOWS
//Windows + . (punkt) eller Windows + ; (semikolon): Öppnar emojis-fönstret.