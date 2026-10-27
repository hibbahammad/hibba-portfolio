import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiPostman,
  SiCloudinary,
} from "react-icons/si";

import {
  FiLock,
  FiCode,
  FiTerminal,
  FiGlobe,
} from "react-icons/fi";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React.js", icon: SiReact },
      { name: "Responsive Design", icon: FiGlobe },
      { name: "Flexbox", icon: FiCode },
      { name: "CSS Grid", icon: FiCode },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: FiTerminal },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
    ],
  },
  {
    category: "Authentication & Security",
    items: [
      { name: "JWT Authentication", icon: SiJsonwebtokens },
      { name: "bcrypt", icon: FiLock },
    ],
  },
  {
    category: "Development Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Cloudinary", icon: SiCloudinary },
      { name: "VS Code", icon: FiCode },
      { name: "Browser DevTools", icon: FiTerminal },
    ],
  },
];

export default skills;