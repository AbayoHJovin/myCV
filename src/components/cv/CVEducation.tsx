import React from "react";
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
          <h4 className="font-semibold text-lg">High School Diploma</h4>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Rwanda Coding Academy</Badge>
            <span className="text-sm text-muted-foreground">2023 - Present</span>
          </div>
        </div>
        <p className="text-muted-foreground mt-2">
        Advanced placement courses in Computer Science. Focused on software engineering, data
          structures, algorithms, and web development. Participated in various
          hackathons and coding competitions.
        </p>
      </div>
    </div>
  );
};

export default CVEducation;
