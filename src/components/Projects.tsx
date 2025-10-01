import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import cognifyImg from '../assets/cognify.png';
import smartcityImg from '../assets/cityfux.png';
import billingImg from '../assets/billing.png';
import schoolImg from '../assets/academics.png';


const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      id: 1,
      title: "Cognify – Child Learning & Screening Platform",
      description:
        "Full-stack MERN platform with JWT auth, real-time tracking, and dashboards for children and parents. Voice-enabled AI chatbot, gamified learning modules, and cognitive development games.",
      image: cognifyImg,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "OpenRouter", "Tailwind CSS"],
      githubUrl: "https://github.com/Atheeek/Cognify-project",
      liveUrl: "http://13.53.37.199",
      featured: true
    },
    {
      id: 2,
      title: "SmartCity CMS – Complaint Management System",
      description:
        "MERN-based portal with secure login, role-based dashboards, and real-time complaint tracking. Integrated Google Maps API with dynamic heatmaps and location-tagged complaints. Admin tools for categorization and resolution workflows.",
      image: smartcityImg,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Maps API", "JWT", "Tailwind CSS"],
      githubUrl: "https://github.com/Atheeek/City-fix",
      liveUrl: "http://16.170.212.110/",
      featured: true
    },
    {
      id: 3,
      title: "Billing Software (MERN Stack)",
      description:
        "A full-featured billing and invoice management system designed for businesses like jewelry stores. Features include user authentication, dynamic invoice fields, PDF export, tax/rate configuration, itemized billing, and dashboards.",
      image: billingImg,
      technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "jsPDF"],
      githubUrl: "https://github.com/Atheeek/billing",
      liveUrl: "#",
      featured: false
    },
      {
      id: 4,
      title: "School Website – Excelsior Academy",
      description:
        "A modern, accessible, and fully responsive school website built using React, TypeScript, and Tailwind CSS. Features include animated pages, academic details, contact forms, and SEO-friendly design.",
      image: schoolImg,
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
      githubUrl: "https://github.com/Atheeek/School-website",
      liveUrl: "https://school-websitecom.netlify.app/",
      featured: false
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative group overflow-hidden rounded-2xl ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <button className="p-3 bg-neon-cyan text-black rounded-full hover:bg-white transition-colors">
                        <Github className="w-6 h-6" />
                      </button>
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <button className="p-3 bg-neon-pink text-white rounded-full hover:bg-neon-purple transition-colors">
                        <ExternalLink className="w-6 h-6" />
                      </button>
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-neon-green text-black text-sm font-semibold rounded-full">
                    Featured
                  </div>
                )}
              </motion.div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="glass-card p-6 mb-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm font-medium bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <button className="btn-ghost-neon group">
                      <Github className="w-5 h-5 mr-2 group-hover:rotate-12" />
                      View Code
                    </button>
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <button className="btn-neon group">
                      <ExternalLink className="w-5 h-5 mr-2 group-hover:-translate-y-1" />
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
