// // 1
// const people = [
// 	{ name: "Глеб", age: 29 },
// 	{ name: "Анна", age: 17 },
// 	{ name: "Олег", age: 7 },
// 	{ name: "Оксана", age: 47 },
// ];
// const compareAges = (a, b) => {
// 	if (a.age > b.age) {
// 		return 1;
// 	} else if (a.age < b.age) {
// 		return -1;
// 	} else return 0;
// };
// console.log(people.sort((a, b) => compareAges(a, b)));
// // 2
// function isPositive(num) {
// 	return num > 0;
// }
// function isMale(person) {
// 	return person.gender === "male";
// }
// function filter(arr, callback) {
// 	const filteredArray = [];
// 	arr.map((item) => {
// 		if (callback(item)) {
// 			filteredArray.push(item);
// 		}
// 	});
// 	return filteredArray;
// }
// console.log(filter([3, -4, 1, 9], isPositive));

// const people = [
// 	{ name: "Глеб", gender: "male" },
// 	{ name: "Анна", gender: "female" },
// 	{ name: "Олег", gender: "male" },
// 	{ name: "Оксана", gender: "female" },
// ];

// console.log(filter(people, isMale));
// // 3
// setTimeout(() => {
// 	clearInterval(delay);
// 	console.log("30 секунд прошло");
// }, 30000);
// let delay = setInterval(() => {
// 	console.log(new Date());
// }, 3000);
// // 4
// function delayForSecond(callback) {
// 	setTimeout(() => {
// 		callback();
// 	}, 1000);
// }

// delayForSecond(function () {
// 	console.log("Привет, Глеб!");
// });
// 5

function delayForSecond(cb) {
	setTimeout(() => {
		console.log("Прошла одна секунда");
		if (cb) {
			cb();
		}
	}, 1000);
}

function sayHi(name) {
	console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi("Глеб"));
