import { motion } from "framer-motion";

function Header() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700"
    >
      <div className="mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <motion.div
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          className="text-2xl font-bold text-blue-400 flex items-center"
        >
          <span className="mr-2">job</span>
          <span className="text-white">Ringer</span>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden md:block text-sm text-gray-300 italic"
        >
          Bringing You <span className="text-blue-400">The Perfect Job</span>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          className="space-x-6 flex items-center"
        >
          {/* Navigation Links with Hover Effects */}
          <a
            href="#"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 ease-in-out transform hover:translate-y-1"
          >
            Active Employers
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300 ease-in-out transform hover:translate-y-1"
          >
            Pricing
          </a>

          {/* Jobseeker Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2 rounded transition-shadow duration-300 ease-in-out"
          >
            Jobseeker Login
          </motion.button>

          {/* Employer Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black hover:bg-yellow-600 px-4 py-2 rounded font-bold transition-shadow duration-300 ease-in-out"
          >
            Employer Login
          </motion.button>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Header;
