var item = prompt('Masukkan nama makanan/minuman : \n (cth : nasi, telur, daging, susu, mie,  )')

switch (item){
    // menunjukkan bahwa beberapa case dengan alert yang sama dapat digabungkan dengan memanggil case nya tanpa break.
    case 'nasi':
    case 'telur':
    case 'daging':
    case'susu':
        alert('Makanan / Minuman SEHAT.');
        break;
    case'mie':
        alert('Makanan / Minuman TIDAK SEHAT!!!!!.')
        break;
    default:
        alert('Maaf, item yang anda masukkan tidak terdaftar.');
}