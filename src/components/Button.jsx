import { motion } from 'framer-motion';

function Button({ children, variant = 'primary', ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-2 rounded-lg font-medium transition-colors ${
        variant === 'primary'
          ? 'bg-blue-500 text-white hover:bg-blue-600'
          : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
      }`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;