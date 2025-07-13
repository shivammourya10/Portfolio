import { User, Heart, Target, Download, ExternalLink } from 'lucide-react'

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Shivam_Mourya_Resume.pdf'
    link.download = 'Shivam_Mourya_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewResume = () => {
    window.open('/Shivam_Mourya_Resume.pdf', '_blank')
  }
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Full-Stack Developer & Computer Science Student
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate Full-Stack Developer with expertise in React.js, Tailwind CSS, and modern JavaScript 
                for building dynamic web applications. Proficient in backend technologies including Node.js, 
                Express.js, and JWT for creating secure, scalable solutions.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently pursuing Computer Science Engineering at Chandigarh University with a 7.3 CGPA. 
                Actively expanding my skill set by learning <span className="text-primary-600 dark:text-primary-400 font-medium">Generative AI</span> technologies 
                and <span className="text-primary-600 dark:text-primary-400 font-medium">Docker</span> containerization to build more innovative 
                and scalable applications. Regular participant in hackathons and coding competitions.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                  <User size={20} />
                  <span className="font-medium">Problem Solver</span>
                </div>
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                  <Heart size={20} />
                  <span className="font-medium">Tech Enthusiast</span>
                </div>
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                  <Target size={20} />
                  <span className="font-medium">Goal-Oriented</span>
                </div>
              </div>
            </div>

            {/* Right Column - Personal Info */}
            <div className="space-y-6">
              {/* Personal Info */}
              <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Facts
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Location:</span>
                    <span className="font-medium text-gray-900 dark:text-white">Chandigarh, India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Degree:</span>
                    <span className="font-medium text-gray-900 dark:text-white">B.Tech CSE (7.3 CGPA)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Status:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">Open to Opportunities</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Email:</span>
                    <span className="font-medium text-gray-900 dark:text-white">mouryas318@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Resume Download Section */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Resume
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Download or view my complete resume with detailed experience and skills.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleDownloadResume}
                    className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm"
                  >
                    <Download size={16} />
                    Download PDF
                  </button>
                  <button
                    onClick={handleViewResume}
                    className="flex items-center justify-center gap-2 border border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-gray-700 font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm"
                  >
                    <ExternalLink size={16} />
                    View Online
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
