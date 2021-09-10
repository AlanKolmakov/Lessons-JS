"use strict";

//! Лекции 25-26. Рекурсия. Итеративный процесс в JS

//const surfaceAreaCalculator = (radius) => { // radius - аргумент
//return 4 * pi * radius * radius; // return - возвращает результат
//};

//const surfaceofMars = surfaceAreaCalculator(3397);
//const surfaceofMercury = surfaceAreaCalculator(2440);

//const pi = 3.14;
//const surfaceAreaCalculator = (radius) => {
//	return 4 * pi * square(radius);// внутри функции обращение к другой функции
//};

//const square = num => {
//	return num * num;
//};

//const surfaceOfMars = surfaceAreaCalculator(3397); // отвечает как бы на вопрос ЧТО?
//console.log(surfaceOfMars);

// факториал
// задача. на столе 3 книги. сколько возможных вариантов их перестановки
// 1 * 2 * 3
//const factorial = n => {
//	if (n === 0) {
//		return 1;
//	} else {
//		return n * factorial(n-1);
//	}
//};

//console.log(factorial(3));

//! factorial(3);
//! 3 * factorial(2);
//! 3 * 2 * factorial(1);
//! 3 * 2 * 1 * factorial(0);
//! 3 * 2 * 1 * 1;
//!

// создается идентичный ящик
//const factorial = 2 => {
//	if (2 === 0) {
//		return 1;
//	} else {
//		return 2 * factorial(2 - 1);
//	}
//};

//console.log(factorial(3));

// создается идентичный ящик
//const factorial = 1 => {
//	if (1 === 0) {
//		return 1;
//	} else {
//		return 1 * factorial(1 - 1);
//	}
//};

//console.log(factorial(3));

// создается идентичный ящик
//const factorial = 0 => {
//	if (0 === 0) {
//		return 1;
//	} else {
//		return n * factorial(n - 1);
//	}
//};

//console.log(factorial(3));

// задача
// приведено опред. ф-ции, которая принимает на вход целое положительное число n, меньшее или равное 5, и возвращает произведение всех чисел, входящих в интервал [n, 5]
//const product = n => {
//	if (n === 5) {
//		return n;
//	}
//	return n * product(n + 1);
//};

//console.log(product(1));

// задача. функция возвращает сумму всех чисел входящих в интервал [1, n]
//const sum = n => {
//	if (n === 1) {
//		return 1;
//	}
//	return n + sum(n-1);
//};

//console.log(sum(5));// 5 + (4 + 3 + 2 + 1)

// Задача
// реализуйте (с рекурсией) функцию, которая находит сумму последовательности целых чисел.
// последовательность задается двумя значениями: begin - начало, end - конец.
// Пример: begin = 2, и end = 6 дают такую последовательность 2, 3, 4, 5, 6. Сумма будет равна 20.

//const sequenceOfNum = (begin, end) => {
//	let n = begin;
//	if (n === end) {
//		return n;
//	}
//	return begin + sequenceOfNum(begin+1, end);
//};
//console.log(sequenceOfNum(2, 6));

// итеративный процесс - делать что-то по немногу, когда работа распределяептся равномерно на всю неделю.

const factorial = n => {
	if (n === 0) {
		return 1;
	}
	const iter = (counter, accumulator) => {
		if (counter === 1) {
			return accumulator;
		}
		return iter(counter - 1, counter * accumulator);
	};
return iter(n,1);
};

console.log(factorial(10));

// counter - отслеживает изменение от n до 1
// accumulator - текущий результат умножения чисел от n до 1

// iter(3, 1); // iter(3 - 1, 3 * 1)
// iter(2, 3); // iter(2 - 1, 2 * 3)
// iter(1, 6); // iter(counter === 1, return 6)



