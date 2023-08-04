// 1
console.log('1 task')
for (let i = 0; i < 2; i++) {
    console.log("Привет")
}
// 2
console.log('2 task')
for (let i = 1; i <= 5; i++) {
    console.log(i)
}
// 3
console.log('3 task')
for (let i = 7; i <= 22; i++) {
    console.log(i)

}
// 4
console.log('4 task');
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}
for (let item in obj) {
    console.log(`${item} - зарплата ${obj[item]} долларов.`)
}
// 5
console.log('5 task')
let n = 1000;
let count = 0;
while (n >= 50) {
    n = n/2;
    count++;
}
console.log(count);
// 6
let firstFriday = 7;
for (let i = firstFriday; i < 31; i++) {
    if(i % 7 == firstFriday || (firstFriday === 7 && i % 7 === 0)) {
        console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет`)
    }
}