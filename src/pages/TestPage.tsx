import React, { useEffect } from 'react';

export const TestPage: React.FC = () => {
  useEffect(() => {
    // Load the ElevenLabs ConvAI widget script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 flex items-center justify-center p-5">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 sparkle">
          ElevenLabs ConvAI Test Page
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
          This page is for testing the ElevenLabs ConvAI integration with SR Natural Diamonds.
        </p>

        {/* ElevenLabs ConvAI Widget */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">AI Diamond Expert</h2>
          <elevenlabs-convai agent-id="agent_4801k423cktsehws7bd9ncbj0926"></elevenlabs-convai>
        </div>

        <div className="text-sm text-gray-400">
          <p>Powered by ElevenLabs ConvAI</p>
        </div>
      </div>
    </div>
  );
};
