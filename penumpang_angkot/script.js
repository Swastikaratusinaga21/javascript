var penumpang = ['swastika', undefined, 'Ratu'];
var tambahPenumpang = function(namaPenumpang, penumpang){
    // Jika penumpang kosong
    if (penumpang.length == 0){
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluarkan dari function
        return penumpang;
    }else{
        // telusuri penumpang dari awal
        for (var i = 0; i < penumpang.length; i++){
            // jika ada kursi kosong
            if (penumpang [i] == undefined){
                // tambah penumpang di kursi tersebut
                penumpang [i] = namaPenumpang;
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
          
            // jika sudah ada nama yang sama 
            else if(penumpang[i] == namaPenumpang){
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + "  Sudah ada di dalam Angkot");
                 // kembalikan isi array & keluar dari function   
                return penumpang;       
            }
                  
            // jika seluruh kursi terisi
            else if( i == penumpang.length - 1){
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
                
        }
    }      
}


var hapusPenumpang = function (namaPenumpang, penumpang) {
//  ketika angkot kosong
    if (penumpang.length == 0){
    // tampilkan pesan bahwa angkot kosong
    console.log ('Angkot masih kosong!');
    } 
    //    jika angkot berisi 
    else {
        for (var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang yang dicari ditemukan
            if (penumpang[i] == namaPenumpang) {
                // hapus nama penumpang tersebut
                penumpang[i] = undefined;
                return penumpang;
            }
            // jika tidak ada nama penumpang yang sesuai
            else if (i == penumpang.length - 1){
                // tampilkan pesan kesalahan
                console.log(namaPenumpang + " Tidak ada di dalam Angkot");
                return penumpang;
            }
    
        }
    }
}