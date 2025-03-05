
import React from 'react';
import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CVProjects = () => {
  const projects = [
    {
      name: "Personal Portfolio Website",
      description: "Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations and responsive design.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "E-commerce Platform",
      description: "Full-stack e-commerce solution with product management, cart functionality, and payment integration using Stripe.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      name: "Task Management App",
      description: "Collaborative task management tool with real-time updates, user authentication, and team management features.",
      technologies: ["React", "Firebase", "Redux"]
    },
    {
      name: "Blog Platform",
      description: "Content management system with markdown support, comments, and social sharing functionality.",
      technologies: ["Next.js", "Prisma", "PostgreSQL"]
    }
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
