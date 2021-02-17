
var date = new Date();

//the day
var today = date.getDay();
var daylist = ["son", "mon", "too", "wef", "thor", "free", "sat"]
console.log("Today is : " + daylist[today] + ".");

//the time
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();

var ampm = (h<=12) ? "AM":"PM"
h = (h >= 12) ? h - 12:h

console.log("Current Time : "+ h + " : " + m + " : " + s + "  " + ampm);

///////////////////////////////////////////////////////////////////////////

//day
var a = new Date()
var b = a.getDate()

if (b<10){
  b = '0' + b
}

//month
var c = a.getMonth() + 1

if(c<10){
  c = '0' + c
}

//year
var d = a.getFullYear()

console.log(b+"-"+c+"-"+d)

///////////////////////////////////////////////////////////////////////////

function ad() {
  n1 = document.getElementById("N1").value;
  n2 = document.getElementById("N2").value;
  document.getElementById("equals").innerHTML = n1 + n2
}
function su() {
  n1 = document.getElementById("N1").value;
  n2 = document.getElementById("N2").value;
  document.getElementById("equals").innerHTML = n1 - n2
}
function mu() {
  n1 = document.getElementById("N1").value;
  n2 = document.getElementById("N2").value;
  document.getElementById("equals").innerHTML = n1 * n2
}
function di() {
  n1 = document.getElementById("N1").value;
  n2 = document.getElementById("N2").value;
  document.getElementById("equals").innerHTML = n1 / n2
}
function re() {
  n1 = document.getElementById("N1").value;
  n2 = document.getElementById("N2").value;
  document.getElementById("equals").innerHTML = n1 % n2
}