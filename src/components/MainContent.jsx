import { useState } from "react";
import JobListing from "./JobListing";
import jobData from "../data/jobData"; // Assuming this is an array of job objects
import SearchBar from "./SearchBar";
import FiltersAndQuickSearch from "./FiltersAndQuickSearch"; // Sidebar component

function MainContent() {
  const [isFiltersOpen, setFiltersOpen] = useState(false); // State to control the sidebar visibility
  const [numJobsToShow, setNumJobsToShow] = useState(4); // State to control the number of jobs displayed
  const [filters, setFilters] = useState({
    keyword: "",
    jobType: "",
    location: "",
    experience: "",
    salary: "",
  }); // State for the filters

  // Function to load more jobs (in multiples of 5)
  const loadMoreJobs = () => {
    setNumJobsToShow((prev) => prev + 5); // Increment the number of jobs by 5
  };

  // Function to show fewer jobs (in multiples of 5)
  const loadFewerJobs = () => {
    setNumJobsToShow((prev) => (prev > 5 ? prev - 5 : prev)); // Decrement the number of jobs by 5, but don't go below 5
  };

  // Filter job data based on the selected filters
  const filteredJobs = jobData.filter((job) => {
    const { keyword, jobType, location, experience, salary } = filters;

    return (
      (keyword ? job.title.toLowerCase().includes(keyword.toLowerCase()) : true) &&
      (jobType ? job.jobType.toLowerCase() === jobType.toLowerCase() : true) &&
      (location ? job.location.toLowerCase().includes(location.toLowerCase()) : true) &&
      (experience ? job.experience === experience : true) &&
      (salary ? job.salary === salary : true)
    );
  });

  return (
    <div className="space-y-10 relative">
      {/* Search Bar */}
      <SearchBar
        onFiltersClick={() => setFiltersOpen(true)}
        filters={filters}
        setFilters={setFilters}
      />

      {/* Job Listings */}
      <div className="max-w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredJobs.slice(0, numJobsToShow).map((job, index) => (
          <JobListing key={index} {...job} />
        ))}
      </div>

      {/* Show More / Fewer Button */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={loadFewerJobs}
          className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Show Fewer
        </button>
        <button
          onClick={loadMoreJobs}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Show More
        </button>
      </div>

      {/* Filters Sidebar */}
      <FiltersAndQuickSearch
        isOpen={isFiltersOpen}
        onClose={() => setFiltersOpen(false)}
        filters={filters}
        setFilters={setFilters} // Pass the filters and setter function to the sidebar
      />
    </div>
  );
}

export default MainContent;
