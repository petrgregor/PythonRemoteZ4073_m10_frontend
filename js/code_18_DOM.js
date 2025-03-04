console.log("getElementById");
let element = document.getElementById("id-paragraph1");
console.log(element);

console.log("getElementsByClassName");
let elements = document.getElementsByClassName("paragraph");
console.log(elements);
console.log(elements[1]);

console.log("getElementsByTagName")
elements = document.getElementsByTagName("p");
console.log(elements);

console.log("querySelector");
element = document.querySelector(".paragraph");
console.log(element);

console.log("querySelectorAll");
elements = document.querySelectorAll(".paragraph");
console.log(elements);

// Manipulace s DOM
console.log("Manipulace s DOM");
console.log("createElement");
let divElement = document.createElement("div");

let mainDiv = document.getElementById("main-div");
mainDiv.appendChild(divElement);

let paragraph1 = document.getElementById("id-paragraph1");
mainDiv.removeChild(paragraph1);

console.log(document.getElementById("id-paragraph2").innerHTML);
document.getElementById("id-paragraph2").innerHTML = "<b>Ahoj světe.</b>";

console.log(document.getElementById("id-paragraph2").innerText);
console.log(document.getElementById("id-paragraph2").innerHTML);

// classList API
console.log("classList API");
console.log(document.getElementById('main-div').classList);

// contains
console.log(document.getElementById('main-div').classList.contains('mb-5'));
console.log(document.getElementById('main-div').classList.contains('mt-5'));

// add
document.getElementById('main-div').classList.add('new-class-name');

// remove
document.getElementById('main-div').classList.remove('mt-5');