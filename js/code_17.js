const number = 5;
console.log("number = ", number);
//number = 6;  // Uncaught TypeError: invalid assignment to const 'number'
//console.log("number = ", number);

const numbers = [1, 2, 3, 4];
console.log("numbers = ", numbers);
numbers.push(5);
console.log("numbers = ", numbers);
//numbers = 6;  // Uncaught TypeError: invalid assignment to const 'numbers'
//numbers = [1, 2, 3, 4, 5];  // Uncaught TypeError: invalid assignment to const 'numbers'

// indexOf - vrací první (nejmenší) index se zadanou hodnotou. Pokud je vrácena hodnota -1, položka se v poli nenachází.
var idx = numbers.indexOf(3);
console.log("Číslo 3 je na indexu: ", idx);
idx = numbers.indexOf(10);
if (idx >= 0) {
    console.log("Číslo 10 je na indexu: ", idx);
} else {
    console.log("Číslo 10 v poli není.")
}
numbers.push(3);
idx = numbers.indexOf(3);
console.log("numbers = ", numbers);
console.log("Číslo 3 je na indexu: ", idx);

// slice - kopírování části pole a jeho vrácení jako nového pole. Přijímá dva argumenty - začátek a konec. Index uvedený v druhém z nich nekopíruje.
const numbers2 = numbers.slice(2, 4);
console.log("numbers2 = ", numbers2);
console.log("numbers = ", numbers); // [ 1, 2, 3, 4, 5, 3 ]
                                    // 0   1  2  3  4  5  6

// splice - úprava pole odebráním prvků a přidáním nových. Pokud nezadáme nové prvky, splice pouze odstraní ty staré. Jako argument bere počátek, počet odstraněných prvků a přidané prvky.
numbers.splice(1, 3);  // pouze mažeme prvky z pole
console.log("numbers = ", numbers);  // [ 1, 5, 3 ]
                                     //  0  1  2  3

numbers.splice(1, 0, 2); // [ 1, 2, 5, 3 ]
console.log("numbers = ", numbers);
numbers.splice(2, 0, 3, 4);  //  [ 1, 2, 3, 4, 5, 3 ]
console.log("numbers = ", numbers);

numbers.splice(1, 2, 10, 11, 12, 13, 14);
console.log("numbers = ", numbers);

// Vlastnost length: Vrací počet prvků v poli.
console.log("pole 'numbers' má ", numbers.length, " prvků.");

