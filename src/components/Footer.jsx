import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/shivammourya10",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/shivam318",
      color: "hover:text-blue-600"
    },
    {
      name: "X (Twitter)",
      icon: <Twitter className="w-6 h-6" />,
      url: "https://x.com/Shivammourya318",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:mouryas318@gmail.com",
      color: "hover:text-red-500"
    }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    if (href === '#home') {
      scrollToTop()
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Shivam Mourya</h3>
              <p className="text-gray-300 leading-relaxed">
                Full-Stack Developer passionate about modern web technologies and innovation. 
                Currently learning GenAI and Docker while pursuing Computer Science Engineering at Chandigarh University.
              </p>
              <div className="flex items-center gap-2 text-gray-300">
                <span>Open to opportunities and collaborations</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:mouryas318@gmail.com" className="text-white hover:text-primary-400 transition-colors">
                    mouryas318@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a href="tel:+918340179437" className="text-white hover:text-primary-400 transition-colors">
                    +91 8340179437
                  </a>
                </div>
                <div>
                  <p className="text-gray-300">Location</p>
                  <span className="text-white">Chandigarh, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-300 text-sm">Follow me:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-gray-800 text-gray-400 ${social.color} transition-all duration-200 hover:bg-gray-700 transform hover:-translate-y-1`}
                    title={social.name}
                  >
                    <div className="w-6 h-6">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-1 text-gray-300 text-sm">
              <span>© {currentYear} Shivam Mourya. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 z-40"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  )
}

export default Footer
