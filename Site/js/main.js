const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

/* Está função faz a conversão do JSON para uma parte específica do meu HTML, nesse caso a "Li" da lista. */
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

/* Essa variável pega o conteúdo do meu Index e guarda para alterações. */
const pokemonsListHtml = document.getElementById('pokemonsOlList')

/* O Fetch é usado para realizar a manipulação lógica do JSON que é retornado bruto e os THENs vão delimitando o que vou usar.  */
fetch(url) /* O Fetch é usado para chamar os comandos GET, PUT, etc. do Browser, apartir da URL na variável. */
    /* O Then serve como o Try, Catch, Finally */
    .then((response) => response.json()) /* O primeiro Then, chama uma função que recebe a resposta da URL e converte em JSON */
    .then((jsonBody) => jsonBody.results) /* O segundo Then, chama outra função que recebe o JSON criado e filtra o RESULTS desse JSON. */
    /* O último Then, chama outra função que exibe o JSON já filtrado. */
    .then((pokemonsList) => {
        /* O For faz a seleção um por um dos pokemons. */
        for (let i = 0; i < pokemonsList.length; i++) {
            const pokemon = pokemonsList[i];
            /* Aqui ele está concatenando (adicionando) mais conteúdo ao HTML já existente. Nesse caso, a lista de Pokemons. */
            pokemonsListHtml.innerHTML += convertPokemonToHtmlLi(pokemon);
        }
    })
    .catch((error) => console.error(error)) /* O Catch, chama um função que recebe o ERRO e mostra esse erro. */

/*const x = 10 + 10
console.log(x)*/