import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  logo,
  logo1,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Front-end developer',
    icon: web,
  },
  {
    title: 'Back-end developer',
    icon: mobile,
  },
  {
    title: 'Exploring Cloud',
    icon: backend,
  },
  {
    title: 'UI/UX Designer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'AWS and Terraform Infrastructure',
    company_name: '',
    icon: logo,
    iconBg: '#383E56',
    date: 'August 2022 - Present',
    points: [
      'Designing and implementing cloud infrastructure using AWS services such as EC2, S3, RDS, and Lambda.',
      'Creating and managing infrastructure as code (IaC) using Terraform.',
      'Building and maintaining scalable and fault-tolerant architectures that support high traffic and performance.',
      'Troubleshooting and resolving issues related to infrastructure performance, availability, and security.',
      'Staying up-to-date with new AWS services and features and evaluating their potential impact on existing infrastructure.',
    ],
  },
  {
    title: 'MERN Stack Development',
    company_name: '',
    icon: logo,
    iconBg: '#383E56',
    date: 'April 2022 - Present',
    points: [
      'Developing and maintaining full-stack web applications using MERN (MongoDB, Express.js, React.js, and Node.js) and related technologies.',
      'Working closely with peers, and other developers to create high-quality and scalable products.',
      'Implementing responsive design, ensuring cross-browser compatibility, and optimizing applications for maximum performance.',
      'Writing and maintaining clean, well-documented, and reusable code.',
      'Designing and implementing RESTful APIs for seamless integration with front-end applications.',
      'Utilizing version control tools like Git and collaborating with other developers through code reviews.',
    ],
  },
  {
    title: 'Git Version Control',
    company_name: '',
    icon: logo1,
    iconBg: '#E6DEDD',
    date: 'jan 2022- present',
    points: [
      'Using Git for version control and collaborating with other developers on shared codebases.',
      'Maintaining code integrity and consistency across multiple branches and repositories.',
      'Creating and merging pull requests for new features and bug fixes.',
      'Resolving merge conflicts and ensuring that all code changes adhere to established standards and guidelines.',
      'Utilizing Git hooks for automated testing, linting, and other quality control measures.',
      'Configuring and managing remote repositories on platforms like GitHub.',
    ],
  },
  {
    title: 'Bootstrap and Tailwind CSS',
    company_name: '',
    icon: logo1,
    iconBg: '#E6DEDD',
    date: 'March 2021 - Present',
    points: [
      'Implementing responsive web design using Bootstrap and Tailwind CSS frameworks.',
      'Designing and developing user interfaces that adhere to established design patterns and guidelines.',
      'Optimizing web pages for maximum performance and accessibility.',
      'Writing clean, maintainable, and reusable HTML, CSS, and JavaScript code.',
      'Using version control tools like Git to manage and collaborate on shared codebases.',
      'Staying up-to-date with new features and best practices in front-end development.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
