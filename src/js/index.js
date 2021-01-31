import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');

// siódmy projekt --------->


const div = document.querySelector('div');

let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;
let drawActive = false;
let insertDivX;
let insertDivY;

div.addEventListener("mousedown", (e) => {
console.log("grab works");
div.style.backgroundColor = "grey";
drawActive = !drawActive; // false = true
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
    console.log(insertDivX , insertDivY);


})

div.addEventListener("mousemove", (e) => {
    if (drawActive){
        console.log("move works");
divX = e.clientX;
divY = e.clientY;
div.style.left = `${divX - 100}px`;
div.style.top = `${divY - 100}px`;
}})

div.addEventListener("mouseup", () => {
console.log("drop works");
div.style.backgroundColor = "black";
    drawActive = !drawActive; // true = false
})










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
