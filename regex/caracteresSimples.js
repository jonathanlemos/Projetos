const texto = '1,2,3,4,5,6,a.b c!d?e';
const regexVirgula = /,/;
console.log(texto.split(regexVirgula)); //separa por virgulas em array
console.log(texto.match(regexVirgula)); //encontra o primeiro elemento, e retorna, pois não possui a letra/flag 'g' de global

console.log(texto.match(/,/g)); //encontra e retorna todas as virgulas pois nele possui a flag 'g'
console.log(texto.match(/A/g)); //encontra e retorna todas as letras 'A' em caixa alta pois possui a flag 'g'
console.log(texto.match(/A/gi)); //encontra e retorna todas as letras 'A' pois possui a flag 'g' e indiferente se for caixa alta ou caixa baixa pois possui a letra/flag 'i'
console.log(texto.match(/2/g)); //encontra todos os números 2 na string, pois possui a letra/flag 'g'
console.log(texto.match(/b c!d/)); //encontra apenas a primeira string entre as barras pois possui a flag 'a' que é default
