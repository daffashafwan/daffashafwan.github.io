import pilpres from '../assets/projects/pilpres-twibbon.png';
import ramadhan from '../assets/projects/ramadhan-countdown.png';

export const site = {
  title: 'daffashafwan',
  description: 'Backend engineer menulis soal Go, bioinformatics, LLM, dan hidup sebagai orang tech.',
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

export const experience = [
  {
    company: 'PT Global Tiket Network (tiket.com)',
    roles: [
      { title: 'Software Engineer', period: '2023 – sekarang', note: 'Fulltime' },
      { title: 'Backend Engineer', period: '2022 – 2023', note: 'Intern' },
    ],
  },
  {
    company: 'PT Sekawan Media Informatika',
    roles: [{ title: 'Backend Engineer', period: 'Agu 2021 – Nov 2021', note: 'Intern' }],
  },
  {
    company: 'Yayasan LBM Al Falah Sragen (smartlbm)',
    roles: [{ title: 'Fullstack Engineer', period: 'Jan 2021 – Des 2021', note: '' }],
  },
  {
    company: 'UMM Informatics Laboratory',
    roles: [{ title: 'Laboratory Teaching Assistant', period: 'Sep 2019 – Jan 2022', note: '' }],
  },
];

export const now = [
  'Nulis backend pakai Go di tiket.com',
  'Belajar bioinformatics',
  'Ngulik Large Language Model',
];
