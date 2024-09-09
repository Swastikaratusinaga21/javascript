// Challenge bintang 1

// hasil : 
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

var s = "";
 
for (var i = 0; i < 5; i++){
    for (var j = 0; j <= i; j++){
        s += "*";
        
    }
    s += "\n";
}


for (var i = 0; i < 5; i++){
    for (var k = 4; k > i; k--){
        s += "*";
    }
    s += "\n";
}
console.log(s);



// // challenge bintang 2

// hasil : 

// ___*
// __***
// _*****
// *******
// _*****
// __***
// ___*


// // // baris
for (a = 0 ; a < 9; a++){ 
    //var u = underscore
    //var b = bintang
    var u = "";
    var b = "";
    // Membuat kondisi agar bintang berjumlah ganjil, di mana bilangan dari var a (0-9) apabila dimodulud dan hasilnya 1, akan dipanggil ke console.
    if(a%2 == 1){
        // Melakukan perulangan pada variabel c. di mana ditentukan bahwa kondisi c adalah 0. dan nilai c akan terus bertambah sampai nilai c lebih kecil dari 7-a/2. 
        for ( var c = 0; c < (7 - a) /2; c++ ) {
            u = u + '_';
        }
        for ( var d = 0; d < a; d++ ) {
            b = b + '*';
        }
        // Memanggil underscore dan bintang
        console.log(u + b);
    }
}
for (a = 0 ; a < 7; a++){
    var u = "";
    var b = "";
    if(a%2 == 1){
        for ( var c = 3; c > (5 - a) /2; c-- ) {
            u = u + '_';
        }
        for ( var d = 6; d > a; d-- ) {
            b = b + '*';
        }
        // Memanggil underscore dan bintang
        console.log(u + b);
    }
}






