
console.log(`Ex. 1:`)

//==========================================
// 1. Напишіть функцію addThemAll
// Вона буде знаходити суму усіх своїх 
// аргументів незалежно від їх кількості 
// (але без використання вбудованого 
// об'єкту Math). Використайте оператор 
// розширення.

"use strict"

console.log('Function declaration:')

console.log(addThemAll(2, 4)); // 6
console.log(addThemAll(1, 2, 3, 4)); // 10
console.log(addThemAll(5, 5, 10)); // 20

function addThemAll(...args) {
	return (args.reduce((a, c) => a += c))
}

console.log(`-------------------------------

Ex. 1 (v.2):`)
//==========================================

// Або можна подати у вигляді стрілкової ф.:
console.log('Arrow f. expression:')


const addThemAllArr = (...args) => args.reduce((a, c) => a += c)

console.log(addThemAllArr(2, 4)); // 6
console.log(addThemAllArr(1, 2, 3, 4)); // 10
console.log(addThemAllArr(5, 5, 10)); // 20


console.log(`-------------------------------

Ex. 2:`)
//==========================================

//==========================================
// 2. Задача на використання замикання.
// Напишіть функцію яка працює таким чином:
// multiply(a)(b)  // a * b

console.log(multiply(5)(5))		// 25
console.log(multiply(2)(-2))	// -4
console.log(multiply(4)(3))		// 12

function multiply(a) {
	return (b) => a * b
}

console.log(`-------------------------------

Ex. 3:`)
//==========================================

// 3. Напишіть функцію яка буде 
// використовуватись для сортування 
// масиву фільмів.

// Функція буде приймати два аргумента:
// — властивість за якою треба посортувати.
// — опцію напрямку сортування (зростання чи спадання)

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
]

console.log(`
Mасив фільмів посортованих по року випуску, від старішого до новішого`)
console.log(...movies.sort(byProperty('releaseYear', '>')))
// виведе масив фільмів посортованих по року випуску, від старішого до новішого

console.log(`
Mасив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого`)
console.log(...movies.sort(byProperty('runningTimeInMinutes', '<')))
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого

console.log(`
Mасив фільмів посортованих по назві, в алфавітному порядку`)
console.log(...movies.sort(byProperty('movieName', '>')))
// виведе масив фільмів посортованих по назві, в алфавітному порядку

console.log(`
Mасив фільмів посортованих по назві directedBy, в зворотньому алфавітному порядку`)
console.log(...movies.sort(byProperty('directedBy', '<')))
// виведе масив фільмів посортованих по назві directedBy, в зворотньому алфавітному порядку


// I've been adding spread (...) to the calls to spread our array for easy viewing in the console.
// This was not the case in the task, but it is more convenient for the demonstration,
// after all, you don't need to click on the "expand the array" slider every time

function byProperty(property, direction) {
	return (a, b) => {
		return direction === '>' ? (a[property] < b[property] ? -1 : 1) : (a[property] > b[property] ? -1 : 1)
	}
}

//====================================================
//власна функція, яка приймає додатково ще й сам масив та так само його ортує.
console.log(`-------------------------------

Ex. 3(v.2):`)

const films = [
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
]


console.log(`
Mасив фільмів посортованих по року випуску, від старішого до новішого`)
console.log(...ArrByProperty(films, 'releaseYear', '>'))
// виведе масив фільмів посортованих по року випуску, від старішого до новішого

console.log(`
Mасив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого`)
console.log(...ArrByProperty(films, 'runningTimeInMinutes', '<'))
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого

console.log(`
Mасив фільмів посортованих по назві, в алфавітному порядку`)
console.log(...ArrByProperty(films, 'movieName', '>'))
// виведе масив фільмів посортованих по назві, в алфавітному порядку

// I've been adding spread (...) to the calls to spread our array for easy viewing in the console.
// This was not the case in the task, but it is more convenient for the demonstration,
// after all, you don't need to click on the "expand the array" slider every time

function ArrByProperty(array, property, direction) {
	return array.sort((a, b) => typeof a[property] === 'number' && typeof b[property] === 'number'
		? (direction === '>')
			? a[property] - b[property] : b[property] - a[property]
		: (direction === '>')
			? String(a[property]).localeCompare(b[property])
			: String(b[property]).localeCompare(a[property]));
}

//========================================================================================================================================================

console.log(`-------------------------------

Ex. 4:`)
//==========================================

// 4. Напишіть функцію яка відфільтрує масив унікальних значень
// Рішення має працювати незалежно від конкретних значень в масиві імен

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
	const setFromArray = new Set(array)
	return [...setFromArray]
}

console.log(filterUnique(userNames)) // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

console.log(filterUnique(userNames).sort()) //['Антон', 'Василь', 'Емма', 'Марта', 'Олена', 'Петро', 'Яна']
