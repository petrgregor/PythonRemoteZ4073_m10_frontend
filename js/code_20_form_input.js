function validateForm() {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    console.log('name = ', name, ', surname = ', surname);
    document.getElementById('result').innerText =
        'name = ' + name + ', surname = ' + surname;
}

function factorial() {
    var number = document.getElementById('number1').value;
    var result = 1;
    for (var i = 1; i <= number; i++) {
        result *= i;
    }
    document.getElementById('fact-result').innerHTML =
        number + "! = <b>" + result + "</b>";
}

function factorial2() {
    var number = document.getElementById('number2').value;
    var result = 1;
    for (var i = 1; i <= number; i++) {
        result *= i;
    }
    document.getElementById('fact-result2').innerHTML =
        number + "! = <b>" + result + "</b>";
}
