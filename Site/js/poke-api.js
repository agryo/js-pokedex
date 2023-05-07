const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    /* O Fetch é usado para realizar a manipulação lógica do JSON que é retornado bruto e os THENs vão delimitando o que vou usar.  */
    return fetch(url) /* O Fetch é usado para chamar os comandos GET, PUT, etc. do Browser, apartir da URL na variável. */
            /* O Then serve como o Try, Catch, Finally */
            .then((response) => response.json()) /* O primeiro Then, chama uma função que recebe a resposta da URL e converte em JSON */
            .then((jsonBody) => jsonBody.results) /* O segundo Then, chama outra função que recebe o JSON criado e filtra o RESULTS desse JSON. */
            .catch((error) => console.error(error)) /* O Catch, chama um função que recebe o ERRO e mostra esse erro. */
}