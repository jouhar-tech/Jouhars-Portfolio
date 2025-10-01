import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// --- MOCK DATA & ASSETS ---
// Using placeholders for images. Replace with your actual imports.
import cdacLogoUrl from '../assets/tap.jpeg';
import roomanLogoUrl from '../assets/rooman.jpeg'; // Replace with the actual imported Rooman logo URL
// const cdacLogoUrl = 'https://placehold.co/150x150/1e293b/ffffff?text=CDAC&font=inter';
const openSourceLogoUrl = 'https://placehold.co/150x150/1e293b/ffffff?text=OS&font=inter';


const experiences = [
  {
    id: 1,
    title: 'Full Stack JAVA Development Intern',
    organization: 'TAP Academy, Bangalore',
    duration: 'Feb 2025 - Jul 2025',
    location: 'Bangalore, India',
    image: cdacLogoUrl, // Replaced with placeholder
    description: [
  'Completed internship at Tap Academy, Bangalore, focusing on Java development and backend technologies.',
  'Gained hands-on experience with Core Java, JDBC, Hibernate, Spring Boot, JSP, and Servlets.',
  'Individually built a full Food Delivery Application using Java, Spring Boot, and MySQL.',
],
    technologies: [
  'Core Java', 'Spring Boot', 'Hibernate', 'JDBC', 'JSP', 'Servlets', 'MySQL', 'Tomcat Server'],
  },
 {
  id: 2,
  title: 'AI Data Quality Analyst',
  organization: 'Rooman Technologies',
  duration: 'Nov 2024 - Feb 2025',
  location: 'Mangalore, India',
  image: roomanLogoUrl, // Replace with the actual imported Rooman logo URL
  description: [
  'Completed internship at Rooman Technologies, Bangalore, as a Data Quality Analyst.',
  'Worked on improving text analytics data quality using advanced NLP techniques.',
  'Focused on cleaning and preprocessing unstructured data to enhance model accuracy and reliability.',
],
technologies: ['Python', 'NLP', 'Text Analytics', 'Data Cleaning', 'Machine Learning'],
}

];


// --- MAIN EXPERIENCE COMPONENT ---
const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative py-20 px-4 overflow-hidden">
      {/* Background elements to match the theme */}
      <div className="absolute inset-0 z-0 opacity-30">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 15% 50%, hsl(var(--neon-cyan) / 0.1), transparent 40%)`,
              `radial-gradient(circle at 85% 50%, hsl(var(--neon-cyan) / 0.1), transparent 40%)`,
              `radial-gradient(circle at 15% 50%, hsl(var(--neon-cyan) / 0.1), transparent 40%)`,
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key contributions
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* The vertical timeline bar */}
          <div className="absolute left-6 md:left-1/2 w-0.5 h-full bg-neon-cyan/20" aria-hidden="true"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// --- TIMELINE ITEM SUB-COMPONENT ---
const TimelineItem = ({ exp, index }) => {
    const itemRef = useRef(null);
    const isInView = useInView(itemRef, { once: true, amount: 0.3 });

    // Alternate items left and right on desktop
    const isOdd = index % 2 !== 0;
    const itemPositionClass = isOdd ? 'md:flex-row-reverse' : 'md:flex-row';
    const initialPosition = isOdd ? { opacity: 0, x: 100 } : { opacity: 0, x: -100 };

    return (
     <motion.div
    ref={itemRef}
    initial={initialPosition}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8, ease: "easeOut" }}
    // The main container is simplified as the timeline-specific styles are no longer needed here
    className={`relative flex flex-col md:flex-row items-center gap-8`}
>
    {/* The timeline axis circle can be a separate, simpler element if needed, or removed */}
    <div className="absolute left-6 top-0 md:left-1/2 w-3 h-3 -ml-1.5 mt-4 bg-neon-cyan/50 rounded-full"></div>

    {/* Content Card */}
    <div className={`w-full md:w-5/12 ${isOdd ? 'md:pl-16' : 'md:pr-16 md:ml-auto'}`}>
        <div className="ml-12 md:ml-0 glass-card p-6 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/50 transition-colors duration-300">
            
            {/* Logo and Header grouped together */}
            <div className="flex items-center gap-4 mb-4">
                {/* Logo moved inside the card */}
                <motion.div
                    className="w-16 h-16 bg-slate-800 rounded-full border-2 border-neon-cyan/50 flex-shrink-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                >
                    <img
                        src={exp.image}
                        alt={`${exp.organization} logo`}
                        className="w-14 h-14 object-cover rounded-full" // Adjusted size for new container
                    />
                </motion.div>
                
                {/* Title and Organization */}
                <div>
                    <p className="text-sm text-muted-foreground">{exp.duration}</p>
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                    <p className="font-medium text-neon-cyan">{exp.organization}</p>
                </div>
            </div>
            
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 pl-4">
                {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
</motion.div>
    );
};

export default Experience;