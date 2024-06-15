import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const loadScripts = (scripts) => {
    if (scripts.length === 0) return;
  
    const scriptUrl = scripts[0];
    
    // Check if script has already been loaded
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
  
      const remainingScripts = scripts.slice(1);
  
      script.onload = () => {
        loadScripts(remainingScripts);
      };
  
      document.body.appendChild(script);
    } else {
      loadScripts(scripts.slice(1));
    }
  };

  useEffect(() => {
      loadScripts([
        "assets/vendor/swiper/swiper-bundle.min.js",
        "assets/vendor/splide/splide.min.js",
        "assets/vendor/slim-select/slimselect.min.js",
        "assets/vendor/fslightbox/fslightbox.js",
        "assets/vendor/splide/splide-extension-auto-scroll.min.js",
        "assets/vendor/lenis/lenis.min.js",
        "assets/vendor/splittype/index.min.js",
        "assets/vendor/gsap/gsap.min.js",
        "assets/vendor/gsap/gsap-scroll-trigger.min.js",
        "assets/js/main.js",
        "assets/js/countdown.js",
      ]);
     
  }, []);
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
