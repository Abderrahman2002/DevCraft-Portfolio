import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden bg-white dark:bg-gray-900"
      aria-label="Hero Section"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 grid grid-cols-12 gap-2 w-full h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full border-r border-gray-300 dark:border-gray-700"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 gap-2 w-full h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-full border-b border-gray-300 dark:border-gray-700"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative z-10 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <motion.div
              className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm font-medium"
              aria-label="Job Title Badge"
            >
              Full Stack Developer
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
          >
            Crafting digital experiences with passion and precision
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
          >
            I'm a creative developer focused on building beautiful, functional, and user-friendly applications that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full md:w-1/2 relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Developer profile"
              className="w-full h-auto rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-500/20 rounded-3xl" />
          </div>

          {/* Decorative Shapes */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-xl bg-accent-400 -z-10 opacity-30 dark:opacity-20"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary-400 -z-10 opacity-30 dark:opacity-20"></div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400"
        aria-hidden="true"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center pt-1"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-gray-500 dark:bg-gray-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
