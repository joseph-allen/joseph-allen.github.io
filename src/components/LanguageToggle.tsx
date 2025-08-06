import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-card rounded-full p-1 shadow-elegant">
      <Button
        size="sm"
        onClick={() => setLanguage("en")}
        className={clsx(
          "rounded-full text-base font-medium transition-all duration-300 flex items-center justify-center w-12 h-8",
          language === "en"
            ? "bg-blue-700 text-white hover:bg-blue-800"
            : "bg-transparent hover:bg-blue-100 text-blue-700"
        )}
      >
        <span className="text-lg">🇬🇧</span>
      </Button>

      <Button
        size="sm"
        onClick={() => setLanguage("ja")}
        className={clsx(
          "rounded-full text-base font-medium transition-all duration-300 flex items-center justify-center w-12 h-8",
          language === "ja"
            ? "bg-red-600 border-2 border-white text-white hover:bg-red-700"
            : "bg-transparent hover:bg-red-100 text-red-700"
        )}
      >
        <span className="text-lg">🇯🇵</span>
      </Button>
    </div>
  );
};

export default LanguageToggle;
