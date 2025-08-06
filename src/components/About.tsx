import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
            {t("aboutTitle")}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 shadow-elegant bg-gradient-card">
              <h3 className="font-display text-xl font-semibold mb-4 text-primary">
                {t("careerObjective")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("careerObjectiveText")}
              </p>
            </Card>
            <div className="space-y-4">
              {t("aboutText")
                .split("\n")
                .map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
