import { motion } from 'framer-motion'

const TestComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 p-4 rounded-xl shadow-2xl">
        <div className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent font-bold">
          ✓ TailwindCSS Working!
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          Glassmorphism & Animations Active
        </div>
      </div>
    </motion.div>
  )
}

export default TestComponent
