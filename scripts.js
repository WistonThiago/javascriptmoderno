// 1º: Estudos VAR, LET e CONST

var x = 10; //Todas as VAR's podem ser alteradas por outros blocos de escopo
var y = 15;

if (y>10) {
	var x = 5;
	console.log(x);
}

console.log(x);

let a = 10; //LET's não podem ser alterados, o global se mantém, mas o de cada bloco se mantém
let b = 15;


if (b>10){
	let a = 5;
	console.log(a);
}

console.log(a);

let i = 5;

for (i = 0;i < 5;i++){
	console.log(i)
}

console.log(i);

function logName() {
	const name = "Matheus";	//Mesmo princípio do LET, se mantém no escopo e o global não se altera
	console.log(name)
}

const name = "Pedro";
console.log(name);
logName();

//2º: ARROW FUNCTIONS = () => {};

const sum = function sum(a, b) {
	return a + b;
}


const arrowSum = (a,b) => a + b

console.log(sum(5,5));
console.log(arrowSum(5,5));

const greeting = (name) => {
	if (name) {
		return 'Olá ' + name + '!';
	} else {
		return 'Olá!';
	}
}

console.log(greeting('Wiston'));
console.log(greeting());

const testArrow = () => console.log("Testou!");
testArrow();


const user = {
	name:'Wiston',
	sayUserName(){
		var self = this 
		setTimeout(function () {
			console.log(self)
			console.log('Username: ' + self.name)
		}, 500)
	},

	sayUserNameArrow() {
		setTimeout(() => {
			console.log('Username: ' + this.name )
		}, 700)
	}

}

user.sayUserName();
user.sayUserNameArrow();

//3º: MÉTODOS FILTER

const bloco = [1, 2, 3, 4, 5]
console.log(bloco)

const highNumbers = bloco.filter((n) => {
	if ( n >= 3 ) {
		return n
	}
})

console.log(highNumbers)

const users = [
	{name: 'Matheus', available: true},
	{name: 'Pedro', available: false},
	{name: 'João', available: false},
	{name: 'Marcos', available: true},	
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)

//4º: MÉTODO MAP

//Mapeia e altera características de um array, podendo mudar status ou adicionar uma nova propriedade

const products = [
	{name: 'Camisa', price: 10.99, category: 'Roupas'},
	{name: 'Chaleira Elétrica', price: 49.99, category: 'Eletro'},
	{name: 'Fogão', price: 400, category: 'Eletro'},
	{name: 'Calça Jeans', price: 50.99, category: 'Roupas'},
]

products.map((product) => {
	if (product.category === 'Roupas') {
		product.onSale = true
	}
})

console.log(products)

//5º: TEMPLATE LITERALS

/*Simplesmente as variáveis são interpoladas usando `` e o ${}, de maneira global e organizada, não
interferindo nas aspas.
*/

const userName = 'Wiston'
const age = 23

console.log(`"Olá ${userName}! É verdade que você possui ${age} anos?"`)

//6º DESTRUCTURING

/*Esse método transforma dados de um array ou um objeto em variáveis, muito bom pra ajudar em interpolações
*/

const fruits = ["Apple", "Orange", "Papaya"]
const [f1, f2, f3] = fruits

console.log(f3);

const productDetails = {
	name: "Mouse",
	price: 39.99,
	category: "Periféricos",
	color: "Cinza",
}

const {name: productName, price, category: productCategory, color} = productDetails

console.log(`O nome do produto é ${productName}, ele custa R$ ${price}, está listado em ${productCategory} e a sua cor é ${color}`)

//7º SPREAD OPERATORS

/* Junção dos elementos de dois ou mais arrays em um só, incluindo outros arrays inteiros também
*/

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]
console.log(a4)

const carName = { name: 'Gol' }
const carBrand = { marca: 'VW' }
const otherInfo = { km: 100000, price: 70000 }

const car = { ...carName, ...carBrand, ...otherInfo }

console.log(car);


//8º CLASSES

class Product {
	constructor (name, price) {
		this.name = name
		this.price = price
		}

		productDiscount (discount){
			return this.price * ((100 - discount) / 100)
		}
}

const shirt = new Product('Regata', 40)
const tenis = new Product('Nike Jordan V', 1250)

console.log(shirt)
console.log(shirt.productDiscount(25))
console.log(tenis.productDiscount(35))

//9º HERANÇA

class ProductWithAttributes extends Product{
	constructor (name, price, colors) {
		super(name, price)
		this.colors = colors
	}

	showColors(){
		console.log("As cores são: ")
		this.colors.forEach(color => {
			console.log(color)
		});
	}
}

const hat = new ProductWithAttributes ("Boné", 35, ["Preto", "Azul", "Verde"])

console.log(hat)
hat.showColors()