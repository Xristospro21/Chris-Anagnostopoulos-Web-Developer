import { meta, shopify, OnlyNet, tesla, Ravenna } from "../assets/images";
import {
    car,
    contact,
    css,
    docker,
    drupalicon,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    linux,
    mui,
    php,
    pricewise,
    react,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    Skoufos,
    Skaftouros,
    BBC,
    Riven,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: drupalicon,
        name: "Drupal",
        type: "CMS",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "OS",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
];

export const experiences = [
    {
        title: "ERP/Eshop Administrator",
        company_name: "Ravenna",
        icon: Ravenna,
        iconBg: "#accbe1",
        date: "July 2023 - July 2024",
        points: [
            "Managing inventory, order fulfillment, and logistics operations with precision and efficiency.",
            "Utilizing Entersoft ERP, WMS systems, and scanner technologies for streamlined warehouse management.",
            "Ensuring inventory accuracy and on-time delivery through optimized processes.",
            "Demonstrating a strong track record of improving warehouse efficiency and operational performance."
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "OnlyNet",
        icon: OnlyNet,
        iconBg: "#accbe1",
        date: "July 2024 - Present",
        points: [
            "Developing and maintaining web applications using Drupal-CMS and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Xristospro21',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/christos-anagnostopoulos-948492255/',
    }
];

export const projects = [
    {
        iconUrl: Skoufos, // Add icon path
        theme: 'btn-back-red', // Skoufos.eu color: red
        name: 'Skoufos.eu',
        description: 'Company project for Onlynet.Redesigned and rebuilt the Skoufos.eu website with a fresh, modern look and improved performance. The updated version is launching soon—check out the current live version for comparison.',
        link: 'https://github.com/Xristospro21', // Link to current live site
      },
      {
        iconUrl: Skaftouros, // Add icon path
        theme: 'btn-back-lime', // Skaftouros.gr color: lime green
        name: 'Skaftouros.gr',
        description: 'Company project for Onlynet.Currently developing a brand new version of Skaftouros.gr, focusing on a clean design, responsive experience, and high-performance architecture. Stay tuned for the launch!',
        link: 'https://github.com/Xristospro21', // Launch pending
      },
      {
        iconUrl: Riven, // Add icon path
        theme: 'btn-back-green-silver', // Riven theme: green and silver
        name: 'Project Launch: Riven Champion Spotlight',
        description: 'Diving deep into Riven’s abilities and playstyle with this comprehensive champion spotlight. Includes pro strategies, gameplay tips, and everything you need to dominate with Riven.',
        link: 'https://github.com/Xristospro21', // Link to project or video
      },
      {
        iconUrl: BBC, // Add icon path
        theme: 'btn-back-black-white', // BBC Clone theme: black and white
        name: 'BBC Clone (Drupal)',
        description: 'Developed a BBC-style news site clone using Drupal, Tailwind CSS, JavaScript, Twig, Sass, and HTML. Fully responsive, content-focused, and built for performance.',
        link: 'https://github.com/Xristospro21', // Link to preview or repo
      },

];