import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Code, Laptop, MessageCircle, Palette } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code size={24} />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern frameworks and best practices.',
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive, accessible, and aesthetically pleasing user interfaces that enhance user experience.',
    },
    {
      icon: <Laptop size={24} />,
      title: 'Full Stack Development',
      description: 'Implementing both client and server-side solutions for comprehensive application development.',
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Consultation',
      description: 'Providing expert advice on technical decisions and strategy for digital products.',
    },
  ];

  return (
    <AnimatedSection id="about" className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm font-medium mb-4"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Who I Am & What I Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400"
          >
            I'm a passionate developer with over 5 years of experience creating exceptional digital experiences for clients across various industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Working on projects"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-xl bg-secondary-400 -z-10 opacity-30 dark:opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-accent-400 -z-10 opacity-30 dark:opacity-20"></div>
            </div>
          </motion.div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              My Journey
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 dark:text-gray-400 mb-6"
            >
              I began my career as a front-end developer with a strong focus on creating visually appealing and responsive user interfaces. Over time, I expanded my expertise to include back-end development and database management, becoming a versatile full-stack developer capable of handling all aspects of web application development.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-400 mb-8"
            >
              Today, I combine technical expertise with a keen eye for design to deliver holistic solutions that not only function flawlessly but also provide exceptional user experiences. I'm constantly learning and staying updated with the latest technologies and trends in the industry.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium"
            >
              Let's work together
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;