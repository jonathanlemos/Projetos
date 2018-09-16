//\t = tab, \n = pular linha, \s = espaço, tab e pular linha

const texto = `
ca  r
r   o s!
`;

console.log(texto.match(/ca\tr\nr\to\ss!/));
console.log(texto.match(/ca \nr/g));