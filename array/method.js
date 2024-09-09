//Method pada Array :


var arr = ['Swastika', 'Ratu', 'Sinaga'];
// 1. Join
// console.log(arr.join(' '));
// Hasil : Swastika Ratu Sinaga

// 2. push
// arr.push('UwU');
// Hasil : Swastika Ratu Sinaga UwU

// 3. Pop
// arr.pop();
// hasil : Swastika Ratu

//  4. unshift
// arr.unshift('Halo,');  
// hasil : Halo, Swastika Ratu Sinaga

// 5. Shift
// arr.shift();
// Hasil : Ratu Sinaga

// 6. splice 
// splice (indexAwal, mauDiHapusBerapa, elemenBaru1, elemenBaru2, dst..);
// arr.splice(2 , 0 , 'uWu' , 'hehe');
// hasil : Swastika Ratu uWu hehe Sinaga

// 7. slice
// slice(awal, akhir);

// var arr1 = ['a', 'b', 'c', 'd', 'e'];
// var arr2 = arr1.slice(2, 4);
// console.log(arr1.join(' '));
// console.log(arr2.join(' '));
// hasil : c d


// 8. forEach 
var angka = [1,2,3,4,5,6,7,8,];

// cara for : 
// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }


// cara forEach 1 : 
// var cetak = function(e){
//     console.log(e);
// }
// angka.forEach(cetak);


// // cara forEach 2 : 
// angka.forEach(function(e){
//     console.log(e);
// })



// 9. Map
// var angka = [ 1, 2, 5, 8, 7, 9, 3, 4];
// var angka2 = angka.map(function(e){
//     return e * 2;
// });
// console.log(angka2.join(' '));

// 10. sort 
// var angka = [ 1, 2, 5, 8, 7, 9, 3, 4];
// angka.sort();
// console.log(angka.join(' '));

// 11. filter 
// var angka = [ 1, 2, 5, 8, 7, 9, 3, 4];
// var angka2 = angka.filter(function(x){
//     return x < 5;
// });
// console.log(angka2.join(' '));
// hasil : 1 2 3 4


// 12. find
var angka = [ 1, 2, 5, 8, 7, 9, 3, 4];
var angka2 = angka.find(function(x){
    return x < 5;
});
console.log(angka2);
// hasil : 1. mengambil angka pertama