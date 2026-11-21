import pilpres from '../assets/projects/pilpres-twibbon.png';
import ramadhan from '../assets/projects/ramadhan-countdown.png';

export const site = {
  title: 'daffashafwan',
  description: 'Backend engineer di tiket.com. Writing about Go, distributed systems, and life as a tech guy.',
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
      'A countdown to Ramadan with a daily hadith and background nasheed. Built for fun while waiting for the fasting month.',
    stack: ['HTML', 'Bootstrap', 'JavaScript'],
    url: '/projects/ramadhan-countdown/',
    image: ramadhan,
  },
  {
    title: 'Pilpres 2024 Twibbon Generator',
    year: '2024',
    description:
      'Pose with your fingers for your favourite candidate and the twibbon frame is applied automatically using hand tracking in the browser. Photos are never stored on a server.',
    stack: ['JavaScript', 'MediaPipe Hands', 'Bootstrap'],
    url: '/projects/pilpres-twibbon/',
    image: pilpres,
  },
];

export const summary =
  'Backend engineer with 4+ years of experience building and scaling distributed systems in travel-tech. Specialized in real-time pricing and booking systems handling millions of requests, with a focus on latency, data consistency, and reliability.';

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
        period: '2022 – present',
        points: [
          'Design and scale pricing systems serving millions of daily requests with low latency and high availability.',
          'Improve pricing accuracy across the booking funnel, reducing discrepancies and preventing revenue leakage.',
          'Drive backend optimizations to reduce latency and improve throughput under high traffic.',
          'Own critical booking and pricing services, troubleshooting complex distributed-system issues across services.',
          'Build and maintain integrations with external vendors, keeping data synchronization reliable and consistent.',
          'Enhance observability through logging, metrics, and tracing.',
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
          'Developed scalable e-learning platforms for business clients.',
          'Delivered features end to end, from requirements to deployment.',
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
        points: ['Developed API endpoints and improved backend performance.'],
      },
    ],
  },
];

export const now = [
  'Building pricing systems at tiket.com (Go, Java)',
  'Learning bioinformatics',
  'Tinkering with large language models',
];
