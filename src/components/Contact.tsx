import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Linkedin, Github, Send, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'srujjanbelamgi@gmail.com',
      action: () => window.open('mailto:srujjanbelamgi@gmail.com', '_blank')
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, India',
      action: () => {}
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/srujan-belamgi',
      action: () => window.open('https://www.linkedin.com/in/srujan-belamgi-a3987b25b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_responses')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (error) throw error;

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a tech chat!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">Let's Start a Conversation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always interested in discussing new opportunities, innovative projects, 
                or collaborating with like-minded individuals. Whether you're looking for a 
                developer, researcher, or just want to chat about technology, feel free to reach out!
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge className="bg-primary/10 text-primary border-primary/20">Available for Internships</Badge>
                <Badge className="bg-accent/10 text-accent border-accent/20">Open to Collaboration</Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20">Research Opportunities</Badge>
              </div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index} 
                    className="glass hover-lift cursor-pointer group"
                    onClick={info.action}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{info.label}</div>
                          <div className="font-medium text-foreground">{info.value}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Connect on Social Media</h4>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  onClick={() => window.open('https://linkedin.com/in/srujan-belamgi', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  onClick={() => window.open('https://github.com/srujan2704', '_blank')}
                >
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-border/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me more about your project, opportunity, or just say hello!"
                      rows={6}
                      required
                      className="border-border/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent-glow transition-all duration-300 glow-primary hover-lift group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16 animate-slide-up">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on challenging projects and learn from experienced professionals. 
              Let's build something amazing together!
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent-glow transition-all duration-300 glow-primary"
              onClick={() => window.open('mailto:srujjanbelamgi@gmail.com?subject=Collaboration Opportunity', '_blank')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}