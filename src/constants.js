///Skill Logos via CDN
const CDN = 'https://cdn.simpleicons.org/';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5',      icon: `${CDN}html5/E34F26`        },
      { name: 'CSS3',       icon: `${CDN}css3/264de4`         },
      { name: 'JavaScript', icon: `${CDN}javascript/F7DF1E`   },
      { name: 'React JS',   icon: `${CDN}react/61DAFB`        },
      { name: 'Next JS',    icon: `${CDN}nextdotjs/ffffff`    },
      { name: 'Tailwind',   icon: `${CDN}tailwindcss/06B6D4`  },
      { name: 'Redux',      icon: `${CDN}redux/764ABC`        },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node JS',  icon: `${CDN}nodedotjs/339933` },
      { name: 'Express',  icon: `${CDN}express/ffffff`   },
      { name: 'MongoDB',  icon: `${CDN}mongodb/47A248`   },
      { name: 'MySQL',    icon: `${CDN}mysql/4479A1`     },
      { name: 'Firebase', icon: `${CDN}firebase/FFCA28`  },
      { name: 'Prisma',   icon: `${CDN}prisma/ffffff`    },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python',     icon: `${CDN}python/3776AB`     },
      { name: 'Java',       icon: `${CDN}openjdk/ED8B00`    },
      { name: 'C++',        icon: `${CDN}cplusplus/00599C`  },
      { name: 'C',          icon: `${CDN}c/A8B9CC`          },
      { name: 'JavaScript', icon: `${CDN}javascript/F7DF1E` },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git',      icon: `${CDN}git/F05032`              },
      { name: 'GitHub',   icon: `${CDN}github/ffffff`           },
      { name: 'VS Code',  icon: `${CDN}visualstudiocode/0078d7` },
      { name: 'Postman',  icon: `${CDN}postman/FF6C37`          },
      { name: 'Figma',    icon: `${CDN}figma/F24E1E`            },
      { name: 'IntelliJ', icon: `${CDN}intellijidea/ffffff`     },
      { name: 'Insomnia', icon: `${CDN}insomnia/4000BF`         },
    ],
  },
  {
    title: 'Bioinformatics',
    skills: [
      { name: 'Python',           icon: `${CDN}python/3776AB`           },
      { name: 'BioPython',        icon: `${CDN}python/3776AB`           },
      { name: 'PyMOL',            icon: `${CDN}moleculardevices/0066CC` },
      { name: 'CB-Dock2',         icon: `${CDN}gnubash/4EAA25`          },
      { name: 'PyRx',             icon: `${CDN}anaconda/44A833`         },
      { name: 'Discovery Studio', icon: `${CDN}dassaultsystemes/005386` },
      { name: 'Jupyter',          icon: `${CDN}jupyter/F37626`          },
    ],
  },
];

export const education = [
  {
    id: 0,
    school: 'R.P. Shaha University, Narayanganj',
    date: 'August 2022 – Present',
    degree: 'B.Sc. in Computer Science & Engineering',
    desc: 'Currently pursuing my degree with a strong focus on programming, software development, and core CS principles. Coursework includes Data Structures, Algorithms, OOP, DBMS, Web Development, and Software Engineering. Actively participating in technical workshops and hackathons.',
    current: true,
  },
  {
    id: 1,
    school: 'Narayanganj Government Mohila College',
    date: '2017 – 2020',
    degree: 'Higher Secondary Certificate (HSC)',
    desc: 'Science stream with Physics, Chemistry, Mathematics, and ICT. Developed strong analytical thinking and communication skills through co-curricular activities and group learning sessions.',
    current: false,
  },
];

export const projects = [
  {
    id: 0,
    title: 'Coffee-Shop',
    subtitle: 'Modern Static UI',
    type: 'Frontend',
    emoji: '☕',
    color: 'teal',
    description:
      'A visually appealing static website representing a modern coffee shop interface with clean layout, styled sections, and fully responsive design. Demonstrates foundational web development skills focused on structure and design.',
    problem:  'Create a visually stunning, responsive coffee shop UI without JavaScript.',
    approach: 'Pure HTML & CSS with clean layout, custom components, and responsive breakpoints.',
    outcome:  'Demonstrates strong foundational design skills — clean, maintainable, semantic markup.',
    tags: ['HTML', 'CSS', 'Responsive Design'],
    github: 'https://github.com/sabnamparvinbristy/coffee-shop',
  },
  {
    id: 1,
    title: 'Zoteo',
    subtitle: 'Real Estate Platform',
    type: 'Full-Stack · MERN',
    emoji: '🏠',
    color: 'purple',
    description:
      'A full-stack real estate web application built using the MERN stack. Users can view property listings, book available properties, and interact with a map-based interface. Features secure JWT authentication, session handling via cookies, and data management with MongoDB and Prisma ORM.',
    problem:  'Users need a seamless way to browse and book properties with map visualization.',
    approach: 'MERN stack with JWT auth, Prisma ORM, React Map GL, and cookie-based sessions.',
    outcome:  'Full property booking system with secure authentication and interactive maps.',
    tags: ['React JS', 'Node.js', 'MongoDB', 'Express', 'Prisma ORM', 'JWT', 'React Map'],
    github: 'https://github.com/sabnamparvinbristy/real-estate-website',
  },
  {
    id: 2,
    title: 'PCHMS',
    subtitle: 'Hospital Management System',
    type: 'Desktop · Java',
    emoji: '🏥',
    color: 'violet',
    description:
      'A desktop-based Java application designed to streamline operations in palliative care hospitals. Manages patient records, doctor profiles, appointments, treatments, billing, pharmacy stock, and critical patient monitoring.',
    problem:  'Palliative care hospitals need specialized, efficient digital administration tools.',
    approach: 'Java Swing/AWT desktop GUI with MySQL via JDBC covering all hospital modules.',
    outcome:  'Comprehensive hospital admin system: patients, billing, pharmacy, and scheduling.',
    tags: ['Java', 'Swing', 'AWT', 'MySQL', 'JDBC', 'IntelliJ IDEA', 'Git'],
    github: 'https://github.com/sabnamparvinbristy/palliative-care/tree/main',
  },
  {
    id: 3,
    title: 'Weather App',
    subtitle: 'Real-Time Weather Dashboard',
    type: 'Frontend · React',
    emoji: '🌤️',
    color: 'teal',
    description:
      'A sleek, glassmorphism-styled weather application that delivers real-time weather conditions and a 5-day forecast for any city worldwide. Features dynamic UI themes that shift gradients and accent colors based on current weather conditions, dark/light mode toggle, metric/imperial unit switching, live clock, and detailed stats including wind, humidity, pressure, visibility, sunrise and sunset times.',
    problem:  'Users need an elegant, at-a-glance weather dashboard with rich contextual data.',
    approach: 'React with OpenWeatherMap API, dynamic glassmorphism theming per weather condition, and animated SVG-free CSS visuals.',
    outcome:  'Polished, fully responsive weather app with live data, dynamic themes, and smooth UX.',
    tags: ['React JS', 'CSS3', 'OpenWeatherMap API', 'Glassmorphism', 'Vite', 'Vercel'],
    github: 'https://github.com/sabnamparvinbristy/Weather-App',
    live:   'https://weather-app-eight-zeta-13.vercel.app/',
  },
];
