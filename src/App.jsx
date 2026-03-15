import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Components */
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/* Pages */
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Media from './pages/Media';
import Contact from './pages/Contact';

/* Team Pages */
import Management from './pages/Management';
import Mechanical from './pages/SubTeams/Mechanical';
import Electrical from './pages/SubTeams/Electrical';
import EmbeddedSystems from './pages/SubTeams/EmbeddedSystems';
import Operations from './pages/SubTeams/Operations';
import ProductManagement from './pages/SubTeams/ProductManagement';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative z-0">
        <img src="/BIURacingBlackColor.png" alt="" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-auto object-contain opacity-5 pointer-events-none mix-blend-screen z-[-10]" />
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Team Routes */}
            <Route path="/team/management" element={<Management />} />
            <Route path="/team/mechanical" element={<Mechanical />} />
            <Route path="/team/electrical" element={<Electrical />} />
            <Route path="/team/embedded" element={<EmbeddedSystems />} />
            <Route path="/team/operations" element={<Operations />} />
            <Route path="/team/product" element={<ProductManagement />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
