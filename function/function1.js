// Before :
//  //Deklarasi variabel kubus
// //User menginput nilai kubus
// var a = prompt ('Masukkan nilai sisi kubus pertama : ');
// var b = prompt ('Masukkan nilai sisi kubus kedua : ');

// //Menghitung nilai volume kubus 
// var volumeA = a * a * a;
// var volumeB = b * b * b;

// //Menampilkan hasil
// var hasil = volumeA + volumeB;

// alert('Volume kubus pertama :  '+ volume1 + '\nVolume kubus kedua :  '+ volume2 + '\nTotal volume kedua kubus :  '+ hasil);

//After menggunakan Function : 

function volumeDuaKubus( a, b){
    //Menghitung nilai volume kubus 
    var volumeA = a * a * a;
    var volumeB = b * b * b;

    // Menunjukkan hasil
    var hasil = volumeA + volumeB;

    //mengembalikan nilai yang sudah dihitung
    return hasil;
}
console.log(volumeDuaKubus(8, 3));
console.log(volumeDuaKubus(3, 3));
