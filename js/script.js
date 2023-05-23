// 2) lalu diaplikasikan untuk fungsi luas
function hitungLuas() {
    const sisiLuas = document.getElementById("sisi-luas").value;
    const hasil = document.getElementById("inner-luas");

    hasil.innerHTML = "<p class='result-luas' id='rumus-luas'>L = S x S</p> <p class='result-luas' id='perhitungan-luas'>L = "+ sisiLuas +" x " + sisiLuas + " cm</p> <p class='result-luas' id='hasil-luas'>L = "+ sisiLuas * sisiLuas+" cm</p>";
}
// 2) lalu diaplikasikan untuk fungsi luas
// 1)fungsi ini dibuat terlebih dahulu
function hitungKeliling() {
    const sisiKeliling = document.getElementById("sisi-keliling").value;
    const hasil = document.getElementById("inner-keliling");
    
    hasil.innerHTML = "<p class='result-keliling' id='rumus-keliling'>K = 4 x S</p> <p class='result-keliling' id='perhitungan-keliling'>K = 4 x " + sisiKeliling + " cm</p> <p class='result-keliling' id='hasil-keliling'> K = "+4 * sisiKeliling+" cm</p>";
}
// 1)fungsi ini dibuat terlebih dahulu
