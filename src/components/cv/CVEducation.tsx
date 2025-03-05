
import React from 'react';
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CVEducation = () => {
  return (
    <div className="cv-section">
      <h3 className="cv-section-title">
        <GraduationCap className="w-5 h-5 text-accent" />
        Education
      </h3>
      
      <div className="cv-item">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
          <h4 className="font-semibold text-lg">Bachelor of Science in Computer Science</h4>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">University of Rwanda</Badge>
            <span className="text-sm text-muted-foreground">2016 - 2020</span>
          </div>
        </div>
        <p className="text-muted-foreground mt-2">
          Graduated with honors. Focused on software engineering, data structures, algorithms, 
          and web development. Participated in various hackathons and coding competitions.
        </p>
      </div>
    </div>
  );
};

export default CVEducation;
