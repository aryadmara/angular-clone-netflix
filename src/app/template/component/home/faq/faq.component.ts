import { Component } from '@angular/core';
import { AccordionComponent } from '../../../../shared/accordion/accordion.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AccordionComponent, CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FAQComponent {
  accordion = [
    {
      title: 'Apa itu Netflix?',
      description:
        'Netflix adalah layanan streaming yang menawarkan berbagai acara TV pemenang penghargaan, film, anime, dokumenter, dan banyak lagi di ribuan perangkat yang terhubung ke Internet.  <br> <br> Kamu bisa menonton sepuasnya, kapan pun kamu mau, tanpa satu iklan pun – semuanya dengan satu harga bulanan yang murah. Selalu ada tontonan baru dan acara TV serta film baru yang ditambahkan setiap minggu!',
    },
    {
      title: 'Berapa biaya berlangganan Netflix?',
      description:
        'Tonton Netflix di smartphone, tablet, Smart TV, laptop, atau perangkat streaming-mu, semuanya dengan satu harga bulanan tetap Rentang harga mulai dari Rp 54.000 hingga Rp 186.000 per bulan. Tanpa biaya ekstra, tanpa kontrak.',
    },
    {
      title: 'Di mana saya bisa menonton?',
      description:
        'Tonton di mana pun, kapan pun. Masuk ke akun Netflix-mu untuk menonton langsung di netflix.com dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix, termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game.  <br> <br> Kamu juga bisa men-download acara favoritmu dengan aplikasi iOS atau Android. Gunakan download untuk menonton saat kamu di perjalanan dan tidak punya koneksi Internet. Bawa Netflix ke mana saja.',
    },
    {
      title: 'Bagaimana cara membatalkannya?',
      description:
        'Netflix fleksibel. Tanpa kontrak menyebalkan dan tanpa komitmen. Kamu dapat dengan mudah membatalkan akunmu secara online dengan dua kali klik. Tanpa biaya pembatalan – mulai atau hentikan akunmu kapan pun.',
    },
    {
      title: 'Apa yang bisa ditonton di Netflix?',
      description:
        'Netflix memiliki pustaka lengkap yang berisi film panjang, film dokumenter, acara TV, anime, Netflix original pemenang penghargaan, dan lebih banyak lagi. Tonton sepuasnya, kapan pun kamu mau.',
    },
    {
      title: 'Apakah Netflix sesuai bagi anak-anak?',
      description:
        'Pengalaman Netflix Anak disertakan dalam keanggotaan agar kamu punya kontrol orang tua saat anak-anak menikmati acara TV dan film untuk keluarga di rumah. <br> <br>Profil anak dilengkapi kontrol orang tua yang dilindungi PIN sehingga kamu bisa membatasi rating usia konten yang bisa ditonton anak dan memblokir judul tertentu yang tidak boleh ditonton anak-anak.',
    },
  ];
}
