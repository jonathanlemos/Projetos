const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.';

//g siginifica procurar global, ou seja, em toda a string retornando mais de um resultado. Caso contrário retorna apenas o primeiro resultado.
//i significa procurar tanto maiuscula quanto minuscula
const regex = /casa/gi;

console.log(texto.match(regex));
//console.log(texto.match(/a /b));