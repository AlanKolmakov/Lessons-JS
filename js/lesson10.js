'use strict';

//! Урок 10. Массивы (ссылки, for...of, удаление, управляющиу инструкции, сортировка)

//// ссылки

//const items = [1, 2];

//// ссылаются на один и тот же массив
//const items2 = items;
//items2.push(3);

//console.log(items); // [1, 2, 3]
//console.log(items2);// [1, 2, 3]

//console.log(items === items2);

//// более того, если передать массив в какую-то функцию, которая  его изменяет, то массив тоже изменится.

//const f = (coll) => coll.push ('wow');

//const items = ['one'];
//f(items);
//console.log(items);// [ 'one', 'wow' ]

//f(items);
//console.log(items);// ['one', 'wow', 'wow']

//f(items);
//console.log(items);// ['one', 'wow', 'wow', 'wow']

// агрегация - любые вычисления, которая строится на основе всего набора данных, например, поиск max, min, среднего.

// функция поиска максимального значения
//const calculateMax = (coll) => {
//	if (coll.length === 0) {
//		return null;
//	}

//	let max = coll[0]; // принимаем за максимальное первый элемент
//	for (let i = 1; i < coll.length; i++) {
//		const currentElement = coll[i];
//		if (currentElement > max) {
//			max = currentElement;
//		}
//	}
//	return max;
//};

//console.log(calculateMax([])); // null
//console.log(calculateMax([3, 2, -10, 38, 0, -2, -4, 555])); // 555

// Найти сумму элементов в массиве
//const calculateSum = coll => {
//	let sum = 0; // начальное значение суммы
//	for(let i = 0; i < coll.length; i++) {
//		sum += coll[i]; // поочередно складываем элементы
//	}
//	return sum;
//};

//console.log(calculateSum([])); // 0
//console.log(calculateSum([3, 2, -10, 38, 0]));

//// процесс вычислений
//let sum = 0;
//sum = sum + 3; // 3
//sum = sum + 2; // 5
//sum = sum + -10; // -5
//sum = sum + 38; // 33
//sum = sum + 0; // 33

// Задача. написать функциюю, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3.
// const coll = []; // 0
// const coll = [8, 9, 21, 19, 18, 22, 7];
// Пример: calculateSum(coll); // 48

//const calculateSum = coll => {
//	let sum = 0;
//	for (let i = 0; i < coll.length; i++) {
//		if (coll[i]%3 === 0) {
//			sum += coll[i];
//		}
//	}
//	return sum;
//};

//console.log(calculateSum([]));
//console.log(calculateSum([8, 9, 21, 19, 18, 22, 7]));

////! обычный цикл for
//const userNames = ['petya', 'vasya', 'evgeny'];

//for (let i = 0; i < userNames.length; i++) {
//	console.log(userNames[i]);
//};

////! цикл for...of - данный цикл знает о том, как перебирать элементы и когда они закончатся
//const userNames = ['petya', 'vasya', 'evgeny'];

//for(const name of userNames) {
//	console.log(name);
//};

//! данный цикл отлично подходит для задач агрегации
//! for...of
//const calculateSum = coll => {
//	let sum = 0;
//	for(const value of coll) {
//		sum += value;
//	}
//	return sum;
//};

//console.log(calculateSum([])); // 0
//console.log(calculateSum([3, 2, -10, 38, 0]));

//! цикл for
//const calculateSum = coll => {
//	let sum = 0; // начальное значение суммы
//	for(let i = 0; i < coll.length; i++) {
//		sum += coll[i]; // поочередно складываем элементы
//	}
//	return sum;
//};

//console.log(calculateSum([])); // 0
//console.log(calculateSum([3, 2, -10, 38, 0]));

//const greeting = 'Hello';
//for(const symbol of greeting) {
//	console.log(symbol);
//};

//! цикла for...of будет не достаточно, когда потребуется ручное управление обходом, например, когда нужно идти не по каждому элементу массива, а через один.
//for (let i = 0; i < items.length; i += 2) {
//	 какой-то код
//};

//! иногда нужно обходить массив в обратном порядке, for...of также бессилен
//for (let i = items.length - 1; i >= 0; i--) {
//	 какой-то код
//};

//! ситуация, когда нужно перебирать числа в апределенном диапозоне
//for(let i = 5; i < 10; i++) {
//	 какой-то код
//};

//! бывают ситуации, когда во время обхода необходимо менять исходный массив
//for(let i = 0; i < items.length; i += 1) {
//	 items[i] = // что-то делаем
//};

//! напишите функцию, которая высчитывает среднее арифметическое элементов переданного массива
//! пример:
//! const temperatures = [37.5, 34, 39.3, 40, 38.7, 41.5];
//! calculateAverage(temperatures); // 38.5
//! const temperatures2 = []; // null;
//! calculateAverage(temperatures2); // null

//const calculateAverage = temperatures => {
//	let sum = 0;
//	if (temperatures.length === 0) {
//		return null;
//	}
//	for(const value of temperatures) {
//		sum += value;
//	}
//	return sum / temperatures.length;
//};

//console.log(calculateAverage([]));
//console.log(calculateAverage([37.5, 34, 39.3, 40, 38.7, 41.5]));

// удаление элементов из массива
//const animals = ['cats', 'dogs', 'birds'];
//delete animals[1]; // удаляем элемент под индксом 1. Уменьшение размера массива - нежелательная операция.
//console.log(animals);
//console.log(animals.length);

// задача. удаление null элементов из массива
//const compact = coll => {
//	// создание результирующего массива, который наполняется только подхлдящими под условия значениями
//	// именно так нужно воспринимать фразу удалить из массива что-то
//	const result = [];
//	for(const item of coll) {
//		if(item !== null) {
//			result.push(item);
//		}
//	}
//	return result;
//};

//console.log(compact([0, 1, false, null, true, 'wow', null])); // [0, 1, false, true, 'wow']
//console.log(compact([])); // []

// управляющие инструкции (break и continue)
// break - производит выход их цикла
//const coll = ['one', 'two', 'three', 'four', 'stop', 'five'];
//for(const item of coll) {
//	if(item === 'stop') {
//		break;
//	}
//	console.log(item);
//};

// continue - позволяет пропустить итерацию цикла.
//const coll = ['one', 'two', null, 'four', null, 'five'];
//const myCompact = coll => {
//	const result = [];
//	for(const item of coll) {
//		if(item === null) {
//			continue;
//		}
//		result.push(item);
//	}
//	return result;
//};

//console.log(myCompact(coll));

// сортировка массивов.

//const numbers = [8, 3, 10];

//numbers.sort((a, b) => a - b); // сортировка по возрастанию (numbers.sort((a, b) => b - a);) по убыванию (от b до a)
//console.log(numbers); // [3, 8, 10];

//numbers.reverse(); // метод reverse - отсортировать в обратном порядке ( по убыванию)
//console.log(numbers);// [10, 8, 3];

// пузырьковая сортировка (bubble sort)
//const bubbleSort = coll => {
//	let stepsCount = coll.length -1;
//	let swapped; // был ли совершен обмен элементов во время переборки элементов массива
//	// do...while. разница в проверки, здесь она делается не до выполнения тела, а после
//	do {
//		swapped = false;
//		for(let i = 0; i < stepsCount; i++) {
//			if(coll[i] > coll[i + 1]) {
//				const temp = coll[i]; // константа для хранения текущего элемента
//				coll[i] = coll[i + 1];
//				coll[i + 1] = temp;

//				swapped = true;
//			}
//		}
//		stepsCount -= 1;
//	} while (swapped); // продолжаем наши перестановки, пока Swapped === true;
//	return coll;
//};
//console.log(bubbleSort([99, 2, 67, 55, 33, 1, 89, 43, 55, 0, 22, 78]));
