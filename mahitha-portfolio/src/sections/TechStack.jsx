import React from 'react';
import './TechStack.css';

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaAws,
  FaPython,
  FaGitAlt,
  FaLinux,
  FaMusic,          // Added for Kafka placeholder
} from 'react-icons/fa';
import {
  SiMongodb,
  SiRedis,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
} from 'react-icons/si';

const techs = [
  { name: 'React', icon: <FaReact style={{ color: '#61DAFB', fontSize: '3rem' }} /> },
  { name: 'Node.js', icon: <FaNodeJs style={{ color: '#339933', fontSize: '3rem' }} /> },
  { name: 'Java', icon: <FaJava style={{ color: '#f89820', fontSize: '3rem' }} /> },
  { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248', fontSize: '3rem' }} /> },
  { name: 'Kafka', icon: <FaMusic style={{ color: '#231F20', fontSize: '3rem' }} /> },
  { name: 'Redis', icon: <SiRedis style={{ color: '#D82C20', fontSize: '3rem' }} /> },
  { name: 'Docker', icon: <FaDocker style={{ color: '#2496ED', fontSize: '3rem' }} /> },
  { name: 'AWS', icon: <FaAws style={{ color: '#FF9900', fontSize: '3rem' }} /> },
  { name: 'Python', icon: <FaPython style={{ color: '#3776AB', fontSize: '3rem' }} /> },
  { name: 'Git', icon: <FaGitAlt style={{ color: '#F05032', fontSize: '3rem' }} /> },
  { name: 'Linux', icon: <FaLinux style={{ color: '#FCC624', fontSize: '3rem' }} /> },
  { name: 'TypeScript', icon: <SiTypescript style={{ color: '#3178C6', fontSize: '3rem' }} /> },
  { name: 'Next.js', icon: <SiNextdotjs style={{ color: '#000000', fontSize: '3rem' }} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql style={{ color: '#336791', fontSize: '3rem' }} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss style={{ color: '#38B2AC', fontSize: '3rem' }} /> },
];

export default function TechStack() {
  return (
    <section className="techstack" id="tech">
      <h2>Tech Stack</h2>
      <div className="tech-grid">
        {techs.map((tech, idx) => (
          <div className="tech-card" key={idx}>
            <span className="tech-icon" aria-label={tech.name}>
              {tech.icon}
            </span>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
