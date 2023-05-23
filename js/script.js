function hitungKeliling() {
    const sisiKeliling = document.getElementById("sisi-keliling").value;
    const hasil = document.getElementById("inner");
    // const hasil = document.getElementById("hasil-keliling");
    // console.log(sisiLuas);
    // rumus.innerHTML = "K = 4 x " + sisiKeliling;
    // hasil.innerHTML = 4 * sisiKeliling;
    hasil.innerHTML = "<p class='result-keliling' id='rumus-keliling'>K = 4 x S</p> <p class='result-keliling' id='perhitungan-keliling'>K = 4 x " + sisiKeliling + " cm</p> <p class='result-keliling' id='hasil-keliling'>"+4 * sisiKeliling+" cm</p>";
}

