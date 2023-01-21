// document.querySelector("#paragraf").innerHTML="Saya Belajar Javascript";
// document.querySelector("#content").innerHTML= "<h1> Ganti Isi </h1>";

let tanggal = 5;
let bulan = 2;
let hasil = salah;
if (tanggal > 0 && tanggal < 32 && bulan > 0 && tanggal < 13) {
    hasil = "Zodiak Belum Dibuat";
    if (bulan == 1) {
        if (tanggal >= 1 && tanggal <= 21) {
            hasil = "A";
        }else {
            hasil = "B";
        }
    }
    if (bulan == 2) {
        if (tanggal >= 1 && tanggal <= 21) {
            hasil = "C";
        }else {
            hasil = "D";
        }
    }
    if (bulan == 3) {
        if (tanggal >= 1 && tanggal <= 21) {
            hasil = "E";
        }else {
            hasil = "F";
        }
    }
    if (bulan == 4) {
        if (tanggal >= 1 && tanggal <= 21) {
            hasil = "G";
        }else {
            hasil = "H";
        }
    }
    if (bulan == 5) {
        if (tanggal >= 1 && tanggal <= 21) {
            hasil = "I";
        }else {
            hasil = "J";
        }
    }
}
// console.log (hasil);
document.querySelector("#content").innerHTML="<h1>" + hasil + "<h1>";
