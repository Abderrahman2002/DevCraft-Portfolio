import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const Skills = () => {
  const skills = [
    // Frontend
    { name: 'React', proficiency: 95, category: 'frontend' },
    { name: 'CSS', proficiency: 90, category: 'frontend' },
    { name: 'Tailwind CSS', proficiency: 95, category: 'frontend' },
    { name: 'JavaScript', proficiency: 95, category: 'frontend' },
    { name: 'Bootstrap', proficiency: 95, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', proficiency: 85, category: 'backend' },
    { name: 'Express', proficiency: 80, category: 'backend' },
    { name: 'MongoDB', proficiency: 75, category: 'backend' },
    { name: 'Firebase', proficiency: 80, category: 'backend' },
    
    // Design
    { name: 'Figma', proficiency: 85, category: 'design' },
    { name: 'UI/UX Design', proficiency: 80, category: 'design' },
    { name: 'Responsive Design', proficiency: 90, category: 'design' },
    { name: 'Canva', proficiency: 90, category: 'design' },
    
    // Other
    { name: 'Git', proficiency: 85, category: 'other' },
    { name: 'Docker', proficiency: 70, category: 'other' },
    { name: 'CI/CD', proficiency: 75, category: 'other' },
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'design', name: 'Design' },
    { id: 'other', name: 'Other' },
  ];

  const getSkillColor = (category) => {
    switch (category) {
      case 'frontend':
        return 'bg-primary-500 dark:bg-primary-600';
      case 'backend':
        return 'bg-secondary-500 dark:bg-secondary-600';
      case 'design':
        return 'bg-accent-500 dark:bg-accent-600';
      case 'other':
        return 'bg-gray-500 dark:bg-gray-600';
      default:
        return 'bg-primary-500 dark:bg-primary-600';
    }
  };

  const getTrackColor = (category) => {
    switch (category) {
      case 'frontend':
        return 'bg-primary-100 dark:bg-primary-900/30';
      case 'backend':
        return 'bg-secondary-100 dark:bg-secondary-900/30';
      case 'design':
        return 'bg-accent-100 dark:bg-accent-900/30';
      case 'other':
        return 'bg-gray-100 dark:bg-gray-800';
      default:
        return 'bg-primary-100 dark:bg-primary-900/30';
    }
  };

  return (
    <AnimatedSection id="skills" className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4"
          >
            My Skills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
          >
            My toolkit encompasses a range of technologies and skills that I've honed over the years to deliver exceptional digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{category.name}</h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.proficiency}%</span>
                      </div>
                      <div className={`w-full h-2.5 rounded-full ${getTrackColor(skill.category)}`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                          className={`h-2.5 rounded-full ${getSkillColor(skill.category)}`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;