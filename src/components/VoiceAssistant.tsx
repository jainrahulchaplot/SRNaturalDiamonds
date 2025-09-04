import React, { useEffect } from 'react';

interface VoiceAssistantProps {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}

export const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ 
  isOpen, 
  setIsOpen 
}) => {
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
    <div style={{ display: 'none' }}>
      <elevenlabs-convai agent-id="agent_0501k4aeyyn6ey99r1bh033z3m91"></elevenlabs-convai>
            </div>
  );
};