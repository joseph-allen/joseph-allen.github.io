import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      name: "RoadAI",
      description: t("roadaiDesc"),
      tags: [
        "React",
        "Next.js",
        "TypeScript",
        "Python",
        "Django",
        "PostgreSQL",
      ],
      type: t("aiml"),
      image: "RoadAI.PNG",
    },
    {
      name: "moreliquid",
      description: t("moreliquidDesc"),
      tags: ["Webflow", "Gatsby", "React", "Web3"],
      type: t("fintech"),
      image: "moreliquid.JPG",
    },
    {
      name: "BilliDrop",
      description: t("billidropDesc"),
      tags: ["Next.js", "TypeScript", "Vercel", "Jest"],
      type: t("ecommerce"),
      image: "BD.PNG",
    },
    {
      name: "Anattic",
      description: t("paragonDesc"),
      tags: ["React", "Redux", "Firebase", "Prisma", "Team Leadership"],
      type: t("videoproduction"),
      image: "Anattic.PNG",
    },
    {
      name: "Ortom",
      description: t("ortomDesc"),
      tags: ["React", "Gatsby", "GraphQL", "Netlify CMS", "SCSS"],
      type: t("corporatewebsite"),
      image: "Ortom.PNG",
    },
    {
      name: "Red Meters",
      description: t("redmetersDesc"),
      tags: ["React", "Python", "Pandas", "Scikit-learn", "TensorFlow"],
      type: t("datascience"),
      image: "RM.min.jpeg",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
          {t("projectsTitle")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.name}
              className="overflow-hidden shadow-elegant hover:shadow-floating transition-all duration-300 bg-gradient-card group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-muted/20 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 6).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 6 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tags.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
