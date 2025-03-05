
import React from 'react';
import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CVExperience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Andela",
      period: "2022 - Present",
      description: "Developed and maintained scalable web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented RESTful APIs and optimized application performance."
    },
    {
      title: "Frontend Developer",
      company: "Awesomity Lab",
      period: "2020 - 2022",
      description: "Built responsive user interfaces using React and Next.js. Implemented state management with Redux and Context API. Worked closely with designers to transform mockups into functional components."
    },
    {
      title: "Software Engineering Intern",
      company: "Klab Rwanda",
      period: "2019 - 2020",
      description: "Assisted in developing web applications using JavaScript and PHP. Collaborated with senior developers to implement new features and fix bugs. Participated in code reviews and learned best practices in software development."
    }
  ];

  return (
    <div className="cv-section">
      <h3 className="cv-section-title">
        <Briefcase className="w-5 h-5 text-accent" />
        Experience
      </h3>
      
      {experiences.map((experience, index) => (
        <div className="cv-item" key={index}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
            <h4 className="font-semibold text-lg">{experience.title}</h4>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{experience.company}</Badge>
              <span className="text-sm text-muted-foreground">{experience.period}</span>
            </div>
          </div>
          <p className="text-muted-foreground mt-2">
            {experience.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CVExperience;
