import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react"; // Importing the filter icon

function SearchBar({ onFiltersClick, filters, setFilters }) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg shadow-md p-4 flex items-center space-x-4 max-w-6xl mx-auto"
    >
      {/* Search Job Title */}
      <div className="text-lg font-semibold text-white">Search Job</div>

      {/* Input Fields */}
      <input
        type="text"
        value={filters.keyword}
        onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
        placeholder="Type keyword..."
        className="flex-1 bg-gray-800 text-gray-300 placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        className="bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Location</option>
        <option value="New Delhi">New Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
      </select>
      <select
        value={filters.experience}
        onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
        className="bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="1-3 Years">1-3 Years</option>
        <option value="3-5 Years">3-5 Years</option>
      </select>
      <select
        value={filters.salary}
        onChange={(e) => setFilters({ ...filters, salary: e.target.value })}
        className="bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select Salary</option>
        <option value="0-3 LPA">0-3 LPA</option>
        <option value="3-6 LPA">3-6 LPA</option>
        <option value="6+ LPA">6+ LPA</option>
      </select>

      {/* Search Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2 rounded-lg transition duration-200">
        Search
      </button>

      {/* Filters Button */}
      <button
        onClick={onFiltersClick} // Trigger the sidebar open
        className="text-white ml-4 p-2 rounded-lg hover:bg-gray-600 transition duration-200"
      >
        <Filter className="w-5 h-5" />
      </button>
    </motion.div>
  );
}

export default SearchBar;
