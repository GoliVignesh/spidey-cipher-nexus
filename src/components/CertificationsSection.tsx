import { ExternalLink, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const CertificationsSection = () => {
  const certifications = [{
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    description: 'Demonstrated cloud fluency and foundational AWS knowledge',
    credentialUrl: 'https://www.credly.com/badges/94093498-d92b-489d-9d2c-e0edff46ecc7/linked_in_profile',
    logo: '/lovable-uploads/2ff2d55b-8b7c-4b72-b0ab-87da310872a1.png'
  }, {
    title: 'Smart Coder',
    issuer: 'Smart Interviews',
    date: '2025',
    description: 'Mastered core programming concepts, data structures, and problem-solving techniques through hands-on coding practice.',
    credentialUrl: 'https://smartinterviews.in/certificate/a27838fc',
    logo: '/lovable-uploads/bbde1973-8bf8-45a9-810a-c230a7fbe877.png'
  }, {
    title: 'Foundations of Cyber Security',
    issuer: 'Google',
    date: '2024',
    description: 'Recognized core skills and knowledge needed to become a cybersecurity analyst.',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/M8TK8ZZKUJKK',
    logo: '/lovable-uploads/b2452f14-3cb3-4a0a-a4ce-b68145c973b8.png'
  }, {
    title: 'Programming in Java',
    issuer: 'NPTEL',
    date: '2024',
    description: 'Gained a strong foundation in object-oriented programming, exception handling, and core Java principles through structured coursework.',
    credentialUrl: 'https://drive.google.com/file/d/1BbCTTimNiASQvGptqfcHiba3MEenCt5F/view?usp=sharing',
    logo: '/lovable-uploads/4145eb7d-de58-4c42-9808-19028f7261f2.png'
  }, {
    title: 'Programming, Data Structures and Algorithms using Python',
    issuer: 'NPTEL',
    date: '2024',
    description: 'Developed a solid grasp of Python programming, algorithmic thinking, and key data structures through rigorous hands-on problem solving.',
    credentialUrl: 'https://drive.google.com/file/d/1S6D1ZjzxZRgfPTDF33G0iv45DUSYWDoQ/view?usp=sharing',
    logo: '/lovable-uploads/bf3fd051-1598-4d64-97b7-5d565bc86ef8.png'
  }, {
    title: 'Prompt Engineering for Everyone',
    issuer: 'IBM',
    date: '2024',
    description: 'Learned the fundamentals of prompt design to effectively interact with AI systems and enhance outcomes using large language models.',
    credentialUrl: 'https://courses.cognitiveclass.ai/certificates/7b4e2153d1d743dcbec1734a63dabe35',
    logo: '/lovable-uploads/7cbe6277-23de-4e83-b737-97907e26c282.png'
  }];
  return <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Professional certifications that validate my expertise and commitment to continuous learning</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => <Card key={cert.title} className="group glass cyber-border hover:scale-105 transition-all duration-300 transform-3d" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <CardHeader className="relative overflow-hidden">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img src={cert.logo} alt={`${cert.issuer} logo`} className="w-10 h-10 object-contain" />
                  </div>
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
                
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full group/btn bg-transparent border-2 border-primary text-primary hover:bg-gradient-cyber hover:text-primary-foreground hover:border-transparent transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <Award size={16} />
                      View Credential
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </a>
              </CardContent>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg pointer-events-none" />
            </Card>)}
        </div>
      </div>
    </section>;
};
export default CertificationsSection;