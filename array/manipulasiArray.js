
// CARA MANUAL

//Menambah isi array 1
var arr = ["capi", 4, "kaki"];
console.log(arr);

//Menambah isi array 2
var arr2 = [];
arr2[0] = "capii";
arr2[1] = 4;
arr2[2] = "kaki";
console.log(arr2);

//menghapus isi array
var arr3 = ["capi", 4, "kaki"];
arr3[1] = undefined;
console.log(arr3);

//menampilkan seluruh isi array
var animal = ["capi", "kucing", "ciputt", "kelinci"];

for (var i = 0; i < animal.length; i++){
    console.log("Binatang ke-" + (i+1) + ' : ' + animal[i]);
}

