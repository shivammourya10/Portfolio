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
    competitions: 15,
    awards: 8,
    prize: 6000,
    certifications: 4
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

  const hackathons = [
    {
      id: 1,
      name: "TechHack 2024",
      position: "2nd Place",
      date: "March 2024",
      description: "Built an IoT-based smart home automation system with real-time monitoring dashboard.",
      team: "Team of 4",
      prize: "$2,000",
      technologies: ["React", "Python", "Arduino", "WebSocket"],
      certificate: "https://certificate-url.com"
    },
    {
      id: 2,
      name: "CodeSprint 2024", 
      position: "1st Place",
      date: "January 2024",
      description: "Developed an AI-powered chat application with real-time messaging and intelligent responses.",
      team: "Team of 3",
      prize: "$3,000",
      technologies: ["Next.js", "OpenAI API", "Socket.io", "PostgreSQL"],
      certificate: "https://certificate-url.com"
    },
    {
      id: 3,
      name: "HackForGood 2023",
      position: "3rd Place",
      date: "October 2023",
      description: "Created a sustainable agriculture monitoring platform for small-scale farmers.",
      team: "Team of 4",
      prize: "$1,000",
      technologies: ["Vue.js", "Flask", "MongoDB", "Raspberry Pi"],
      certificate: "https://certificate-url.com"
    },
    {
      id: 4,
      name: "University Tech Fest",
      position: "Winner",
      date: "September 2023",
      description: "Won the web development competition with an innovative e-learning platform.",
      team: "Solo Project",
      prize: "Gold Medal",
      technologies: ["React", "Node.js", "Express", "MySQL"],
      certificate: "https://certificate-url.com"
    }
  ]

  const competitions = [
    {
      id: 1,
      name: "ACM-ICPC Regional Programming Contest",
      position: "Top 20%",
      date: "November 2023",
      description: "Participated in the prestigious programming competition representing my university.",
      type: "Programming",
      organizer: "ACM"
    },
    {
      id: 2,
      name: "Google Code Jam",
      position: "Round 2 Qualifier",
      date: "April 2023",
      description: "Advanced to Round 2 of Google's annual coding competition.",
      type: "Competitive Programming",
      organizer: "Google"
    },
    {
      id: 3,
      name: "IEEE Software Engineering Competition",
      position: "Finalist",
      date: "February 2023",
      description: "Reached finals with a innovative software solution for healthcare management.",
      type: "Software Engineering",
      organizer: "IEEE"
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      level: "Professional"
    },
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      date: "2023",
      level: "Professional"
    },
    {
      name: "Meta Frontend Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "2023",
      level: "Professional"
    },
    {
      name: "MongoDB Developer Certification",
      issuer: "MongoDB University",
      date: "2023",
      level: "Professional"
    }
  ]

  const achievements = [
    {
      title: "Dean's List",
      description: "Maintained academic excellence with GPA above 8.5 for consecutive semesters",
      date: "2022-2024",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Open Source Contributor",
      description: "Contributed to 10+ open source projects with over 100 GitHub stars received",
      date: "2023-2024",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Technical Society President",
      description: "Led the Computer Science Society with 200+ members, organized 15+ events",
      date: "2023-2024",
      icon: <Users className="w-6 h-6" />
    }
  ]

  const getPositionColor = (position) => {
    if (position.includes('1st') || position.includes('Winner')) return 'from-yellow-400 to-yellow-600'
    if (position.includes('2nd')) return 'from-gray-300 to-gray-500'
    if (position.includes('3rd')) return 'from-amber-600 to-amber-800'
    return 'from-blue-400 to-blue-600'
  }

  const getPositionIcon = (position) => {
    if (position.includes('1st') || position.includes('Winner')) return <Trophy className="w-6 h-6" />
    if (position.includes('2nd') || position.includes('3rd')) return <Medal className="w-6 h-6" />
    return <Award className="w-6 h-6" />
  }

  return (
    <section id="achievements" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-indigo-500/10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto" ref={ref}>
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-4">
              Achievements & Recognition
            </h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my accomplishments in hackathons, competitions, and academic excellence.
            </p>
          </motion.div>

          {/* Achievement Stats with Glassmorphism */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div 
              className="text-center p-6 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300"
                key={counters.competitions}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {counters.competitions}+
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Competitions</div>
              <div className="w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300"
                key={counters.awards}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {counters.awards}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Awards Won</div>
              <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300"
                key={counters.prize}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                ${counters.prize.toLocaleString()}+
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Prize Money</div>
              <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300"
                key={counters.certifications}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {counters.certifications}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Certifications</div>
              <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          </motion.div>

          {/* Hackathons - Glassmorphism Cards */}
          <motion.div 
            className="mb-16"
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
              Hackathon Achievements
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
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <motion.h4 
                            className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            {hackathon.name}
                          </motion.h4>
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar size={16} className="text-gray-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{hackathon.date}</span>
                          </div>
                        </div>
                        
                        <motion.div 
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium bg-gradient-to-r ${getPositionColor(hackathon.position)} shadow-lg`}
                          whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            {getPositionIcon(hackathon.position)}
                          </motion.div>
                          {hackathon.position}
                        </motion.div>
                      </div>

                      <motion.p 
                        className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {hackathon.description}
                      </motion.p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {hackathon.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-primary-500/20 hover:border-primary-500/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * techIndex }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center text-sm border-t border-white/20 dark:border-gray-700/20 pt-4">
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ x: 3 }}
                          >
                            <Users size={16} className="text-primary-500" />
                            <span className="text-gray-600 dark:text-gray-400">{hackathon.team}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ x: 3 }}
                          >
                            <Trophy size={16} className="text-yellow-500" />
                            <span className="text-gray-600 dark:text-gray-400 font-semibold">{hackathon.prize}</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Rest of the component stays the same - truncated for brevity */}
        </div>
      </div>
    </section>
  )
}

export default Achievements
      position: "2nd Place",
      date: "March 2024",
      description: "Built an IoT-based smart home automation system with real-time monitoring dashboard.",
      team: "Team of 4",
      prize: "$2,000",
      technologies: ["React", "Python", "Arduino", "WebSocket"],
      certificate: "https://certificate-url.com"
    },
    {
      id: 2,
      name: "CodeSprint 2024", 
      position: "1st Place",
      date: "January 2024",
      description: "Developed an AI-powered chat application with real-time messaging and intelligent responses.",
      team: "Team of 3",
      prize: "$3,000",
      technologies: ["Next.js", "OpenAI API", "Socket.io", "PostgreSQL"],
      certificate: "https://certificate-url.com"
    },
    {
      id: 3,
      name: "HackForGood 2023",
      position: "3rd Place",
      date: "October 2023",
      description: "Created a sustainable agriculture monitoring platform for small-scale farmers.",
      team: "Team of 4",
      prize: "$1,000",
      technologies: ["Vue.js", "Flask", "MongoDB", "Raspberry Pi"],
      certificate: "https://certificate-url.com"
    },
    {
      id: 4,
      name: "University Tech Fest",
      position: "Winner",
      date: "September 2023",
      description: "Won the web development competition with an innovative e-learning platform.",
      team: "Solo Project",
      prize: "Gold Medal",
      technologies: ["React", "Node.js", "Express", "MySQL"],
      certificate: "https://certificate-url.com"
    }
  ]

  const competitions = [
    {
      id: 1,
      name: "ACM-ICPC Regional Programming Contest",
      position: "Top 20%",
      date: "November 2023",
      description: "Participated in the prestigious programming competition representing my university.",
      type: "Programming",
      organizer: "ACM"
    },
    {
      id: 2,
      name: "Google Code Jam",
      position: "Round 2 Qualifier",
      date: "April 2023",
      description: "Advanced to Round 2 of Google's annual coding competition.",
      type: "Competitive Programming",
      organizer: "Google"
    },
    {
      id: 3,
      name: "IEEE Software Engineering Competition",
      position: "Finalist",
      date: "February 2023",
      description: "Reached finals with a innovative software solution for healthcare management.",
      type: "Software Engineering",
      organizer: "IEEE"
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      level: "Professional"
    },
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      date: "2023",
      level: "Professional"
    },
    {
      name: "Meta Frontend Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "2023",
      level: "Professional"
    },
    {
      name: "MongoDB Developer Certification",
      issuer: "MongoDB University",
      date: "2023",
      level: "Professional"
    }
  ]

  const achievements = [
    {
      title: "Dean's List",
      description: "Maintained academic excellence with GPA above 8.5 for consecutive semesters",
      date: "2022-2024",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Open Source Contributor",
      description: "Contributed to 10+ open source projects with over 100 GitHub stars received",
      date: "2023-2024",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Technical Society President",
      description: "Led the Computer Science Society with 200+ members, organized 15+ events",
      date: "2023-2024",
      icon: <Users className="w-6 h-6" />
    }
  ]

  const getPositionColor = (position) => {
    if (position.includes('1st') || position.includes('Winner')) return 'from-yellow-400 to-yellow-600'
    if (position.includes('2nd')) return 'from-gray-300 to-gray-500'
    if (position.includes('3rd')) return 'from-amber-600 to-amber-800'
    return 'from-blue-400 to-blue-600'
  }

  const getPositionIcon = (position) => {
    if (position.includes('1st') || position.includes('Winner')) return <Trophy className="w-6 h-6" />
    if (position.includes('2nd') || position.includes('3rd')) return <Medal className="w-6 h-6" />
    return <Award className="w-6 h-6" />
  }

  return (
    <section id="achievements" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-indigo-500/10"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto" ref={ref}>
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-4">
              Achievements & Recognition
            </h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my accomplishments in hackathons, competitions, and academic excellence.
            </p>
          </motion.div>

          {/* Achievement Stats with Glassmorphism */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div 
              className="text-center p-6 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300"
                key={counters.competitions}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {counters.competitions}+
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Competitions</div>
              <div className="w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300"
                key={counters.awards}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {counters.awards}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Awards Won</div>
              <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300"
                key={counters.prize}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                ${counters.prize.toLocaleString()}+
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Prize Money</div>
              <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
            
            <motion.div 
              className="text-center p-6 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform duration-300"
                key={counters.certifications}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {counters.certifications}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Certifications</div>
              <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          </motion.div>

          {/* Hackathons */}
          <motion.div 
            className="mb-16"
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
              Hackathon Achievements
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
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Glassmorphism Card */}
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <motion.h4 
                            className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            {hackathon.name}
                          </motion.h4>
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar size={16} className="text-gray-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{hackathon.date}</span>
                          </div>
                        </div>
                        
                        <motion.div 
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium bg-gradient-to-r ${getPositionColor(hackathon.position)} shadow-lg`}
                          whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            {getPositionIcon(hackathon.position)}
                          </motion.div>
                          {hackathon.position}
                        </motion.div>
                      </div>

                      <motion.p 
                        className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {hackathon.description}
                      </motion.p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {hackathon.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 bg-white/20 dark:bg-gray-700/20 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-primary-500/20 hover:border-primary-500/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * techIndex }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center text-sm border-t border-white/20 dark:border-gray-700/20 pt-4">
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ x: 3 }}
                          >
                            <Users size={16} className="text-primary-500" />
                            <span className="text-gray-600 dark:text-gray-400">{hackathon.team}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ x: 3 }}
                          >
                            <Trophy size={16} className="text-yellow-500" />
                            <span className="text-gray-600 dark:text-gray-400 font-semibold">{hackathon.prize}</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
                      </div>
                    </div>
                    
                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Competitions */}
          <motion.div 
            className="mb-16"
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
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {competitions.map((comp, index) => (
                <motion.div
                  key={comp.id}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-xl flex items-center justify-center shadow-lg"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Code className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                            </motion.div>
                            
                            <div className="flex-1">
                              <motion.h4 
                                className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                                whileHover={{ x: 5 }}
                              >
                                {comp.name}
                              </motion.h4>
                              <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                                {comp.description}
                              </p>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                <span className="flex items-center gap-1">
                                  <Calendar size={14} />
                                  {comp.date}
                                </span>
                                <span>{comp.organizer}</span>
                                <motion.span 
                                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full font-medium"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {comp.type}
                                </motion.span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <motion.div 
                          className="flex-shrink-0"
                          whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg">
                            <Award size={18} />
                            {comp.position}
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Other Achievements */}
          <motion.div 
            className="mb-16"
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
              Academic & Leadership
            </motion.h3>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="group relative text-center"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl text-primary-600 dark:text-primary-400 mb-6 shadow-lg"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {achievement.icon}
                      </motion.div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
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
