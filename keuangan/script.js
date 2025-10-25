let transaksiData = [];

function loadData() {
    const savedData = localStorage.getItem('transaksiData');
    if (savedData) {
        transaksiData = JSON.parse(savedData);
    }
}

function saveData() {
    localStorage.setItem('transaksiData', JSON.stringify(transaksiData));
}

document.addEventListener("DOMContentLoaded", function() {
    loadData(); 
    tampilkanTransaksi();
    
    setTimeout(function () {
        const welcomeText = document.getElementById("welcomeText");
        if (welcomeText) {
            welcomeText.style.opacity = "0";
            setTimeout(() => {
                welcomeText.style.display = "none";
            }, 1000);
        }
    }, 2300);
});

function tambahTransaksi() {
    let deskripsi = document.getElementById("deskripsi").value;
    let jumlah = document.getElementById("jumlah").value;
    let tipe = document.getElementById("tipe").value;

    if (deskripsi.trim() === "" || jumlah.trim() === "") {
        alert("⚠️ Harap isi semua kolom!");
        return;
    }

    if (parseFloat(jumlah) <= 0) {
        alert("⚠️ Jumlah harus lebih dari 0!");
        return;
    }

    let transaksi = {
        id: Date.now(),
        deskripsi,
        jumlah: parseFloat(jumlah),
        tipe
    };

    transaksiData.push(transaksi);
    saveData(); 
    tampilkanTransaksi();

    document.getElementById("deskripsi").value = "";
    document.getElementById("jumlah").value = "";
}

function tampilkanTransaksi() {
    let saldo = 0;
    let transaksiHTML = "";

    transaksiData.forEach(transaksi => {
        let kelas = transaksi.tipe === "pemasukan" ? "pemasukan" : "pengeluaran";
        let prefix = transaksi.tipe === "pemasukan" ? "+" : "-";

        if (transaksi.tipe === "pemasukan") {
            saldo += transaksi.jumlah;
        } else {
            saldo -= transaksi.jumlah;
        }

        transaksiHTML += `
            <li class="${kelas}">
                <span>${transaksi.deskripsi} ${prefix} Rp ${transaksi.jumlah.toLocaleString('id-ID')}</span>
                <button onclick="hapusTransaksi(${transaksi.id})" title="Hapus transaksi">❌</button>
            </li>
        `;
    });

    document.getElementById("saldo").innerText = `Rp ${saldo.toLocaleString('id-ID')}`;
    
    if (transaksiHTML === "") {
        document.getElementById("transaksi-list").innerHTML = '<li style="text-align:center; color:#999; padding:20px;">Belum ada transaksi</li>';
    } else {
        document.getElementById("transaksi-list").innerHTML = transaksiHTML;
    }
}

function hapusTransaksi(id) {
    if (confirm("Apakah Anda yakin ingin menghapus transaksi ini?")) {
        transaksiData = transaksiData.filter(transaksi => transaksi.id !== id);
        saveData();
        tampilkanTransaksi();
    }
}