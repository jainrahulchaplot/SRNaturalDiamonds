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

  // Trigger widget when isOpen is true
  useEffect(() => {
    if (isOpen) {
      // Find the ElevenLabs widget and trigger it
      const widget = document.querySelector('elevenlabs-convai');
      if (widget) {
        // Dispatch a custom event to trigger the widget
        const event = new CustomEvent('elevenlabs-convai-trigger');
        widget.dispatchEvent(event);
        
        // Also try to click the widget if it has a clickable element
        const clickableElement = widget.querySelector('[data-testid="convai-widget-button"], .convai-widget-button, button');
        if (clickableElement) {
          (clickableElement as HTMLElement).click();
        }
      }
    }
  }, [isOpen]);

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <elevenlabs-convai agent-id="agent_0501k4aeyyn6ey99r1bh033z3m91"></elevenlabs-convai>
            </div>
  );
};