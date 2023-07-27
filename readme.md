
# HW3 — Замикання, залишкові параметри, сети
## 1. Напишіть функцію addThemAll
Вона буде знаходити суму усіх своїх аргументів незалежно від їх кількості (але без використання вбудованого об'єкту Math).

Використайте оператор розширення
```javascript
console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20

function addThemAll // тут пишете свій код
```
## 2. Задача на використання замикання. 
Напишіть функцію яка працює таким чином:
```javascript 
multiply(a)(b)  // a * b
```
```javascript
console.log(multiply(5)(5))		// 25
console.log(multiply(2)(-2))	        // -4
console.log(multiply(4)(3))		// 12

function multiply(a) {
	// тут ваш код*
}
```
## 3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів 

Функція буде приймати два аргумента:

— властивість за якою треба посортувати. 

— опцію напрямку сортування (зростання чи спадання)

```javascript
const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

console.log(movies.sort(byProperty('releaseYear', '>'))); 
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); 
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty('movieName', '>'))); 
// виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
	// тут ваш код
}
```

## 4. Напишіть функцію яка відфільтрує масив унікальних значень
Рішення має працювати незалежно від конкретних значень в масиві імен
```javascript
const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
// тут ваш код 
}

console.log(filterUnique(userNames)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
```