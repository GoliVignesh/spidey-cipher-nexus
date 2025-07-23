import { useState } from 'react';
import { Trophy, Star, Code, Users, Award, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AccomplishmentsSection = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const accomplishments = [
    {
      id: 1,
      title: 'Smart City Hackathon Winner',
      description: 'Developed an AI-powered traffic management system that reduces congestion by 35%.',
      category: 'hackathon',
      tags: ['AI/ML', 'IoT', 'Python', 'Team Lead'],
      icon: Trophy,
      year: '2024',
      achievement: '1st Place'
    },
    {
      id: 2,
      title: 'Open Source Contributor',
      description: 'Active contributor to major React libraries with 50+ merged PRs and 1000+ GitHub stars.',
      category: 'project',
      tags: ['React', 'Open Source', 'JavaScript'],
      icon: Code,
      year: '2023-24',
      achievement: '50+ PRs'
    },
    {
      id: 3,
      title: 'Google Developer Student Club Lead',
      description: 'Led a team of 30+ developers, organized 15+ tech events, and mentored 100+ students.',
      category: 'leadership',
      tags: ['Leadership', 'Community', 'Events'],
      icon: Users,
      year: '2023-24',
      achievement: 'Team of 30+'
    },
    {
      id: 4,
      title: 'Best Innovation Award',
      description: 'Created a blockchain-based voting system for college elections ensuring transparency.',
      category: 'award',
      tags: ['Blockchain', 'Web3', 'Innovation'],
      icon: Award,
      year: '2024',
      achievement: 'College Level'
    },
    {
      id: 5,
      title: 'CodeChef 4-Star Coder',
      description: 'Achieved 4-star rating on CodeChef with consistent performance in competitive programming.',
      category: 'competitive',
      tags: ['DSA', 'Competitive Programming', 'Problem Solving'],
      icon: Star,
      year: '2023',
      achievement: '4-Star Rating'
    },
    {
      id: 6,
      title: 'Tech Conference Speaker',
      description: 'Delivered keynote on "Future of Web Development" at regional tech conference.',
      category: 'speaking',
      tags: ['Public Speaking', 'Web Dev', 'Technology'],
      icon: Zap,
      year: '2024',
      achievement: 'Keynote Speaker'
    }
  ];

  const categories = [
    { id: 'all', label: 'All', count: accomplishments.length },
    { id: 'hackathon', label: 'Hackathons', count: accomplishments.filter(a => a.category === 'hackathon').length },
    { id: 'project', label: 'Projects', count: accomplishments.filter(a => a.category === 'project').length },
    { id: 'leadership', label: 'Leadership', count: accomplishments.filter(a => a.category === 'leadership').length },
    { id: 'award', label: 'Awards', count: accomplishments.filter(a => a.category === 'award').length },
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
              {/* Flip Card Effect */}
              <div className={`transition-transform duration-700 ${
                hoveredCard === accomplishment.id ? 'rotate-y-180' : ''
              }`}>
                
                {/* Front of Card */}
                <div className="relative">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-cyber/20 w-20 h-20 flex items-center justify-center">
                      <accomplishment.icon className="text-primary animate-pulse" size={32} />
                    </div>
                    <CardTitle className="text-xl font-orbitron font-bold text-foreground">
                      {accomplishment.title}
                    </CardTitle>
                    <div className="flex items-center justify-center gap-2 text-secondary font-rajdhani font-semibold">
                      <Calendar size={16} />
                      {accomplishment.year}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed text-center">
                      {accomplishment.description}
                    </p>
                    
                    <div className="text-center">
                      <Badge className="bg-gradient-cyber text-primary-foreground font-rajdhani font-semibold">
                        {accomplishment.achievement}
                      </Badge>
                    </div>
                    
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
                  </CardContent>
                </div>
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