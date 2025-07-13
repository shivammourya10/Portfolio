import { Trophy, Medal, Award, Calendar, Users, Code, Zap, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [counters, setCounters] = useState({
    competitions: 0,
    awards: 0,
    prize: 0,
    certifications: 0
  })

  const targetValues = {
    competitions: 5,
    awards: 6,
    prize: 0,
    certifications: 3
  }

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps
      
      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        
        setCounters({
          competitions: Math.round(targetValues.competitions * progress),
          awards: Math.round(targetValues.awards * progress),
          prize: Math.round(targetValues.prize * progress),
          certifications: Math.round(targetValues.certifications * progress)
        })
        
        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)
      
      return () => clearInterval(timer)
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
    hidden: { y: 50, opacity: 0 },
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

  const achievements = [
    {
      id: 1,
      title: "Top 1% in NPTEL Cloud Computing",
      category: "Academic Excellence",
      date: "2024",
      description: "Achieved top 1% ranking among thousands of participants in the NPTEL Cloud Computing certification course.",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      title: "Top 5 in MIT Hackathon",
      category: "Competition",
      date: "2024",
      description: "Secured top 5 position among 200+ teams in the prestigious MIT hackathon competition.",
      icon: <Medal className="w-8 h-8" />,
      color: "from-blue-400 to-purple-500"
    },
    {
      id: 3,
      title: "3rd Position in CSE 2nd Year Software Category",
      category: "Competition",
      date: "2023",
      description: "Achieved 3rd position in Computer Science Engineering 2nd year software development category competition.",
      icon: <Award className="w-8 h-8" />,
      color: "from-green-400 to-teal-500"
    }
  ]

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-gray-900"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of awards and recognitions that showcase my journey in technology and academia.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${achievement.color} rounded-xl text-white shadow-lg mb-6`}>
                    {achievement.icon}
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-3">
                      {achievement.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      {achievement.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )

            <motion.div 
              className="text-center p-6 bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Star className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {counters.certifications}+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Certifications</div>
            </motion.div>
          </motion.div>

          {/* Hackathons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Hackathon Victories
            </motion.h3>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={hackathon.id}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div 
                          className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-200 dark:from-yellow-900 dark:to-orange-800 rounded-xl text-yellow-600 dark:text-yellow-400 shadow-lg"
                          whileHover={{ scale: 1.15, rotate: 180 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Trophy className="w-6 h-6" />
                        </motion.div>
                        <span className="text-sm font-semibold px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/50 dark:to-orange-900/50 text-yellow-800 dark:text-yellow-300 rounded-full">
                          {hackathon.position}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {hackathon.name}
                      </h4>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {hackathon.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{hackathon.date}</span>
                          <span>•</span>
                          <Users className="w-4 h-4" />
                          <span>{hackathon.team}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Prize:</span>
                          <span className="font-semibold text-green-600 dark:text-green-400">{hackathon.prize}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {hackathon.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="text-xs px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Competitions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Programming Competitions
            </motion.h3>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {competitions.map((competition, index) => (
                <motion.div
                  key={competition.id}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-900 dark:to-purple-800 rounded-xl text-blue-600 dark:text-blue-400 mb-4 shadow-lg"
                        whileHover={{ scale: 1.15, rotate: -180 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Code className="w-6 h-6" />
                      </motion.div>
                      
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                        {competition.name}
                      </h4>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-semibold px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-300 rounded-full">
                          {competition.position}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                        {competition.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="w-3 h-3" />
                          <span>{competition.date}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                            {competition.type}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            by {competition.organizer}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Academic Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Academic Excellence
            </motion.h3>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  className="group relative text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-100 to-teal-200 dark:from-green-900 dark:to-teal-800 rounded-xl text-green-600 dark:text-green-400 mb-4 shadow-lg"
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {achievement.icon === 'trophy' && <Trophy className="w-6 h-6" />}
                        {achievement.icon === 'medal' && <Medal className="w-6 h-6" />}
                        {achievement.icon === 'star' && <Star className="w-6 h-6" />}
                        {achievement.icon === 'users' && <Users className="w-6 h-6" />}
                      </motion.div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                        {achievement.description}
                      </p>
                      <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-blue-900 dark:from-white dark:to-blue-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              Professional Certifications
            </motion.h3>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="group relative text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-xl text-primary-600 dark:text-primary-400 mb-4 shadow-lg"
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Award className="w-6 h-6" />
                      </motion.div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">
                        {cert.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <span>{cert.date}</span>
                        <span>•</span>
                        <span className="text-primary-600 dark:text-primary-400 font-medium">{cert.level}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
