1;
const arr = [1, 5, 4, 10, 0, 3];
for (let item of arr) {
	console.log(item);
	if (item === 10) break;
}
2;
console.log(arr.indexOf(4));
// 3
const arr2 = [1, 3, 5, 10, 20];
console.log(arr2.join(" "));
4;
const newArr = [];
for (let i = 0; i < 3; i++) {
	newArr[i] = [];
	for (let j = 0; j < 3; j++) {
		newArr[i].push(1);
	}
}
console.log(newArr);
// 5
const arr3 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
	arr3.push(2);
}
console.log(arr3);
// 6
const arr4 = [9, 8, 7, "a", 6, 5];
let arr4Nums = arr4.filter((el) => typeof el !== "string");
console.log(arr4Nums);
// 7
let numbers = [9, 8, 7, 6, 5];
let userDigit = +prompt("Введи число");
if (numbers.indexOf(userDigit) !== -1) {
	alert("Угадал");
} else alert("Не угадал");
// 8
let string = "abcdef";
let reverseString = string.split("").reverse().join("");
console.log(reverseString);
// 9;
const doubleArray = [
	[1, 2, 3],
	[4, 5, 6],
];
console.log([].concat(doubleArray[0], doubleArray[1]));
// 10;
const numbersArray = [1, 4, 2, 5, 2, 6, 7, 9, 10];
for (let i = 0; i < numbersArray.length; i++) {
	if (i === numbersArray.length - 1) {
		console.log(numbersArray[i]);
	} else {
		console.log(numbersArray[i] + numbersArray[i + 1]);
	}
}
// 11
const squareArray = (arr) => {
	return arr.map((el) => el ** 2);
};
console.log(squareArray([1, 5, 4, 7, 2, 8, 9]));
// 12
const getLengthWords = (strings) => {
	let result = strings.map((el) => {
		return el.length;
	});
	return result;
};
console.log(
	getLengthWords(["слово", "", "слог", "длинное предложение", "буква"])
);
// 13
const filterPositive = (array) => {
	let result = array.filter((el) => el < 0);
	return result;
};
console.log(filterPositive([-1, 0, 5, -10, 56]));
// 14
let randomArray = Array(10)
	.fill()
	.map(() => Math.round(Math.random() * 10));
let filteredArray = randomArray.filter((el) => el % 2 === 0);
console.log(randomArray);
console.log(filteredArray);
// 15;
let randomArray2 = Array(6)
	.fill()
	.map(() => Math.round(Math.random() * 10));
let average = randomArray2.reduce((el, sum) => el + sum) / randomArray2.length;
console.log(average);
