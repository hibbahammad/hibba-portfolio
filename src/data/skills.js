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
  FiMessageSquare,
  FiCpu,
  FiZap,
  FiGlobe,
  FiEdit3,
  FiVideo,
  FiImage,
  FiMic,
  FiYoutube,
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
  {
    category: "AI & Automation",
    items: [
      { name: "Prompt Engineering", icon: FiEdit3 },
      { name: "AI Chatbots", icon: FiMessageSquare },
      { name: "AI Agents", icon: FiCpu },
      { name: "AI Automation", icon: FiZap },
      { name: "AI-Powered Apps", icon: FiGlobe },
      { name: "AI-Assisted Coding", icon: FiCode },
      { name: "YouTube Automation", icon: FiYoutube },
      { name: "AI Content Creation", icon: FiEdit3 },
    ],
  },
  {
    category: "AI / Creative Tools",
    items: [
      { name: "ChatGPT", icon: FiMessageSquare },
      { name: "Gemini", icon: FiMessageSquare },
      { name: "Claude", icon: FiMessageSquare },
      { name: "Canva AI", icon: FiImage },
      { name: "Cursor", icon: FiCode },
      { name: "GitHub Copilot", icon: SiGithub },
      { name: "Lovable", icon: FiGlobe },
      { name: "Bolt", icon: FiZap },
      { name: "Replit", icon: FiTerminal },
      { name: "Leonardo AI", icon: FiImage },
      { name: "Midjourney", icon: FiImage },
      { name: "Runway", icon: FiVideo },
      { name: "ElevenLabs", icon: FiMic },
      { name: "CapCut AI", icon: FiVideo },
    ],
  },
];

export default skills;