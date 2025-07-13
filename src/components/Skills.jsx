import { Code, Database, Globe, Smartphone, Brain, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [animatedSkills, setAnimatedSkills] = useState({})

  useEffect(() => {
    if (inView) {
      // Animate skill bars on scroll
      const timer = setTimeout(() => {
        setAnimatedSkills({})
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  }
  
  const technicalSkills = [
    {
      category: "Technologies & Tools",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "JavaScript", icon: "🟨" },
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "⚡" },
        { name: "MongoDB", icon: "🍃" },
        { name: "HTML/CSS", icon: "🌐" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "MySQL", icon: "🗄️" },
        { name: "C/C++", icon: "⚙️" },
        { name: "JWT Auth", icon: "🔐" },
        { name: "Git", icon: "📝" },
        { name: "VS Code", icon: "💻" },
        { name: "Postman", icon: "📮" },
        { name: "REST APIs", icon: "🔗" }
      ]
    }
  ]

  const softSkills = [
    {
      name: "Team Leadership",
      icon: <Users className="w-6 h-6" />,
      description: "Strong team collaboration and leadership abilities"
    },
    {
      name: "Problem Solving",
      icon: <Brain className="w-6 h-6" />,
      description: "Analytical thinking with data structures & algorithms"
    },
    {
      name: "Adaptability",
      icon: <Globe className="w-6 h-6" />,
      description: "Quick learning and adaptation to new technologies"
    },
    {
      name: "Perseverance",
      icon: <Users className="w-6 h-6" />,
      description: "Persistent approach to overcoming challenges"
    }
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 dark:from-white dark:via-purple-100 dark:to-blue-100 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise and soft skills 
              developed through academic projects and hands-on experience.
            </p>
          </motion.div>

          {/* Technical Skills */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Technical Skills
            </motion.h3>
            <motion.div 
              className="grid gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {technicalSkills.map((category, index) => (
                <motion.div
                  key={index}
                  className="group relative w-full"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 p-6 md:p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div 
                          className="p-3 bg-gradient-to-br from-primary-100 to-purple-200 dark:from-primary-900 dark:to-purple-800 rounded-xl text-primary-600 dark:text-primary-400 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {category.icon}
                        </motion.div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {category.category}
                        </h4>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div 
                            key={skillIndex}
                            className="flex flex-col items-center gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:bg-white/70 dark:hover:bg-gray-700/70 transition-all duration-300 text-center border border-white/20 dark:border-gray-700/20"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ 
                              duration: 0.3, 
                              delay: 0.5 + (skillIndex * 0.05) 
                            }}
                          >
                            <span className="text-2xl md:text-3xl">{skill.icon}</span>
                            <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 leading-tight">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-blue-500 to-primary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center shadow-lg">
              <motion.h3 
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Currently Learning
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Continuously expanding my skillset with cutting-edge technologies to stay ahead in the rapidly evolving tech landscape.
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-blue-200 dark:border-gray-600">
                  <span className="text-2xl">🐳</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Docker</span>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-purple-200 dark:border-gray-600">
                  <span className="text-2xl">🤖</span>
                  <span className="font-semibold text-purple-600 dark:text-purple-400">GenAI</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-purple-900 dark:from-white dark:to-purple-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Soft Skills
            </motion.h3>
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group relative text-center"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-100 to-purple-200 dark:from-primary-900 dark:to-purple-800 rounded-full text-primary-600 dark:text-primary-400 mb-4 shadow-lg"
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div 
            className="mt-16 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 text-center shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-purple-600/20 to-blue-600/20 opacity-50"></div>
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Always Learning, Always Growing
                </motion.h3>
                <motion.p 
                  className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                  tools, and methodologies to stay current with industry trends and best practices.
                </motion.p>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-400 rounded-full blur-2xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
