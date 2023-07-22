// 1
let a = 10;
alert(`First a:${a}`);
a=20;
alert(`second a:${a}`);
// 2
let variable = 2007;
alert(`Iphone:${variable}`);
// 3
let name = "Brendan Eich";
alert(`name: ${name}`);
// 4
let first = 10,
    second = 2;
alert(`sum: ${first + second}\ndiff:${first-second}\nmultiply: ${first*second} \ndivide:${first/second} `)
// 5
let result = 2**5;
alert(`2^5=${result}`)
// 6
let residue =9%2;
alert(`residue: ${residue}`)
// 7
let num = 1;
num+=5;
num-=3;
num*=7;
num/=3
num++;
num--
alert(num);
// 8
let age = prompt('Сколько вам лет?')
alert(age)
// 9
const user = {
    name: String,
    age: Number,
    isAdmin: Boolean
}
user.name = 'Ivan';
user.age = 21;
user.isAdmin = false;

user['city of residence'] = 'Washington';
user.age = 32;
delete user['city of residence'];
let info = prompt('Какую информацию хотите узнать о пользователе?')
alert(user[info])
// 10
alert(`Привет, ${prompt('Введите ваше имя.')}!`)