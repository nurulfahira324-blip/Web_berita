const form = document.getElementById("formLogin");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errEmail = document.getElementById("errEmail");
const errPassword = document.getElementById("errPassword");
const pesan = document.getElementById("pesan");
const tombolLogin = form.querySelector('button[type="submit"]');

// Mengosongkan isian dan mengembalikan tampilan validasi ke kondisi awal
function kosongkanForm() {
    form.reset();

    errEmail.textContent = "";
    errEmail.className = "mt-1 small";
    errPassword.textContent = "";
    errPassword.className = "mt-1 small";

    email.classList.remove("is-valid", "is-invalid");
    password.classList.remove("is-valid", "is-invalid");

    // Password kembali tersembunyi
    password.type = "password";
    tombolLihat.textContent = "Lihat";
    tombolLihat.setAttribute("aria-pressed", "false");
}

// Memeriksa email
function periksaEmail() {
    if (email.value.trim() === "") {
        errEmail.textContent = "Email wajib diisi!";
        errEmail.className = "mt-1 small text-danger";
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        errEmail.textContent = "Format email salah!";
        errEmail.className = "mt-1 small text-danger";
        return false;
    }

    errEmail.textContent = "Format email benar.";
    errEmail.className = "mt-1 small text-success";
    return true;
}

// Memeriksa password
function periksaPassword() {
    if (password.value === "") {
        errPassword.textContent = "Password wajib diisi!";
        errPassword.className = "mt-1 small text-danger";
        return false;
    }

    if (password.value.length < 8) {
        errPassword.textContent = "Password minimal 8 karakter!";
        errPassword.className = "mt-1 small text-danger";
        return false;
    }

    errPassword.textContent = "Password memenuhi syarat.";
    errPassword.className = "mt-1 small text-success";
    return true;
}

// Feedback muncul ketika pengguna mengetik
email.addEventListener("input", function () {
    pesan.textContent = "";
    periksaEmail();
});

password.addEventListener("input", function () {
    pesan.textContent = "";
    periksaPassword();
});

// Memeriksa ketika tombol Login ditekan
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailBenar = periksaEmail();
    const passwordBenar = periksaPassword();

    if (!emailBenar || !passwordBenar) {
        pesan.textContent = "Login gagal. Periksa kembali isian Anda.";
        pesan.className = "mt-3 alert alert-danger";
        return;
    }

    pesan.textContent =
        "Login berhasil! Anda akan dialihkan ke Beranda...";
    pesan.className = "mt-3 alert alert-success";

    // Kosongkan email dan password
    kosongkanForm();

    // Cegah klik ganda, lalu alihkan ke Beranda setelah pesan sempat terbaca
    tombolLogin.disabled = true;
    setTimeout(function () {
        window.location.replace("index.html");
    }, 1500);
});


// Warna kolom: hijau jika benar, merah jika salah
function tandaiKolom(kolom, pesanEl) {
    kolom.classList.toggle("is-invalid", pesanEl.classList.contains("text-danger"));
    kolom.classList.toggle("is-valid", pesanEl.classList.contains("text-success"));
}

email.addEventListener("input", function () { tandaiKolom(email, errEmail); });
password.addEventListener("input", function () { tandaiKolom(password, errPassword); });
form.addEventListener("submit", function () {
    tandaiKolom(email, errEmail);
    tandaiKolom(password, errPassword);
});

// Tombol lihat / sembunyikan password
const tombolLihat = document.getElementById("tombolLihat");

tombolLihat.addEventListener("click", function () {
    const tampil = password.type === "password";
    password.type = tampil ? "text" : "password";
    tombolLihat.textContent = tampil ? "Sembunyikan" : "Lihat";
    tombolLihat.setAttribute("aria-pressed", tampil);
});
