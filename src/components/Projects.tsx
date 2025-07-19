import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, BarChart3, Timer, Users, TrendingUp, Film } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Customer Churn Prediction',
      description: 'Built and optimized a machine learning model to predict customer churn using historical data, achieving high prediction accuracy.',
      longDescription: 'Developed a comprehensive machine learning solution for customer churn prediction that helps businesses identify at-risk customers and implement retention strategies.',
      features: [
        'Performed data preprocessing, feature engineering, model training, hyperparameter tuning, and evaluation',
        'Delivered actionable insights to support customer retention and reduce revenue loss',
        'Implemented advanced ML algorithms including Random Forest, XGBoost, and Neural Networks',
        'Created interactive dashboards for business stakeholders'
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Machine Learning', 'Data Analysis'],
      githubLink: 'https://github.com/srujan2704/customer_churn_prediction', // GitHub link for Customer Churn
      icon: BarChart3,
      category: 'Machine Learning',
      status: 'Completed',
      metrics: {
        accuracy: '94%',
        impact: 'High'
      }
    },
    {
      title: 'ClearPlot: A Real Estate Marketplace',
      description: 'A platform where users can seamlessly buy, sell, or rent properties with detailed filters and smart price insights. Integrated with ML models (Random Forest & XGBoost) to predict accurate property prices',
      longDescription: 'Advanced research project developing protocols and frameworks for multi-agent AI systems to collaborate effectively in real-world scenarios.',
      features: [
        'Implemented features including property listing with detailed inputs and a searchable dashboard for user management',
        'Designed a responsive search system with filters for price range, property type, and location to enhance user experience',
        'Integrated Machine Learning models (Random Forest and XGBoost) to predict accurate property prices, enhancing user decision-making.'
       
      ],
      technologies: ['Python', 'Machine Learning', 'React', 'MongoDB', 'Tailwind CSS'],
      githubLink: 'https://github.com/srujan2704/clearplot', // Existing link
      icon: Users,
      category: 'Full Stack Development',
      status: 'Completed',
      metrics: {
        performance: '95%',
        impact: 'High'
      }
    },
    {
      title: 'Blood Bank System',
      description: 'A web-based platform for managing blood donations, allowing donor registration, receiver blood search by group, and admin tracking of donors and receivers, with donation awareness information.',
      longDescription: 'Developed a blood bank management system to streamline donor registration, blood requests, and inventory management, enhancing accessibility and transparency in blood donation processes.',
      features: [
        'User registration for donors with detailed profile management',
        'Receiver search for donors by blood group and need specification',
        'Admin panel to track donor and receiver statistics',
        'Blood donation awareness information and campaigns'
      ],
      technologies: ['PHP', 'MySQL', 'XAMPP', 'HTML', 'CSS', 'Bootstrap'],
      githubLink: 'https://github.com/srujan2704/blood_bank_system', // Replace with actual GitHub link
      icon: TrendingUp,
      category: 'Web Development',
      status: 'Completed',
      metrics: {
        efficiency: '90%',
        impact: 'High'
      }
    },
    {
  title: 'MovieSpot',
  description: 'An Android app leveraging the TMDB API to allow users to browse, search, and filter movies by genre and year, discover personalized recommendations, and view detailed movie ratings, cast, crew, and descriptions.',
  longDescription: 'Developed a feature-rich Android application for movie enthusiasts, integrating the TMDB API to provide seamless access to a vast movie database with robust search, filtering, and discovery functionalities.',
  features: [
    'Search and filter movies by genres (e.g., action, comedy) and release year',
    'Discover movies with personalized recommendations based on genre and year',
    'View detailed movie information, including ratings, cast, and crew',
    'Responsive UI for an optimal mobile experience'
  ],
  technologies: ['Kotlin', 'Android SDK', 'TMDB API', 'Jetpack Compose'],
  githubLink: 'https://github.com/srujan2704/moviespot', // Replace with actual GitHub link
  icon: Film,
  category: 'Mobile Development',
  status: 'Completed',
  metrics: {
    engagement: '85%',
    impact: 'Medium'
  }
  },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return <Badge className="bg-accent text-accent-foreground border-0">Completed</Badge>;
      case 'In Progress':
        return <Badge className="bg-primary text-primary-foreground border-0">In Progress</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <section id="projects" className="py-10 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions across AI, web development, and research
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="glass hover-lift animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-accent group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl mb-2">{project.title}</CardTitle>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="outline" className="text-xs">
                            {project.category}
                          </Badge>
                          {getStatusBadge(project.status)}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 text-sm sm:text-base">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Metrics */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-border/50 gap-4">
                    <div className="flex gap-4 text-sm">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-primary font-semibold">{value}</div>
                          <div className="text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      {project.githubLink && (
                        <Button 
                          size="sm"
                          className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent-glow transition-all duration-300 w-full sm:w-auto"
                          onClick={() => window.open(project.githubLink, '_blank')}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16 animate-slide-up">
          <div className="glass p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-4">More Projects Coming Soon</h3>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              I'm constantly working on new and exciting projects. Check out my GitHub for the latest updates 
              and contributions to open-source projects.
            </p>
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent-glow transition-all duration-300 glow-primary w-full sm:w-auto"
              onClick={() => window.open('https://github.com/srujan2704', '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
