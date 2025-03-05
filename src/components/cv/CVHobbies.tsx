
import React from 'react';
import { Heart, Globe, Code, GraduationCap, Star, Twitter, Briefcase, Users, Award } from "lucide-react";

const CVHobbies = () => {
  const hobbies = [
    { name: "Traveling", icon: <Globe className="w-5 h-5 text-accent" /> },
    { name: "Open Source", icon: <Code className="w-5 h-5 text-accent" /> },
    { name: "Learning", icon: <GraduationCap className="w-5 h-5 text-accent" /> },
    { name: "Volunteering", icon: <Star className="w-5 h-5 text-accent" /> },
    { name: "Tech Twitter", icon: <Twitter className="w-5 h-5 text-accent" /> },
    { name: "Mentoring", icon: <Briefcase className="w-5 h-5 text-accent" /> },
    { name: "Networking", icon: <Users className="w-5 h-5 text-accent" /> },
    { name: "Hackathons", icon: <Award className="w-5 h-5 text-accent" /> }
  ];

  return (
    <div className="cv-section">
      <h3 className="cv-section-title">
        <Heart className="w-5 h-5 text-accent" />
        Hobbies & Interests
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {hobbies.map((hobby, index) => (
          <div className="bg-secondary/50 rounded-lg p-3 text-center flex flex-col items-center gap-2 transition-all hover:bg-secondary" key={index}>
            {hobby.icon}
            <span className="text-sm font-medium">{hobby.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVHobbies;
