import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Using EmailJS to send emails
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    // Check if email functionality is enabled
    const emailEnabled = import.meta.env.VITE_ENABLE_EMAIL === 'true'
    
    try {
      if (emailEnabled) {
        // EmailJS configuration from environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        
        if (!serviceId || !templateId || !publicKey) {
          throw new Error('EmailJS configuration missing')
        }

        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'mouryas318@gmail.com'
        }

        // Send email using EmailJS
        await emailjs.send(serviceId, templateId, templateParams, publicKey)
        
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        // Development mode or EmailJS not configured - use mailto fallback
        throw new Error('Email service not configured')
      }
    } catch (error) {
      console.error('Email Error:', error)
      
      // Fallback: Open default email client
      const subject = encodeURIComponent(formData.subject)
      const body = encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )
      const mailtoLink = `mailto:mouryas318@gmail.com?subject=${subject}&body=${body}`
      
      window.open(mailtoLink, '_blank')
      setSubmitStatus('fallback')
    }
    
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mouryas318@gmail.com",
      href: "mailto:mouryas318@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8340179437",
      href: "tel:+918340179437"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Chandigarh, India",
      href: "#"
    }
  ]

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
      url: "https://x.com/shivammourya_",
      color: "hover:text-gray-900 dark:hover:text-white"
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary-900 to-purple-900 dark:from-white dark:via-primary-100 dark:to-purple-100 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology. Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-purple-500/5 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Let's Connect
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Whether you're looking for a talented developer for your team, need help with a project, 
                    or want to collaborate on something exciting, I'd love to hear from you. I typically 
                    respond within 24 hours.
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 dark:hover:bg-gray-700/10 transition-all duration-300">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{info.label}</p>
                          {info.href !== "#" ? (
                            <a
                              href={info.href}
                              className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 font-semibold transition-colors duration-200"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-900 dark:text-white font-semibold">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-gray-200/20 dark:border-gray-700/20">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Follow Me
                    </h4>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group p-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 border border-white/30 dark:border-gray-700/30 hover:border-primary-300 dark:hover:border-primary-700 transform hover:-translate-y-2 hover:scale-110"
                          title={social.name}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-purple-500/5"></div>
              
              <div className="relative z-10 p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                      Send me a message
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-400 text-gray-900 dark:text-white transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-400 text-gray-900 dark:text-white transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-400 text-gray-900 dark:text-white transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-400 text-gray-900 dark:text-white transition-all duration-200 resize-none placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Tell me about your project or how we can work together..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-700 hover:to-purple-700 transform hover:-translate-y-1'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50/80 dark:bg-green-900/20 backdrop-blur-sm border border-green-200/50 dark:border-green-800/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-green-800 dark:text-green-200 font-semibold">
                          Message sent successfully! I'll get back to you soon.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Fallback Message */}
                  {submitStatus === 'fallback' && (
                    <div className="p-4 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-blue-800 dark:text-blue-200 font-semibold">
                          Email client opened! Please send the message from your default email app.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50/80 dark:bg-red-900/20 backdrop-blur-sm border border-red-200/50 dark:border-red-800/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-red-800 dark:text-red-200 font-semibold">
                            Oops! Something went wrong.
                          </p>
                          <p className="text-red-600 dark:text-red-300 text-sm mt-1">
                            Please try again or contact me directly at{' '}
                            <a href="mailto:mouryas318@gmail.com" className="underline hover:text-red-800 dark:hover:text-red-100 font-medium">
                              mouryas318@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
