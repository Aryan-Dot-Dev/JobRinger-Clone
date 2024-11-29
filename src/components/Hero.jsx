import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Button from './Button';

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center space-y-6"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Sparkles className="w-12 h-12 text-blue-400 mx-auto" />
      </motion.div>
      
      <motion.h1
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="text-4xl md:text-5xl font-bold text-white"
      >
        Welcome to Our Platform
      </motion.h1>
      
      <motion.p
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-300 max-w-2xl mx-auto"
      >
        Experience the magic of seamless interactions and beautiful animations
      </motion.p>
      
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-x-4"
      >
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </motion.div>
    </motion.div>
  );
}

export default Hero;