import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  const { t, language } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Reactively update CV file based on language
  const cvFiles: Record<Language, string> = {
    en: "Joseph-Allen-CV.pdf",
    ja: "Joseph-Allen-CV-JP.pdf",
  };

  const cvFile = cvFiles[language];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-primary">
        <img
          src={"fuji2.jpg"}
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up [animation-delay:400ms]">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-floating"
            >
              <a href={cvFile} download>
                <Download className="mr-2 h-5 w-5" />
                {t("downloadCV")}
              </a>
            </Button>
          </div>

          <div className="animate-fade-in-up [animation-delay:600ms]">
            <Button
              variant="ghost"
              size="lg"
              onClick={scrollToAbout}
              className="text-primary animate-float"
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
