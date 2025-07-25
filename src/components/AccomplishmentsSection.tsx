import { useState } from 'react';
import { Trophy, Star, Code, Users, Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const AccomplishmentsSection = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const accomplishments = [
    // Hackathons
    {
      id: 1,
      title: 'Inventron 2K23',
      description: 'Developed a healthcare assistant that suggests home remedies based on user-provided symptoms.',
      category: 'hackathon',
      tags: ['Chatbot', 'Mobile Dev', 'Team Lead'],
      icon: Trophy,
      year: '2023',
      achievement: 'Runner-up'
    },
    {
      id: 2,
      title: 'Zignasa 2K24',
      description: 'Built a web-based real estate platform enabling seamless interaction between property buyers and sellers.',
      category: 'hackathon',
      tags: ['Web Dev', 'Full Stack', 'Python', 'Team Lead'],
      icon: Trophy,
      year: '2024',
      achievement: 'Winner'
    },
    // Projects
    {
      id: 3,
      title: 'J.A.R.V.I.S Assistant',
      description: 'Built a personal AI assistant for my laptop using Python during my first year of engineering.',
      category: 'project',
      tags: ['Python', 'AI', 'API'],
      icon: Code,
      year: '2022-23',
      githubUrl: 'https://github.com/VigneshGoli/JARVIS-AI-Voice-Assistant'
    },
    {
      id: 4,
      title: 'JustVote: Online Election System',
      description: 'Developed an online election platform enabling secure and transparent voting for organizations and institutions.',
      category: 'project',
      tags: ['Web Dev', 'DBMS', 'SE'],
      icon: Code,
      year: '2024',
      githubUrl: 'https://github.com/VigneshGoli/JustVote-Online-Election-System'
    },
    {
      id: 5,
      title: 'RideMate: Ride Sharing Platform',
      description: 'Developed a web app to connect drivers offering spare seats with passengers seeking rides.',
      category: 'project',
      tags: ['Flutter', 'BaaS', 'UI/UX'],
      icon: Code,
      year: '2025',
      githubUrl: 'https://github.com/VigneshGoli/RideMate-Ride-Sharing-App'
    },
    // Campus Engagement
    {
      id: 6,
      title: 'APEX Game Dev Club Vice-President',
      description: 'Led a team of 30+ E-Sports and Game Dev Enthusiasts and organized Workshops.',
      category: 'campus',
      tags: ['Leadership', 'Community', 'Events'],
      icon: Users,
      year: '',
      achievement: 'Vice-President'
    },
    {
      id: 7,
      title: 'Centre for Innovation and Entrepreneurship',
      description: 'Actively contributed as a member of the Centre for Innovation and Entrepreneurship (CIE), supporting various initiatives such as hackathons, workshops, and entrepreneurial events.',
      category: 'campus',
      tags: ['Innovation', 'Entrepreneurship', 'Community'],
      icon: Users,
      year: '',
      achievement: 'Member'
    }
  ];

  const categories = [
    { id: 'all', label: 'All', count: accomplishments.length },
    { id: 'hackathon', label: 'Hackathons', count: accomplishments.filter(a => a.category === 'hackathon').length },
    { id: 'project', label: 'Projects', count: accomplishments.filter(a => a.category === 'project').length },
    { id: 'campus', label: 'Campus Engagement', count: accomplishments.filter(a => a.category === 'campus').length },
  ];

  const filteredAccomplishments = filter === 'all' 
    ? accomplishments 
    : accomplishments.filter(a => a.category === filter);

  return (
    <section id="accomplishments" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Accomplishments
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones, achievements, and recognitions that mark my journey in tech
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-rajdhani font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-cyber text-primary-foreground'
                  : 'glass cyber-border text-foreground hover:bg-gradient-cyber/20'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Accomplishments Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccomplishments.map((accomplishment, index) => (
            <Card
              key={accomplishment.id}
              className="group glass cyber-border hover:scale-105 transition-all duration-300 transform-3d relative overflow-hidden"
              onMouseEnter={() => setHoveredCard(accomplishment.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Content */}
              <div className="relative">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-cyber/20 w-20 h-20 flex items-center justify-center">
                    <accomplishment.icon className="text-primary animate-pulse" size={32} />
                  </div>
                  <CardTitle className="text-xl font-orbitron font-bold text-foreground">
                    {accomplishment.title}
                  </CardTitle>
                  {accomplishment.year && (
                    <div className="flex items-center justify-center gap-2 text-secondary font-rajdhani font-semibold">
                      <Calendar size={16} />
                      {accomplishment.year}
                    </div>
                  )}
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed text-center">
                    {accomplishment.description}
                  </p>
                  
                  {accomplishment.achievement && (
                    <div className="text-center">
                      <Badge className="bg-gradient-cyber text-primary-foreground font-rajdhani font-semibold">
                        {accomplishment.achievement}
                      </Badge>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {accomplishment.tags.map((tag) => (
                      <Badge 
                        key={tag}
                        variant="outline"
                        className="text-xs border-primary/50 text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* GitHub Button for Projects */}
                  {accomplishment.githubUrl && (
                    <div className="flex justify-center mt-4">
                      <a href={accomplishment.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="group/btn bg-transparent border-2 border-primary text-primary hover:bg-gradient-cyber hover:text-primary-foreground hover:border-transparent transition-all duration-300">
                          <span className="flex items-center gap-2">
                            <Github size={16} />
                            GitHub
                            <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        </Button>
                      </a>
                    </div>
                  )}
                </CardContent>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Calendar = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export default AccomplishmentsSection;