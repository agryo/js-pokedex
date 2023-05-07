const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

/* O Fetch é usado para realizar a manipulação lógica do JSON que é retornado bruto e os THENs vão delimitando o que vou usar.  */
fetch(url) /* O Fetch é usado para chamar os comandos GET, PUT, etc. do Browser, apartir da URL na variável. */
    /* O Then serve como o Try, Catch, Finally */
    .then((response) => response.json()) /* O primeiro Then, chama uma função que recebe a resposta da URL e converte em JSON */
    .then((jsonBody) => jsonBody.results) /* O segundo Then, chama outra função que recebe o JSON criado e filtra o RESULTS desse JSON. */
    .then((pokemonsList) => console.log(pokemonsList)) /* O último Then, chama outra função que exibe o JSON já filtrado. */
    .catch((error) => console.error(error)) /* O Catch, chama um função que recebe o ERRO e mostra esse erro. */

const x = 10 + 10
console.log(x)