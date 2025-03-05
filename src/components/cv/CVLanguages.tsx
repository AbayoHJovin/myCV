
import React from 'react';
import { Globe } from "lucide-react";

const CVLanguages = () => {
  const languages = [
    { name: "English", level: "Fluent", percentage: 90 },
    { name: "Kinyarwanda", level: "Native", percentage: 100 },
  ];

  return (
    <div className="cv-section">
      <h3 className="cv-section-title">
        <Globe className="w-5 h-5 text-accent" />
        Languages
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {languages.map((language, index) => (
          <div className="cv-item" key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{language.name}</span>
              <span className="text-sm text-muted-foreground">{language.level}</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${language.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVLanguages;
