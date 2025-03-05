
import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download } from "lucide-react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from 'sonner';

// Import all section components
import CVHeader from './cv/CVHeader';
import CVSummary from './cv/CVSummary';
import CVSkills from './cv/CVSkills';
import CVExperience from './cv/CVExperience';
import CVEducation from './cv/CVEducation';
import CVCertifications from './cv/CVCertifications';
import CVProjects from './cv/CVProjects';
import CVReferences from './cv/CVReferences';
import CVHobbies from './cv/CVHobbies';
import CVLanguages from './cv/CVLanguages';

const CV = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!cvRef.current) return;
    
    toast.loading('Generating PDF...');
    
    try {
      // Create a clone of the CV element to modify for PDF rendering
      const cvElement = cvRef.current;
      const clone = cvElement.cloneNode(true) as HTMLElement;
      
      // Apply PDF-specific styling to the clone
      clone.style.width = '210mm'; // A4 width
      clone.style.backgroundColor = 'white';
      clone.style.position = 'absolute';
      clone.style.top = '-9999px';
      clone.style.left = '-9999px';
      document.body.appendChild(clone);
      
      // High quality HTML2Canvas configuration
      const canvas = await html2canvas(clone, {
        scale: 3, // Higher scale for better quality
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff',
        imageTimeout: 0,
        windowWidth: 1200,
      });
      
      // Remove the clone after capturing
      document.body.removeChild(clone);
      
      // Generate the PDF with higher quality
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      
      // Use A4 size
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      // Add image to PDF at maximum quality
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate aspect ratio to fit the content properly
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Split into multiple pages if content is too long
      let heightLeft = imgHeight;
      let position = 0;
      let page = 1;
      
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pageHeight;
      
      // Add additional pages if content doesn't fit on one page
      while (heightLeft >= 0) {
        position = -pageHeight * page;
        page++;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pageHeight;
      }
      
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
            <CVHeader />
            
            <Separator className="my-6" />
            
            {/* Summary */}
            <CVSummary />
            
            {/* Skills */}
            <CVSkills />
            
            {/* Experience */}
            <CVExperience />
            
            {/* Education */}
            <CVEducation />

            {/* Certifications */}
            <CVCertifications />
            
            {/* Projects */}
            <CVProjects />
            
            {/* References */}
            <CVReferences />
            
            {/* Hobbies & Interests */}
            <CVHobbies />
            
            {/* Languages */}
            <CVLanguages />
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
