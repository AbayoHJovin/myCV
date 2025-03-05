
import React from 'react';
import { Star } from "lucide-react";

const CVSkills = () => {
  const skills = [
    { name: "JavaScript/TypeScript", percentage: 95 },
    { name: "React.js/Next.js", percentage: 90 },
    { name: "Node.js/Express", percentage: 85 },
    { name: "HTML/CSS/Tailwind", percentage: 92 },
    { name: "MongoDB/PostgreSQL", percentage: 80 },
    { name: "Git/CI-CD", percentage: 88 },
  ];

  return (
    <div className="cv-section">
      <h3 className="cv-section-title">
        <Star className="w-5 h-5 text-accent" />
        Skills
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div className="cv-item" key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVSkills;
