import React from "react";
import { Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CVExperience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "NexaCode Labs",
      period: "2024 - 2025",
      description:
        "eveloping and optimizing user interfaces for web applications, ensuring seamless user experience and responsiveness. Collaborating with backend engineers and designers to deliver high-performance applications. Implemented a modern component-based architecture using React and TypeScript to enhance maintainability.",
    },
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
              <span className="text-sm text-muted-foreground">
                {experience.period}
              </span>
            </div>
          </div>
          <p className="text-muted-foreground mt-2">{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CVExperience;
