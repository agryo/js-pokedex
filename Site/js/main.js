const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url) /* O Fetch é usado para chamar os comandos GET, PUT, etc. */
    /* O Then serve como o Try, Catch, Finally */
    .then((response) => response.json()) /* Significa o mesmo que chamar uma função que recebe a resposta e converte em JSON */
    .then((jsonBody) => console.log(jsonBody)) /* Significa o mesmo que chamar outra função que recebe o JSON criado e exibe o JSON */
    .catch((error) => console.error(error)) /* Significa o mesmo que chamar um função que recebe o ERRO e mostre esse erro. */

const x = 10 + 10
console.log(x)