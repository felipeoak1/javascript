/* Atribuição via desestruturação (Objetos) */

// A desestruturação em objetos acontece de maneira similar a em arrays, mas com algumas pequenas diferenças:
// Desestruturação básica
let produtos = {
	detergente:'1.77',
	vassoura1:'5',
	sabao:'5,55',
	frutas: {
		maca:'maça',
		mamao:'6,4',
		melao:'3,5',
	}
};

let { vassoura1 } = produtos
console.log(vassoura)

// Renomeando a variável
let produtos1 = {
	detergente:'1.77',
	vassoura:'5',
	sabao:'5,55',
	frutas: {
		maca:'maça',
		mamao:'6,4',
		melao:'3,5',
	}
};

let { vassoura:renomeada } = produtos1
console.log(renomeada)

/* Uma das diferenças principais é que na desestruturação de objetos não é possível a emissão com a utilização de vírgulas, neste caso, para acessarmos uma variável basta indicar diretamente a sua chave. */
let produtos2 = {
	detergente:'1.77',
	vassoura2:'5',
	sabao:'5,55',
	frutas: {
		maca:'maça',
		mamao:'6,4',
		melao:'3,5',
	}
};

let { vassoura2, sabao } = produtos2
console.log(vassoura2, sabao)

// Também podemos atribuir valores para caso aquela chave não exista
let produtos3 = {
	detergente:'1.77',
	vassoura3:'5',
	frutas: {
		maca:'maça',
		mamao:'6,4',
		melao:'3,5',
	}
};

let { vassoura3, sabao1 = 'Não informado' } = produtos3
console.log(vassoura3, sabao1)

// Podemos acessar valores de objetos que estão dentro de outros objetos
let produtos4 = {
	detergente:'1.77',
	vassoura:'5',
	sabao:'5,55',
	frutas: {
		maca:'maça',
		mamao:'6,4',
		melao:'3,5',
	}
};

let { frutas: { maca, melao} } = produtos4
console.log(maca, melao)

// Onde também é possível a renomeação da sua variável
let produtos5 = {
	detergente:'1.77',
	vassoura:'5',
	sabao:'5,55',
	frutas: {
		maca:'maça',
		mamao:'6,4',
		melao:'3,5',
	}
};

let { frutas: { maca:m, melao:mm} } = produtos5
console.log(m, mm)

// E também podemos utilizar o operador rest
let produtos6 = {
	detergente:'1.77',
	vassoura:'5',
	sabao:'5,55',
	frutas: {
		maca:'maça',
		mamao:'6,4',
		melao:'3,5',
	}
};

let { detergente, ...resto } = produtos6
console.log(detergente, resto)