// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a, b) {
    return a * b;
}
console.log(calc(10, 10));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calc1(num1){
    const P = 3.14;
    return P * num1 ** 2;
}
console.log(calc1(4));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calc2(num1, num2){
    const P = 3.14;
    // let result = 2 * P * num1 * (num2 + num1);
    // console.log(result);
    return 2 * P * num1 * (num2 + num1);
}
console.log(calc2(4, 10));
// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function floop(arr) {
    for (const element of arr) {
        console.log(element);
    }
}
floop(array);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function text(paragraph) {
    let p = `<p>${paragraph}</p>`;
    document.write(p);
}
text('Johny Momohny');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul(li1) {
    let li = `<ul>
            <li>${li1}</li>
            <li>${li1}</li>
            <li>${li1}</li>
            </ul>`
    document.write(li);
}
ul('dororo');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let sendUl = function (text, num) {
    document.write('<ul>');
    for (let i = 0; i < num; i++) {
    document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
sendUl('syay', 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = [23, true, 'asdsadas', 43];
function flooe(arr) {
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
function massiv(array) {
    for (const element of array) {
    document.write(`<div>${element.name} ${element.age} ${element.id}</div>`);
    }
}
massiv(users1);
// - створити функцію яка повертає найменьше число з масиву
function tocken (num) {
    let number = num[0];
    for (const numElement of num) {
    if (number > num) {
        number = num;
    }
    }
}
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let cc = 0;
    for (const arrElement of arr) {
        cc = cc + arr;
    }
    return cc;
}
let sum1 = [1, 2, 10];
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let ter = arr[index1];
    let ter2 = arr[index2];
    arr[index1] = ter2;
    ar[index2] = ter;
}
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyVales, exchangeCurrency) {
    for (const element of sumUAH) {
        if (item.currency === exchangeCurrency) {
            return  sumUAH / element.value;
        }
    }
}
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');