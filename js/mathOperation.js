Математические операции в JS

Сложение:
let x = 10;
let y = x + 50;

Вычитание:
let x = 100;
let y = x - 50;

Умножение:
let x = 4;
let y = 5;
let z = x * y;

Деление:
let x = 5;
let y = 2;
let z = x / y;
console.log(z); // 2.5

Деление по модулю (оператор %) возвращает остаток от деления:
let x = 5;
let y = 2;
let z = x % y;
console.log(z); // 1
Результатом будет 1, так как наибольшее целое число, которое меньше или равно 5 и при этом делится на 2 равно 4, а 5 - 4 = 1.

Возведение в степень. Оператор ** возводит число в определенную степень:
число ** степень
Например:
const n = 2 ** 3;
console.log(n);  // 8
const x = 3;
const y = 2;
const z = x ** y;
console.log(z);  // 9

Инкремент:
let x = 5;
x++; // x = 6
Оператор инкремента ++ увеличивает переменную на единицу. Существует префиксный инкремент, который сначала увеличивает переменную на единицу, а затем возвращает ее значение. И есть постфиксный инкремент, который сначала возвращает значение переменной, а затем увеличивает его на единицу:

префиксный инкремент
let x = 5;
let z = ++x;
console.log(x); // 6
console.log(z); // 6

постфиксный инкремент
let a = 5;
let b = a++;
console.log(a); // 6
console.log(b); // 5

Постфиксный инкремент аналогичен операции:
a = a + 1; // a++

Декремент уменьшает значение переменной на единицу. Также есть префиксный и постфиксный декремент:
префиксный декремент
let x = 5;
let z = --x;
console.log(x); // 4
console.log(z); // 4

постфиксный декремент
let a = 5;
let b = a--;
console.log(a); // 4
console.log(b); // 5

Как и принято в математике, все операции выполняются слева направо и различаются по приоритетам: сначала операции инкремента и декремента, затем выполняются умножение и деление, а потом сложение и вычитание. Чтобы изменить стандартный ход выполнения операций, часть выражений можно поместить в скобки:
let x = 10;
let y = 5 + (6 - 2) * --x;
console.log(y); //41

Операции присваивания

=Приравнивает переменной определенное значение: 
let x = 5;

+= Сложение с последующим присвоением результата. Например:
let a = 23;
a += 5; // аналогично a = a + 5
console.log(a); // 28

-= Вычитание с последующим присвоением результата. Например:
let a = 28;
a -= 10; // аналогично a = a - 10
console.log(a); // 18

*= Умножение с последующим присвоением результата:
let x = 20;
x *= 2; // аналогично x = x * 2
console.log(x); // 40

**= Возведение в степень с последующим присвоением результата:
let x = 5;
x **= 2;
console.log(x);  // 25

/= Деление с последующим присвоением результата:
let x = 40;
x /= 4; // аналогично x = x / 4
console.log(x); // 10

%= Получение остатка от деления с последующим присвоением результата:
let x = 10;
x %= 3; // аналогично x = x % 3
console.log(x); // 1, так как 10 - 3*3 = 1

Операторы сравнения
Как правило, для проверки условия используются операторы сравнения. Операторы сравнения сравнивают два значения и возвращают значение true или false:

== Оператор равенства сравнивает два значения, и если они равны, возвращает true, иначе возвращает false:
x == 5

=== Оператор тождественности также сравнивает два значения и их тип, и если они равны, возвращает true, иначе возвращает false:
x === 5

!= Сравнивает два значения, и если они не равны, возвращает true, иначе возвращает false:
x != 5

!== Сравнивает два значения и их типы, и если они не равны, возвращает true, иначе возвращает false:
x !== 5

> Сравнивает два значения, и если первое больше второго, то возвращает true, иначе возвращает false:
x > 5   '

< Сравнивает два значения, и если первое меньше второго, то возвращает true, иначе возвращает false:
x < 5

>= Сравнивает два значения, и если первое больше или равно второму, то возвращает true, иначе возвращает false:
x >= 5

<= Сравнивает два значения, и если первое меньше или равно второму, то возвращает true, иначе возвращает false:
x <= 5

Все операторы довольно просты, наверное, за исключением оператора равенства и оператора тождественности. Они оба сравнивают два значения, но оператор тождественности также принимает во внимание и тип значения. Например:
let income = 100;
let strIncome = "100";
let result = income == strIncome;
console.log(result); //true
Переменная result здесь будет равна true, так как фактически и income, и strIncome представляют число 100.

Но оператор тождественности возвратит в этом случае false, так как данные имеют разные тип:
let income = 100;
let strIncome = "100";
let result = income === strIncome;
console.log(result); // false
Аналогично работают операторы неравенства != и !==.

Логические операции
Логические операции применяются для объединения результатов двух операций сравнения. В JavaScript есть следующие логические операции:

&& (И) Возвращает true, если обе операции сравнения возвращают true, иначе возвращает false:
let income = 100;
let percent = 10;
let result = income > 50 && percent < 12;
console.log(result); //true

|| (ИЛИ) Возвращает true, если хотя бы одна операция сравнения возвращают true, иначе возвращает false:
let income = 100;
let isDeposit = true;
let result = income > 50 || isDeposit == true;
console.log(result); //true

! (НЕ) Возвращает true, если операция сравнения возвращает false:
let income = 100;
let result1 = !(income > 50);
console.log(result1); // false, так как income > 50 возвращает true

let isDeposit = false;
let result2 = !isDeposit;
console.log(result2); // true

Операции со строками
Строки могут использовать оператор + для объединения. Например:
let name = "Том";
let surname = "Сойер"
let fullname = name + " " + surname;
console.log(fullname); //Том Сойер

Если одно из выражений представляет строку, а другое - число, то число преобразуется к строке и выполняется операция объединения строк:
let name = "Том";
let fullname = name + 256;
console.log(fullname); //Том256