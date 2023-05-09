const pokeApi = {}

/* Esse método cria um objeto Pokemon já com todos os detalhes que preciso do PokeAPI. */
function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.numero = pokeDetail.id
    pokemon.nome = pokeDetail.name

    const tipos = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [tipo] = tipos
    pokemon.tipos = tipos
    pokemon.tipo = tipo

    pokemon.foto = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

/* Esse método faz a conversão dos detalhes dos pokemons para o JSON. 
   Ela já pega a URL do pokemon individualmente de acordo com a API do site PokeAPI.co 
   "pokemon.url" dentro do Fetch.
*/
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 9) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    /* O Fetch é usado para realizar a manipulação lógica do JSON que é retornado bruto e os THENs vão delimitando o que vou usar.  */
    return fetch(url) /* O Fetch é usado para chamar os comandos GET, PUT, etc. do Browser, apartir da URL na variável. */
            /* O Then serve como o Try, Catch, Finally */
            .then((response) => response.json()) /* O primeiro Then, chama uma função que recebe a resposta da URL e converte em JSON */
            .then((jsonBody) => jsonBody.results) /* Aqui, chama outra função que recebe o JSON criado e filtra o RESULTS desse JSON. */
            .then((pokemon) => pokemon.map(pokeApi.getPokemonDetail)) /* Aqui, chama a função criada acima com os detalhes em JSON. */
            .then((detailRequest) => Promise.all(detailRequest)) /* Aqui ele faz todas as buscas em cada pokemon e vai guardando. */
            .then((pokemonsDetalhes) => pokemonsDetalhes) /* Aqui ele já trás todos os detalhes em JSON. */
            .catch((error) => console.error(error)) /* O Catch, chama um função que recebe o ERRO e mostra esse erro. */
}