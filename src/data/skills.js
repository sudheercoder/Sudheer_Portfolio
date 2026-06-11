import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiReplit,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const skillsData = {
  frontend: [
    { name: "HTML5", level: 95, icon: FaHtml5 },
    { name: "CSS3", level: 90, icon: FaCss3Alt },
    { name: "JavaScript", level: 85, icon: FaJs },
    { name: "React.js", level: 88, icon: FaReact },
    { name: "Tailwind CSS", level: 87, icon: SiTailwindcss },
    { name: "Bootstrap", level: 82, icon: SiBootstrap },
  ],

  backend: [
    { name: "Node.js", level: 82, icon: FaNodeJs },
    { name: "Express.js", level: 80, icon: SiExpress },
  ],

  database: [
    { name: "MongoDB", level: 80, icon: SiMongodb },
    { name: "SQL", level: 70, icon: SiMysql },
  ],

  tools: [
    { name: "Git", level: 85, icon: FaGitAlt },
    { name: "GitHub", level: 85, icon: FaGithub },
    { name: "VS Code", level: 92, icon: VscVscode },
    { name: "Postman", level: 78, icon: SiPostman },
    { name: "Replit", level: 80, icon: SiReplit },
  ],
};

export const techIcons = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#8CC84B" },
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#264DE4" },
];