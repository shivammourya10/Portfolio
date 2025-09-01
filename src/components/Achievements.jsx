import { Trophy, Medal, Award, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
      title: "Top 2 in Gen AI Hackathon",
      category: "Competition",
      date: "2024",
      description: "Secured 2nd position in the prestigious Gen AI Hackathon, showcasing innovative AI solutions and technical expertise.",
      icon: <Medal className="w-8 h-8" />,
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 3,
      title: "Top 5 in MIT Hackathon",
      category: "Competition",
      date: "2024",
      description: "Secured top 5 position among 200+ teams in the prestigious MIT hackathon competition.",
      icon: <Medal className="w-8 h-8" />,
      color: "from-blue-400 to-purple-500"
    },
    {
      id: 4,
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
}

export default Achievements
