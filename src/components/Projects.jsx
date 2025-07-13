import { useState } from 'react'
import { ExternalLink, Github, Calendar, Users, Code, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Import project cover images
import RideFlowImage from '../assets/Project_cover/RideFlow.png'
import PetSetGoImage from '../assets/Project_cover/PetSetGo.png'
import MissSyntaxImage from '../assets/Project_cover/MissSyntax.png'
import CustomAIAgentImage from '../assets/Project_cover/Custom_AI_agent.png'
import AIAgenticIDEImage from '../assets/Project_cover/AI_Agentic_IDE.png'
import AICodeEditorImage from '../assets/Project_cover/Ai_CodeEditer.png'

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all')
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

  const projects = [
    {
      id: 1,
      title: "RideFlow WebApp",
      category: "personal",
      description: "A comprehensive ride-hailing application with user-friendly interface, real-time maps integration, and secure authentication system.",
      image: RideFlowImage,
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Google Maps API"],
      githubUrl: "https://github.com/shivammourya10/Ride_Flow",
      liveUrl: null,
      featured: true,
      date: "Dec 2024 - Jan 2025",
      highlights: [
        "Responsive UI with React.js and Tailwind CSS",
        "Robust backend with Node.js, Express.js, and MongoDB", 
        "Secure JWT authentication and bcrypt password hashing",
        "Real-time maps with Google Maps API integration"
      ]
    },
    {
      id: 2,
      title: "PetSetGo Backend",
      category: "personal", 
      description: "A comprehensive pet management platform with multiple pet registration, medical records, and a unique 'PetMate' breeding feature.",
      image: PetSetGoImage,
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
      githubUrl: "https://github.com/shivammourya10/PetSetGo-main",
      liveUrl: null,
      featured: true,
      date: "Aug 2024 - Oct 2024",
      highlights: [
        "Pet management with detailed profiles and medical records",
        "Secure RESTful API with MongoDB integration",
        "JWT authentication and bcrypt security",
        "PetMate: Tinder-like breeding feature with swiping",
        "Community forum with threaded discussions"
      ]
    },
    {
      id: 3,
      title: "MissSyntax - AI Coding Assistant",
      category: "genai",
      description: "A beautiful AI girlfriend chat application that provides coding help and emotional support, powered by Google Gemini AI with modern glassmorphism UI.",
      image: MissSyntaxImage,
      technologies: ["React 19", "Material-UI", "Node.js", "Express.js", "Google Gemini AI", "Vite"],
      githubUrl: "https://github.com/shivammourya10/MissSyntax",
      liveUrl: null,
      featured: true,
      date: "2024",
      highlights: [
        "Beautiful glassmorphism UI with colorful gradients",
        "Real-time chat with typing animations",
        "Code syntax highlighting with copy functionality",
        "Google Gemini AI integration for intelligent responses",
        "Responsive design with emotional support features"
      ]
    },
    {
      id: 4,
      title: "Custom AI Agent",
      category: "genai",
      description: "An intelligent conversational AI agent that performs multiple tasks through natural language commands, demonstrating real-world AI agent capabilities.",
      image: CustomAIAgentImage,
      technologies: ["Node.js", "Google Gemini AI", "Weather API", "CoinGecko API", "JavaScript ES6+"],
      githubUrl: "https://github.com/shivammourya10/Custom-AI-Agent",
      liveUrl: null,
      featured: false,
      date: "2024",
      highlights: [
        "Multi-tool execution through natural language",
        "Real-time weather and cryptocurrency data",
        "Function calling with Google Gemini AI",
        "Conversation context management",
        "Cross-platform command execution"
      ]
    },
    {
      id: 5,
      title: "AI Agentic IDE",
      category: "genai",
      description: "An AI-powered development tool that automatically creates complete websites using natural language commands and terminal execution.",
      image: AIAgenticIDEImage,
      technologies: ["Node.js", "Google Gemini AI", "Shell Commands", "HTML/CSS/JS Generation"],
      githubUrl: "https://github.com/shivammourya10/Agentic-IDE",
      liveUrl: null,
      featured: false,
      date: "2024",
      highlights: [
        "Natural language to website conversion",
        "Automatic file and folder creation",
        "Cross-platform terminal command execution",
        "Complete HTML, CSS, JavaScript generation",
        "Interactive development environment"
      ]
    },
    {
      id: 6,
      title: "AI Code Editor",
      category: "genai",
      description: "A modern web application for generating, editing, previewing, and publishing web projects to Netlify with AI-powered code generation.",
      image: AICodeEditorImage,
      technologies: ["React", "Node.js", "Express.js", "Google Gemini AI", "Netlify API"],
      githubUrl: "https://github.com/shivammourya10/AI-Code-Editor",
      liveUrl: null,
      featured: true,
      date: "2024",
      highlights: [
        "Real-time code editing with syntax highlighting",
        "One-click deployment to Netlify",
        "Live preview with instant updates",
        "AI-powered complete project generation",
        "Modern glassmorphism UI design"
      ]
    },
    {
      id: 7,
      title: "PrettyKidsCare - School Management System",
      category: "freelance",
      description: "A comprehensive school website with a powerful backend admin panel for complete content management. Features CRUD operations for syllabus, fee structure, festival galleries, and comprehensive school data management.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Admin Panel", "CRUD Operations", "File Upload"],
      githubUrl: null,
      liveUrl: "https://prettykidscare.vercel.app/",
      featured: true,
      date: "2024",
      highlights: [
        "Complete school website with modern responsive design",
        "Advanced admin panel with CRUD operations",
        "Syllabus and fee structure management",
        "Festival photo gallery with upload functionality",
        "Student and teacher profile management",
        "Real-time content updates and notifications"
      ]
    },
    {
      id: 8,
      title: "DJ Mickey - Portfolio Website",
      category: "freelance",
      description: "A stunning DJ portfolio website featuring dark neon aesthetics with smooth animations and interactive elements. Built with React and enhanced with dynamic video integration and immersive user experience.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80",
      technologies: ["React.js", "React Router", "Framer Motion", "CSS/SCSS", "YouTube API", "Responsive Design"],
      githubUrl: null,
      liveUrl: "https://djmickeyapp.vercel.app/",
      featured: true,
      date: "2024",
      highlights: [
        "Dark neon minimalistic theme with smooth animations",
        "Interactive menu with hover effects and transitions",
        "YouTube API integration for live concert videos",
        "Responsive design optimized for all devices",
        "Professional portfolio showcase with music samples",
        "Advanced navigation with React Router"
      ]
    }
  ]

  const tabs = [
    { id: 'all', label: 'All Projects', icon: <Code size={18} /> },
    { id: 'personal', label: 'Personal', icon: <Users size={18} /> },
    { id: 'genai', label: 'GenAI', icon: <Trophy size={18} /> },
    { id: 'freelance', label: 'Freelance', icon: <ExternalLink size={18} /> }
  ]

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              My Projects
            </h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-6"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            ></motion.div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of my work across personal projects, freelance work, and hackathon competitions.
            </p>
          </motion.div>

          {/* Featured Projects */}
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
              Featured Projects
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        Featured
                      </div>
                    </div>
                    
                    <div className="relative z-10 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={16} className="text-gray-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                        <span className="ml-auto px-2 py-1 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h4>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 dark:bg-gray-700/80 backdrop-blur text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                          Code
                        </motion.a>
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-lg hover:from-primary-600 hover:to-purple-600 transition-all text-sm font-medium shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={16} />
                            Demo
                          </motion.a>
                        )}
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-primary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Project Tabs */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 backdrop-blur-xl border ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg border-primary-500/20'
                      : 'bg-white/10 dark:bg-gray-800/10 border-white/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.icon}
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* All Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                layout
              >
                <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="relative z-10 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                      <span className="ml-auto px-2 py-1 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 dark:bg-gray-700/80 backdrop-blur text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-lg hover:from-primary-600 hover:to-purple-600 transition-all text-sm font-medium shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={16} />
                          Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-500 to-primary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 text-center shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-purple-600/20 to-blue-600/20 opacity-50"></div>
              
              <div className="relative z-10">
                <motion.p 
                  className="text-xl text-gray-600 dark:text-gray-300 mb-6"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Interested in seeing more of my work or collaborating on a project?
                </motion.p>
                <motion.a
                  href="https://github.com/shivammourya10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <Github size={24} />
                  View All on GitHub
                </motion.a>
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

export default Projects
