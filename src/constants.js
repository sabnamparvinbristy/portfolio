// Skills Section Logos
import htmlLogo from './assets/techlogo/html.png';
import cssLogo from './assets/techlogo/css.png';
import javascriptLogo from './assets/techlogo/javascript.png';
import reactjsLogo from './assets/techlogo/reactjs.png';
import reduxLogo from './assets/techlogo/redux.png';
import nextjsLogo from './assets/techlogo/nextjs.png';
import tailwindcssLogo from './assets/techlogo/tailwindcss.png';
import nodejsLogo from './assets/techlogo/nodejs.png';
import mysqlLogo from './assets/techlogo/mysql.png';
import mongodbLogo from './assets/techlogo/mongodb.png';
import firebaseLogo from './assets/techlogo/firebase.png';
import cLogo from './assets/techlogo/c.png';
import cppLogo from './assets/techlogo/cpp.png';
import javaLogo from './assets/techlogo/java.png';
import pythonLogo from './assets/techlogo/python.png';
import gitLogo from './assets/techlogo/git.png';
import githubLogo from './assets/techlogo/github.png';
import vscodeLogo from './assets/techlogo/vscode.png';
import intellijLogo from './assets/techlogo/intellij.png';
import postmanLogo from './assets/techlogo/postman.png';
import insomniaLogo from './assets/techlogo/insomnia.png';
import figmaLogo from './assets/techlogo/figma.png';

// Education Section Logos
import varLogo from './assets/educationlogo/varsity.png';
import clgLogo from './assets/educationlogo/clg.png';
import schoolLogo from './assets/educationlogo/school.png';

// Project Section Logos
import coffee from './assets/worklogo/coffee.png';
import palliative from './assets/worklogo/palliative.png';
import zoteo from './assets/worklogo/zoteo.png';

// Skills Info Data
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'IntelliJ', logo: intellijLogo },
      { name: 'Insomnia', logo: insomniaLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const education = [
    {
      id: 0,
      img: varLogo,
      school: "R.P. Shaha Univeristy, Narayanganj",
      date: "August 2022 - August 2026",
      desc:"I completed my Bachelor’s degree in Computer Science & Engineering (B.Sc.) from R.P. Shaha University, Narayanganj. During my studies, I built a strong foundation in programming, software development, and core computer science principles. I completed coursework in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also actively participated in technical workshops and events, which broadened my exposure to current technologies and industry practices. My time at RPSU was instrumental in shaping both my technical skills and my ability to apply theoretical knowledge through hands-on projects that addressed real-world problems.", 
      degree: "Bachelor of Science - BSC (Computer Science & Engineering)",
    },
    {
      id: 1,
      img: clgLogo,
      school: "Narayanganj Government Mohila College",
      desc: "I completed my Higher Secondary Certificate (HSC) from Narayanganj Government Mohila College, one of the most respected women’s colleges in Narayanganj. During my studies, I developed a strong academic foundation through courses in Physics, Chemistry, Mathematics, and ICT, while also building essential skills in communication and analytical thinking. I actively participated in co-curricular activities and group learning sessions, which enriched my overall educational experience and prepared me for higher studies in a competitive academic environment.",
      degree: "Higher Secondary Certificate (HSC)",
    },
    {
      id: 2,
      img: schoolLogo,
      school: "Kamar Ali High School",
      desc: "I completed my Secondary School Certificate (SSC) from Kamar Ali High School in Narayanganj. My time at school helped me develop discipline and prepared me well for higher secondary education.",
      degree: "Secondary School Certificate (SSC)",
      
    },
  ];
  
  export const projects = [
  {
    id: 0,
    title: "Coffee-Shop",
    description:
      "A simple and visually appealing frontend project designed using only HTML and CSS. This static website represents a modern coffee shop interface with clean layout, styled sections, and responsive design elements. It demonstrates foundational web development skills focused on structure and design without using any JavaScript or frameworks.",
    image: coffee,
    tags: ["HTML", "CSS"],
    github: "https://github.com/sabnamparvinbristy/coffee-shop",
  },
  {
    id: 1,
    title: "Zoteo – A Real Estate Website",
    description:
      "A full-stack real estate web application built using the MERN stack. The platform allows users to view property listings, book available properties, and interact with a map-based interface. It includes secure authentication using JWT, session handling via cookies, and backend data management with MongoDB and Prisma ORM. The system ensures efficient property booking and seamless user experience without using Socket.IO for real-time communication.",
    image: zoteo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "Prisma ORM",
      "JWT",
      "Cookies",
      "React Map",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/sabnamparvinbristy/real-estate-website",
  },
  {
    id: 2,
    title: "Palliative Care Hospital Management System (PCHMS)",
    description:
      "A desktop-based Java application designed to streamline operations in palliative care hospitals. Built using Java Swing and AWT for the GUI, the system allows administrators to manage patient records, doctor profiles, appointments, treatments, billing, pharmacy stock, and critical patient monitoring. It uses MySQL as the backend database and connects via JDBC, with IntelliJ IDEA used for development. The system ensures secure, efficient, and organized hospital administration tailored to palliative care needs.",
    image: palliative,
    tags: ["Java", "Swing", "AWT", "MySQL", "JDBC", "IntelliJ IDEA", "Git"],
    github: "https://github.com/sabnamparvinbristy/palliative-care/tree/main",
  },
];
