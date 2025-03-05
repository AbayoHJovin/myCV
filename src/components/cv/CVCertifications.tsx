
import React from 'react';
import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CVCertifications = () => {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      description: "Designed and deployed scalable, highly available systems on AWS infrastructure."
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      year: "2022",
      description: "Certified in Scrum framework implementation and agile project management."
    },
    {
      name: "Meta Front-End Developer",
      issuer: "Coursera",
      year: "2021",
      description: "Comprehensive certification in modern front-end development best practices."
    },
    {
      name: "MongoDB Database Administrator",
      issuer: "MongoDB University",
      year: "2020",
      description: "Advanced database management and optimization techniques."
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
