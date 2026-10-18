# Kabar Kabut Asap

Website statis informasi kabut asap: penyebab, dampak kesehatan, lingkungan, dan pengaruhnya terhadap pendidikan.
Dibuat untuk memenuhi tugas UTS mata kuliah **Pemrograman Web**.

**URL publik (GitHub Pages):** https://USERNAME.github.io/NAMA-REPO/

## Identitas

| | |
|---|---|
| Nama | Nurul Fahira |
| NIM | H0725321 |
| Program Studi | Pendidikan Teknologi Informasi |
| Mata Kuliah | Pemrograman Web |
| Universitas | Universitas Sulawesi Barat |

## Halaman

| Halaman | Berkas | Isi |
|---|---|---|
| Beranda | `index.html` | Navbar, hero section, ringkasan berita, informasi utama |
| Berita (daftar konten) | `berita.html` | Daftar berita dalam bentuk card dengan filter kategori |
| Detail Berita | `detail.html` | Isi lengkap satu berita, dipilih lewat parameter `?id=` (1-4), dengan tautan kembali dan berita lain |
| Tentang | `tentang.html` | Tujuan website dan identitas pengelola |
| Login | `login.html` | Form login dengan validasi JavaScript |

## Validasi Form Login

Validasi berjalan di sisi browser (`javascript/login.js`), bukan sistem autentikasi sungguhan.

- Email tidak boleh kosong dan harus berformat valid.
- Password tidak boleh kosong dan minimal 8 karakter.
- Pesan galat ditampilkan per kolom; kolom diberi tanda valid atau tidak valid.
- Form tidak diproses jika ada input yang tidak valid.
- Jika semua valid: pesan sukses (alert Bootstrap) tampil, email dan password dikosongkan, lalu pengguna dialihkan ke Beranda setelah 1,5 detik.

## Teknologi

- HTML5, CSS3, JavaScript
- Bootstrap 5.3.3 (CDN jsDelivr)
- Google Fonts (Poppins)
- Dihosting dengan GitHub Pages

## Struktur Folder

```
.
├── index.html
├── berita.html
├── detail.html
├── tentang.html
├── login.html
├── README.md
├── css/
│   └── style.css
├── javascript/
│   └── login.js
└── gambar/
    ├── gambar1.jpg
    ├── gambar2.jpeg
    ├── gambar3.jpeg
    ├── gambar4.jpg
    └── gambar5.jpg
```

## Menjalankan Secara Lokal

1. Unduh atau clone repositori ini.
2. Buka `index.html` di browser (membutuhkan koneksi internet untuk memuat Bootstrap dan font dari CDN).

## Deploy ke GitHub Pages

1. Pastikan `index.html` berada di akar repositori, bukan di dalam subfolder.
2. Buka **Settings > Pages**.
3. Pada **Source**, pilih branch `main` dan folder `/ (root)`, lalu simpan.
4. Tunggu proses build selesai, lalu buka URL yang ditampilkan.
