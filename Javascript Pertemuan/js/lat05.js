function perkalian(a, b) {
    return a * b;
}

console.log(perkalian(3, 5));

let kali = (a, b) => a * b;

console.log(kali(4, 2));

// let zodiak = (tg, bl) => {
// let hasil = "Invalid";

// if (bl < 13 && bl > 0 && tg < 32 && tg > 0) {
//         hasil = "Zodiak Belum Dibuat"
//     }if (bln == 1) {
//         hasil = "Capricorn";
//         if (tgl > 21) {
//             hasil = "Aquarius";
//         }
//     }
//     return hasil;
// }
// console.log(zodiak(1, 1));

let lulus = (nilai) => {
    let total = "Gabut";
    if (nilai > 0 && nilai < 100) {
        if (nilai > 80) {
        total = "Nilai Anda Diatas KKM";
        }else{
        total = "Nilai Anda Dibawah KKM";
        }
    }
    return total;
}

console.log(lulus(1));