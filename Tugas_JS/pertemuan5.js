
//function tanpa argumen
function sapa (){
    alert ("Hallo Apa Kabar");
}

//function dengan argumen 
function sapa2(nama){
    alert ("Hallo apa kabar mas/mbak" + nama);
}

function sapa3(nama, jk){
    if (jk == "P") alert ("Selamat pagi mbak " + nama);
    else alert ("Selamat Pagi Mas " + nama);
}

function tambah (tambah1, tambah2){
    var hasil = tambah1 + tambah2;

    return hasil;
}




//alert ("Testing 1");
//sapa ();
//alert ("Testing 2");
//sapa2 (" Budi");
sapa3 ("Budi", "P");
var a = tambah(7, 3);
alert(a);

var usia  11;

if (usia >= 17){
    alert ("Anda Sudah Dewasa");
}else{} 
    alert ("Anda Masih Kecil");
}