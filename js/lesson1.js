/* В JS нестрогая типизация
сценарный язык
стандарт ECMASCRIPT(ECMA262)
*/
const tmp = () => {
25 * 91 // 25 и 91 опранды, а * оператор умножения
((12 * 5) - 4) / 12 // все операторы инфиксные
- 4 // префиксный оператор
x++ // постфиксный оператор
5 / 0 // Infinity
- 5 / 0 // -Infinity
0 / 'строка'  // NaN - not a number не число
};

// радиус марса 3397км, Какая площадь поверхности Марса? s= 4 p * r * r

//4 * 3.14 * 3397 * 3397

// радиус Меркурию 2440 км. Какая площадь поверхности Меркурия?

//4 * 3.14 * 2440 * 2440

const pi = 3.14;

//4 * pi * 3397 * 3397
//4 * pi * 2440 * 2440

const surface = 4 * pi * 3397 * 3397;

console.log(surface);


