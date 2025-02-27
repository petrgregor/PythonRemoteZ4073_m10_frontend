// Vytváření objektů
console.log("Vytváření objektů");

// literal - vložením složených závorek
console.log("literal");
const person = {
    firstName: "John",
    lastName: "Smith"
}
console.log(person);

// konstruktor objektu
console.log("konstruktor objektu");
const person2 = new Object();
person2.firstName = "John";
person2.lastName = "Smith";
console.log(person2);

// konstruktor
console.log("konstruktor");
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
const person3 = new Person("Adam", "Bernau");
console.log(person3);
const person4 = new Person("Bedřich", "Novák");
console.log(person4);

// class keyword
console.log("class keyword");
class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person5 = new Human("Cyril", "Svoboda");
console.log(person5);

// Přístup k hodnotám
console.log("Přístup k hodnotám");
console.log("Jméno:", person5.firstName, ", příjmení: ", person5.lastName);
console.log("Jméno:", person5["firstName"], ", příjmení: ", person5["lastName"]);

var personsName = "firstName"
console.log("Jméno: ", person5[personsName]);
