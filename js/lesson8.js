"use strict";
// Окружение. Замыкание. Чистые функции. Знакомство с массивами

// замыкания - функция, которая запоминает внешний идентификаторы, исплользуемые внутри.
// замкнула в себе некоторую информацию из области видимости.
//const createPrinter = () => {
//	const name = 'King'; // локальная константа

//	const printName = () => {
//		console.log(name);
//	};
//	return printName; // возврат функции printName
//};

//const myPrinter = createPrinter();
//myPrinter();

// у функции printName нет локальных компонентов, но у нее есть доступ к области видимости, где она сама находится, внешней области, где задана константа name.


// еще пример замыкания
//function getCounter() {
//	let count = 0;
//	return function() {
//		return count++;
//	}
//};

//const counter = getCounter();

//console.log(counter());
//console.log(counter());
//console.log(counter());

// Задачка.

//const x = 7;
//const f = (x) => () => () => x;
//console.log(f(10)()()); // 10

// Задачка 2. С каким числом надо вызвать функцию, чтобы получить true? Функция Предикат

//const isRightNum = (num) => {
//	const res = (num > 3) && (num ** 2 < 26) && (num !== 5);
//	return res;
//};

//console.log(isRightNum(4)); //true

// Задачка 3. Какое число выведется на экрае?

//const value = 777;
//const func = value => value + 1;
//console.log(func(5));


// идеальные числа. функция, которая принимает число и возвращает true, если оно совершенное, false - в ином случае. Напимер, 6 - идеальное число, потому что 6 = 1 + 2 + 3
//let x = 0;
//const isPerfectNumber = num => {
//	let sum = 0;
//	let remainder;
//	for(let i = 1; i < num; i++) {
//		remainder = num % i;
//		if (remainder === 0) {
//			sum = sum +i;
//		}
//	}
//	if (sum === num) {
//		console.log(x,' совершенное число');
//		return true;
//	} else  return false;
//};

//for (x = 0; x < 30; x++){
//isPerfectNumber(x);
//};

// вариант 2.
//const getPerfect = (a, b) => {
//	let result = [];
//	for (let i = a; i < b; i++) {
//		let sum = 0;
//		for (let n = 1; n <= i / 2; n++) {
//			if (i % n === 0) sum += n;
//		}
//		if (i === sum) result.push(i);
//	}
//	return result;
//}

//console.log(getPerfect(1, 1000));

//const getRandomIntInclusive = (min, max) => {
//	min = Math.ceil(min);
//	max = Math.floor(max);
//	return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
//};
//for (let x = 0; x <100; x++) {
//let result = getRandomIntInclusive(0, 100);
//if (result === 12) {
//	console.log(result);
//}
//};


// задача, функция, которая делает заглавной первую букву каждого слова в предложении
// пример: letterUpper ('hello world)

//const solution = (text) => {
//	let str = '';
//	for (let i = 0; i <= text.length - 1; i++) {
//		if (text[i - 1] == 0 || text[i - 1] === undefined) {
//			str += text[i].toUpperCase();
//		} else str += text[i];
//	}
//	return str;
//};

//console.log(solution("hello world!"));

// массивы - это упорядоченные наборы (коллекции) элементов (друзья в соцсети) задача массива - представить такие коллекции в виде единой структуры, которая позволяет работать с ним как с единым целым.

// определение массива
//const items = [];

// создание массива с тремя элиментами
//const animals = ['cats', 'dogs', 'birds'];

// получение данных
//animals[0]; // 'cats'
//animals[1]; // 'dogs'
//animals[2]; // 'birds'

// узнать длинну массива
//console.log(animals.length);

// обращение к элементу при помощи переменной
//let i = 1;
//const animals = ['cats', 'dogs', 'birds'];
//console.log(animals[i]);

// в квадратные скобки можно подставлять вызов функции
//const getIndexOfSecondElement = () => 1;
//const animals = ['cats', 'dogs', 'birds'];
//console.log(animals[getIndexOfSecondElement()]); // 'dogs'