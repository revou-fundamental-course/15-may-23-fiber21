function hitungKeliling() {
    const sisiKeliling = document.getElementById("sisi-keliling").value;
    const rumus = document.getElementById("perhitungan-keliling");
    const hasil = document.getElementById("hasil-keliling");
    // console.log(sisiLuas);
    rumus.innerHTML = "K = 4 x " + sisiKeliling;
    hasil.innerHTML = 4 * sisiKeliling;
}

