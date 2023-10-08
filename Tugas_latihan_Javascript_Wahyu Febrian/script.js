// Contoh penggunaan if-else, nested if
let nilai = 85;

if (nilai >= 90) {
    console.log("Nilai Mata Kuliah Kamu adalah A");
} else if (nilai >= 85) {
    console.log("Nilai Mata Kuliah Kamu adalah B");
} else if (nilai >= 70) {
    console.log("Nilai Mata Kuliah Kamu adalah C");
} else {
    console.log("Nilai Mata Kuliah Kamu adalah D");
}

// switch case
let hari = "Sabtu";
switch (hari) {
    case "Senin":
        console.log("Hari ini Sabtu");
        break;
    case "Minggu":
        console.log("Hari ini Minggu");
        break;
    default:
        console.log("Sekarang bukan Hari libur!");
}

// for statement
for (let i = 1; i <= 9; i++) {
    console.log("Perulangan ke-" + i);
}

// while loop
let counter = 0;
while (counter < 5) {
    console.log("Perulangan ke-" + counter);
    counter++;
}

// do-while loop
let angka = 2;
do {
    console.log("Angka ke-" + angka);
    angka++;
} while (angka <= 8);

// Contoh penggunaan fungsi
function tambahkan(w, z) {
    return w + z;
}

let hasilPenjumlahan = tambahkan(2, 6);
console.log("Hasil penjumlahan: " + hasilPenjumlahan);
