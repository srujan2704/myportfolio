import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail,  ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/srujan-belamgi-a3987b25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      description: 'Professional network'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/srujan2704',
      description: 'Code repositories'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:srujjanbelamgi@gmail.com',
      description: 'Direct contact'
    }
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold gradient-text mb-3">Srujan Belamgi</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Information Science & Engineering Student passionate about AI, machine learning, 
                and building innovative solutions that make a real-world impact.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="border-primary/20 text-primary">
                Available for Opportunities
              </Badge>
              <Badge variant="outline" className="border-accent/20 text-accent">
                Open Source Contributor
              </Badge>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    className="rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
                    onClick={() => window.open(social.url, '_blank')}
                    title={social.description}
                  >
                    <IconComponent className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-muted-foreground">Email:</span>
                <br />
                <a 
                  href="mailto:srujjanbelamgi@gmail.com" 
                  className="text-primary hover:text-primary-glow transition-colors"
                >
                  srujjanbelamgi@gmail.com
                </a>
              </div>
              
              <div>
                <span className="text-muted-foreground">Location:</span>
                <br />
                <span className="text-foreground">Bengaluru, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Srujan Belamgi</span>
              
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}