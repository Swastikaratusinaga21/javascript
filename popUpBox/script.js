alert('Yoooooooooooooooo');
var nama = prompt('Masukkan nama untuk masuk ke permainan: ');
var game =  confirm('Halo  ' + nama);
if (game === true){
    alert('Selamat datang di Permainan,  ' + nama);
    var angka = prompt('Silahkan pilih angka 1 sampai 100');
    var angka_benar ="7";
    if (angka === angka_benar){
        alert('Selamat, Anda berhasil menebak angka yang benar!');
    }else{
        alert('Maaf, Anda gagal menebak angka yang benar!');
    }
}else{
    alert('Anda membatalkan permainan');
}
