import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { projects } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const uniqueTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.tags.includes(filter));

  return (
    <AnimatedSection id="projects" className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4"
          >
            My Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Featured Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10"
          >
            Explore a selection of my recent projects that showcase my skills and expertise in web development.
          </motion.p>
          
          {/* Filter Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  filter === tag
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isHovered={hoveredProject === project.id}
                onHover={() => setHoveredProject(project.id)}
                onLeave={() => setHoveredProject(null)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
};

const ProjectCard = ({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <div className="flex justify-between items-center">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;