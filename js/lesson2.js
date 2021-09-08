/* Команда в терминале node - запускает серверный JS в консоли
команды при работе в терминале (node):
.break    Sometimes you get stuck, this gets you out (ctrl+D)
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file

Math.pow(2,2); - возведение в степень или
2 ** 2;
*/

//! const pi = 3.14;
//! const surfaceofMars = 4 * pi * 3397 * 3397;
//! const surfaceofMercury = 4 * pi * 2440 * 24440;

//! console.log(surfaceofMars);
//! console.log(surfaceofMercury);


//! const pi = 3.14;
// => определение функции
//! const surfaceAreaCalculator = (radius) => { // radius - аргумент
//! return 4 * pi * radius * radius; // return - возвращает результат
//! };

//! const surfaceofMars = surfaceAreaCalculator(3397); // вызов функции
//! const surfaceofMercury = surfaceAreaCalculator(2440);

//! console.log(surfaceofMars); // распечатываю на экран результат
//! console.log(surfaceofMercury);

// другая похожая функция
//! const percentageCalculator = (number, total) => {
//!	return number * 100 / total;
//!};

//! console.log(percentageCalculator(40, 80);

// написать функцию, которая принимает на вход два числа и возвращает квадрат суммы этих чисел. Для вычисления значения используйте формулу из алгебры (a ** 2) + (a * b) + (a * b) + (b ** 2)
// 2 задание - Записать эту же функцию в одну строку

//! const squareofSum = (a, b) => {
//!	return (a ** 2) + (a * b) + (a * b) + (b ** 2); // 1 вариант
//!	return (a ** 2) + (2 * a * b) + (b ** 2); // 2 вариант
//! };

//! console.log (squareofSum(2,3));

// способы определения функций
const identity = (value) => {
	return value;
};

// другой способ
const identity = value => value; // функция однострочник

// еще один способ объявления функции
const identity = function(value) {
	return value;
}