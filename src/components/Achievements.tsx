import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Target, Users, TrendingUp } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      title: 'Runner Up - Cisco Forecast League India FY-2025',
      description: 'Competed against over 300 teams across India in a prestigious forecasting competition',
      details: [
        'Leveraged data packs using machine learning models to perform mid-term analysis of the world economy',
        'Achieved an impressive forecasting accuracy of 94%',
        'Demonstrated expertise in economic modeling and predictive analytics',
        'Collaborated with team members to develop innovative forecasting strategies'
      ],
      icon: Trophy,
      category: 'Competition',
      year: '2025',
      impact: 'National Recognition',
      metrics: {
        'Teams Competed': '400+',
        'Accuracy': '94%',
        'Rank': 'Runner Up'
      }
    },
    {
      title: 'IEEE Communication Society(BMSCE) -Joint Secretary',
      description: 'Active leadership role in a technical club focused on telecommunications and networking technologies',
      details: [
        'Coordinate club activities and promote member engagement across technical initiatives',
        'Facilitate collaborations with industry and academic partners',
        'Organize hackathons, workshops, and networking events',
        'Assist in administrative duties to ensure effective operation of the organization',
        'Mentor junior members in technical skills and career development'
      ],
      icon: Users,
      category: 'Leadership',
      year: '2024-25',
      impact: 'Community Building',
      metrics: {
        'Members': '100+',
        'Events': '20+',
        'Partnerships': '5+'
      }
    },
   
   
  ];

  const getCategoryBadge = (category: string) => {
    const styles = {
      'Competition': 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0',
      'Leadership': 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0',
      'Academic': 'bg-gradient-to-r from-green-500 to-teal-500 text-white border-0'
    };
    return styles[category as keyof typeof styles] || 'bg-primary text-primary-foreground border-0';
  };

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition for excellence in competitions, and leadership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={index} 
                className="glass hover-lift animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge className={getCategoryBadge(achievement.category)}>
                          {achievement.category}
                        </Badge>
                        <Badge variant="outline" className="border-primary/20 text-primary">
                          {achievement.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {achievement.details.slice(0, 3).map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                    {Object.entries(achievement.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold gradient-text">{value}</div>
                        <div className="text-xs text-muted-foreground">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Impact Level</span>
                      <Badge variant="outline" className="border-accent/20 text-accent">
                        {achievement.impact}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 animate-slide-up">
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Achievement Summary</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: 'Competition Wins', value: '2+', description: 'National & Regional' },
                { label: 'Academic Excellence', value: '97%+', description: 'Consistent Performance' },
                { label: 'Leadership Roles', value: '3+', description: 'Technical & Academic' },
                { label: 'Recognition Level', value: 'National', description: 'Cisco Competition' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-foreground font-medium mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}