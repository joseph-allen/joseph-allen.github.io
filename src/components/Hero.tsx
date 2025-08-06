import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, FileText } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-primary">
        <img
          src={"fuji2.jpg"} // Replace with your hero image path
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-accent opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-black mb-6 animate-fade-in-up">
            {t("heroTitle")}
          </h1>
          <p className="text-xl md:text-2xl text-black/90 mb-4 animate-fade-in-up [animation-delay:200ms]">
            {t("heroSubtitle")}
          </p>
          {/* <div className="text-primary-foreground/80 mb-8 animate-fade-in-up [animation-delay:300ms]">
            <p className="text-sm">
              <span className="font-medium">LINKEDIN:</span> {t("portfolio")}
            </p>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up [animation-delay:400ms]">
            <a
              href="/files/Joseph-Allen-CV.pdf" // Update this path to match your actual file location
              download
            >
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-floating"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
          </div>

          <div className="animate-fade-in-up [animation-delay:600ms]">
            <Button
              variant="ghost"
              size="lg"
              onClick={scrollToAbout}
              className="text-primary  animate-float"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
