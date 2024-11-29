import { Facebook, Twitter, Instagram } from "lucide-react";
import { FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

function Footer() {
  const citiesIndia = [
    "Mumbai", "Delhi", "Ajmer", "Pune", "Hyderabad", "Agra", "Chennai",
    "Kolkata", "Indore", "Gurugram", "Jaipur", "Ahmedabad"
  ];

  const citiesInternational = [
    "Africa", "USA", "UK", "Australia", "Canada", "Singapore", "Dubai",
    "Saudi Arabia", "New Zealand"
  ];

  // State to manage the active tab (India or International)
  const [activeTab, setActiveTab] = useState("india");

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-gray-400 py-10 border-t border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Job Locations Slider Section */}
        <div className="text-center mb-8">
          <h3 className="text-white font-bold text-xl mb-4">Explore Job Locations</h3>

          {/* Tab Navigation */}
          <div className="flex justify-center space-x-8 mb-6">
            <button
              className={`text-lg font-bold ${activeTab === "india" ? "text-blue-400" : "text-white"} hover:text-blue-400 transition`}
              onClick={() => setActiveTab("india")}
            >
              Jobs in India
            </button>
            <button
              className={`text-lg font-bold ${activeTab === "international" ? "text-blue-400" : "text-white"} hover:text-blue-400 transition`}
              onClick={() => setActiveTab("international")}
            >
              International Jobs
            </button>
          </div>

          {/* Horizontal Scrolling Tags for Locations */}
          <div className="overflow-x-auto py-2">
            <div className="flex gap-3 justify-center">
              {(activeTab === "india" ? citiesIndia : citiesInternational).map((city, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-blue-400 text-sm font-medium rounded-full px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white transition"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-6 border-b border-gray-700">
          {[
            { label: "Jobs Posted", value: "31,004" },
            { label: "Jobs Filled", value: "15,153" },
            { label: "Employers", value: "19,768" },
            { label: "Active Users", value: "1,293,690" },
          ].map((stat, index) => (
            <div key={index}>
              <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer Section */}
        <div className="text-sm text-gray-500 text-center py-4 border-b border-gray-700">
          Disclaimer: All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purposes. Jobring.com shall not have any responsibility for the information's accuracy. Job Seeker Credentials and Employment Opportunities are subject to individual merit and evaluation.
        </div>

        {/* Footer Links & Social Media Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 space-y-4 md:space-y-0">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs">
            {["Terms and Conditions", "Privacy Policy", "Refund/Cancellation Policy", "About Us", "Contact Us", "FAQ"].map((link, index) => (
              <a key={index} href="#" className="hover:underline">
                {link}
              </a>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4">
            {[FaWhatsapp, Facebook, Twitter, Instagram, FaTelegram, FaLinkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 rounded-full bg-gray-700 hover:bg-blue-500 text-gray-300 hover:text-white transition"
                aria-label={`Follow us on ${Icon.name}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 text-xs">
          <p>
            Recognized By <span className="text-yellow-400 font-bold">#startupindia</span>
          </p>
          <p className="mt-1">© 2024 Jobtech Ventures Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
