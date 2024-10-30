const imgPokemon = document.querySelector("#imgPokemon")
const nomePokemon = document.querySelector("#nomePokemon")
const numeroPokemon = document.querySelector("#numeroPokemon")
const inputText = document.querySelector("#inputText")
const form = document.querySelector(".form-busca")
const buttonA = document.querySelector("#btnAnterior")
const buttonP = document.querySelector("btnProximo")

let IDPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.com/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const showPokemon = async (pokemon) => {
    const datapokemon = await fetchPokemon(pokemon);
    IDPokemon = datapokemon.id;
    imgPokemon.src = datapokemon.sprites.front_default;
    const texto = document.createElement("span")
    texto.textContent = datapokemon.types[0].type.name;
    typePoke.appendChild(texto);
    nomePokemon.innerHTML = datapokemon.name;
}

showPokemon("charizard")
