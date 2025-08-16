import { useAuth } from '@/hooks/useAuth';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, ExternalLink, Download, LogOut } from 'lucide-react';

const Portfolio = () => {
  const { user, signOut } = useAuth();
  const heroRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const skillsRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const experienceRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'Java',
    'SQL', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Git',
    'REST APIs', 'GraphQL', 'Tailwind CSS', 'Material-UI'
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      tech: ['React', 'Socket.io', 'MongoDB', 'Express'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and analytics',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: '#',
      demo: '#'
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Developed and maintained web applications using React, Node.js, and PostgreSQL'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2021 - 2022',
      description: 'Created responsive web interfaces and collaborated with design teams'
    },
    {
      title: 'Software Engineer Intern',
      company: 'StartupXYZ',
      period: '2020 - 2021',
      description: 'Assisted in building mobile applications and API integrations'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold gradient-text">Portfolio</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome, {user?.user_metadata?.full_name || user?.email}</span>
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="scroll-fade-in py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Full Stack Developer & Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions and building scalable applications 
              that make a difference. I love turning complex problems into simple, beautiful designs.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="hover-glow">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="hover-glow">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" className="hover-glow">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-glow">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-glow">
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="scroll-fade-in py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Me</h2>
          <Card className="glass-card hover-glow">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate full-stack developer with over 3 years of experience building 
                web applications and solving complex technical challenges. I specialize in React, 
                Node.js, and cloud technologies, with a strong focus on user experience and 
                performance optimization.
              </p>
              <Separator className="my-6" />
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="space-y-2">
                    <p className="font-medium">Bachelor of Computer Science</p>
                    <p className="text-muted-foreground">University Name, 2020</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Interests</h3>
                  <p className="text-muted-foreground">
                    Open source contributions, machine learning, mobile development, 
                    and exploring new technologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="scroll-fade-in py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="text-sm py-2 px-4 hover-glow transition-all duration-300 hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="scroll-fade-in py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card hover-glow group">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="scroll-fade-in py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="glass-card hover-glow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="scroll-fade-in py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="hover-glow">
              <Mail className="w-4 h-4 mr-2" />
              Email Me
            </Button>
            <Button variant="outline" size="lg" className="hover-glow">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="hover-glow">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">
            © 2024 John Doe. Built with React & Supabase.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;