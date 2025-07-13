import { User, Heart, Target } from 'lucide-react'

const About = () => {
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
                Full-Stack Developer proficient in React.js, Tailwind CSS, HTML, and JavaScript, with expertise 
                in building dynamic web applications. Skilled in backend technologies like Node.js, Express.js, 
                JWT, and bcrypt, ensuring seamless integration of user-friendly interfaces with secure 
                server-side functionalities.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently pursuing Computer Science Engineering at Chandigarh University with a 7.3 CGPA. 
                Passionate about continuous learning and staying up-to-date with industry trends to deliver 
                high-quality, innovative solutions. Active participant in hackathons and coding competitions.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
