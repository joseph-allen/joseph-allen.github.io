import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin } from 'lucide-react';

const Experience = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      id: 'avocadogreen',
      period: `September 2018 – ${t('current')}`,
      company: 'AvocadoGreen Ltd.',
      role: t('avocadogreenRole'),
      description: t('avocadogreenDesc'),
      location: t('location'),
      tools: 'React, Next.js, TypeScript, Python, Django, Firebase'
    },
    {
      id: 'nbrown',
      period: 'March 2022 – September 2022',
      company: 'N Brown PLC',
      role: t('nbrownRole'),
      description: t('nbrownDesc'),
      location: t('location'),
      tools: 'React, Next.js, TypeScript, Redux, Storybook, Jest, Cypress'
    },
    {
      id: 'manchester',
      period: 'September 2020 – March 2022',
      company: t('universityName'),
      role: t('manchesterRole'),
      description: t('manchesterDesc'),
      location: t('location'),
      tools: 'React, Python, R, Git, Matplotlib, Twitter API'
    },
    {
      id: 'laterooms',
      period: 'December 2015 – March 2018',
      company: 'Laterooms.com',
      role: t('lateroomsRole'),
      description: t('lateroomsDesc'),
      location: t('location'),
      tools: 'React, Node.js, Python, Pandas, NumPy, SQL, Docker, GCP'
    }
  ];
  
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
          {t('experienceTitle')}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-elegant hidden md:block"></div>
                
                <Card className="ml-0 md:ml-20 p-6 shadow-elegant hover:shadow-floating transition-all duration-300 bg-gradient-card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-1">{exp.company}</h3>
                      <p className="text-accent font-medium mb-2">{exp.role}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <Badge variant="secondary" className="w-fit">
                        <CalendarDays className="w-3 h-3 mr-1" />
                        {exp.period}
                      </Badge>
                      <Badge variant="outline" className="w-fit">
                        <MapPin className="w-3 h-3 mr-1" />
                        {exp.location}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-3">{exp.description}</p>
                  {exp.tools && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.split(', ').map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;