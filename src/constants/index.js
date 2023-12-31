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
  cake,
  cakepage,
  newsapp,
  digitalcare,
  jobit,
  tripguide,
  amazonpage,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Development",
    company_name: "Bakers shop",
    icon: cake,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      "Developed customized web application using React.js as frontend and firebase as backend for the bakers brand.",
      "Added features like filters and searching of products.",
      "Smooth and easy ordering with customisation and authentication.",
      "Implemented responsive and attractive design and ensured cross-browser compatibility.",
      "control panel that enables the website owner or administrator to manage and oversee various aspects of their website.",
    ],
    link: "https://sawariyabakers.vercel.app",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Cake shop",
    description:
      "Web-based platform that allows users to choose the cakes from the menu and order the desired one from the shop.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cakepage,
    source_code_link: "https://github.com/Utsavladia/cake-shop",
  },
  {
    name: "News app",
    description:
      "A new website that have AI voice control can search the news using the command and read the headlines for user.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Alan AI",
        color: "pink-text-gradient",
      },
    ],
    image: newsapp,
    source_code_link: "https://github.com/Utsavladia/News-Website",
  },
  {
    name: "Digital Caretaker",
    description:
      "A software that handles all the function that a caretaker have to do to maintain the hostel and the students",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "Oops",
        color: "green-text-gradient",
      },
    ],
    image: digitalcare,
    source_code_link: "https://github.com/",
  },
  {
    name: "Website Clones",
    description: "Developed various webpages clones like amazon, myntra.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: amazonpage,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
