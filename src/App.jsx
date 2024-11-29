import { motion } from "framer-motion";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 mx-auto px-2 py-8 space-y-16"
      >
        <MainContent />
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
