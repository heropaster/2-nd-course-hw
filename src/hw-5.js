// // 1
// const greater = (first, second) => {
// 	if (first > second || first === second) {
// 		return first;
// 	} else return second;
// };

// // 2
// const isEven = (num) => {
// 	let message;
// 	num % 2 === 0 ? (message = "Число четное") : (message = "Число нечетное");
// 	return message;
// };

// // 3.1
// const squareNum = (num) => {
// 	console.log(num ** 2);
// };

// // 3.2
// const secondSquareNum = (num) => {
// 	return num ** 2;
// };

// // 4
// // let userAge = Number(prompt("Сколько тебе лет?"));
// function greeting(age) {
// 	if (age < 0 || isNaN(age)) {
// 		alert("Вы ввели неправильно значение");
// 	} else if (age <= 12) {
// 		alert("Привет, друг!");
// 	} else alert("Добро пожаловать!");
// }

// // 5
// function multNum(first, second) {
// 	let result;
// 	if (isNaN(+first) || isNaN(+second)) {
// 		result = "Одно или оба значения не являются числом";
// 	} else result = first * second;
// 	return result;
// }
// // 6
// // let number = Number(prompt("Введите число"));
// function squareDigit(num) {
// 	if (isNaN(num)) {
// 		return "Переданный параметр не является числом";
// 	} else return `${num} в кубе равняется ${Math.pow(num, 3)}`;
// }
// // console.log(squareDigit(number));
// // 7
// function getArea() {
// 	return this.radius ** 2 * 3.14;
// }
// function getPerimeter() {
// 	return 2 * this.radius * 3.14;
// }
// const circle1 = {
// 	radius: 50,
// 	getPerimeter: getPerimeter,
// 	getArea: getArea,
// };
// const circle2 = {
// 	radius: 15,
// 	getPerimeter: getPerimeter,
// 	getArea: getArea,
// };
// console.log(circle2.getArea());

function whichMonth() {
	let number = Number(prompt("Введи число"));
	if (number == "") {
		throw new Error("Вы ничего не ввели");
	} else if (isNaN(number) || number < 0 || number > 12) {
		throw new Error("Ошибка, вы ввели неправильное число");
	} else {
		if ((number >= 1 && number < 3) || number === 12) {
			console.log("Зима");
		}
		if (number >= 3 && number < 6) {
			console.log("Весна");
		}
		if (number >= 6 && number < 9) {
			console.log("Лето");
		}
		if (number >= 9 && number < 12) {
			console.log("Осень");
		}
	}
}
