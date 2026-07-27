# 📋 Rancangan Pengembangan & Roadmap Starter Kit (Fastify + SvelteKit 5 + MySQL)

Dokumen ini berisi analisis aplikasi, strategi peningkatan arsitektur, serta **Todo List (Checklist)** rencana pengembangan secara bertahap.

---

## 📑 1. Ringkasan Evaluasi Aplikasi

### 🟢 Kelebihan Utama
* **Performa Tinggi**: Kombinasi Fastify (backend ringan & cepat) + SvelteKit 5 Runes (bundle JS minimal, tanpa Virtual DOM).
* **Arsitektur Monorepo**: Terstruktur rapi dengan npm workspaces (`apps/web`, `apps/api`, `packages/database`).
* **Fitur Keamanan Enterprise**: Dynamic RBAC (Role-Based Access Control), Audit Trail Logging, JWT & Refresh Token Auth, Rate Limiting.
* **UX & UI Modern**: Command Palette (`Ctrl+K`), Dark/Light Mode, ApexCharts Dashboard, TanStack Query & Table.
* **Developer Experience**: Auto-generated Swagger/OpenAPI docs (`/documentation`), `docker-compose` bawaan (MySQL, Redis, MinIO, Mailpit).

### 🔴 Area Peningkatan (Kekurangan Saat Ini)
* Belum tersedia framework **Automated Testing** (Unit & E2E Testing).
* Belum ada konfigurasi **CI/CD Pipeline** (misal: GitHub Actions) untuk verifikasi otomatis saat Push/PR.
* Belum terpasang **HTTP Security Headers** (`@fastify/helmet`) pada Fastify API.
* Format Response Error backend belum sepenuhnya tersentralisasi (*Global Exception Filter*).
* Belum ada **CLI Code Generator** untuk mempercepat pembuatan modul CRUD baru.

---

## 🎯 2. Roadmap & Strategi Peningkatan

### Fasa 1: Keamanan & Hardening API (Security & Hardening)
- [ ] Install dan konfigurasi `@fastify/helmet` untuk HTTP Security Headers (CSP, HSTS, X-Frame-Options).
- [ ] Evaluasi konfigurasi Cookie & Refresh Token (`HttpOnly`, `SameSite=Strict`, `Secure`).
- [ ] Penguatan validasi input Zod pada setiap route backend.

### Fasa 2: Standardisasi Response & Global Error Handler
- [ ] Buat Fastify Global Error Handler (`app.setErrorHandler`) terpusat.
- [ ] Format baku response JSON untuk sukses dan error (Zod validation, Prisma error, 401/403/500).
- [ ] Buat custom API response wrapper helper di backend & frontend.

### Fasa 3: Pengujian Otomatis (Automated Testing Setup)
- [ ] Konfigurasi **Vitest** di `apps/api` untuk Unit & Integration Testing (Auth, RBAC, User Service).
- [ ] Konfigurasi **Playwright** di `apps/web` untuk E2E Testing (Flow Login, Dashboard, User Management).
- [ ] Buat mock database setup untuk pengujian testing yang terisolasi.

### Fasa 4: CI/CD Pipeline & Code Quality Automation
- [ ] Buat GitHub Actions Workflow (`.github/workflows/ci.yml`).
- [ ] Otomatisasi pemicu: `npm run check` (Svelte/TS typecheck), Linting, dan Vitest suite saat Pull Request.
- [ ] Tambahkan badge status build di `README.md`.

### Fasa 5: Developer Tooling & CLI Scaffolding
- [ ] Buat script CLI Scaffolder (`scripts/generate-module.ts` atau `npm run g:module <name>`).
- [ ] Scaffolder otomatis membuat file:
  - Route Fastify (`apps/api/src/modules/<name>/<name>.routes.ts`)
  - Model Prisma (`schema.prisma`)
  - Page SvelteKit (`apps/web/src/routes/dashboard/<name>/+page.svelte`)
- [ ] Dokumentasikan petunjuk penggunaan CLI di `README.md`.

---

## 📝 3. Todo List Pelaksanaan (Checklist)

Berikut adalah checklist utama untuk dipantau secara bertahap saat kita mulai implementasi nanti:

- [x] **[Fasa 1] Security & Hardening**
  - [x] `npm i @fastify/helmet` di `apps/api`
  - [x] Daftarkan `@fastify/helmet` di `apps/api/src/index.ts`
  - [x] Audit Security Header pada Swagger & API response

- [x] **[Fasa 2] Standardisasi Error Handler**
  - [x] Buat `apps/api/src/middleware/error-handler.ts`
  - [x] Uji respon error pada request Zod invalid dan RBAC Unauthorized

- [x] **[Fasa 3] Setup Automated Testing**
  - [x] Install Vitest & setup config `apps/api/vitest.config.ts`
  - [x] Buat test sample untuk Auth & RBAC routes
  - [x] Install Playwright & setup config `apps/web/playwright.config.ts`
  - [x] Buat E2E test sample untuk halaman Login & Dashboard

- [x] **[Fasa 4] CI/CD Setup**
  - [x] Buat `.github/workflows/ci.yml`
  - [x] Test workflow runner secara lokal/GitHub

- [x] **[Fasa 5] Scaffolding CLI Tool**
  - [x] Buat modul generator script
  - [x] Test generate modul dummy (misal `products`)

---

> 📌 *Catatan: Dokumen ini disimpan sebagai panduan acuan sebelum implementasi teknis dimulai. Kapan pun Anda siap, kita bisa mendiskusikan Fasa mana yang ingin dikerjakan terlebih dahulu.*
