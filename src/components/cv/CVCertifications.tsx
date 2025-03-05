
import React from 'react';
import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CVCertifications = () => {
  const certifications = [
    {
      name: "Meta Front-End Developer",
      issuer: "Coursera",
      year: "2024",
      description: "Comprehensive certification in modern front-end development best practices."
    },
    {
      name: "Intro to Cyber",
      issuer: "ThinkCyber",
      year: "2023",
      description: "Cybersecurity trainings by Israeli cybersecurity experts."
    }
  ];

  return (
    <div className="cv-section">
      <h3 className="cv-section-title">
        <Award className="w-5 h-5 text-accent" />
        Certifications
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div className="cv-item" key={index}>
            <h4 className="font-semibold text-base">{cert.name}</h4>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className="text-xs">{cert.issuer}</Badge>
              <span className="text-sm text-muted-foreground">{cert.year}</span>
            </div>
            <p className="text-muted-foreground mt-1 text-sm">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVCertifications;
