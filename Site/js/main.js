/* Está função faz a conversão do JSON para uma parte específica do meu HTML, nesse caso a "li" do HTML da lista. */
function convertPokemonToHtmlLi(pokemon) {
    /* O RETURN faz o retorno do código HTML que vai ser adicionado ao INDEX da pagina principal. */
    return `
            <li class="pokemon ${pokemon.tipo}">
                <span class="number">#${pokemon.numero}</span>
                <span class="name">${pokemon.nome}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.tipos.map((tipo) => `<li class="type">${tipo}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.foto}" 
                         alt="${pokemon.nome}">
                </div>
            </li>
            `
}

/* Essa variável pega o conteúdo do meu Index com a ID="pokemonsOlList" e guarda para alterações. */
const pokemonsListHtml = document.getElementById('pokemonsOlList')

/* Está função chama o arquivo poke-api.js e usa as funções de lá. */
/* Esse método getPokemons() é um dos métodos do arquivo poke-api.js */
/* O ".then" segue na mesma linha ou não, pode ser delocado para abaixo para ficar mais legível. */
pokeApi.getPokemons().then((pokemonsList = []) => {
    /* Aqui ele faz a inclusão de toda a lista já convertida para o HTML do Index da página.
       A variável pokemonsListHtml recebe a inclusão de toda a lista através do .map() que
       serve como um For, só que chama o método que já transforma em HTML e junta com o Join('')
     */
    pokemonsListHtml.innerHTML += pokemonsList.map(convertPokemonToHtmlLi).join('')
})