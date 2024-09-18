function checkkhodam() {
    const name = document.getElementById('nameImput').value.trim(); // Menggunakan .value, bukan .ariaValueMax
    const resultDiv = document.getElementById('result');

    if (name === "") {
        resultDiv.innerHTML = "<p style='color: red;'>Nama tidak boleh kosong!</p>";
        return;
    }

    const khodamNames = [
        "Khodam Naga Tunduk",
        "Khodam Ular Kejepit",
        "Khodam Beruang Nangis",
        "Khodam Naga Sakti"
    ];

    const khodamPresent = Math.random() > 0.5;

    if (khodamPresent) {
        const khodamName = khodamNames[Math.floor(Math.random() * khodamNames.length)];
        resultDiv.innerHTML = `<p style='color: white;'>${name}, Anda Memiliki ${khodamName} yang melindungi Anda</p>`;
    } else {
        resultDiv.innerHTML = `<p style='color: white;'>${name}, Maaf, Anda tidak memiliki khodam</p>`;
    }
}
