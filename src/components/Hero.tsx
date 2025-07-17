import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Information Science & Engineering Student';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-animated overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-float glow-primary bg-gradient-to-r from-primary to-accent"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 animate-float glow-accent bg-gradient-to-r from-accent to-primary" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Profile Image */}
          <img
            src="/images/profile.jpg" // or use a URL like "https://example.com/your-photo.jpg"
            alt="Srujan Belamgi"
            className="w-60 h-50 md:w-60 md:h-60 rounded-full object-cover border-4 border-primary shadow-lg hover:scale-105 transition-transform duration-300"
          />

          {/* Text and Buttons */}
          <div className="text-center md:text-center">
            <Badge className="mb-6 text-sm font-medium px-4 py-2 bg-gradient-to-r from-primary to-accent border-0 text-primary-foreground">
              Available for Opportunities
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text animate-glow">
                Srujan Belamgi
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-muted-foreground mb-4 h-8">
              {text}
              {isTyping && <span className="animate-pulse">|</span>}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent-glow transition-all duration-300 glow-primary hover-lift group"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center md:justify-center gap-6">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary hover:text-primary-foreground glow-primary"
                onClick={() =>
                  window.open('https://www.linkedin.com/in/srujan-belamgi-a3987b25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')
                }
              >
                <Linkedin className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary hover:text-primary-foreground glow-primary"
                onClick={() => window.open('https://github.com/srujan2704', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary hover:text-primary-foreground glow-primary"
                onClick={() => window.open('mailto:srujjanbelamgi@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection('about')}
          className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <ChevronDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
