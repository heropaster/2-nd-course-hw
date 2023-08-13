// 1
let str = "skypro";
console.log(str.toUpperCase());
// 2
const strings = ["apple", "juice", "watch", "apple juice", "apple company"];
function startWith(array, string) {
	let result = [];
	let neededWord = new RegExp(`^${string}`);
	for (let item of array) {
		if (neededWord.test(item)) {
			result.push(item);
		}
	}
	return result;
}
console.log(startWith(strings, "apple"));
// 3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
// 4
let digits = [52, 53, 49, 71, 21, 32];
console.log(`max:${Math.max(...digits)}\nmin:${Math.min(...digits)}`);
// 5
function randomToTen() {
	return Math.round(Math.random() * 10);
}
console.log(randomToTen());
// 6
function randomizeArray(num) {
	let randomArray = Array(Math.floor(num / 2))
		.fill()
		.map(() => Math.round(Math.random() * num));
	return randomArray;
}
console.log(randomizeArray(15));
// 7
function findRandomFrom(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}
console.log(findRandomFrom(5, 6));
// 8
console.log(new Date());
// 9
let currentDate = new Date();
let futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log(futureDate.toDateString());
// 10
function formatDateAndTime(date) {
	const daysOfWeek = [
		"воскресенье",
		"понедельник",
		"вторник",
		"среда",
		"четверг",
		"пятница",
		"суббота",
	];
	const months = [
		"января",
		"февраля",
		"марта",
		"апреля",
		"мая",
		"июня",
		"июля",
		"августа",
		"сентября",
		"октября",
		"ноября",
		"декабря",
	];

	const formattedDate = `Дата: ${date.getDate()} ${
		months[date.getMonth()]
	} ${date.getFullYear()} - это ${daysOfWeek[date.getDay()]}.`;
	const formattedTime = `Время: ${date.toLocaleTimeString()}`;

	return `${formattedDate}\n${formattedTime}`;
}
const now = new Date();
console.log(formatDateAndTime(now));
// 11
let words = [
	"Яблоко",
	"Груша",
	"Дыня",
	"Виноград",
	"Персик",
	"Апельсин",
	"Мандарин",
];

function startWordsGame() {
	let score = 0;
	let randomArray = words.sort(() => Math.random() - 0.5);
	alert(randomArray);
	let firstAnswer = prompt("Чему равнялся первый элемент массива?");
	if (firstAnswer.toUpperCase() === randomArray[0].toUpperCase()) {
		score++;
	}
	let secondAnswer = prompt("Чема равнялся последний элемент массива?");
	if (
		secondAnswer.toUpperCase() ===
		randomArray[randomArray.length - 1].toUpperCase()
	) {
		score++;
	}
	if (score === 2) {
		alert("Поздравляю, ты угадал");
	} else if (score === 1) {
		alert("Вы были близки к победе!");
	} else alert("Неверно");
}
