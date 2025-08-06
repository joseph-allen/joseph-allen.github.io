import { Twitter, Linkedin, Github, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-medium">Joseph Allen</p>
            <p className="text-primary-foreground/80">Front-End Developer</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/josephrossallen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>

            <a
              href="https://github.com/joseph-allen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Github className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Joseph Allen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
