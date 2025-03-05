import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const CVHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 animate-fade-in">
      <Avatar className="w-32 h-32 border-4 border-background">
        <img src="/me.png" alt="Jovin" className="object-cover" />
      </Avatar>

      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          ABAYO HIRWA JOVIN
        </h1>
        <h2 className="text-xl text-muted-foreground mb-4">
          Software Engineer
        </h2>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
          <Badge
            variant="outline"
            className="flex items-center gap-1 px-3 py-1"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>abayohirwajovin@gmail.com</span>
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 px-3 py-1"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+250 798 509 561</span>
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 px-3 py-1"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Kigali, Rwanda</span>
          </Badge>
          <Badge
            variant="outline"
            className="flex items-center gap-1 px-3 py-1"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>hirwajovin.vercel.app</span>
          </Badge>
        </div>

        <div className="flex justify-center md:justify-start gap-3">
          <a
            href="https://github.com/hirwajovin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/hirwajovin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com/HirwaJovin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CVHeader;
