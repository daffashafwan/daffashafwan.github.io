import pilpres from '../assets/projects/pilpres-twibbon.png';
import ramadhan from '../assets/projects/ramadhan-countdown.png';

export const site = {
  title: 'daffashafwan',
  description: 'Backend engineer di tiket.com. Menulis soal Go, distributed system, dan hidup sebagai orang tech.',
  email: 'dev.daffa.shafwan@gmail.com',
  social: [
    { name: 'GitHub', url: 'https://github.com/daffashafwan' },
    { name: 'Medium', url: 'https://medium.com/@daffashafwan' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/daffashafwan' },
  ],
};

export const projects = [
  {
    title: 'Ramadhan Countdown',
    year: '2024',
    description:
      'Hitung mundur menuju Ramadhan lengkap dengan hadits harian dan lagu latar. Dibuat buat seru-seruan sambil nunggu bulan puasa.',
    stack: ['HTML', 'Bootstrap', 'JavaScript'],
    url: '/projects/ramadhan-countdown/',
    image: ramadhan,
  },
  {
    title: 'Pilpres 2024 Twibbon Generator',
    year: '2024',
    description:
      'Pose pakai jari sesuai paslon favorit, lalu twibbon-nya nempel otomatis lewat hand tracking di browser. Foto tidak disimpan di server.',
    stack: ['JavaScript', 'MediaPipe Hands', 'Bootstrap'],
    url: '/projects/pilpres-twibbon/',
    image: pilpres,
  },
];

export const summary =
  'Backend engineer dengan pengalaman 4+ tahun membangun dan men-scale distributed system di travel-tech. Fokus di sistem pricing dan booking real-time yang melayani jutaan request, dengan perhatian di latency, konsistensi data, dan reliability.';

export const skills = [
  { label: 'Languages', items: ['Go', 'Java'] },
  { label: 'Backend', items: ['Spring Boot', 'gRPC', 'REST', 'WebSocket'] },
  { label: 'Distributed systems', items: ['Kafka', 'Redis', 'MongoDB', 'PostgreSQL', 'Debezium CDC'] },
  { label: 'Infrastructure', items: ['Docker', 'Kubernetes', 'GitHub Actions'] },
  { label: 'Engineering', items: ['Microservices', 'Caching', 'Observability', 'Testing'] },
];

export const experience = [
  {
    company: 'tiket.com',
    roles: [
      {
        title: 'Software Engineer II',
        period: '2022 – sekarang',
        points: [
          'Merancang dan men-scale pricing system yang melayani jutaan request harian dengan latency rendah dan high availability.',
          'Meningkatkan akurasi harga di seluruh booking funnel, mengurangi selisih harga dan mencegah revenue leakage.',
          'Optimasi backend untuk menurunkan latency dan menaikkan throughput saat traffic tinggi.',
          'Memegang service booking dan pricing yang kritikal, termasuk troubleshooting masalah distributed system lintas service.',
          'Membangun dan merawat integrasi dengan vendor eksternal agar sinkronisasi data tetap andal dan konsisten.',
          'Memperkuat observability lewat logging, metrics, dan tracing.',
        ],
      },
    ],
  },
  {
    company: 'SmartLBM',
    roles: [
      {
        title: 'Freelance Software Engineer',
        period: '2021 – 2022',
        points: [
          'Membangun platform e-learning yang scalable untuk klien bisnis.',
          'Mengerjakan fitur end-to-end, dari requirement sampai deployment.',
        ],
      },
    ],
  },
  {
    company: 'Sekawan Media',
    roles: [
      {
        title: 'Backend Engineering Intern',
        period: '2021',
        points: ['Membuat API endpoint dan memperbaiki performa backend.'],
      },
    ],
  },
];

export const now = [
  'Membangun pricing system di tiket.com (Go, Java)',
  'Belajar bioinformatics',
  'Ngulik Large Language Model',
];
