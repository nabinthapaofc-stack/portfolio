const skillCategories = [
  {
    title: "Development",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3",],
  },
  {
    title: "Design",
    skills: [ "Figma", "Canva", "UI/UX Design", "Poster Design", "Branding"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "VS Code", "Responsive Design", "SEO"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">EXPERTISE</span>
          <h2 className="section-title mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit spanning development and design, allowing me to bring complete visions to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="glass-card p-8 hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <h3 className="font-display font-bold text-xl mb-6 gradient-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-pill"
                    style={{ animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="glass-card inline-block px-8 py-6 max-w-2xl">
            <p className="text-muted-foreground">
              <span className="text-foreground font-semibold">Always learning.</span>{" "}
              I'm constantly expanding my skill set and staying up-to-date with the latest 
              technologies and design trends to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
