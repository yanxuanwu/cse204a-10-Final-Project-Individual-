
var e = document.getElementById("orangechoice");
var currPrice = document.getElementById("orangeprice").innerHTML;
function onChange() { 
    var value = e.value;
    console.log(value);
    var text = e.options[e.selectedIndex].text;
    var url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/"+text.toLowerCase()+".json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var nameObject = JSON.parse(this.responseText);
            console.log(nameObject);
            var property = text.toLowerCase();
            var exchangeRate = parseFloat(nameObject[property]);
            console.log(currPrice);
            var newPrice = parseFloat(currPrice) * exchangeRate;
            var roundedPrice = newPrice.toFixed(2);
            document.getElementById('orangeprice').innerHTML = roundedPrice + " " + text;
        }
    };
    
    xhttp.open("GET", url, true);
    xhttp.send();
}
e.onchange = onChange;
onChange();

var e1 = document.getElementById("bunnychoice");
var currPrice1 = document.getElementById("bunnyprice").innerHTML;
function bunnyChange() { 
    var value = e1.value;
    var text = e1.options[e1.selectedIndex].text;
    var url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/"+text.toLowerCase()+".json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var nameObject = JSON.parse(this.responseText);
            console.log(nameObject);
            var property = text.toLowerCase();
            var exchangeRate = parseFloat(nameObject[property]);
            console.log(currPrice);
            var newPrice = parseFloat(currPrice1) * exchangeRate;
            var roundedPrice = newPrice.toFixed(2);
            console.log(roundedPrice);
            document.getElementById('bunnyprice').innerHTML = roundedPrice + " " + text;
            console.log(document.getElementById('bunnyprice').innerHTML);
        }
    };
    
    xhttp.open("GET", url, true);
    xhttp.send();
}
e1.onchange = bunnyChange;
console.log(e1.onchange);
bunnyChange();

var e2 = document.getElementById("canechoice");
var currPrice2 = document.getElementById("caneprice").innerHTML;
function onChange2() { 
    var value = e2.value;
    var text = e2.options[e2.selectedIndex].text;
    var url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/"+text.toLowerCase()+".json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var nameObject = JSON.parse(this.responseText);
            console.log(nameObject);
            var property = text.toLowerCase();
            var exchangeRate = parseFloat(nameObject[property]);
            var newPrice = parseFloat(currPrice2) * exchangeRate;
            var roundedPrice = newPrice.toFixed(2);
            document.getElementById("caneprice").innerHTML = roundedPrice + " " + text;
        }
    };
    
    xhttp.open("GET", url, true);
    xhttp.send();
}
e2.onchange = onChange2;
onChange2();


var e3 = document.getElementById("treechoice");
var currPrice3 = document.getElementById("treeprice").innerHTML;
function onChange3() { 
    var value = e3.value;
    console.log(value);
    var text = e3.options[e3.selectedIndex].text;
    var url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/"+text.toLowerCase()+".json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var nameObject = JSON.parse(this.responseText);
            console.log(nameObject);
            var property = text.toLowerCase();
            var exchangeRate = parseFloat(nameObject[property]);
            var newPrice = parseFloat(currPrice3) * exchangeRate;
            var roundedPrice = newPrice.toFixed(2);
            document.getElementById('treeprice').innerHTML = roundedPrice + " " + text;
        }
    };
    
    xhttp.open("GET", url, true);
    xhttp.send();
}
e3.onchange = onChange3;
onChange3();


var e4 = document.getElementById("wolfchoice");
var currPrice4 = document.getElementById("wolfprice").innerHTML;
function onChange4() { 
    var value = e4.value;
    console.log(value);
    var text = e4.options[e4.selectedIndex].text;
    var url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/"+text.toLowerCase()+".json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var nameObject = JSON.parse(this.responseText);
            console.log(nameObject);
            var property = text.toLowerCase();
            var exchangeRate = parseFloat(nameObject[property]);
            var newPrice = parseFloat(currPrice4) * exchangeRate;
            var roundedPrice = newPrice.toFixed(2);
            document.getElementById('wolfprice').innerHTML = roundedPrice + " " + text;
        }
    };
    
    xhttp.open("GET", url, true);
    xhttp.send();
}
e4.onchange = onChange4;
onChange4();


var e5 = document.getElementById("bearchoice");
var currPrice5 = document.getElementById("bearprice").innerHTML;
function onChange5() { 
    var value = e5.value;
    console.log(value);
    var text = e5.options[e5.selectedIndex].text;
    var url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/"+text.toLowerCase()+".json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var nameObject = JSON.parse(this.responseText);
            console.log(nameObject);
            var property = text.toLowerCase();
            var exchangeRate = parseFloat(nameObject[property]);
            var newPrice = parseFloat(currPrice5) * exchangeRate;
            var roundedPrice = newPrice.toFixed(2);
            document.getElementById('bearprice').innerHTML = roundedPrice + " " + text;
        }
    };
    
    xhttp.open("GET", url, true);
    xhttp.send();
}
e5.onchange = onChange5;
onChange5();

