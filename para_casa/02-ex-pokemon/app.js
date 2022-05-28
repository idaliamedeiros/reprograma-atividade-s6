const data = require("./script")

for(let pokemon = 0; pokemon < data.length; pokemon++){
    const pokemonios = data[pokemon]
    console.log(pokemonios.name)
    console.log(pokemonios.description)
    console.log(pokemonios.types)
}