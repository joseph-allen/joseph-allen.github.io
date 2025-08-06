import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, CalendarDays, MapPin } from 'lucide-react';

const Education = () => {
  const { t } = useLanguage();
  
  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
          {t('educationTitle')}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-floating bg-gradient-card animate-scale-in">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2">
                      {t('universityName')}
                    </h3>
                    <p className="text-accent font-medium mb-3">
                      {t('degree')}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant="secondary" className="w-fit">
                      <CalendarDays className="w-3 h-3 mr-1" />
                      {t('graduated')}
                    </Badge>
                    <Badge variant="outline" className="w-fit">
                      <MapPin className="w-3 h-3 mr-1" />
                      {t('location')}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {t('educationDesc')}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;