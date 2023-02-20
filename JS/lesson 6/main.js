// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let x = 'hello world';
let y = 'lorem ipsum';
let z = 'javascript is cool';
console.log(x.lastIndexOf('d'));
console.log(y.lastIndexOf('m'));
console.log(z.lastIndexOf('l'));
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(x.toUpperCase());
console.log(y.toUpperCase());
console.log(z.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let q = 'HELLO WORLD';
let w = 'LOREM IPSUM';
let e = 'JAVASCRIPT IS COOL';
console.log(q.toLowerCase());
console.log(w.toLowerCase());
console.log(e.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.replaceAll(' ', ''));
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 = 'Ревуть воли як ясла повні';
console.log(str1.split(' '));
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0];
let string = arr.map(item => {
     return item.toString();
});
console.log(string);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
let nums1 = nums.sort((a, b) => {
     if (a > b) {
          return 1;
     }
     if (a < b) {
          return -1;
     }
});
console.log(nums1);
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];
let mas = coursesAndDurationArray.sort((a, b) => {
     if (a.monthDuration > b.monthDuration) {
          return -1;
     }
});
console.log(mas);

let filter1 = coursesAndDurationArray.filter(item => {
     return item.monthDuration >= 5;
});
console.log(filter1);

let map1 = coursesAndDurationArray.map((value, index) =>{
   return {id: index + 1, title: value.title, monthDuration: value.monthDuration};
});
console.log(map1);
// =========================
let cards = [
     {
          cardSuit: 'spade',
          value: '6',
          color: 'black',
     },
     {
          cardSuit: 'spade',
          value: '7',
          color: 'black',
     },
     {
          cardSuit: 'spade',
          value: '8',
          color: 'black',
     },
     {
          cardSuit: 'spade',
          value: '9',
          color: 'black',
     },
     {
          cardSuit: 'spade',
          value: '10',
          color: 'black',
     },
     {
          cardSuit: 'spade',
          value: 'Jack',
          color: 'black',
     },
     {
          cardSuit: 'spade',
          value: 'Queen',
          color: 'black',
     },
     {
          cardSuit: 'spade',
          value: 'King',
          color: 'black',
     },
     {
          cardSuit: 'spade',
          value: 'Ace',
          color: 'black',
     },
     {
          cardSuit: 'clubs',
          value: '6',
          color: 'black',
     },
     {
          cardSuit: 'clubs',
          value: '7',
          color: 'black',
     },
     {
          cardSuit: 'clubs',
          value: '8',
          color: 'black',
     },
     {
          cardSuit: 'clubs',
          value: '9',
          color: 'black',
     },
     {
          cardSuit: 'clubs',
          value: '10',
          color: 'black',
     },
     {
          cardSuit: 'clubs',
          value: 'Jack',
          color: 'black',
     },
     {
          cardSuit: 'clubs',
          value: 'Queen',
          color: 'black',
     },
     {
          cardSuit: 'clubs',
          value: 'King',
          color: 'black',
     },
     {
          cardSuit: 'clubs',
          value: 'Ace',
          color: 'black',
     },
     {
          cardSuit: 'diamond',
          value: '6',
          color: 'red',
     },
     {
          cardSuit: 'diamond',
          value: '7',
          color: 'red',
     },
     {
          cardSuit: 'diamond',
          value: '8',
          color: 'red',
     },
     {
          cardSuit: 'diamond',
          value: '9',
          color: 'red',
     },
     {
          cardSuit: 'diamond',
          value: '10',
          color: 'red',
     },
     {
          cardSuit: 'diamond',
          value: 'Jack',
          color: 'red',
     },
     {
          cardSuit: 'diamond',
          value: 'Queen',
          color: 'red',
     },
     {
          cardSuit: 'diamond',
          value: 'King',
          color: 'red',
     },
     {
          cardSuit: 'diamond',
          value: 'Ace',
          color: 'red',
     },
     {
          cardSuit: 'heart',
          value: '6',
          color: 'red',
     },
     {
          cardSuit: 'heart',
          value: '7',
          color: 'red',
     },
     {
          cardSuit: 'heart',
          value: '8',
          color: 'red',
     },
     {
          cardSuit: 'heart',
          value: '9',
          color: 'red',
     },
     {
          cardSuit: 'heart',
          value: '10',
          color: 'red',
     },
     {
          cardSuit: 'heart',
          value: 'Jack',
          color: 'red',
     },
     {
          cardSuit: 'heart',
          value: 'Queen',
          color: 'red',
     },
     {
          cardSuit: 'heart',
          value: 'King',
          color: 'red',
     },
     {
          cardSuit: 'heart',
          value: 'Ace',
          color: 'red',
     },
];
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
let findAce = cards.find(item => {
     if (item.value === 'Ace' && item.cardSuit === 'diamond'){
     return 1;
     }
});
console.log(findAce);
let findSix = cards.find(item => {
     if (item.value === '6') {
          return 1;
     }
});
console.log(findSix);

let findRedCards = cards.find(item => {
     if (item.color === 'red'){
          return 1;
     }
});
console.log(findRedCards);

let findDiamonds = cards.find(item => {
     if (item.cardSuit === 'diamond'){
          return 1;
     }
});
console.log(findDiamonds);

let findSpades = cards.filter(item => {
     if (item.cardSuit === 'spade' && item.value !== '6' && item.value !== '7' && item.value !== '8'){
          return item;
     }
});
console.log(findSpades);
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let deckOfCards = cards.reduce((accumulator, value) =>{
     if (value.cardSuit === 'spade'){
          accumulator.spades.push(value);
     }else if(value.cardSuit === 'diamond'){
          accumulator.diamonds.push(value);
     }else if(value.cardSuit === 'heart'){
          accumulator.hearts.push(value);
     }else if (value.cardSuit === 'clubs'){
          accumulator.clubs.push(value);
     }return accumulator;
} ,{spades: [], diamonds: [], hearts: [], clubs: []});
console.log(deckOfCards);
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
let coursesArray = [
     {
          title: 'JavaScript Complex',
          monthDuration: 5,
          hourDuration: 909,
          modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
     },
     {
          title: 'Java Complex',
          monthDuration: 6,
          hourDuration: 909,
          modules: ['html',
               'css',
               'js',
               'mysql',
               'mongodb',
               'angular',
               'aws',
               'docker',
               'git',
               'java core',
               'java advanced']
     },
     {
          title: 'Python Complex',
          monthDuration: 6,
          hourDuration: 909,
          modules: ['html',
               'css',
               'js',
               'mysql',
               'mongodb',
               'angular',
               'aws',
               'docker',
               'python core',
               'python advanced']
     },
     {
          title: 'QA Complex',
          monthDuration: 4,
          hourDuration: 909,
          modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
     },
     {
          title: 'FullStack',
          monthDuration: 7,
          hourDuration: 909,
          modules: ['html',
               'css',
               'js',
               'mysql',
               'mongodb',
               'react',
               'angular',
               'aws',
               'docker',
               'git',
               'node.js',
               'python',
               'java']
     },
     {
          title: 'Frontend',
          monthDuration: 4,
          hourDuration: 909,
          modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
     }
];
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
let sass = coursesArray.filter(length => length.modules.includes('sass'));
console.log(sass);
// --написати пошук всіх об'єктів, в який в modules є docker
let docker = coursesArray.filter(length => length.modules.includes('docker'));
console.log(docker);