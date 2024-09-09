var tanya = true;

while (tanya) {

    //Menangkap pilihan player
    var p = prompt('Silahkan pilih angka dari 1-10 : ');

    //menangkap pilihan komputer
    //mengenerate bilangan random
    var comp = Math.floor(Math.random()*10 )+1;

    var hasil ='';
    //rules : 
    if( p == comp){
        hasil = 'BENAR!'
    }else if (p < comp){
        hasil = 'Terlalu Rendah'
    }else if(p > comp){
        hasil = 'Terlalu Tinggi';
    }else{
        hasil = 'Pilihan yang anda inputkan salah!';
    }

    //tampilkan hasil

    alert('Kamu Memilih : ' + p  + '.  Jawaban Kamu  :   ' + hasil ) 

    //tanya lagi kepada player
    tanya = confirm('Apakah anda ingin melakukan permainan lagi?');

}

alert('Terima kasih telah bermain!');