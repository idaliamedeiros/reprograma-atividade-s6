const obj = require("./script")

for (let x = 0; x < obj.length; x++){

    const filmes = obj[x]
    
    console.log(`Título: ${filmes.title}`)
    console.log(`Desrição: ${filmes.description}`)
    
}