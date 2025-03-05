
import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Code,
  Star, 
  Github, 
  Linkedin, 
  Twitter,
  Award,
  Users,
  Heart
} from "lucide-react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from 'sonner';

const CV = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!cvRef.current) return;
    
    toast.loading('Generating PDF...');
    
    try {
      const canvas = await html2canvas(cvRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        format: 'a4',
        unit: 'mm',
      });
      
      // Calculate the width and height of the PDF
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('Jovin_Hirwa_CV.pdf');
      
      toast.dismiss();
      toast.success('CV downloaded successfully!');
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to generate PDF. Please try again.');
      console.error('PDF generation failed:', error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/50 p-4 md:p-8 flex flex-col items-center">
        <Card className="w-full max-w-4xl bg-white/90 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden border-0">
          <div ref={cvRef} className="p-6 md:p-8">
            {/* Header / Personal Info */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 animate-fade-in">
              <Avatar className="w-32 h-32 border-4 border-background">
                <img 
                  src="https://hirwajovin.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.a0c2b9cc.jpg&w=640&q=75" 
                  alt="Jovin Hirwa" 
                  className="object-cover"
                />
              </Avatar>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Jovin Hirwa</h1>
                <h2 className="text-xl text-muted-foreground mb-4">Software Engineer</h2>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                  <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                    <Mail className="w-3.5 h-3.5" />
                    <span>hirwajovin@gmail.com</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>+250 780 844 302</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Kigali, Rwanda</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                    <Globe className="w-3.5 h-3.5" />
                    <span>hirwajovin.vercel.app</span>
                  </Badge>
                </div>
                
                <div className="flex justify-center md:justify-start gap-3">
                  <a href="https://github.com/hirwajovin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/hirwajovin/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/HirwaJovin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <Separator className="my-6" />
            
            {/* Summary */}
            <div className="cv-section">
              <p className="text-muted-foreground leading-relaxed">
                Passionate software engineer with expertise in frontend and backend development. 
                Experienced in building scalable web applications using modern technologies like 
                React, Next.js, Node.js, and more. Dedicated to creating elegant solutions 
                to complex problems with a focus on performance and user experience.
              </p>
            </div>
            
            {/* Skills */}
            <div className="cv-section">
              <h3 className="cv-section-title">
                <Star className="w-5 h-5 text-accent" />
                Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="cv-item">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">JavaScript/TypeScript</span>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="cv-item">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">React.js/Next.js</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="cv-item">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Node.js/Express</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="cv-item">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">HTML/CSS/Tailwind</span>
                    <span className="text-sm text-muted-foreground">92%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="cv-item">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">MongoDB/PostgreSQL</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="cv-item">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Git/CI-CD</span>
                    <span className="text-sm text-muted-foreground">88%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Experience */}
            <div className="cv-section">
              <h3 className="cv-section-title">
                <Briefcase className="w-5 h-5 text-accent" />
                Experience
              </h3>
              
              <div className="cv-item">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                  <h4 className="font-semibold text-lg">Full Stack Developer</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Andela</Badge>
                    <span className="text-sm text-muted-foreground">2022 - Present</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-2">
                  Developed and maintained scalable web applications using React, Node.js, and MongoDB. 
                  Collaborated with cross-functional teams to deliver high-quality software solutions. 
                  Implemented RESTful APIs and optimized application performance.
                </p>
              </div>
              
              <div className="cv-item">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                  <h4 className="font-semibold text-lg">Frontend Developer</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Awesomity Lab</Badge>
                    <span className="text-sm text-muted-foreground">2020 - 2022</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-2">
                  Built responsive user interfaces using React and Next.js. 
                  Implemented state management with Redux and Context API. 
                  Worked closely with designers to transform mockups into functional components.
                </p>
              </div>
              
              <div className="cv-item">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                  <h4 className="font-semibold text-lg">Software Engineering Intern</h4>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Klab Rwanda</Badge>
                    <span className="text-sm text-muted-foreground">2019 - 2020</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-2">
                  Assisted in developing web applications using JavaScript and PHP. 
                  Collaborated with senior developers to implement new features and fix bugs. 
                  Participated in code reviews and learned best practices in software development.
                </p>
              </div>
            </div>
            
            {/* Education */}
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

            {/* Certifications - New Section */}
            <div className="cv-section">
              <h3 className="cv-section-title">
                <Award className="w-5 h-5 text-accent" />
                Certifications
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="cv-item">
                  <h4 className="font-semibold text-base">AWS Certified Solutions Architect</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">Amazon Web Services</Badge>
                    <span className="text-sm text-muted-foreground">2023</span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Designed and deployed scalable, highly available systems on AWS infrastructure.
                  </p>
                </div>
                
                <div className="cv-item">
                  <h4 className="font-semibold text-base">Professional Scrum Master I</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">Scrum.org</Badge>
                    <span className="text-sm text-muted-foreground">2022</span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Certified in Scrum framework implementation and agile project management.
                  </p>
                </div>
                
                <div className="cv-item">
                  <h4 className="font-semibold text-base">Meta Front-End Developer</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">Coursera</Badge>
                    <span className="text-sm text-muted-foreground">2021</span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Comprehensive certification in modern front-end development best practices.
                  </p>
                </div>
                
                <div className="cv-item">
                  <h4 className="font-semibold text-base">MongoDB Database Administrator</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">MongoDB University</Badge>
                    <span className="text-sm text-muted-foreground">2020</span>
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Advanced database management and optimization techniques.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Projects */}
            <div className="cv-section">
              <h3 className="cv-section-title">
                <Code className="w-5 h-5 text-accent" />
                Notable Projects
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="cv-item">
                  <h4 className="font-semibold text-base">Personal Portfolio Website</h4>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. 
                    Features smooth animations and responsive design.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">Next.js</Badge>
                    <Badge variant="outline" className="text-xs">TypeScript</Badge>
                    <Badge variant="outline" className="text-xs">Tailwind CSS</Badge>
                  </div>
                </div>
                
                <div className="cv-item">
                  <h4 className="font-semibold text-base">E-commerce Platform</h4>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Full-stack e-commerce solution with product management, cart functionality, 
                    and payment integration using Stripe.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">React</Badge>
                    <Badge variant="outline" className="text-xs">Node.js</Badge>
                    <Badge variant="outline" className="text-xs">MongoDB</Badge>
                    <Badge variant="outline" className="text-xs">Stripe</Badge>
                  </div>
                </div>
                
                <div className="cv-item">
                  <h4 className="font-semibold text-base">Task Management App</h4>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Collaborative task management tool with real-time updates, 
                    user authentication, and team management features.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">React</Badge>
                    <Badge variant="outline" className="text-xs">Firebase</Badge>
                    <Badge variant="outline" className="text-xs">Redux</Badge>
                  </div>
                </div>
                
                <div className="cv-item">
                  <h4 className="font-semibold text-base">Blog Platform</h4>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Content management system with markdown support, 
                    comments, and social sharing functionality.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-xs">Next.js</Badge>
                    <Badge variant="outline" className="text-xs">Prisma</Badge>
                    <Badge variant="outline" className="text-xs">PostgreSQL</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            {/* References - New Section */}
            <div className="cv-section">
              <h3 className="cv-section-title">
                <Users className="w-5 h-5 text-accent" />
                References
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="cv-item">
                  <h4 className="font-semibold text-base">David Murenzi</h4>
                  <p className="text-sm text-accent">CTO at Andela Rwanda</p>
                  <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5" />
                      <span>david.m@andela.com</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" />
                      <span>+250 788 123 456</span>
                    </div>
                  </div>
                </div>
                
                <div className="cv-item">
                  <h4 className="font-semibold text-base">Sarah Kamugisha</h4>
                  <p className="text-sm text-accent">Lead Developer at Awesomity Lab</p>
                  <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5" />
                      <span>sarah.k@awesomity.rw</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" />
                      <span>+250 733 987 654</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 text-sm text-muted-foreground italic">
                <p>Additional references available upon request.</p>
              </div>
            </div>
            
            {/* Hobbies & Interests - New Section */}
            <div className="cv-section">
              <h3 className="cv-section-title">
                <Heart className="w-5 h-5 text-accent" />
                Hobbies & Interests
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                <div className="bg-secondary/50 rounded-lg p-3 text-center flex flex-col items-center gap-2 transition-all hover:bg-secondary">
                  <Globe className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Traveling</span>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-3 text-center flex flex-col items-center gap-2 transition-all hover:bg-secondary">
                  <Code className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Open Source</span>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-3 text-center flex flex-col items-center gap-2 transition-all hover:bg-secondary">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Learning</span>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-3 text-center flex flex-col items-center gap-2 transition-all hover:bg-secondary">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Volunteering</span>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-3 text-center flex flex-col items-center gap-2 transition-all hover:bg-secondary">
                  <Twitter className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Tech Twitter</span>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-3 text-center flex flex-col items-center gap-2 transition-all hover:bg-secondary">
                  <Briefcase className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Mentoring</span>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-3 text-center flex flex-col items-center gap-2 transition-all hover:bg-secondary">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Networking</span>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-3 text-center flex flex-col items-center gap-2 transition-all hover:bg-secondary">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">Hackathons</span>
                </div>
              </div>
            </div>
            
            {/* Languages */}
            <div className="cv-section">
              <h3 className="cv-section-title">
                <Globe className="w-5 h-5 text-accent" />
                Languages
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="cv-item">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">English</span>
                    <span className="text-sm text-muted-foreground">Fluent</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div className="cv-item">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">French</span>
                    <span className="text-sm text-muted-foreground">Intermediate</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div className="cv-item">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Kinyarwanda</span>
                    <span className="text-sm text-muted-foreground">Native</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div className="cv-item">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Swahili</span>
                    <span className="text-sm text-muted-foreground">Conversational</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <Button 
          onClick={handleDownloadPDF}
          className="download-button group"
          size="icon"
          aria-label="Download CV as PDF"
        >
          <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </Button>
      </div>
    </>
  );
};

export default CV;
