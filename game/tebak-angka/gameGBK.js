var tanya = true;

while (tanya) {

    //Menangkap pilihan player
    var p = prompt('Silahkan pilih : gunting, batu, kertas');

    //menangkap pilihan komputer
    //mengenerate bilangan random
    var comp = Math.random();

    if(comp < 0.34){
        comp = 'gunting';
    }else if(comp >=0.34 && comp < 0.67){
        comp = 'batu';
    } else if(comp >=0.67);{
        comp = 'kertas';
    }

    var hasil ='';
    //rules : 
    if( p == comp){
        hasil = 'SERI!'
    }else if (p == 'gunting'){
        // if(comp =='orang'){
        //         hasil = 'Kamu MENANG!';
        //     }else{
        //         hasil = 'Kamu KALAH!';
        //     }
        hasil = (comp == 'batu') ? 'KALAH !' : 'MENANG!';
    }else if (p == 'batu'){
        hasil = (comp == 'kertas') ? 'KALAH!!' : 'Kamu MENANG!';
    }else if(p == 'kertas'){
        hasil = (comp =='gunting') ? 'KALAH ' : 'MENANG';
    }else{
        hasil = 'Pilihan yang anda inputkan salah!';
    }

    //tampilkan hasil

    alert('Kamu Memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya kamu :  ' + hasil ) 

    //tanya lagi kepada player
    tanya = confirm('Apakah anda ingin melakukan permainan lagi?');

}

alert('Terima kasih telah bermain!');