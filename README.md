This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Dear Kevin,

Berikut ini adalah rekap hasil meeting pembahasan LMS

Dashboard
[DONE] Menambahkan informasi summary about grades and progress book
[DONE] Galeng akan membuat mockup baru tampilan LMS dashboard

Book Content
- Di sisi kiri buku akan dibuatkan button Note, Media dan Practice. Media berisi daftar video dan Practice berisi daftar konten interaktif. Berikan icon yang sesuai pada tiap list.
[DONE] Note dibuatkan per halaman. User dapat mengetikkan notes per halaman dan di bagian paling terdapat 'Notes' untuk melihat kompilasi note yang ada per halaman.
- Continue learning dibuat lanjut ke halaman terakhir yang memiliki konten interaktif yang sudah dibuat.
- Tambahkan tombol 'go to next lesson' di paling akhir halaman.
[DONE] Tambahkan star untuk menandakan konten interaktif telah dikerjakan, di paling atas tunjukkan jumlah star yang dimiliki dibandingkan dengan total star yang bisa didapatkan.
[DONE] Hilangkan notes dari guru
- Tambahkan button lesson plan di paling atas, menampilkan popup lesson plan yang bila ditutup dan dibuka kembali akan kembali ke scroll terakhir saat ditutup sebelumnya

Table of content
- Ada sistem lock di table of content, defaultnya adalah lock unit 2-6 begitu seorang user bergabung dengan classroom
[DONE] Ganti assessment dengan Quiz

Class Assessment
- Fitur baru dimana terdapat test yang berbeda dengan quiz dan hanya diberikan kepada user yang tergabung dengan kelas dengan school code.
- Tambahkan tombol hubungi Atlaz untuk bertanya mengenai Code Class
- Guru yang memiliki school code dapat membuat classroom dengan kode sekolah khusus, selanjutnya guru tersebut dapat membuat jadwal ujian online untuk 'class assessment' di kelas tersebut dan membagikannya kepada murid - muridnya.
- Guru dapat mengunduh soal ujian yang terdiri dari: file soal, file audio, file kunci jawaban.
- Quiz dan Class Assessment akan dinilai secara otomatis. Penilaiannya akan dibagi per unit dan guru dapat memasukkan nilai secara manual ataupun mengedit nilai yang sudah ada.
- Guru dapat melakukan retest dengan menjadwalkan lagi ujian yang sudah pernah dilakukan, nilai yang diambil adalah nilai terakhir.
- Pada saat melakukan penjadwalan ujian class assessment, akan menampilkan daftar siswa yang dapat mengikuti class assessment. Defaultnya adalah semua murid.

Gradebook
[DONE] Tampilkan seluruh nilai dan skillnya dalam 1 baris, serta tambahkan total score per unit.
[DONE] Semua skor di table ditampilkan dalam bentuk angka 0 - 10.
- Tambahkan informasi Skor summary (total nilai quiz, total nilai class assessment, total nilai keduanya) di paling atas dalam bentuk persentase 0 - 100%
- Table nilai quiz dan class assessment dipisah
- Jika user memiliki kode sekolah maka hapus tab personal gradenya agar tidak membuat bingung user.

Notes
Terkait perubahan di atas, maka akan ada beberapa perubahan yang harus dilakukan dan membutuhkan waktu sekitar 1 - 2 bulan untuk melakukan perubahan yang ada. Detail timeline akan di-update di email selanjutnya karena perlu mengecek terlebih dahulu dengan sistem yang sudah dibuat saat ini.

Best Regards,