import React, { useEffect } from 'react';

export const TestPage: React.FC = () => {
  useEffect(() => {
    // Load the ElevenLabs ConvAI widget script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    
    // Add error handling
    script.onerror = () => {
      console.error('Failed to load ElevenLabs ConvAI script');
    };
    
    script.onload = () => {
      console.log('ElevenLabs ConvAI script loaded successfully');
    };
    
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
        <div className="glass-card rounded-2xl p-8 mb-8 min-h-[400px] flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-white mb-6">AI Diamond Expert</h2>
          <div className="flex-1 flex items-center justify-center">
            <elevenlabs-convai agent-id="agent_0501k4aeyyn6ey99r1bh033z3m91"></elevenlabs-convai>
          </div>
        </div>

        <div className="text-sm text-gray-400 mb-4">
          <p>Powered by ElevenLabs ConvAI</p>
        </div>
        
        <div className="text-xs text-gray-500">
          <p>If you don't see the widget, try refreshing the page or check the browser console for errors.</p>
        </div>
      </div>
    </div>
  );
};
