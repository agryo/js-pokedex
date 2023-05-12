/* Essa variável pega o conteúdo do meu Index com a ID="pokemonsOlList" e guarda para alterações. */
const pokemonsListHtml = document.getElementById('pokemonsOlList')

/* Essa variável pega o conteúdo da pagination. */
const carregarMaisButton = document.getElementById('carregarMaisButton')

/* Aqui são os parametros usados na PokeAPI e o limite que eu quero. */
const limiteTotal = 151
const limit = 12
let offset = 0;

/* Está função faz a conversão do JSON para uma parte específica do meu HTML, nesse caso a "li" do HTML da lista. */
function convertPokemonToHtmlLi(pokemon) {
    /* O RETURN faz o retorno do código HTML que vai ser adicionado ao INDEX da pagina principal. */
    return `
            <li class="pokemon ${pokemon.tipo}">
                <span class="number">#${pokemon.numero}</span>
                <span class="name">${pokemon.nome}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.tipos.map((tipo) => `<li class="type ${tipo}">${tipo}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.foto}" 
                         alt="${pokemon.nome}">
                </div>
            </li>
            `
}

/* Está função chama o arquivo poke-api.js e usa as funções de lá. */
/* Esse método getPokemons() é um dos métodos do arquivo poke-api.js */
/* O ".then" segue na mesma linha ou não, pode ser delocado para abaixo para ficar mais legível. */
function carregarMaisPokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemonsList = []) => {
        /* Aqui ele faz a inclusão de toda a lista já convertida para o HTML do Index da página.
           A variável pokemonsListHtml recebe a inclusão de toda a lista através do .map() que
           serve como um For, só que chama o método que já transforma em HTML e junta com o Join('')
         */
        const novoHtml = pokemonsList.map(convertPokemonToHtmlLi).join('')
        pokemonsListHtml.innerHTML += novoHtml
    })    
}

carregarMaisPokemons(offset, limit)

carregarMaisButton.addEventListener('click', () => {
    offset += limit
    const qtdPokemonsProximaPagina = offset + limit

    if (qtdPokemonsProximaPagina >= limiteTotal) {
        const novoLimit = limiteTotal - offset
        carregarMaisPokemons(offset, novoLimit)

        carregarMaisButton.parentElement.removeChild(carregarMaisButton)
    } else {
        carregarMaisPokemons(offset, limit)
    }
})