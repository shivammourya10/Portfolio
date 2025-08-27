import { useState, useEffect } from 'react'
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Full-Stack Developer"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = './src/assets/12_JULY_UT_SOL.pdf'
    link.download = 'Shivam_Mourya_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900 pt-24 md:pt-28">
      {/* Animated Background Texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image with enhanced styling */}
          <div className="mb-16 animate-fade-in-up">
            <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto">
              {/* Outer glow ring with enhanced size */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1.5 shadow-2xl animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-6xl md:text-7xl font-bold text-gray-700 dark:text-gray-200 shadow-inner">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    SM
                  </span>
                </div>
              </div>
              {/* Enhanced floating elements around profile */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-pink-400 rounded-full animate-ping shadow-lg"></div>
              <div className="absolute top-1/4 -left-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Enhanced Name and Title Section */}
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Greeting */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium shadow-md">
                👋 Hello, I'm
              </span>
            </div>
            
            {/* Name with enhanced styling and better spacing */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
                Shivam
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent drop-shadow-xl">
                Mourya
              </span>
            </h1>
            
            {/* Title with typing effect */}
            <div className="relative">
              <h2 className="text-xl md:text-3xl lg:text-4xl text-primary-600 dark:text-primary-400 font-semibold mb-6 h-12 md:h-16 flex items-center justify-center">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="animate-pulse text-primary-500 ml-1">|</span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Full-Stack Developer proficient in React.js, Tailwind CSS, HTML, and JavaScript, with expertise 
              in building dynamic web applications. Skilled in backend technologies like Node.js, Express.js, 
              JWT, and bcrypt, ensuring seamless integration of user-friendly interfaces with secure 
              server-side functionalities.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mb-32 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleDownloadResume}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 z-20 relative"
              >
                <Download size={20} />
                Download Resume
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-gray-900 font-medium py-3 px-8 rounded-lg transition-all duration-200 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 z-20 relative"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/shivammourya10"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shivam318"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/Shivammourya318"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="p-2 rounded-full text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
