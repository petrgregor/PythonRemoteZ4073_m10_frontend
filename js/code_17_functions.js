function add(num1, num2) {
    return num1 + num2;
}

console.log(add(10, 20));

//Přímá deklarace funkce
console.log("Přímá deklarace funkce");
console.log((function (num1, num2) {
    return num1 + num2;
})(100, 200));

// Function expression
console.log("Function expression");
const add2 = function(num1, num2) {
    return num1 + num2;
}
console.log(add2(1000, 2000));

// Arrow funkce (šipka)
console.log("Arrow funkce (šipka)");
const add3 = (num1, num2) => {
    return num1 + num2;
}
console.log(add3(5, 50));