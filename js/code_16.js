console.log("Ukázková zpráva do konzole.");
//document.write("Ahoj Světe!");

/*
* Víceřádkový komentář
* */

/*
document.write("Hola!!");
console.log("Hola!"); */

// Jednořádkový komentář.
//document.write("Hello!")

// Podmíněné příkazy
if (15 < 10) {
    console.log("Podmínka je pravdivá");
} else {
    console.log("Podmínka je nepravdivá");
}

if (15 < 10) {
    console.log("První podmínka je pravdivá");
} else if (15 < 8) {
    console.log("Druhá podmínka je pravdivá");
} else {
    console.log("Žádná podmínka není pravdivá");
}

var x = 5;
switch (x) {
    case 0:
        console.log("Nula");
        break;
    case 1:
        console.log("Jedna");
        break;
    case 2:
        console.log("Dva");
        break;
    default:
        console.log("Neznámá hodnota.");
}

// Proměnné
const a = 10;  // U konstanty musíme rovnou vložit hodnotu
//a = 5; // ale tato hodnota nelze později změnit!
//Uncaught TypeError: invalid assignment to const 'a'

let b;
b = 5;
b = "15";

var c;
c = 100;
c = "Lorem ipsum";

// Rozdíl mezi let a var
// let nabízí blokový scope, zatímco var má functional scope
function ab() {
    if (true) {
        var var_a = 1;
        let let_b = 2;
        console.log("Jsme uvnitř bloku:");
        console.log("var_a = ", var_a);
        console.log("let_b = ", let_b);
    }
    console.log("Jsme uvnitř funkce mimo blok:");
    console.log("var_a = ", var_a);
    //console.log("let_b = ", let_b); // Uncaught ReferenceError: let_b is not defined
}

ab();
console.log("Jsme mimo funkci:")
//console.log("var_a = ", var_a); // Uncaught ReferenceError: var_a is not defined

// let nelze "hoistnout", zatímco var ano.
foo = 1;
var foo;
console.log("foo = ", foo);

foo_let = 5;
//let foo_let;  // Uncaught ReferenceError: can't access lexical declaration 'foo_let' before initialization

// nelze znovu deklarovat proměnnou let se stejným názvem, ale je to možné s proměnnou var.
let bar = 20;
//let bar = 30; // Uncaught SyntaxError: redeclaration of let bar
bar = 40;

var foo = 2;

// Globální proměnné
const globalConst = "global const variable";
let globalLet = "global let variable";
var globalVar = "global var variable";

function test() {
    console.log("globalConst = ", globalConst);
    console.log("globalLet = ", globalLet);
    console.log("globalVar = ", globalVar);
}

test();

// JavaScript: datové typy
// Základní datové typy
var varString = "string";  // string (textový řetězec)
var varNumeric = 5;  // number (číslo)
var varNumber2 = 3.7;
var varBoolean = true;  // boolean  true/false  psané malými písmeny!
var varUndefined;
console.log("varUndefined = ", varUndefined);
var varNull = null;
console.log("varNull = ", varNull);

// typeof
console.log(varString, " is ", typeof varString);
console.log(varNumeric, " is ", typeof varNumeric);
console.log(varNumber2, " is ", typeof varNumber2);
console.log(varBoolean, " is ", typeof varBoolean);
console.log(varUndefined, " is ", typeof varUndefined);
console.log(varNull, " is ", typeof varNull);
console.log([], " is ", typeof []);
//console.log("ab() is ", typeof ab());

// instanceof
if ([] instanceof Array){  // true
    console.log("[] is Array");
}
if ([] instanceof Object){  // true
    console.log("[] is Object");
}
if (ab instanceof Object){  // true
    console.log("ab is Object");
}
if ("lorem ipsum" instanceof Object){  // false
    console.log("'lorem ipsum' is Object");
}

// JavaScript: Pole - Arrays
const array = [];  // prázdné pole
const array2 = [1, 2, 3, 4];
const array3 = [1, "John", ab];  // do pole můžeme vkládat hodnoty různého typu

const numbers = [1, 2, 3, 4];
console.log("numbers = ", numbers);

// push - přidání nové položky na konec sady
numbers.push(5);  // přidáme hodnotu na konec pole
console.log("numbers = ", numbers);

// pop - smazání poslední položky a její vrácení (return)
var number = numbers.pop();
console.log("number = ", number);
console.log("numbers = ", numbers);

// shift - smazání prvního prvku z pole a jeho následné vrácení
var number = numbers.shift();
console.log("number = ", number);
console.log("numbers = ", numbers);

// unshift - přidání prvku na začátek pole
numbers.unshift(1);
console.log("numbers = ", numbers);

// join - spojení po sobě jdoucích prvků do jednoho textu
console.log("numbers.join() = ", numbers.join());

// reverse - převrácení prvků pole
console.log("numbers.reverse() = ", numbers.reverse());
console.log("numbers = ", numbers);

// sort - řazení prvků pole
numbers.sort();
console.log("numbers = ", numbers);

// concat - sloučení polí a vrácení nového spojeného pole
var numbers2 = [5, 6, 7, 8];
var numbers3 = numbers.concat(numbers2);
console.log("numbers3 = ", numbers3);

// forEach - provedení určité funkce nad každým prvkem pole.
numbers.forEach(e => {console.log(e)});

// map - vytvoření nového pole obsahujícího výsledky volání zadané funkce pro každý prvek pole.
var numbers2 = numbers.map(function(e) {return e*e});
console.log("numbers2 = ", numbers2);

// includes - kontrola, zda pole obsahuje daný prvek
console.log("3 je v poli: ", numbers.includes(3));
console.log("30 je v poli: ", numbers.includes(30));

// filter - vrací nové pole pouze s těmi prvky, které splňují podmínku zadaný ve funkci.
var numbers2 = numbers.filter(function (e) {return e % 2 == 0;});
console.log("numbers2 = ", numbers2);
