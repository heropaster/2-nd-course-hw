// 1
let password = 'digitalninja';
let enteredPass = prompt("Введите пароль!");

(enteredPass === password) ? alert('Пароль введен верно'): alert('Пароль введен неправильно')

// 2
let c = 10;
if (c > 0 && c < 10) {
    console.log('верно')
}else console.log('неверно')

// 3
let d = 5,
    e = 300;
if (d > 100 || e > 100) {
    console.log('Верно')
}else console.log('Неверно')

// // 4
let a = '2';
let b = '3';
alert(+a + +b);

// 5
let monthNumber = 11;
switch(monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;    
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('осень');
        break;
    default:
        console.log('Такого месяца нет')
        break;
}

// 7 
let yourNum = Number(prompt('Пожалуйста, введите любое число'));

if (isNaN(yourNum)) {
    alert('Это не число!')
}else if(yourNum % 2 === 0) {
    alert('Число четное')
}else alert('Число нечетное')

// 8
let clientOS = Math.round(Math.random());
(clientOS) ? alert('Установите версию приложения для iOS по ссылке') : alert('Установите версию приложения для Android по ссылке')

// 9 
let newClientOS = Math.round(Math.random());
let clientDeviceYear = 2014;
let required = (clientDeviceYear >= 2015) ? (newClientOS ? 'для iOS' : 'для Android') : (newClientOS ? 'облегченную для iOS' : 'облегченную для Android');
alert(`Установите версию приложения ${required}  по ссылке`);