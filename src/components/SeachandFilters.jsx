import { motion } from "framer-motion";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function SearchAndFilters() {
  const [isFiltersOpen, setFiltersOpen] = useState(true);
  const [isQuickSearchOpen, setQuickSearchOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Search Bar Section */}
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
          placeholder="Type keyword..."
          className="flex-1 bg-gray-800 text-gray-300 placeholder-gray-500 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          className="bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Select Location</option>
          <option>New Delhi</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
        </select>
        <select
          className="bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Select Experience</option>
          <option>Fresher</option>
          <option>1-3 Years</option>
          <option>3-5 Years</option>
        </select>
        <select
          className="bg-gray-800 text-gray-300 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Select Salary</option>
          <option>0-3 LPA</option>
          <option>3-6 LPA</option>
          <option>6+ LPA</option>
        </select>

        {/* Search Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2 rounded-lg transition duration-200">
          Search
        </button>
      </motion.div>

      {/* Filters Section */}
      <div className="p-4 bg-gray-800 rounded-lg shadow-lg space-y-4">
        {/* Filters Toggle */}
        <div className="space-y-2">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setFiltersOpen(!isFiltersOpen)}
          >
            <h2 className="text-lg font-bold text-white">Filters</h2>
            {isFiltersOpen ? (
              <ChevronUp className="w-5 h-5 text-blue-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-blue-400" />
            )}
          </div>

          {isFiltersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {/* Keyword Search */}
              <div className="flex items-center space-x-3">
                <Search className="w-5 h-5 text-blue-400" />
                <input
                  type="text"
                  placeholder="Type keyword and press enter"
                  className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg focus:ring focus:ring-blue-500 outline-none"
                />
              </div>
              {/* Dropdown Filters */}
              <div className="space-y-3">
                {["Experience", "Work Mode", "Job Type"].map((filter, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-700 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-600"
                  >
                    <span className="text-white text-sm">{filter}</span>
                    <ChevronDown className="w-5 h-5 text-blue-400" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Quick Job Search Section */}
        <div className="space-y-2">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setQuickSearchOpen(!isQuickSearchOpen)}
          >
            <h2 className="text-lg font-bold text-white flex items-center">
              Quick Job Search
            </h2>
            {isQuickSearchOpen ? (
              <ChevronUp className="w-5 h-5 text-blue-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-blue-400" />
            )}
          </div>

          {isQuickSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="overflow-x-auto whitespace-nowrap space-x-2 flex"
            >
              {[
                "Fresher",
                "Work From Home",
                "WFH",
                "IT",
                "HR",
                "Back Office",
                "BPO Jobs",
                "ITES",
                "Finance",
                "Accounts",
                "Medical",
                "Pharma",
                "Manager",
                "Developer",
                "CA",
                "Marketing",
                "Engineering",
                "Research",
                "Sales",
                "MBA",
                "Non Government Jobs",
              ].map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium shrink-0 ${
                    tag === "Non Government Jobs"
                      ? "bg-red-500 text-white"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  #{tag}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default SearchAndFilters;
