let xhr = new XMLHttpRequest();

xhr.onload = function() {
    if (xhr.status === 200) {
        document.getElementById('demo').innerHTML = xhr.responseText;
        //alert('Hotovo, načetl jsem ' + xhr.response.length + ' bytů.');
        console.log('Hotovo, načetl jsem ' + xhr.response.length + ' bytů.');
    } else {
        alert("Chyba při načítání dat: " + xhr.status);
        console.log("Chyba při načítání dat: " + xhr.status);
    }
}

xhr.onerror = function() {
    console.log("Chyba");
}


function send() {
    xhr.open('GET', '../files/file_21.txt');
    xhr.send();
}


