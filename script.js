function validasina() {
    // Validasi Nama
    let inputNama = document.getElementById("nama").value;
    let polaNama = /^[a-zA-Z']+$/; // Hanya huruf dan petik satu
    
    if (!polaNama.test(inputNama)) {
        alert("Nama hanya boleh berisi huruf dan tanda petik satu ('')");
        return false;
    }
    
    // Validasi Tempat Lahir
    let inputTempat = document.getElementById("tempatLahir").value;
    if (!polaNama.test(inputTempat)) {
        alert("Tempat lahir hanya boleh berisi huruf dan tanda petik satu ('')");
        return false;
    }
    
    // Validasi Tanggal Lahir
    let inputTgl = document.getElementById("tglLahir").value;
    if (inputTgl === "") {
        alert("Tanggal lahir harus diisi");
        return false;
    }
    
    // Validasi Jenis Kelamin
    let jk = document.querySelector('input[name="jenis_kelamin"]:checked');
    if (!jk) {
        alert("Jenis kelamin harus dipilih");
        return false;
    }
    
    alert("Pendaftaran berhasil!");
    return true;
}