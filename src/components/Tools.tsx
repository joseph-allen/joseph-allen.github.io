import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const Tools = () => {
  const { t } = useLanguage();
  
  const toolCategories = [
    {
      category: t('programmingFrameworks'),
      tools: ['JavaScript', 'React', 'Next.js', 'TypeScript', 'Gatsby', 'Redux', 'StateX', 'Storybook', 'Python', 'Flask', 'Pandas', 'NumPy', 'Django']
    },
    {
      category: t('testingQA'),
      tools: ['Jest', 'React Testing Library', 'Cypress', 'Wraith']
    },
    {
      category: t('htmlcss'),
      tools: ['SCSS', 'LESS', 'CSS Modules', 'Styled Components', 'Material-UI', 'Tailwind CSS']
    },
    {
      category: t('databases'),
      tools: ['Firebase', 'PostgreSQL', 'MySQL', 'GraphQL', 'Netlify CMS', 'MongoDB']
    },
    {
      category: t('cloud'),
      tools: ['Google Cloud Platform', 'Amazon Web Services', 'Docker', 'Heroku', 'Vercel', 'Netlify']
    },
    {
      category: t('projectManagement'),
      tools: ['Scrum', 'Retrospectives', 'Sprint Planning', 'Jira', 'Trello', 'GitHub', 'PyDataMCR Organiser']
    }
  ];
  
  return (
    <section id="tools" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
          {t('toolsTitle')}
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolCategories.map((category, index) => (
              <Card 
                key={category.category} 
                className="p-6 shadow-elegant hover:shadow-floating transition-all duration-300 bg-gradient-card animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-lg font-semibold mb-4 text-accent">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <Badge 
                      key={tool} 
                      variant="secondary" 
                      className="text-xs py-1 px-2 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;