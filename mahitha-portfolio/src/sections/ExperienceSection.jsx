import React from "react";
import './ExperienceSection.css'; // Your CSS file

const experiences = [
  {
    id: 1,
    date: "Jun 2024 - Dec 2025",
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
    company: "Bank of America (Contract) | Tata Consultancy Services (Vendor)",
    desc: [
      "Significantly strengthened the platform’s security and engineered the authentication service to scale from 250K+ to 500K+ daily requests, effectively doubling throughput with zero performance degradation.",
      "Developed 20+ fintech integration APIs for the CashPro Orchestration Tool, enabling seamless client integration; directly onboarded 150+ clients, generated $10M+ in revenue, and positioned the platform as a key driver of company growth",
      "Contributed to architecting a microservice, influencing key design decisions on technology stack, system architecture, and internal patterns; delivering a robust service that supports growing client workloads.",
      "Eliminated duplicate payments in the CashPro Payments pipeline by implementing idempotent APIs and event-driven auditing, reducing weekly incidents from multiple cases to zero and improving overall payment reliability.",
      "Developed three core microservices using Spring Boot and Docker, driving the initial monolith decomposition strategy while ensuring backward compatibility with legacy systems.",
      "Designed and implemented Java-based, event-driven microservices using Kafka and Redis, doubling throughput and reducing incidents by 40% while optimizing payment workflows and CI/CD pipelines."
    ],
    tags: ["Java", "SpringBoot", "Microservices", "Kafka", "JWT", "Kubernetes", "Redis"]
  },
  {
    id: 3,
    date: "Jan 2021 - Jan 2023",
    title: "Software Engineer",
    company: "Bank of America (Contract) | Tata Consultancy Services (Vendor)",
    desc: [
      "Designed and developed idempotent REST APIs, SQL/NoSQL queries, caching strategies to reduce response times from 500ms → 200ms for 50K+ daily users, enhancing both developer and customer experience.",
      "Responded to production incidents and outages, performing root-cause analysis and implementing preventative monitoring and safeguards to ensure system stability.",
      "Optimized API performance, cutting response times from 500 ms to 200 ms and improving experience for 50K+ daily users.",
      "Upgraded 15+ microservices to Java 17 and Spring Boot 3, modernizing the codebase and improving performance.",
      "Diagnosed and resolved a large-scale digital outage by tracing API failures and restoring online services, and later implemented monitoring dashboards and automated health checks to reduce MTTR for future incidents.",
      "Maintained impeccable code quality through SonarQube analysis and code reviews, achieving 100% code compliance.",
      "Led the migration of a multi-module microservice to over 15+ modules using SOA, enhancing modularity and team productivity.",
      "Developed adaptive, responsive, and performance-centric front-end interfaces using Angular, React, Redux, TypeScript, and Material UI, leveraging WebSockets for real-time account updates, fraud alerts, and live transaction notifications",
      "Led unit and integration testing efforts using Postman, Jest, and JUnit, achieving 90% test coverage, reducing SonarQube issues by 25%, and lowering production defects through automated API testing."
    ],
    tags: ["Java", "React", "TypeScript", "WebSockets", "JUnit", "Splunk"]
  },
  {
    id: 4,
    date: "Jan 2020 - Oct 2020",
    title: "Software Engineer Intern",
    company: "ClassMonitor (Contract) | Designerrs (Vendor)",
    desc: [
      "Worked on an edu-tech app, implementing UX improvements and boosting free-to-paid user conversion by 6.7%",
      "Designed 20+ engaging admin profile features with Figma and Sketch, including customizable quizzes and real-time updates, enhancing user interaction and satisfaction",
      "Developed and launched a full-fledged website, which served over 200,000+ users, leveraging the MERN stack and ensuring seamless functionality and scalability by collaborating with cross-functional teams.",
      "Conducted user research with 30 participants, applied UI/UX principles, and created high-fidelity wireframes, improving user satisfaction by 30% and reducing onboarding time by 20%.",
      "Deployed robust applications on DigitalOcean using React, Node.js, Express.js, Mongoose, TypeScript, Bootstrap, and Zod/Joi, ensuring scalable infrastructure that supports high user traffic."
    ],
    tags: ["Node.js", "Express.js", "React", "MongoDB", "UI/UX Design", "Figma", "Sketch"]
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
