import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');

//  trzynasty projekt ------------->

// kod ma sie skladac z losowych 10 znakow

const btn = document.querySelector('button');
const section = document.querySelector('section');
const chars = 'ABCDEFGHIJKLMNOPRSTUVWYZabcdefghijklmnoprstuvwyz0123456789!@&?';
const codesNumber = 1000;
const charNumber = 15;
let code = '';
console.log(chars);
console.log(chars.length);
const codesGenerator = () => {

    for (let i = 0; i <codesNumber ; i++) {
        for (let j = 0; j < charNumber; j++) {
            const charIndex = Math.floor(Math.random() * chars.length);
            const singleChar = chars.charAt(charIndex)
            code += singleChar;
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}
btn.addEventListener("click", codesGenerator);

//  dwunasty projekt ------------->

// const btn = document.querySelector('button');
// const div = document.querySelector('div');
// const names = ["Jagienka", "Dobrawa(Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja", "Stanisława",
//     "Makapaka", "Kasia", "Danusia", "Agata"];
// const prefixs = ["Wydaje mi się ", "Mam wrażenie ", "Szczeże powiedziawszy ", "Myślę ", "Szczerze uważam ",
//  "Na 100% twierdzę ", "Jestem pewien "];
//
//
// const nameGenerator =  () => {
//
//     const nameIndex = Math.floor(Math.random() * names.length);
//     // const prefixIndex = Math.floor(Math.random() * prefixs.length);
//     div.textContent = `${prefixs[Math.floor(Math.random() * prefixs.length)]}, że najlepsze będzie imię: ${names[nameIndex]}.`;
//     console.log(nameIndex);
//     // console.log(prefixIndex);
// }
//
// btn.addEventListener("click", nameGenerator);



//  jedenasty projekt ------------->
//
// for (let i = 1; i <=100 ; i++) {
//
//     let result = "";
//
//     if ((i % 3 === 0) && ( i % 5 === 0)) {
//         result = "FizBuzz";
//         console.log(result);
//     }else if (i % 3 === 0){
//         result = "Fiz";
//         console.log(result);
//     }else if (i % 5 === 0){
//         result = "Buz";
//         console.log(result);
//     }else {
//         console.log(i);
//     }
//
// }


//  dziesiaty projekt ------------->
//
// const input = document.querySelector('input');
// const div = document.querySelector('div');
// const passwords = ["jedEN", "DwA", "TRzy"];
// const messages = ["super", "działa!", "lol"];
// console.log(passwords);
// console.log(messages);
//
// const showMessage = (e) => {
//     const text = e.target.value.toLowerCase();
//     console.log(text);
//
//     passwords.forEach((password, index) => {
//         if ((password.toLowerCase()) === text){
//             console.log(text);
//             div.textContent = messages[index];
//         }
//
//         // else {
//         //     div.textContent = "makapaka";
//         // }
//     })
// }
// input.addEventListener("input", showMessage);

//  dziewiąty projekt ------------->

// const input = document.getElementById('pass')
// const div = document.querySelector('div');
// // const passwords = "user";
// // const messages = "wyjechałam na zawsze";
//
// const passwords = ["user", "wiosna"];
// const messages = ["wyjechałam na zawsze", "mate wiosna"];
// console.log(passwords);
// console.log(messages);
//
// input.addEventListener('input', (e) => {
//     const text = e.target.value;
//     // console.log(text);
// passwords.forEach((password, index) => {
//     if (password === text) {
// div.textContent = messages[index];
// div.style.padding = `10px`;
//
//     }else {
//             div.textContent = '';
//             div.style.padding = `0px`;
//     }
// })
//
//
// })


// input.addEventListener("input", (e) => {
//     console.log(e.target.value);
// if (password === e.target.value){
// div.textContent = message;
// div.style.padding = `15px`;
// } else {
//     div.textContent = '';
//     div.style.padding = `0px`;
//     }
//
// })

// można do obu zamiast add i remove uzyć toggle.
// input.addEventListener('focus', (e) => {
// e.target.classList.add('active');
// } )
//
// input.addEventListener('blur', (e) => {
// e.target.classList.remove('active');
// } )

//  ósmy projekt --------->
// let red = 100;
// let green = 100;
// let blue = 100;
//
// document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//     const changeColor = (e) => {
//         console.log(e.keyCode, e.which);
//
//     const pressedButton = e.keyCode;
//     const arrowUp = 38;
//     const arrowDown = 40;

    // if (pressedButton === arrowUp){
    //     if (red < 255) {
    //             red += 10;
    //             green += 10;
    //             blue += 10;
    //     }
    // } else if (pressedButton === arrowDown) {
    //     if (red >= 0) {
    //     red -= 10;
    //     green -= 10;
    //     blue -=10;
    //     console.log("sciemniam");
    // }
    //         }
    //     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

//     switch (pressedButton){
//         case arrowUp:
//             // red += 10;
//             // green += 10;
//             // blue += 10;
//             document.body.style.backgroundColor = `rgb(${red < 255 ? red++ : red}, ${green < 255 ? green++ : green}, ${blue < 255 ? blue++ : blue})`;
//             break;
//         case arrowDown:
//             // red -= 10;
//             // green -= 10;
//             // blue -=10;
//             document.body.style.backgroundColor = `rgb(${red > 0 ? --red : red}, ${green> 0 ? --green : green}, ${blue> 0 ? --blue : blue})`;
//             break;
//     }
//
// };
// window.addEventListener("keydown", changeColor)

// siódmy projekt --------->
//
//
// const div = document.querySelector('div');

// let divX = 150;
// let divY = 50;
// div.style.left = `${divX}px`;
// div.style.top = `${divY}px`;
// let drawActive = false;
// let insertDivX;
// let insertDivY;
//
// div.addEventListener("mousedown", (e) => {
// console.log("grab works");
// div.style.backgroundColor = "grey";
// drawActive = !drawActive; // false = true
//     insertDivX = e.offsetX;
//     insertDivY = e.offsetY;
//     console.log(insertDivX , insertDivY);

//
// })
//
// div.addEventListener("mousemove", (e) => {
//     if (drawActive){
//         console.log("move works");
// divX = e.clientX - insertDivX;
// divY = e.clientY - insertDivY;
// div.style.left = `${divX}px`;
// div.style.top = `${divY}px`;
// }})
//
// div.addEventListener("mouseup", () => {
// console.log("drop works");
// div.style.backgroundColor = "black";
//     drawActive = !drawActive; // true = false
// })

// szosty projekt --------->
// const h1 = document.querySelector('h1');
// const body = document.querySelector('body');
//
// const width = window.innerWidth;
// const height = window.innerHeight;
// document.body.addEventListener("mousemove", (e) => {
    // console.log(e.clientX, e.clientY);
    // I need to display the parameters on the screen as H1
    //for browser
    //     h1.textContent = `${e.clientX}, ${e.clientY}`;
        // for whole screen
        // h1.textContent = `${e.screenX}, ${e.screenY}`;
        // for site with scroll
        // h1.textContent = `${e.pageX}, ${e.pageY}`;
        // next i need to change background colors if mose is moving

        // body.style.backgroundColor = `rgb(${e.clientX /3}, ${e.clientY /2}, ${e.clientX / e.clientY * 20})`;
//         const x = e.clientX;
//         const y = e.clientY;
//         h1.textContent = `${x}, ${y}`;
//
//         })
//
// body.addEventListener("click", (e) => {
//     const x = e.clientX;
//     const y = e.clientY;
//     const color = getColor(e);
//     body.style.backgroundColor = color;
    //
    //     const red = x / width * 100;
    //     const green = y / height * 100;
    //     const blue = ((x / width * 100) + (y / height * 100)) /2;
    //
    //     body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
// })
// const getColor = (e) => {
//     const x = e.clientX;
//     const y = e.clientY;
//     if ((x % 2) && (y % 2) === 0) {
//         console.log("sa parzyste");
//         return "red";
//     } else if ((x % 2) && (y % 2) !== 0) {
//         return "blue";
//         console.log("nie sa parzyste");
//     } else {
//         console.log("sa od siebie rozne");
//         return "green";
//     }
// }

// piatyty projekt --------->
//
// let size = 10;
// let orderElement = 1;
//
// const init = () => {
//     const body = document.querySelector('body');
//     const btn = document.createElement('button');
//     btn.style.width = 200 + "px";
//     btn.style.height = 60 + "px";
//     btn.style.margin = 100 + "px";
//     btn.style.backgroundColor = "lightgreen";
//     btn.textContent = "Stwórz listę";
//     body.appendChild(btn);
//
//     const ulElement = document.createElement('ul');
//     body.appendChild(ulElement);
//
//     btn.addEventListener("click", createElements)
// }
//
// const createElements = () => {
//
//     for (let i = 0; i <10; i++) {
//         const ulElement = document.querySelector('ul');
//         const liElement = document.createElement('li');
//         liElement.textContent = `element nr. : ${orderElement++}`;
//         liElement.style.fontSize = `${size}px`;
//         ulElement.appendChild(liElement);
//         size++;
//     }
//
//
// }
//
// init()
//

// czwarty projekt --------->
//
// const btn = document.querySelector('button');
// const listChildrens = document.querySelectorAll('li');
// let charSize = 16;
// // ---------------------------------->   metoda .forEach   <--------------
// function enlargeTheChar() {
// listChildrens.forEach(function (child) {
//     child.style.display = "block";
//     child.style.fontSize = charSize + "px";
// })
// charSize++;
// }

// ---------------------------------->    pętla   <--------------
// function enlargeTheChar() {
//     for (let i = 0; i < listChildrens.length ; i++) {
//         listChildrens[i].style.display = "block";
//         listChildrens[i].style.fontSize = charSize + "px";
//     }
//     charSize++;
// }
// btn.addEventListener("click", enlargeTheChar);



// trzeci projekt --------->
//
//
// const rectangle = document.createElement('div');
// document.body.appendChild(rectangle);
// document.body.style.height = "10000vh"
// const screenWidth = window.innerWidth;
// const screenHeight = window.innerHeight;
//
// let grow = true; // flaga
//
// let size = 0;
// rectangle.style.position = "fixed";
// rectangle.style.left = 0;
// rectangle.style.top = 0;
// rectangle.style.backgroundColor = "green";
// rectangle.style.width = "100vw";
// rectangle.style.height = size + "px";
//
//
// // const changeHeight = function ()
// function changeHeight(){
//     if (grow) {
//         size += 5;
//
//         rectangle.style.backgroundColor = "green";
//     } else {
//         size -= 5;
//
//         rectangle.style.backgroundColor = "red";
//     }
//     rectangle.style.height = size + "px";
//
//     if (size >= screenHeight / 2) {
//         grow = !grow;
//     } else if (size <= 0) {
//         grow = true;
//     }
// }
//     window.addEventListener("scroll", changeHeight);
//



// drugi projekt ------->  kwadrat zmieniajacy wielkosc pod czas scrolowania na stronie

// const squere = document.createElement('div');
// document.body.appendChild(squere);
//
// const screenWidth = window.innerWidth;
// const screenHeight = window.innerHeight;
// let grow = true; // flaga
// let size = 10;
// squere.style.width = size + "px";
// squere.style.height = size + "px";
//
// window.addEventListener("scroll", function (){
//     if (grow){
//         size += 5
//         squere.style.width = size + "px";
//         squere.style.height = size + "px";
//         console.log("rosnie");
//     } else {
//         size -= 5
//         squere.style.width = size + "px";
//         squere.style.height = size + "px";
//         console.log("maleje");
//     }
//
//
//     if (size >= screenWidth / 2){
//         grow = !grow;
//     } else if (size <= 0){
//         grow = true;
//     }
// })

// pierwszy projekt ------->   dodawanie elementow do strony za pomoca "create element", co 5 element jest inny

    // const btn = document.querySelector("button");
    // const body = document.querySelector("body");
    // let counter = 1;    // zmienna musi byc po za funkcją, jej scope zycie funkcji.
    // const addElement = function ()
    // {
    //     const div = document.createElement("div");
    //
    //     if (counter % 5 == 0) {
    //         div.classList.add("circle");
    //     }
    //     body.appendChild(div);
    //     div.innerText = `${counter++}`;
    // }
    // btn.addEventListener("click", addElement);
