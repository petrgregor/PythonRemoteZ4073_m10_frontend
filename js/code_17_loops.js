// JavaScript: Cykly
// Cyklus for
/*for (deklarace počítadla; podmínka; změna počítadla) {
    tělo cyklu
}*/
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// forEach cyklus
let numbers3 = [1, 2, 3, 4, 5];
numbers3.forEach(
    function (element, index) {
        console.log("Prvek na indexu ", index, " má hodnotu ", element);
    }
);

// Cyklus while
console.log("Cyklus while");
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Cyklus do...while
console.log("Cyklus do...while");
i = 0;
do {
   console.log(i);
   i++;
} while (i < 5);

// Cykly a break (přerušení)
console.log("Cykly a break (přerušení)");
i = 0;
while (true) {
    console.log(i);
    if (i >= 5) {
        break; // ukončí cyklus
    }
    i++;
}

// Příkaz continue
console.log("Příkaz continue");
i = 0;
while (i < 10) {
    i++;
    if (i === 5) {
        continue;  // ukončí aktuální iteraci
    }
    console.log(i);
}
