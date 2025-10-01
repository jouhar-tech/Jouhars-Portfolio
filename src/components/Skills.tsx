import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import html5 from '../assets/skills/html5.svg';
import css3 from '../assets/skills/css3.svg';
import js from '../assets/skills/javascript.svg';
import react from '../assets/skills/react.svg';
import java from '../assets/skills/java-removebg-preview.png';
import node from '../assets/skills/nodejs.svg';
import net from '../assets/skills/.net.jpeg';
import spring from '../assets/skills/spring.png';
import mysql from '../assets/skills/mysql.svg';
import tomcat from '../assets/skills/tomcat.jpeg';
import postman from '../assets/skills/postman.svg';
import github from '../assets/skills/github.svg';
import jdbc from '../assets/skills/jdbc.jpeg';
import eclipse from '../assets/skills/eclipse.png';
import netlify from '../assets/skills/netlify.png';



const skills = [
  { name: 'HTML5', img: html5 },
  { name: 'CSS3', img: css3 },
  { name: 'JavaScript', img: js },
  { name: 'React', img: react },
  { name: 'JAVA', img: java },
  { name: 'Nodejs', img: node },
  { name: '.Net', img: net },
  { name: 'Spring', img: spring },
  { name: 'MySQL', img: mysql },
  { name: 'TomCat', img: tomcat },
  { name: 'Postman', img: postman },
  { name: 'GitHub', img: github },
  { name: 'JDBC', img: jdbc },
  { name: 'Netlify', img: netlify },
  { name: 'Eclipse', img: eclipse },
];



const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build and deploy great web experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="glass-card p-6 flex flex-col  items-center justify-center text-center"
            >
              <img src={skill.img} alt={skill.name} className="w-16 h-16 mb-4 object-contain" />
              <p className="text-base font-medium text-foreground">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;