// add
document.cookie = "nick=John Doe";
document.cookie = "phone=9999999";

var cookieStr = document.cookie;
console.log(cookieStr);

function saveName() {
    var name = document.getElementById('name').value;
    document.getElementById('result').innerText = name;
    document.cookie = "name=" + name;
}

function getCookie() {
    let key = document.getElementById('cookie1').value;
    let cookies = document.cookie.split(';');
    console.log("cookies: " + cookies);
    // TODO: najít v poli položku s hledaným key
}

// pomocí knihovny js-cookie
Cookies.set("username", "admin");
console.log(Cookies.get("nick"));
console.log(Cookies.get("nick-undefined"));

if (Cookies.get("name")) {
    document.getElementById('welcome').innerHTML = "Vítejte " +
        "zpět na našich stránkách uživateli " + Cookies.get("name") + ".";
}

//localStorage.setItem("someKey", "someValue");
//localStorage.secondKey = "secondValue";

console.log("someKey: " + localStorage.getItem("someKey"));
console.log("secondKey: " + localStorage.secondKey);

//sessionStorage.setItem("sessionKey1", "sessionValue1");
//sessionStorage.sessionKey2 = "sessionValue2";

console.log("sessionKey1: " + sessionStorage.getItem("sessionKey1"));
console.log("sessionKey2: " + sessionStorage.sessionKey2);
