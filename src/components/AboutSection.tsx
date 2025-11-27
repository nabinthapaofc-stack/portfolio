import { Code2, Palette, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with modern best practices.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Crafting visually stunning interfaces that captivate users.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Finding innovative solutions to complex challenges.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Delivering high-quality projects on time, every time.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="text-primary font-medium mb-4 block">ABOUT ME</span>
            <h2 className="section-title mb-6">
              Turning Ideas Into <span className="gradient-text">Digital Reality</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate developer and designer based in Nepal, specializing in creating 
              beautiful, functional web applications and stunning visual designs. With expertise 
              in both frontend development and graphic design, I bridge the gap between aesthetics 
              and functionality.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From designing eye-catching posters for student clubs to building full-stack 
              applications like the Ma Yatri transport app, I thrive on bringing creative 
              visions to life through code and design.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div>
                <span className="text-4xl font-display font-bold gradient-text">1+</span>
                <p className="text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <span className="text-4xl font-display font-bold gradient-text">10+</span>
                <p className="text-muted-foreground mt-1">Projects Completed</p>
              </div>
              <div>
                <span className="text-4xl font-display font-bold gradient-text">5+</span>
                <p className="text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
