# 🚀 Panduan Deploy Starter Kit di aaPanel

Panduan lengkap langkah demi langkah untuk mendeply **Starter Kit Modern (Fastify + SvelteKit 5 + MySQL + Prisma)** pada server Linux menggunakan **aaPanel**, **Nginx**, **PM2**, dan **MySQL**.

---

## 📋 1. Prasyarat di aaPanel

Buka **aaPanel App Store** di VPS Anda dan pastikan software berikut sudah terinstall:

1. **Nginx** (Versi 1.20+)
2. **MySQL** (Versi 8.0+)
3. **PM2 Manager** (Versi terbaru dari App Store)
4. **Node.js Version Manager** (Pilih Node.js LTS v20.x atau v22.x)
5. **Redis** *(Opsional, dari App Store)*

---

## 🗄️ 2. Buat Database MySQL di aaPanel

1. Buka menu **Databases** di aaPanel dashboard.
2. Klik tombol **Add Database**.
3. Isi parameter database:
   - **DB Name**: `starter_kit_db`
   - **Access Permission**: `Local server`
   - **Username**: `starter_user`
   - **Password**: *(Catat password yang tergenerate)*
4. Klik **Submit**.

---

## 📁 3. Upload Project & Konfigurasi Environment

### A. Upload File ke Server
1. Buka menu **Files** di aaPanel.
2. Buat direktori di `/www/wwwroot/starter-kit`.
3. Upload seluruh file project monorepo Anda (atau clone via Git CLI di terminal VPS).

```bash
cd /www/wwwroot/starter-kit
```

### B. Buat File `.env` Produksi
Buat file `/www/wwwroot/starter-kit/.env` dan atur variabel lingkungan produksi:

```env
# Node Config
NODE_ENV=production
PORT=3001
HOST=127.0.0.1
WEB_URL=https://domain-anda.com
API_URL=https://domain-anda.com

# Database MySQL aaPanel
DATABASE_URL="mysql://starter_user:PASSWORD_MYSQL_ANDA@localhost:3306/starter_kit_db"

# JWT Authentication (Ganti dengan string acak yang kuat)
JWT_SECRET="kunci-rahasia-jwt-produksi-starter-kit-2026-super-aman"
JWT_EXPIRES_IN="15m"
REFRESH_TOKEN_EXPIRES_IN="7d"

# Redis (Jika menggunakan Redis aaPanel)
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=

# SMTP Email (Jika ada)
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@domain-anda.com
SMTP_PASS=password_smtp
SMTP_FROM="StarterKit Support <no-reply@domain-anda.com>"
```

Juga salin file `.env` ke direktori database:
```bash
cp .env packages/database/.env
```

---

## ⚙️ 4. Build Application & Migrasi Database

Buka **Terminal** di aaPanel atau SSH ke VPS Anda, lalu jalankan perintah berikut secara berurutan:

### A. Install Dependencies Monorepo
```bash
cd /www/wwwroot/starter-kit
npm install --legacy-peer-deps
```

### B. Migrasi Schema & Seeding Database
```bash
# Push schema tabel ke database MySQL aaPanel
npm run db:push

# Jalankan seeder awal (Membuat akun admin & role matrix)
npm run db:seed
```

### C. Build Production Bundle
```bash
npm run build
```

---

## 🔄 5. Setup PM2 Process Manager

Untuk menjaga Fastify API & SvelteKit Web tetap berjalan 24/7 di background, gunakan file PM2 `ecosystem.config.js`.

Buat file `ecosystem.config.js` di root folder project (`/www/wwwroot/starter-kit/ecosystem.config.js`):

```javascript
module.exports = {
  apps: [
    {
      name: 'starter-kit-api',
      cwd: '/www/wwwroot/starter-kit/apps/api',
      script: 'dist/index.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
    },
    {
      name: 'starter-kit-web',
      cwd: '/www/wwwroot/starter-kit/apps/web',
      script: 'build/index.js', // Atau gunakan node .svelte-kit/output/server/index.js
      env: {
        NODE_ENV: 'production',
        PORT: 5173,
      },
    },
  ],
};
```

Jalankan service menggunakan PM2:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

---

## 🌐 6. Konfigurasi Domain & Nginx Reverse Proxy di aaPanel

### A. Tambahkan Domain Baru
1. Buka menu **Website** di aaPanel.
2. Klik tombol **Add site**.
3. Masukkan nama domain Anda (misal: `domain-anda.com`).
4. Pada opsi **PHP Version**, pilih **Pure static**.
5. Klik **Submit**.

### B. Atur SSL (HTTPS)
1. Pada daftar Website, klik nama domain `domain-anda.com`.
2. Buka tab **SSL** -> pilih **Let's Encrypt**.
3. Centang domain Anda dan klik **Apply** untuk mengaktifkan HTTPS gratis.

### C. Setup Reverse Proxy
1. Pada menu konfigurasi website `domain-anda.com`, klik tab **Reverse Proxy**.
2. Klik **Add reverse proxy**:

#### **Proxy 1: Frontend SvelteKit Web**
- **Proxy Name**: `svelte-web`
- **Target URL**: `http://127.0.0.1:5173`
- **Sent Domain**: `$host`

#### **Proxy 2: Fastify Backend API**
- **Proxy Name**: `fastify-api`
- **Target URL**: `http://127.0.0.1:3001`
- **Sent Domain**: `$host`
- **URL Path**: `/api`

*(Atau tambahkan di Nginx Configuration bawaan)*:

```nginx
# Proxy untuk Backend API
location /api/ {
    proxy_pass http://127.0.0.1:3001/api/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}

# Proxy untuk Swagger API Docs
location /documentation {
    proxy_pass http://127.0.0.1:3001/documentation;
    proxy_set_header Host $host;
}

# Proxy untuk Frontend SvelteKit
location / {
    proxy_pass http://127.0.0.1:5173;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

---

## 🔍 7. Verifikasi Hasil Deployment

1. Buka **`https://domain-anda.com`** di browser. Landing Page & Admin Dashboard akan terbuka dengan aman menggunakan SSL.
2. Buka **`https://domain-anda.com/documentation`** untuk memeriksa Swagger API Docs Fastify.
3. Login menggunakan akun Super Admin default:
   - **Email**: `admin@starterkit.com`
   - **Password**: `password123`
