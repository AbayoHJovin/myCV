import React from "react";
import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CVProjects = () => {
  const projects = [
    {
      name: "Umurava Skills Challenge",
      description:
        "A platform that connects different people for job opportunities",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Homedel",
      description:
        "This is the e-commerce platform which allows the users to buy products online and payment integration using MTN & Bank.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "Communix",
      description:
        "This is the mobile application which helps the citizens to report the issues to the local authorities.",
      technologies: ["React", "Firebase", "Redux"],
    },
    {
      name: "Adonai Project Solutions",
      description:
        "This is the website I made for the company which constructs roads and buildings.",
      technologies: ["Next.js", "Sanity Client"],
    },
  ];

  return (
    <div className="cv-section">
      <h3 className="cv-section-title">
        <Code className="w-5 h-5 text-accent" />
        Notable Projects
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div className="cv-item" key={index}>
            <h4 className="font-semibold text-base">{project.name}</h4>
            <p className="text-muted-foreground mt-1 text-sm">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge variant="outline" className="text-xs" key={techIndex}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVProjects;
