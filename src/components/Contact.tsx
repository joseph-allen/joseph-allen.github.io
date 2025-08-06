import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
          {t("contactTitle")}
        </h2>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 shadow-floating bg-gradient-card animate-scale-in">
            <form
              method="POST"
              action="https://formspree.io/f/mnnzgrbq"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="_subject"
                value="Contact request from personal website"
              />

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  {t("emailPlaceholder")}
                </label>
                <Input
                  id="email"
                  type="email"
                  name="_replyto"
                  placeholder={t("emailPlaceholder")}
                  className="transition-all duration-300 focus:shadow-glow"
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <MessageSquare className="w-4 h-4 text-accent" />
                  {t("messagePlaceholder")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("messagePlaceholder")}
                  rows={6}
                  className="transition-all duration-300 focus:shadow-glow resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full shadow-elegant hover:shadow-floating transition-all duration-300"
              >
                <Send className="mr-2 h-5 w-5" />
                {t("send")}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
