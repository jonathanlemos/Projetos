const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';

const regexNove = RegExp('9');
console.log('Metodos da RegExp...');

//test valida se é verdadeiro ou falso 
console.log('test:  ' + regexNove.test(texto));

//exec tras o indice
console.log('exec:  ' + regexNove.exec(texto));

const regexLetras = /[a-f]/g;
console.log('Métodos da string');

//para encontrar dentro da string a regra do regex
console.log('match:  ' + texto.match(regexLetras));

//retorna o indice do primeiro elemento da regra regex encontrada na string
console.log('search: ' + texto.search(regexLetras));

//usando o replace junto do regex
console.log('replace:  ' + texto.replace(regexLetras, 'Achei'));

//usando split para quebrar uma string de acordo com o regex
console.log('split:  ' + texto.split(regexLetras));





