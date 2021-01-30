import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')
// szosty projekt --------->


document.body.addEventListener("mousemove", (e) => {
    console.log(e.clientX, e.clientY);

    // I need to display the parameters on the screen as H1

    const h1 = document.querySelector('h1');

    if (event.clientY || event.clientX) {
        h1.textContent = `${event.clientX}, ${event.clientY}`;
    } else {
        h1.textContent = `move the mouse`
    }

})





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
