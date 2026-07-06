import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000);
    return () => clearInterval(timer);
  }, [])
  if (loading) {
    return <Loader />
  }
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black/90 dark:text-white transition-colors duration-300">
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
export default App;