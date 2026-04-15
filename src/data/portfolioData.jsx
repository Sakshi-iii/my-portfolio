import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaLinux,
  FaNetworkWired,
  FaShieldAlt,
  FaServer,
  FaPython,
  FaLanguage,
  FaRobot,
  FaChartLine,
  FaSearch,
  FaWindows,
  FaChartBar,
  FaAws,
  FaDocker,
  FaKaggle,
  FaMicroblog,
} from "react-icons/fa";
import { FaA, FaD, FaN, FaWirsindhandwerk } from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiSpringboot,
  SiPostman,
  SiGooglecloud,
} from "react-icons/si";

export const personalInfo = {
  name: "Sakshi",
  title: "Backend Developer | Cybersecurity &AI|ML Enthusiast",
  email: "p.sakshi2810@gmail.com",
  linkedin: "https://www.linkedin.com/in/sakshi-iii/",
  github: "https://github.com/Sakshi-iii",
  resumeLink: "/Sakshi_Resume.pdf",
  bio: "Computer Science undergraduate with a strong foundation in data structures, algorithms, and core computer science concepts. Passionate about building secure and scalable systems with hands-on experience in backend development, cybersecurity tools, and machine learning projects. I enjoy solving real-world problems and continuously improving my technical skills.",
  shortBio: "I build intelligent and secure applications.",
};

export const education = [
  {
    institution: "GL Bajaj Institute of Technology and Management",
    degree: "Bachelor of Engineering in Computer Science",
    score: "CGPA: 8.16/10",
  },
  {
    institution: "Ma Durgaji Vidyalaya Sr. Sec. School",
    degree: "Class 12th CBSE",
    score: "89%",
  },
  {
    institution: "Shakuntala Central Academy",
    degree: "Class 10th CBSE",
    score: "89.4%",
  },
];

export const projects = [
    {
   title: "Threat Shield AI",
tech: ["Python", "Scapy",  "FastAPI", "MongoDB", "React", "Networking","AI"],
description: [
  <>
    Developed a{" "}
    <span className="text-text-primary font-medium">
      real-time AI-powered cyber threat detection and analysis platform
    </span>{" "}
    designed to monitor network traffic, identify potential threats, and provide actionable insights for small bussinesses.
  </>,
  <>
    Implemented{" "}
    <span className="text-text-primary font-medium">
      intelligent traffic analysis using Scapy and AI models
    </span>{" "}
     to detect anomalies, potential intrusions, and emerging cyber threats in real-time.
  </>,
  <>
    Integrated{" "}
    <span className="text-accent-1 font-semibold">
     packet inspection, signature-based detection, and AI-driven anomaly detection
    </span>{" "}
    to provide comprehensive threat analysis and actionable insights for users.
  </>,
  <>
    Built a{" "}
    <span className="text-text-primary font-medium">
      React-based web dashboard
    </span>{" "}
    to visualize network traffic, detected threats, and security recommendations in an intuitive interface.
  </>,
],
  
   date: "April 2026",
category: "Cybersecurity",
icon: <FaDatabase size={24} className="text-accent-1" />,
image: "/threat_shield_ai.png",
  },
  {
   title: "Network Vulnerability Scanner",
tech: ["Python", "Socket Programming", "Multithreading", "Kali Linux"],
description: [
  <>
    Developed a{" "}
    <span className="text-text-primary font-medium">
      Python-based vulnerability scanning toolkit
    </span>{" "}
    capable of detecting open ports, identifying running services, and performing
    security analysis on remote hosts.
  </>,
  <>
    Implemented{" "}
    <span className="text-text-primary font-medium">
      multithreaded port scanning
    </span>{" "}
    to efficiently scan large port ranges and significantly improve scanning
    performance.
  </>,
  <>
    Integrated{" "}
    <span className="text-accent-1 font-semibold">
      banner grabbing, service detection, and NVD CVE lookup
    </span>{" "}
    to identify potential vulnerabilities associated with detected services.
  </>,
  <>
    Built a{" "}
    <span className="text-text-primary font-medium">
      Flask-based web dashboard
    </span>{" "}
    to visualize scan results including open ports, services, banners, and
    vulnerability indicators.
  </>,
],
  
   date: "March 2026",
category: "Cybersecurity",
icon: <FaDatabase size={24} className="text-accent-1" />,
image: "/vulnerability_scanner.png",
  },
  {
    title: "NAMASTE–ICD11 Healthcare Terminology Integration",
tech: ["Python", "FastAPI", "NLP", "Vector Search"],
description: [
  <>
    Built a backend microservice integrating{" "}
    <span className="text-text-primary font-medium">
      AYUSH NAMASTE terminology with WHO ICD-11
    </span>{" "}
    for EHR-compliant medical systems.
  </>,
  <>
    Implemented{" "}
    <span className="text-text-primary font-medium">
      semantic search using embeddings
    </span>{" "}
    and vector similarity for medical code mapping.
  </>,
  <>
    Developed REST APIs enabling{" "}
    <span className="text-accent-1 font-semibold">
      dual coding and real-time terminology lookup
    </span>{" "}
    for healthcare applications.
  </>,
],
     date: "May 2025",
category: "Backend / NLP",
icon: <FaJava size={24} className="text-accent-1" />,
image: "/namaste_icd11.png",
  },
  {
    title: "Comparative Analysis of English–German NMT Systems",
tech: ["Python", "Natural Language Processing", "Machine Translation", "COMET Evaluation"],
description: [
  <>
    Evaluated{" "}
    <span className="text-text-primary font-medium">
      English–German Neural Machine Translation models
    </span>{" "}
    using COMET evaluation metrics on a curated challenge dataset.
  </>,
  <>
    Conducted analysis on{" "}
    <span className="text-text-primary font-medium">
      idioms, syntax, and contextual accuracy
    </span>{" "}
    across different translation systems.
  </>,
  <>
    Observed that{" "}
    <span className="text-accent-1 font-semibold">
      DeepL outperformed Google Translate by 11–17%
    </span>{" "}
    in contextual translation quality.
  </>,
],
date: "December 2025",
category: "Machine Learning / NLP",
icon: <FaDatabase size={24} className="text-accent-1" />,
image: "/nmt_translation.png",
  },
];

export const skills = {
   languages: [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "C", icon: <SiCplusplus />},
    { name: "SQL", icon: <FaDatabase /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiJavascript /> },
    { name: "Bash Scripting", icon: <FaLinux /> },
  ],
  coreCS: [
    { name: "Data Structures & Algorithms", icon: <FaCode /> },
    { name: "Object-Oriented Programming", icon: <FaCode /> },
    { name: "Operating Systems", icon: <FaCode /> },
    { name: "Computer Networks", icon: <FaCode /> },
    { name: "Design and Analysis of Algorithms", icon: <FaCode /> },
    { name: "Software Engineering Principles", icon: <FaCode /> },
    { name: "Comuputer Organization & Architecture", icon: <FaCode /> },
  ],

  backend: [
    { name: "REST API Development", icon: <FaServer /> },
    { name: "Flask", icon: <FaServer /> },
    { name: "FastAPI", icon: <FaServer /> },
    { name: "Client-Server Architecture", icon: <FaServer /> }
  ],

  databases: [
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "PostgreSQL", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <FaDatabase /> },
    { name: "Data Querying", icon: <FaDatabase /> },
    { name: "Database Design", icon: <FaDatabase /> },
  ],

  cybersecurity: [
    { name: "Network Security Fundamentals", icon: <FaShieldAlt /> },
    { name: "Vulnerability Assessment", icon: <FaShieldAlt /> },
    { name: "Threat Detection Basics", icon: <FaShieldAlt/> },
    { name: "Security Monitoring Concepts", icon: <FaShieldAlt /> },
    { name: "Ethical Hacking Fundamentals", icon: <FaShieldAlt /> },
    { name: "TCP/IP Protocols", icon: <FaShieldAlt /> },
  ],

  cloud: [
    { name: "AWS Cloud Fundamentals", icon: <SiGooglecloud /> },
    { name: "Virtual Machines", icon: <SiGooglecloud /> }
  ],
  ai: [
    { name: "Natural Language Processing", icon: <FaLanguage /> },
    { name: "Machine Learning Fundamentals", icon: <FaRobot /> },
    { name: "Model Evaluation Metrics", icon: <FaChartLine /> },
    { name: "Text Embeddings and Vector Search", icon: <FaSearch /> },
  ],

  tools: [
    { name: "Git & GitHub", icon: <FaGithub /> },
    // { name: "Postman", icon: <SiPostman /> },
    { name: "VS Code", icon: <FaCode /> },
    { name: "Pycharm", icon: <FaPython /> },
    { name: "Eclipse", icon: <FaJava /> },
    { name: "Windows", icon: <FaWindows/> },
    { name: "Kali Linux", icon: <FaLinux /> },
    { name: "Nmap", icon: <FaNetworkWired /> },
    { name: "Wireshark", icon: <FaNetworkWired /> },
    { name: "Burp Suite", icon: <FaNetworkWired /> },
    { name: "Splunk", icon: <FaChartBar /> },
    { name: "Shodan", icon: <FaCode /> },
    { name: "AWS (EC2, S3)", icon: <FaAws/> },
    { name: "Microsoft Azure", icon: <FaMicroblog /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kaggle", icon: <FaKaggle /> },
    { name: "Jupyter Notebooks", icon: <FaCode /> },

  ],
  coreCompetencies: [
    "Presentations",
    "Oratory",
    "Team Leadership",
    "Event Hosting",
    "Agile Methodologies",
    "Problem Solving",
  ],
};

export const experience = [
    {
    role: "She Innovates Winner",
    organization: "Women in Science and Engineering-GNIOT",
    duration: "Apr 2026",
    points: [
      "Winner She Innovates, competing among top student teams across the country.",
      "Developed an innovative technical solution addressing a real-world problem under intense competition and time constraints.",
    ],
  },
  {
    role: "Smart India Hackathon Finalist",
    organization: "Government of India",
    duration: "Sep 2025",
    points: [
      "Selected as a finalist in Smart India Hackathon 2025, competing among top student teams across the country.",
      "Developed an innovative technical solution addressing a real-world problem under intense competition and time constraints.",
    ],
  },
  {
    role: "Internal Hackathon Winner",
    organization: "GL Bajaj Institute of Technology and Management",
    duration: "Sep 2024",
    points: [
      "Secured 1st position among 300+ teams in the internal hackathon round of Smart India Hackathon.",
      "Demonstrated strong problem-solving and collaborative development skills in building a working technical prototype.",
    ],
  },
  {
    role: "Top 10 – Build with Delhi",
    organization: "Build with Delhi",
    duration: "Apr 2024",
    points: [
      "Ranked 10th among 250+ competing teams in a national-level development competition.",
      "Built and presented a technical solution evaluated on innovation, functionality, and impact.",
    ],
  },
    {
    role: "Lance Corporal",
    organization: "NCC – GL Bajaj",
    duration: "2025 – Present",
    points: [
      "Participating in discipline training, leadership development, and national service programs.",
      "Developing teamwork, responsibility, and leadership through NCC activities.",
    ],
  },
    {
    role: "Director – Club Services",
    organization: "Rotaract Club of GL Bajaj",
    duration: "July 2025 – Present",
    points: [
      "Led coordination of club initiatives, events, and member activities.",
      "Collaborated with multiple teams to organize social and technical events.",
    ],
  },
  {
    role: "Cadet",
    organization: "NCC – GL Bajaj",
    duration: "2024-2025",
    points: [
      "Participating in discipline training, leadership development, and national service programs.",
      "Developing teamwork, responsibility, and leadership through NCC activities.",
    ],
  },

  {
    role: "Director – Public Relations",
    organization: "Rotaract Club of GL Bajaj",
    duration: "July 2024 – July 2025",
    points: [
      "Managed communication, outreach, and public engagement for club events.",
      "Handled promotions, partnerships, and social media presence for club initiatives.",
    ],
  },
    {
    role: "Lead-Dance Avenue",
    organization: "Shrinik CSE Department Club",
    duration: "July 2024 – July 2025",
    points: [
      "Managed and led the dance team for the department’s cultural club.",
      "Organised dance competitions and cultural events for the department.",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: {
    url: `mailto:${personalInfo.email}`,
    icon: <FaEnvelope size={24} />,
  },
};
