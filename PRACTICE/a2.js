var mod = function(a,b){
    return a%b
}

var remainder = mod(100,10)
console.log(remainder)

/////////////////////////////////////////////////////

var Person = {
    name: 'Numayr',
    uni: 'APU',
    age: 22,
    noise: function() {console.log('Yee')}
}

Person.noise()

////////////////////////////////////////////////////

var array = [1,2,3,4,5,6,7,8]
var a = array.pop()
var b = array.pop()
var c = array.pop()
var d = array.pop()
var e = array.pop()
var f = array.pop()
var g = array.pop()
var h = array.pop()

console.log([a,b,c,d,e,f,g,h])

//////////////////////////////////////////////////

var x = function (n) {

if (n%2 == 0){
    console.log( n + ' is even')
}else {
    console.log( n + ' is odd')
}
}

x(2314234)
x(90)
x(64645654645 - 45645854667)

//////////////////////////////////////////////////

var array = [1,2,3,4,5,6,7,8]

for (i = 0; i<9; i++ ) {
    var a = array.pop()
    for (i = 0; i<10; i++ ) {
    var b = array.push()
    }
}

console.log(array)

////////////////////////////////////////////////

