import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
// ... existing imports ...

function App() {
  return (
    <RecoilRoot>
      <Router>
        <CustomCursor />
        <Navbar />
        <Sidebar />
        <main className="main-content">
          <Routes>
            // ... existing routes ...
          </Routes>
        </main>
        <Footer />
      </Router>
    </RecoilRoot>
  );
}

export default App; 