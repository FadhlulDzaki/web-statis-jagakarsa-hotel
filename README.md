# Jagakarsa Hotel Website

Website statis yang responsif dan intuitif untuk Jagakarsa Hotel, dibuat menggunakan HTML, CSS, dan JavaScript dengan antarmuka pengguna dalam Bahasa Indonesia.

## 📋 Fitur Utama

### ✅ 7 Halaman Lengkap
1. **Beranda (index.html)** - Hero section, tagline, dan fitur utama hotel
2. **Kamar & Harga (pages/kamar-harga.html)** - Daftar tipe kamar, fasilitas, dan harga
3. **Tentang Kami (pages/tentang-kami.html)** - Sejarah, misi, visi, dan penghargaan
4. **Kontak (pages/kontak.html)** - Form kontak, informasi hotel, dan peta
5. **Galeri (pages/galeri.html)** - Galeri foto dengan slider JavaScript
6. **Promo (pages/promo.html)** - Promosi dan penawaran khusus
7. **Testimoni (pages/testimoni.html)** - Ulasan tamu dengan slider

### ✅ Fitur JavaScript
- **Banner Notifikasi** - Dapat ditutup dan tersimpan di localStorage
- **Slider Galeri** - Navigasi otomatis dan manual dengan touch support
- **Slider Testimoni** - Rotasi otomatis ulasan tamu
- **Form Kontak** - Validasi email dan notifikasi sukses
- **Navigasi Mobile** - Hamburger menu untuk perangkat mobile
- **Scroll to Top** - Tombol kembali ke atas halaman
- **Animasi Scroll** - Efek fade-in saat scroll

### ✅ Desain Responsif
- **Desktop** - Layout penuh dengan sidebar dan grid
- **Tablet** - Layout yang disesuaikan untuk layar medium
- **Mobile** - Layout single column dengan navigasi hamburger
- **Touch Support** - Swipe gesture untuk slider

### ✅ Palet Warna
- **Primary**: #8B4513 (Saddle Brown)
- **Secondary**: #D2691E (Chocolate)
- **Accent**: #DAA520 (Goldenrod)
- **Background**: #F5F5DC (Beige)
- **Text**: #2F4F4F (Dark Slate Gray)

## 📁 Struktur Folder

```
jagakarsa-hotel-website/
├── index.html                 # Halaman beranda
├── pages/                     # Folder halaman lainnya
│   ├── kamar-harga.html      # Halaman kamar & harga
│   ├── tentang-kami.html     # Halaman tentang kami
│   ├── kontak.html           # Halaman kontak
│   ├── galeri.html           # Halaman galeri
│   ├── promo.html            # Halaman promo
│   └── testimoni.html        # Halaman testimoni
├── assets/                    # Folder aset
│   ├── css/
│   │   └── style.css         # File CSS utama
│   ├── js/
│   │   └── script.js         # File JavaScript utama
│   └── images/               # Folder gambar
│       ├── hotel-exterior.jpg
│       ├── hotel-interior.jpg
│       ├── hotel-pool.jpg
│       ├── hotel-restaurant.jpg
│       └── hotel-lobby.jpg
├── README.md                  # Dokumentasi ini
└── todo.md                   # Log pengembangan
```

## 🚀 Cara Menjalankan Website

### Metode 1: Langsung Buka File
1. Buka file `index.html` di browser web
2. Navigasi antar halaman menggunakan menu

### Metode 2: Local Server (Recommended)
1. Buka terminal/command prompt
2. Navigasi ke folder website
3. Jalankan server lokal:
   ```bash
   # Menggunakan Python 3
   python -m http.server 8000
   
   # Menggunakan Python 2
   python -m SimpleHTTPServer 8000
   
   # Menggunakan Node.js (jika terinstall)
   npx http-server
   ```
4. Buka browser dan akses `http://localhost:8000`

### Metode 3: Live Server (VS Code)
1. Install ekstensi "Live Server" di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

## 📄 License

Website ini dibuat khusus untuk Jagakarsa Hotel. Semua hak cipta konten dan desain adalah milik Jagakarsa Hotel.

**Dibuat dengan ❤️ menggunakan HTML, CSS, dan JavaScript**

