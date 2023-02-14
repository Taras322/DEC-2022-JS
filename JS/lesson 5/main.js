// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const calc = (a, b) => a * b;

console.log(calc(10, 10));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const calc1 = (num1) => P * num1 ** 2;
const P = 3.14;
console.log(calc1(4));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const calc2 = (num1, num2) => 2 * P * num1 * (num2 + num1);
console.log(calc2(4, 10));
// - створити функцію яка приймає масив та виводить кожен його елемент
// let floop = (arr) => for (const element of arr) {
//         console.log(element);
//     }
// floop();
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const text = (paragraph) => document.write(`<p>${paragraph}</p>`);

text('Johny Momohny');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const ul = (li1) => document.write(`<ul>
            <li>${li1}</li>
            <li>${li1}</li>
            <li>${li1}</li>
            </ul>`);

ul('dororo');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const sendUl =  (text, num) =>{
    document.write('<ul>');
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
sendUl('syay', 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = [23, true, 'asdsadas', 43];
const flooe = (arr) =>{
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`);
}
flooe(arr);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users1 = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},

];
const massiv = (array) =>{
    for (const element of array) {
        document.write(`<div>${element.name} ${element.age} ${element.id}</div>`);
    }
}
massiv(users1);
// - створити функцію яка повертає найменьше число з масиву
const tocken = (num) =>{
    let number = num[0];
    for (const numElement of num) {
        if (number > num) {
            number = num;
        }
    }
}
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr) =>{
    let cc = 0;
    for (const arrElement of arr) {
        cc = cc + arr;
    }
    return cc;
}
let sum1 = [1, 2, 10];
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) =>{
    let ter = arr[index1];
    let ter2 = arr[index2];
    arr[index1] = ter2;
    arr[index2] = ter;
}
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyVales, exchangeCurrency) =>{
    for (const element of sumUAH) {
        if (element.currency === exchangeCurrency) {
            return  sumUAH / element.value;
        }
    }
}
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');