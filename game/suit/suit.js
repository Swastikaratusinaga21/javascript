var tanya = true;

while (tanya) {


    //Menangkap pilihan player
    var p = prompt('Silahkan pilih : gajah, semut, orang');

    //menangkap pilihan komputer
    //mengenerate bilangan random
    var comp = Math.random();

    if(comp < 0.34){
        comp = 'gajah';
    }else if(comp >=0.34 && comp < 0.67){
        comp = 'orang';
    } else if(comp >=0.67);{
        comp = 'semut';
    }

    var hasil ='';
    //rules : 
    if( p == comp){
        hasil = 'SERI!'
    }else if (p == 'gajah'){
        // if(comp =='orang'){
        //         hasil = 'Kamu MENANG!';
        //     }else{
        //         hasil = 'Kamu KALAH!';
        //     }
        hasil = (comp == 'orang') ? 'Kamu MENANG!' : 'Kamu KALAH!';
    }else if (p == 'orang'){
        hasil = (comp == 'gajah') ? 'Kamu KALAH!!' : 'Kamu MENANG!';
    }else if(p == 'semut'){
        hasil = (comp =='orang') ? 'KALAH ' : 'MENANG';
    }else{
        hasil = 'Pilihan yang anda inputkan salah!';
    }

    //tampilkan hasil

    alert('Kamu Memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya kamu :  ' + hasil ) 

    //tanya lagi kepada player
    tanya = confirm('Apakah anda ingin melakukan permainan lagi?');

}

alert('Terima kasih telah bermain!');