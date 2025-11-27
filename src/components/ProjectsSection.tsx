import { ExternalLink, ArrowRight } from "lucide-react";
import scienceClubImg from "@/assets/projects/science-club.png";
import artClubImg from "@/assets/projects/art-club.png";
import pendingImg from "@/assets/projects/pending-submissions.png";

const projects = [
  {
    id: 1,
    title: "NSS Science Club",
    category: "Poster Design",
    description: "About Us poster design for NIST College Science & Technology Club featuring vibrant illustrations and modern typography.",
    image: scienceClubImg,
    tags: ["Graphic Design", "Adobe Illustrator", "Branding"],
    link: "#",
  },
  {
    id: 2,
    title: "NSS Art Club",
    category: "Poster Design",
    description: "Creative introduction poster for NSS Arts & Crafts Club showcasing artistic elements and collage-style design.",
    image: artClubImg,
    tags: ["Graphic Design", "Creative Direction", "Typography"],
    link: "#",
  },
  {
    id: 3,
    title: "Ma Yatri Transport App",
    category: "Mobile Application",
    description: "A smart public transport app for Nepal that helps users find bus routes, track live locations, and plan journeys efficiently across the country.",
    image: pendingImg,
    tags: ["React Native", "UI/UX Design", "Mobile App"],
    link: "#",
  },
  {
    id: 4,
    title: "Poster Coming Soon",
    category: "Poster Design",
    description: "Creative poster design featuring bold typography and modern visual elements with a striking gradient background.",
    image: pendingImg,
    tags: ["Graphic Design", "Typography", "Visual Design"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">MY WORK</span>
          <h2 className="section-title mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work in development and design, from stunning visuals to functional applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-card overflow-hidden hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-primary text-sm font-medium">{project.category}</span>
                <h3 className="font-display font-bold text-xl mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
                >
                  View Project <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="#" className="btn-outline inline-flex items-center gap-2">
            View All Projects <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
