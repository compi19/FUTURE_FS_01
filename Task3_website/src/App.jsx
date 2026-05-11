import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ServiceDetail from "./components/ServiceDetail";
import { translations } from "./translations";

function App() {
  // 1. የቋንቋ ሁኔታን መቆጣጠር (State)
  const [lang, setLang] = useState('am');

  // 2. ቋንቋውን ከአማርኛ ወደ እንግሊዝኛ የሚቀይር ተግባር
  const toggleLang = () => {
    setLang(prevLang => (prevLang === 'am' ? 'en' : 'am'));
  };

  // 3. በተመረጠው ቋንቋ መሰረት ትርጉሞቹን ማግኘት
  const t = translations[lang];

  return (
    <Router>
      <div style={{ scrollBehavior: 'smooth' }}>
        {/* Navbar ሁልጊዜ ከላይ እንዲታይ ከ Routes ውጪ ይደረጋል */}
        <Navbar t={t} toggleLang={toggleLang} />
        
        <Routes>
          {/* ዋናው ገጽ (Home Page) - ሁሉንም ክፍሎች በአንድ ላይ ይይዛል */}
          <Route path="/" element={
            <main>
              <Hero t={t} />
              <About t={t} />
              <Services t={t} />
            </main>
          } />

          {/* የአገልግሎት ዝርዝር ገጽ - ለብቻው የሚከፈት ገጽ */}
          <Route path="/service/:id" element={<ServiceDetail t={t} />} />
        </Routes>

        {/* Footer ሁልጊዜ ከታች እንዲታይ ከ Routes ውጪ ይደረጋል */}
        <Footer t={t} />
      </div>
    </Router>
  );
}

export default App;