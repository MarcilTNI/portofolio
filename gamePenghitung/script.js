const cekBtn = document.getElementById('cekHasil')
const inputPenghasilan = document.getElementById('penghasilan')
const inputCicilan = document.getElementById('cicilan')
const hasil = document.getElementById('hasil')


cekBtn.addEventListener('click', function() {
    const bayarPerBulan = parseFloat(inputPenghasilan.value)
    const cicilan = parseFloat(inputCicilan.value)

    if(!bayarPerBulan || !cicilan) {
        hasil.innerHTML = 'Mohon isi kedua input ini!'
        hasil.className = ''
        return
    }

    if(bayarPerBulan <= 0 || cicilan < 0) {
        hasil.innerHTML = 'Nilai harus lebih besar dari 0!'
        hasil.className = ''
        return
    }

    const perhitungan = cicilan / bayarPerBulan
    const bisaBayarLebih = bayarPerBulan - cicilan

    if(bayarPerBulan > cicilan) {
        hasil.innerText = `Anda memiliki cicilan sebesar Rp ${cicilan.toLocaleString('id-ID')} dan mampu membayar Rp ${bayarPerBulan.toLocaleString('id-ID')} setiap bulannya. Anda bisa langsung melunasi semua hutang anda dalam sekali bayar, bahkan uang anda masih tersisa Rp ${bisaBayarLebih.toLocaleString('id-ID')}.`
        return
    } else {
        hasil.innerText = `Anda memiliki cicilan sebesar Rp ${cicilan.toLocaleString('id-ID')} dan mampu membayar Rp ${bayarPerBulan.toLocaleString('id-ID')} setiap bulannya. Estimasi waktu pelunasan: ${perhitungan.toFixed(0)} bulan atau sekitar ${(perhitungan/12).toFixed(1)} tahun.`
        return
    }
})

inputPenghasilan.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') cekBtn.click();
});


inputCicilan.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') cekBtn.click();
});