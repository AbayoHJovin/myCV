
import React from 'react';
import { Users, Mail, Phone } from "lucide-react";

const CVReferences = () => {
  const references = [
    {
      name: "Dushimire Aine",
      position: "CEO at Neurolabs",
      email: "ainedushimire@gmail.com",
      phone: "0798509561"
    },
  ];

  return (
    <div className="cv-section">
      <h3 className="cv-section-title">
        <Users className="w-5 h-5 text-accent" />
        References
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {references.map((reference, index) => (
          <div className="cv-item" key={index}>
            <h4 className="font-semibold text-base">{reference.name}</h4>
            <p className="text-sm text-accent">{reference.position}</p>
            <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{reference.email}</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{reference.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-3 text-sm text-muted-foreground italic">
        <p>Additional references available upon request.</p>
      </div>
    </div>
  );
};

export default CVReferences;
