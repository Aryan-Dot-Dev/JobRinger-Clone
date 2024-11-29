import { motion } from 'framer-motion';
import { Briefcase, MapPin, DollarSign, Clock } from 'lucide-react';

function JobListing({ title, company, experience, salary, location, jobType, skills, postedTime }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg shadow-lg p-6 w-64 flex flex-col space-y-4 overflow-hidden"
    >
      {/* Job Title */}
      <motion.h3
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        className="text-xl font-bold text-white"
      >
        {title}
      </motion.h3>

      {/* Company Name */}
      <p className="text-lg text-blue-400">{company}</p>

      {/* Key Details */}
      <div className="flex flex-wrap items-center gap-4 text-gray-300 flex-grow">
        <div className="flex items-center space-x-2">
          <Briefcase className="w-5 h-5 text-blue-400" />
          <span>{experience} Years</span>
        </div>
        <div className="flex items-center space-x-2">
          <DollarSign className="w-5 h-5 text-green-400" />
          <span>{salary}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-red-400" />
          <span>{location}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-yellow-400" />
          <span>{postedTime} ago</span>
        </div>
      </div>

      {/* Call-to-Action Buttons */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="flex justify-between items-center mt-auto border-t border-gray-700 pt-4"
      >
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-lg transition-all">
          Apply
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all">
          Share
        </button>
      </motion.div>
    </motion.div>
  );
}

export default JobListing;
