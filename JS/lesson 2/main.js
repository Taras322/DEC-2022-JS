// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['nickname', '10', 10, 105, 'true', false, 'ten', 'object', 'car', 'array']
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title:  'The Outsiders',
    pageCount: 332,
    genre: 'Comedian',
}
console.log(book1);
let book2 = {
    title:  'The House On Mango Street',
    pageCount: 224,
    genre: 'Mystery',
}
console.log(book2);
let book3 = {
    title: 'Thirteen Reasons Why',
    pageCount: 341,
    genre: 'Graphic novel',
}
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title:  'The Outsiders',
    pageCount: 332,
    genre: 'Comedian',
    authors: [
        {name: 'Vasya', age:22}
    ]
}
console.log(book4);
let book5 = {
    title:  'The House On Mango Street',
    pageCount: 224,
    genre: 'Mystery',
    authors: [
        {name: 'Vasya', age:22}
    ]
}
console.log(book5);
let book6 = {
    title: 'Thirteen Reasons Why',
    pageCount: 341,
    genre: 'Graphic novel',
    authors: [
        {name: 'Vasya', age:22}
    ]
}
console.log(book6);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Vasya', username:'Vasya22', password:2506,},
    {name:'Tanya', username:'Tanya22', password:2506,},
    {name:'Anna', username:'Anna22', password:2506,},
    {name:'Taras', username:'Taras22', password:2506,},
    {name:'Nazar', username:'Nazar22', password:2506,},
    {name:'Petya', username:'Pety22', password:2506,},
    {name:'Vlad', username:'Vlad22', password:2506,},
    {name:'Andjey', username:'Andje22', password:2506,},
    {name:'Julian', username:'Julian22', password:2506,},
    {name:'David', username:'David22', password:2506,},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 2;
if (x!==0) {
    console.log('true')
}
else {
    console.log('false')
}

let time = 4;

if (time > 0 && time <= 15) {
    console.log('1');
}
else if (time >15 && time <= 30) {
    console.log('2');
}
else if (time > 30 && time <= 45) {
    console.log('3');
} else if (time > 45 && time <= 60) {
    console.log('4');
}




let day = 16;

if (day > 0 && day <= 10) {
    console.log('1');
}
else if (day >10 && day <= 20) {
    console.log('2');
}
else if (day > 20 && day <= 31) {
    console.log('3');
}


let z = 0;
let b = 2;
if (z > b) {
    console.log('z');
} else if (b > z) {
    console.log('b');
} else if (a === b) {
    console.log('equal');
}

let u = '';
let res = u || 'default';
console.log(res);


let day1 = 3;
switch (day1) {
    case 1:
        console.log('1');
        break;
    case  2:
        console.log('2');
        break;
    case 3:
        console.log('3');
        break;
    case 4:
        console.log('4');
        break;
    case 5:
        console.log('5');
        break;
    case 6:
        console.log('6');
        break;
    case 7:
        console.log('7');
        break;
    case 'default':
        console.log('?????');
}

