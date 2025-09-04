import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DynamicIslandHeader } from './components/DynamicIslandHeader';
import { ModernHero } from './components/ModernHero';
import { Footer } from './components/Footer';
import { VoiceAssistant } from './components/VoiceAssistant';
import { Homepage } from './pages/Homepage';
import { ProductPage } from './pages/ProductPage';
import { TestPage } from './pages/TestPage';

function App() {
  const [isVoiceAssistantOpen, setIsVoiceAssistantOpen] = useState(false);

  const openVoiceAssistant = () => {
    setIsVoiceAssistantOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <DynamicIslandHeader />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <ModernHero onOpenVoiceAssistant={openVoiceAssistant} />
                <Homepage onOpenVoiceAssistant={openVoiceAssistant} />
              </>
            } />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </main>
        <Footer />
        <VoiceAssistant isOpen={isVoiceAssistantOpen} setIsOpen={setIsVoiceAssistantOpen} />
      </div>
    </Router>
  );
}

export default App;