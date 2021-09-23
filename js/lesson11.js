"use strict";

// Лекции 39-40. Урок 11. Массивы ( стек, деструктуризация, spread, rest операторы). Объекты.

// Стек - это упорядоченная коллекция элементов, в которой добавление новых и удаление старых элементов всегда происходит с конца коллекции. Обычно его называют вершиной стека.
// структура данных - это конкретный способ хранения и организации данных.
// другие структуры данных: списки, хэш-таблицы, деревья, графы, стек, очередь.

// Работа со стеком включает в себя следующие операции:
// - добавить в стек (push)
// - взять из стека (pop)
// - вернуть элемент с вершины стека без удаления (peekBack)
// - проверить на пустоту (isEmpty)
// - вернуть размер (size)

//const stack = [];
//stack.push(3);
//console.log(stack); // [3]
//stack.push('winterfall');
//console.log(stack); // [3, winterfall]
//stack.push(true);
//console.log(stack); // [ 3, 'winterfall', true ]

//const element1 = stack.pop();
//console.log(element1); // true
//const element2 = stack.pop();
//console.log(element2); // winterfall
//console.log(stack); // [ 3 ]

// функцию, которая проверяет, что парные скопки сбалансированны. т.е. каждая открывающая скобка имеет открывающую.  (), (()), ((()))
// пример несбалансированных скобок: (, ((), )().

// - если перед нами открывающий элемент, то заносим его в стек
// - если закрывающий, то достаем из стека элемент (очевидно, последний добавленный) и смотрим, что ог открывающий для данного закрывающего. если проверка провалилась, значит выражение не соответствует формату.
// - если мы дошли до конца строки и стек пустой, то все хорошо. если в стеки остались элементы, то проверка не прошла.


//const checkIsBalanced = expression => {
// создаем стек
//	const stack = [];
// проходим по каждому символу в строке
//	for (const symbol of expression) {
// смотрим открывающий или закрывающий
//		if (symbol === "(") {
//			stack.push(symbol);
//		} else if (symbol === ")") {
//	если для закрывающего не нашлось открывающего, значит баланса неть
//			if(!stack.pop) {
//				return false;
//			}
//		}
//	}
//	return stack.length === 0;
//};


//console.log(checkIsBalanced(")("));  // не работает


// деструктуризация - синтаксическая возможность раскладывать элементы массива (и не только) в отдельные константы и переменные

//const points = [3, 5];

//console.log(`${points[0]}:${points[1]}`); // 3:5

//const x = points[0];
//const y = points[1];
//console.log(`${x}:${y}`);

// слева массив повторяет структуру правого массива, но вместо значений используется идентификаторы
//const [x,y] = points;
//console.log(`${x}:${y}`);

//const points = [3, 5];
// извлекаем первый элемент
//const [x] = points;
//console.log(x);

// извлекаем второй элемент, для этого просто не указываем первый
//const [, y] = points;
//console.log(y);

// и даже так
//const [, secondElement, , fourthElement, fifthElement] = [1, 2, 3, 4, 5, 6];
//console.log(secondElement); // 2
//console.log(fourthElement); // 4
//console.log(fifthElement); // 5

//const [firstElement, secondElement, thirdElement = 3] = [1,2];
//console.log(firstElement);
//console.log(secondElement);
//console.log(thirdElement);

//const points = [
//	[4, 3],
//	[0, -3]
//];

//for(const [x, y] of points) {
//	console.log([x, y]);
//};

// деструктуризация строк
//const [first, second, third] = 'two';
//console.log(first); // t
//console.log(second); // w
//console.log(third); // o

// rest оператор и декструктуризация
// rest оператор позволяет свернуть часть элементов во время деструктуризации.

//const fruits = ['apple', 'orange', 'banana', 'pineapple'];

//const [first, ...rest] = fruits; // !оператору rest можно дать любое имя
//console.log(fruits); // [ 'apple', 'orange', 'banana', 'pineapple' ]
//console.log(rest); // [ 'orange', 'banana', 'pineapple' ]

//const [first, second, ...rest] = fruits;
//console.log(rest); // [ 'banana', 'pineapple' ]

// в ситуациях, когда нас интересует только часть массива, но не важны первые элементы, лучше воспользоваться vtnjljv slice().

// метод slice возвращает новый массив, а не изменяет старый
//const rest = fruits.slice(1);
//console.log(rest); // [ 'orange', 'banana', 'pineapple' ]

// spread оператор и создание новых массивов
// spread оператор растягивает элементы

// Задача. Нужно определить массив, добавив туда элементы их другого массива.

//const russianCities = ['moscow', 'kazan'];
//const cities = ['milan', 'rome', ...russianCities];
//console.log(cities); // [ 'milan', 'rome', 'moscow', 'kazan' ]

// копирование массивов

//const russianCities = ['moscow', 'kazan'];
//const copy = [...russianCities];
//copy.push('samara');
//console.log(russianCities);
//console.log(copy);

// то же самое без spread-оператора
//const russianCities = ['moscow', 'kazan'];
//const copy = russianCities.slice();
//copy.push('samara');

//console.log(russianCities);
//console.log(copy);

// функцию, которая принимает на вход в виде массива кошелек с деньгами и название валюты и возвращает сумму денег указанной валюты.
// параметры функции:
// массив, содержащий купюры разных валют с различными номиналами
// наименование валюты

//const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',];
//getTotalAmount(money1, 'usd') // 16
//const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',];
//getTotalAmount(money2, 'eur') // 135
//const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',];
//getTotalAmount(money3, 'rub') // 270

//const getTotalAmount = (money, currency) => {
//	let sum = 0;

//	for (const i of money) {
//		const value = i.split(" ");
//		if (value[0] === currency) {
//			sum += +value[1];
//		}
//	}
//	console.log(sum + ' ' + currency);
//	return sum;
//};

//const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',];
//getTotalAmount(money1, "usd"); // 16

//const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',];
//getTotalAmount(money2, "eur"); // 135

//const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',];
//getTotalAmount(money3, "rub"); // 270

// Объекты -тип данных в js с помощью которого представляют связанный набор данных
//const user = {
//	name: 'Vasya',
//	married: true,
//	age: 25,
//	home: true,
//};

// доступ к свойствам объекта
//console.log(user['name']); // имена свойств хранятся внутри объектов в виде строк
//console.log(user.name);
//console.log(user['age']);

//user.married = false;
// то же самое user['married'] = false;
//console.log(user);
//user.name = 'marina';
//console.log(user);

// наполнение объекта
//const course = {};

//course.name = "JS: Объекты";
//course.description = "Хороший курс";
//console.log(course);

// удаление объекта. лучше так не делать, плохая практика
//const user = {name: 'Vasya', wrongProp: 'bug'};

//delete user.wrongProp;
//console.log(user);

// объекты - ссылочный тип данных
//const company = {};
// поменять объект можно
//company.name = 'Amazon';
//console.log(company);

// заменить ссылку нельзя!
//company = {};
//console.log(company); // с переменными заменить можно

// ссылочная природа влият и на сравнение. объекты равны между собой не тогда, когда у них одинаковая структура, а когда это один и тот же объект
//const company = {name: "Amazon"};

//console.log(company === { name: "Amazon"}); // false

//const copyOfCompany = company; // передается ссылка

//console.log(company === copyOfCompany); // true

// меняя одно, меняем и другое
//company.createdAt = 1994;
//console.log(copyOfCompany);
//console.log(company);




// Поиск максимального значения
//const max2 = (x, y) => {
//	if (x>y) return x
//	return y;
//};

//const max3 = (x, y, z) => {
//	return max2(x, max2(y, z));
//};

//console.log(max3("ab", "abc", "abd"));