import React from 'react';
import "./Projects.css";

const projects = [
  {
    title: "Real-time Chat App",
    image: "/assets/chat-app.png",  // place your images inside src/assets/
    description: "A scalable chat app using microservices, Kafka, and Redis.",
    techStack: ["React", "Node.js", "Kafka", "Redis", "MongoDB"],
    link: "#",
  },
  {
    title: "Personalized Health Tracker",
    image: "/assets/health-tracker.png",
    description: "Track your health metrics and get personalized insights.",
    techStack: ["React", "Express", "MongoDB", "JWT", "Kafka"],
    link: "#",
  },
  {
    title: "Underwater Plastic Detection",
    image: "/assets/plastic-detection.png",
    description: "AI-based system to detect plastic pollution underwater.",
    techStack: ["Python", "TensorFlow", "OpenCV"],
    link: "#",
  },
  {
    title: "Modular Car Rental System",
    image: "/assets/car-rental.png",
    description: "Built using design patterns for extensible rental solutions.",
    techStack: ["Java", "Design Patterns", "OOP"],
    link: "#",
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
            <img src={image} alt={`${title} screenshot`} className="project-image" />
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
