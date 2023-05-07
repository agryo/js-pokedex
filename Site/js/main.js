const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

/* Está função faz a conversão do JSON para uma parte específica do meu HTML, nesse caso a "li" do HTML da lista. */
function convertPokemonToHtmlLi(pokemon) {
    /* O RETURN faz o retorno do código HTML que vai ser adicionado ao INDEX da pagina principal. */
    return `
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
                         alt="${pokemon.name}">
                </div>
            </li>
            `
}

/* Essa variável pega o conteúdo do meu Index com a ID="pokemonsOlList" e guarda para alterações. */
const pokemonsListHtml = document.getElementById('pokemonsOlList')

/* Está função chama o arquivo poke-api.js e usa as funções de lá. */
pokeApi.getPokemons() /* Esse é um dos métodos do arquivo poke-api.js */
    /* O ".then" segue na mesma linha ou não, foi delocado para abaixo para ficar mais legível. */
    .then((pokemonsList) => {
        /* O For faz a seleção um por um dos pokemons. */
        for (let i = 0; i < pokemonsList.length; i++) {
            const pokemon = pokemonsList[i];
            /* Aqui ele está concatenando (adicionando) mais conteúdo ao HTML já existente. Nesse caso, a lista de Pokemons. */
            pokemonsListHtml.innerHTML += convertPokemonToHtmlLi(pokemon);
        }
    })