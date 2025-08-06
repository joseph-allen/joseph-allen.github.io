import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-display font-semibold text-xl tracking-tight">
            {t('heroTitle')}
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'experience', 'projects', 'tools', 'education', 'contact'].map((section) => (
              <Button
                key={section}
                variant="ghost"
                onClick={() => scrollToSection(section)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {t(section)}
              </Button>
            ))}
          </div>
          
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;