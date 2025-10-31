import React from "react";
import './ExperienceSection.css'; // Your CSS file

const experiences = [
  {
    id: 1,
    date: "Jun 2024 - Present",
    title: "Graduate Teaching Associate",
    company: "California State University, Fullerton",
    desc: [
      "Taught Web Frontend Engineering, focusing on HTML, CSS, JavaScript, and React, to enhance student's coding skills and web development knowledge",
      "Led interactive lectures and labs for 45 students, promoting hands-on learning with real-world projects",
      "Upgraded 8-10 applications to the latest Node and React versions, ensuring compatibility and security improvements",
      "Developed a QR code app using React-Native and DMS, automating manual uploads, reducing the service request time by 80%"
    ],
    tags: ["React", "JavaScript", "Node.js", "React Native"]
  },
  {
    id: 2,
    date: "Jan 2023 - Jan 2024",
    title: "Senior Software Engineer",
    company: "Bank of America | Tata Consultancy Services (Vendor)",
    desc: [
      "Architected a JWT-based microservice to standardize API authentication, handling 100K+ daily requests and enhancing security.",
      "Developed 20+ integration Rest APIs as part of the CashPro API Network, enabling deep integration into client workflows. Successfully onboarding 150+ clients and generating $10M in revenue.",
      "Researched, designed, and developed the system architecture for microservices by incorporating Domain-Driven Architecture (event-based), leveraging Axon - CORS and SAGA patterns, Kafka, and Oracle SQL Database.",
      "Combined multiple APIs into a single endpoint, returning only necessary data to reduce network calls and improve data processing.",
      "Developed three core microservices using Spring Boot and Docker, driving the initial monolith decomposition strategy while ensuring backward compatibility with legacy systems.",
      "Resolved reconciliation failures in the real-time payments pipeline and enhanced resiliency by implementing idempotent APIs, retry logic, and event-driven auditing to prevent duplicate or missing transfers for CashPro Payments API.",
      "Mentored 5+ interns and new graduates at BOA, providing technical expertise, conducting code reviews, and guiding them in projects including Digital Commerce application restructuring and workflow automation.",
    ],
    tags: ["Java", "SpringBoot", "Microservices", "Kafka", "JWT", "Kubernetes", "Redis"]
  },
  {
    id: 3,
    date: "Jan 2021 - Jan 2023",
    title: "Software Engineer",
    company: "Bank of America | Tata Consultancy Services (Vendor)",
    desc: [
      "Optimized API performance, cutting response times from 500 ms to 200 ms and improving experience for 50K+ daily users.",
      "Upgraded 15+ microservices to Java 17 and Spring Boot 3, modernizing the codebase and improving performance.",
      "Diagnosed and resolved a large-scale digital outage by tracing API failures and restoring online services, and later implemented monitoring dashboards and automated health checks to reduce MTTR for future incidents.",
      "Achieved 90% code coverage with JUnit and Mockito, reducing SonarQube issues by 25% and improving release stability.",
      "Maintained impeccable code quality through SonarQube analysis and code reviews, achieving 100% code compliance.",
      "Led the migration of a multi-module microservice to over 15+ modules using SOA, enhancing modularity and team productivity.",
      "Developed performance-centric dashboards using React, TypeScript, and Material libraries, leveraging WebSockets for real-time account updates, fraud alerts, and live transaction notifications to improve responsiveness and enhance customer experience.",
      "Optimized memory-heavy services via GC log analysis and Splunk, cutting heap usage by 60% and improving API latency by 25%.",
    ],
    tags: ["Java", "React", "TypeScript", "WebSockets", "JUnit", "Splunk"]
  },
  {
    id: 4,
    date: "Jan 2020 - Jun 2020",
    title: "UI/UX Design Intern",
    company: "Designerrs | UI UX Design Academy",
    desc: [
      "Worked on an edu-tech app, implementing UX improvements and boosting free-to-paid user conversion by 6.7%",
      "Designed 20+ engaging admin profile features with Figma and Sketch, including customizable quizzes and real-time updates, enhancing user interaction and satisfaction"
    ],
    tags: ["UI/UX Design", "Figma", "Sketch"]
  }
];

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-label">My journey</span>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider"></div>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">{exp.date}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <ul className="timeline-description">
                  {exp.desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
