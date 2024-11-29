function FiltersAndQuickSearch({ isOpen, onClose, filters, setFilters }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg w-96">
        <h3 className="text-white text-xl font-bold mb-4">Filters</h3>
        
        {/* Job Type Filter */}
        <div className="mb-4">
          <label className="text-gray-300">Job Type</label>
          <select
            value={filters.jobType}
            onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
            className="w-full bg-gray-700 text-white p-2 rounded-lg"
          >
            <option value="">All</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        {/* Location Filter */}
        <div className="mb-4">
          <label className="text-gray-300">Location</label>
          <input
            type="text"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            placeholder="Enter location"
            className="w-full bg-gray-700 text-white p-2 rounded-lg"
          />
        </div>

        {/* Experience Filter */}
        <div className="mb-4">
          <label className="text-gray-300">Experience</label>
          <select
            value={filters.experience}
            onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
            className="w-full bg-gray-700 text-white p-2 rounded-lg"
          >
            <option value="">Any</option>
            <option value="2-5">2-5 Years</option>
            <option value="5-8">5-8 Years</option>
            <option value="8+">8+ Years</option>
          </select>
        </div>

        {/* Salary Filter */}
        <div className="mb-4">
          <label className="text-gray-300">Salary</label>
          <select
            value={filters.salary}
            onChange={(e) => setFilters({ ...filters, salary: e.target.value })}
            className="w-full bg-gray-700 text-white p-2 rounded-lg"
          >
            <option value="">Any</option>
            <option value="₹8L - ₹10L P.A.">₹8L - ₹10L P.A.</option>
            <option value="₹22L - ₹24L P.A.">₹22L - ₹24L P.A.</option>
            <option value="₹12L - ₹15L P.A.">₹12L - ₹15L P.A.</option>
          </select>
        </div>

        {/* Close Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default FiltersAndQuickSearch;
