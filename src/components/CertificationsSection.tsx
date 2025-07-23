import { ExternalLink, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: '2024',
      description: 'Demonstrated proficiency in developing and maintaining applications on the AWS platform.',
      credentialUrl: '#',
      logo: '☁️'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      description: 'Advanced React development skills including hooks, context, and performance optimization.',
      credentialUrl: '#',
      logo: '⚛️'
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM',
      date: '2023',
      description: 'Comprehensive training in Python programming for data analysis and machine learning.',
      credentialUrl: '#',
      logo: '🐍'
    },
    {
      title: 'Google Cloud Platform Fundamentals',
      issuer: 'Google Cloud',
      date: '2024',
      description: 'Core GCP services and cloud computing fundamentals.',
      credentialUrl: '#',
      logo: '☁️'
    },
    {
      title: 'Cybersecurity Fundamentals',
      issuer: 'Cisco',
      date: '2023',
      description: 'Essential cybersecurity concepts and best practices for secure development.',
      credentialUrl: '#',
      logo: '🔒'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University',
      date: '2024',
      description: 'Advanced machine learning algorithms and applications.',
      credentialUrl: '#',
      logo: '🤖'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="group glass cyber-border hover:scale-105 transition-all duration-300 transform-3d"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="relative overflow-hidden">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-4xl">{cert.logo}</div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    {cert.date}
                  </div>
                </div>
                <CardTitle className="text-xl font-rajdhani font-bold text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
                <div className="text-sm font-semibold text-secondary">
                  {cert.issuer}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                <Button 
                  className="w-full group/btn bg-transparent border-2 border-primary text-primary hover:bg-gradient-cyber hover:text-primary-foreground hover:border-transparent transition-all duration-300"
                  onClick={() => window.open(cert.credentialUrl, '_blank')}
                >
                  <span className="flex items-center gap-2">
                    <Award size={16} />
                    View Credential
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;