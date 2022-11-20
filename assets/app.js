import { generateMarkup } from "./utils/generateMarkup.js";
import { Pokemon } from "./utils/pokemon.js";
import { getRandomNumber } from "./utils/randomNumber.js"

const fetchBtn = document.querySelector("[data-pokemon-fetch]")
const statsEl = document.querySelector("[data-pokemon-stats]")

fetchBtn.addEventListener("click", () => {
    getPokemon();
})

document.addEventListener("DOMContentLoaded", () => {
    getPokemon();
})

function getPokemon() {
    const pokemonNum = getRandomNumber(905, 1);
    const pokemon = new Pokemon(pokemonNum);
    console.log(pokemon)
    setTimeout(() => {
        statsEl.innerHTML = generateMarkup(pokemon);

    }, 1000);
}