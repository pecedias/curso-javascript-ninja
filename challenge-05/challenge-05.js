/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function newFunction(arg) {
	return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( newFunction(arr)[1] ); // "3"

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction(arr, num) {
	return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var newArray = [1, 'Paulo', true, null, 52.4];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( myFunction2 (newArray, 0) );
console.log( myFunction2 (newArray, 1) );
console.log( myFunction2 (newArray, 2) );
console.log( myFunction2 (newArray, 3) );
console.log( myFunction2 (newArray, 4) );

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro) {
	var obj = {
		Cosmos: {quantidadePaginas: 400, autor: 'Carl Sagan', editora: 'Records'},
		oMundoDeSofia: {quantidadePaginas: 500, autor: 'Jostein Gaarder', editora: 'Saraiva'},
		JogadorN1: {quantidadePaginas: 385, autor: 'Ernest Cline', editora: 'Random House'}
		};
	return obj;
}

// OU
function book(nomeLivro) {
	var obj = {
		'Cosmos': {quantidadePaginas: 400, autor: 'Carl Sagan', editora: 'Records'},
		'O Mundo de Sofia': {quantidadePaginas: 500, autor: 'Jostein Gaarder', editora: 'Saraiva'},
		'Jogador N1': {quantidadePaginas: 385, autor: 'Ernest Cline', editora: 'Random House'}
		};
/*		if (!nomeLivro) {
			return obj;
		}
		return obj[nomeLivro]; */

		return !nomeLivro ? obj : obj[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() ); // Cosmos: {quantidadePaginas: 400, autor: "Carl Sagan", editora: "Records"}JogadorN1: {quantidadePaginas: 385, autor: "Ernest Cline", editora: "Random House"}oMundoDeSofia: {quantidadePaginas: 500, autor: "Jostein Gaarder", editora: "Saraiva"}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = 'Cosmos';
console.log( 'O livro '+nomeLivro+ ' tem ' +book('Cosmos').quantidadePaginas+ ' páginas!' ) // "O livro Cosmos tem 400 páginas!"

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro Jogador N1 é ' +book('Jogador N1').autor; ) // "O autor do livro Jogador N1 é Ernest Cline"

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro O Mundo de Sofia foi publicado pela editora ' +book('O Mundo de Sofia').editora; ) // "O livro O Mundo de Sofia foi publicado pela editora Saraiva"
