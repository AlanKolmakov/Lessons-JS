"use strict";

//  Массивы. Получение данных, изменение/добавление, удаление. Обход массива.

//const = ['cats', 'dogs', 'birds'];
//console.log(Animals[animals.length - 1]); // 'birds' получение последнего элемента в массиве

// напишите функцию, которая возвращает массив из двух элементов - название выходных дней на английском. функция принимает на вход параметр - формат возраста. Есть два возможных значения:
// 'long' - массив содержит значения saturday и sunday
// 'short' - массив содержит значения sat и sun.

// пример вызовы
// myFunction('short'); // короткая запись дней
// meFunction('long'); // длинная запись дней

//const getWeekend = (str) => {
//	let longArray = ['saturday', 'sunday'];
//	let shortArray = ['sat', 'sun'];
//	if (str === 'short') {
//		return shortArray;
//	} if (str === 'long') {
//		return longArray;
//	} else {
//		return 'Ooopppppsss';
//	}
//};

//console.log(getWeekend('short'));
//console.log(getWeekend('long'));

// вариант с использованием switch/case

//const getWeekend = (str) => {
//	let longArray = ['saturday', 'sunday'];
//	let shortArray = ['sat', 'sun'];
//	switch (str) {
//		case 'short': return shortArray;
//		case 'long' : return longArray;
//		default: return longArray;
//	}
//};

//console.log(getWeekend('short'));
//console.log(getWeekend('long'));

// модификация
//const name = 'Amazon';
//console.log(name.toUpperCase()); // 'AMAZON'
//console.log(name); // 'Amazon'

// изменение массива
//const animals = ['cats', 'dogs', 'birds'];

// меняется первый элемент массива
//animals[0] = 'horses';
//console.log(animals);

//animals = ['fish', 'cats', 'machine']; // typeerror
//console.log(animals);

// константы хранят ссылку на данные, а не сами данные. это значит, что менять данные можно, но нельзя заменить ссылку.

// длбавление элемента в массив
// push() добавляет элемент в конец массива

//const animals = ['cats', 'dogs', 'birds'];
//animals.push('horses');

// массив animals изменен - стал больше
//console.log(animals);
//console.log(animals[3]); // 'horses'

// добавление элемента в начало массива
// unshift() - добавляет элемент в начало массива

//const animals = ['cats', 'dogs', 'birds'];
//animals.unshift('horses');


// иногда индекс добавления известен сразу
//animals[3 = 'horses'];

// удаление элементов из массива
//const animals = ['cats', 'dogs', 'birds'];
//delete animals[1]; // удаляем элемент под индксом 1. Уменьшение размера массива - нежелательная операция.
//console.log(animals);
//console.log(animals.length);

// Тест 1. Что у меня выведется в консоли?
//const cities = ['Moscow', 'Dubai', 'Bangkok'];
//cities.push('Omsk');
//console.log(cities);

// Тест 2. 

//const cities = ['Moscow', 'Dubai', 'Bangkok'];
//console.log(cities[0].toUpperCase());
//console.log(cities[0]);



//! задача

// реализовать функцию, которая меняет местами первый и последний элемент массива. Если массив содержит мешьше двух элементов, то возвращается как есть
// примеры вызова
// myFunction([]); // []
// myFunction([1]); // [1]
// myFunction([1, 2]); // [2, 1]
// myFunction(['one', two', 'three']); // ['twree','two', 'one']

// решение 1 Мой первый вариант.
//const testMassive = ['one', 'two', 'three', 'four'];
//const testMassive2 = ['one', 'two', 'three', 'four'];
//const replaseElementsOfMassive = (test) => {
//	if (testMassive.length <= 2) {
//		console.log(testMassive);
//		return test;
//	} else {
//			testMassive[0] = testMassive[testMassive.length-1];
//			testMassive[testMassive.length-1] = testMassive2[0];
//			console.log(testMassive);
//	};
//};

//replaseElementsOfMassive(testMassive);


// решение 2

//const testMassive = ['one', 'two', 'three'];
//const replaseElementsOfMassive = test => {
//	let result = [];
//	if (testMassive.length <= 2) {
//		return test;
//	} else {
//		for (let i = testMassive.length-1; i >= 0; i--) {
//			result.push(testMassive[i]);
//		}
//		return result;
//	};
//};

//console.log(replaseElementsOfMassive(testMassive));

// решение 3.

//const reverseArray = items => {
//	if (items.length <= 2) {
//		return items;
//	}
//	const last = items[items.length-1];
//	items[items.length-1] = items[0];
//	items[0] = last;
//	return items;
//};

//console.log(reverseArray(['one', 'two', 'three', 'four', 'five']));

// проверка существования значения в массиве

//const animals = ['cats', 'dogs', 'birds'];

//console.log(animals[5]); // undefined  (выход за границу массива)

// способ проверить выход за границу - убедиться в том, что индекс не превышает длину массива

//if (index < animals.length) {
//	items[index]; // все ok
//};

// цикл for в массиве.
// 1. вывод знаяений в обратном порядке.
//const animals = ['cats', 'dogs', 'birds'];

//for (let i = 0; i < animals.length; i++) {
//	const index = (animals.length - 1) - i;
//	console.log(animals[index]);
//};

// 2. обход в обратном порядке, от верхней границы до нижней.

//const animals = ['cats', 'dogs', 'birds'];

//for (let i = animals.length-1; i >= 0; i--) {
//	console.log(animals[i]);
//};

// модификация (изменение) массива. Задача. Нормализация списка электронных адресов - приведение к нижнему регистру
//const emails = ['VASYA@gmail.com', 'iGoR@yandex.ru', 'netiD@hot.com'];
//console.log(emails);

//for(let i=0; i < emails.length; i++) {
//	const email = emails[i];
//	const normalizeEmail = email.toLowerCase(); // преобразование строки в нижний регистр
//	emails[i] = normalizeEmail; // заменяем значения
//};
//console.log(emails);

// Задача.
// Написать функцию, которая принимает на вход массив и строковый префикс, и возвращает новый массив, в котором к каждому элементу исходного массива добавляется переданный префикс

//const names = ['john', 'smith', 'karl'];

//const addPrefix = (items, prefix) => {
//	const result = [];

//	for (let i = 0; i < items.length; i++) {
//		result[i] = `${prefix} ${items[i]}`;
//	}
//	return result;
//};

//const newNames = addPrefix(names, 'Mr');

//console.log(newNames);