import React from 'react';
import "./Projects.css";

// Import images
import RealtimeChatImg from "../assets/RealtimeChat2.avif";
import FitbitImg from "../assets/Fitness4.jpg";
import PlasticDetectionImg from "../assets/Pollution.jpg";
import CampusFlowImg from "../assets/Campus1.jpg";

const projects = [
  {
    title: "Nihira (Real-time Chat App)",
    image: RealtimeChatImg,
    description: "A scalable chat app using microservices, Kafka, and Redis.",
    techStack: ["Node.js", "Express.js", "React.js", "MongoDB", "WebSockets", "Kafka", "Redis", "Docker", "AWS"],
    link: "https://github.com/Mahitha-pasupuleti/Nihira",
  },
  {
    title: "Personalized Health Tracker",
    image: FitbitImg,
    description: "Track your health metrics and get personalized insights.",
    techStack: ["Azure Databricks", "Data Lake", "Data Warehousing", "PySpark", "Kafka", "Python", "Java", "SQL"],
    link: "https://github.com/Mahitha-pasupuleti/fitbit",
  },
  {
    title: "Underwater Plastic Detection",
    image: PlasticDetectionImg,
    description: "AI-based system to detect plastic pollution underwater.",
    techStack: ["YOLOv8", "Python", "OpenCV", "Deep Learning", "TensorFlow", "Cuda"],
    link: "https://github.com/Mahitha-pasupuleti/UnderwaterPlasticDetection",
  },
  {
    title: "CampusFlow",
    image: CampusFlowImg,
    description: "One stop destination for all campus solutions.",
    techStack: ["Java", "Spring Boot", "Spring Security", "Microservices", "Git", "Maven"],
    link: "https://github.com/Mahitha-pasupuleti/CampusFlow",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(({ title, image, description, techStack, link }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div
                className="project-image-background"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tech-stack">
                  {techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}