import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Computer Science Engineering",
      institution: "Chandigarh University",
      location: "Chandigarh, India",
      duration: "Aug 2022 - Present",
      cgpa: "7.4/10",
      status: "Pursuing",
      description: "Specializing in Full-Stack Development and Software Engineering. Active in coding competitions and technical projects.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
        "Web Technologies",
        "Cloud Computing"
      ],
      achievements: [
        "Top 1% in NPTEL Cloud Computing Course",
        "Top 2 in Gen AI Hackathon",
        "Top 3 in CSE Competition (2023)",
        "Top 5 in MIT Hackathon (200+ teams)"
      ]
    },
    {
      id: 2,
      degree: "Intermediate",
      institution: "D.A.V Public School",
      location: "Gaya, Bihar",
      duration: "2019 - 2021",
      percentage: "67%",
      status: "Completed",
      description: "Science stream with focus on Mathematics, Physics, Chemistry and Computer Science.",
      coursework: [
        "Mathematics",
        "Physics", 
        "Chemistry",
        "Computer Science",
        "English"
      ],
      achievements: [
        "Active participation in school programming contests",
        "Science project exhibitions"
      ]
    },
    {
      id: 3,
      degree: "Matriculation",
      institution: "D.A.V Public School",
      location: "Gaya, Bihar", 
      duration: "2017 - 2019",
      percentage: "79%",
      status: "Completed",
      description: "Foundation education with strong performance in Mathematics and Science subjects.",
      coursework: [
        "Mathematics",
        "Science",
        "Social Studies",
        "English",
        "Hindi"
      ],
      achievements: [
        "Outstanding performance in Mathematics",
        "Active in school co-curricular activities"
      ]
    }
  ]

  const certifications = [
    {
      name: "5G Network Fundamentals",
      issuer: "Coursera",
      date: "2025",
      credentialUrl: "https://coursera.org/certificate"
    },
    {
      name: "Cloud Computing",
      issuer: "NPTEL",
      date: "2024",
      credentialUrl: "https://nptel.ac.in/certificate",
      achievement: "Top 1% performer"
    },
    {
      name: "Prompt Engineering",
      issuer: "Coursera", 
      date: "2023",
      credentialUrl: "https://coursera.org/certificate"
    }
  ]

  return (
    <section id="education" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education & Learning
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic journey and continuous learning through formal education and online certifications.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Academic Background
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className="relative bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Timeline Line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-primary-300 dark:bg-primary-700"></div>
                  )}
                  
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Column - Icon & Basic Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {edu.degree}
                          </h4>
                          
                          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                              <GraduationCap size={16} />
                              <span>{edu.institution}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>{edu.duration}</span>
                            </div>
                          </div>
                          
                          <div className="mt-3 flex gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              edu.status === 'Pursuing' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                            }`}>
                              {edu.status}
                            </span>
                            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 rounded-full text-xs font-medium">
                              {edu.cgpa || edu.percentage}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="lg:w-2/3 space-y-6">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Coursework */}
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Relevant Coursework
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                            >
                              <Award size={16} className="text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Certifications & Online Learning
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                        <Calendar size={16} />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors"
                  >
                    View Credential
                    <Award size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-16 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Lifelong Learning
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              I believe in continuous learning and staying updated with the latest technologies. 
              Through formal education, online courses, and hands-on projects, I constantly expand 
              my knowledge and skills to become a better developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
