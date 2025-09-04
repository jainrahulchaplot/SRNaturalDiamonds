import React, { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  src: string;
  opacity?: number;
  className?: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  src, 
  opacity = 0.4, 
  className = '' 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video plays on mobile
    video.muted = true;
    video.playsInline = true;
    
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Video autoplay failed:', error);
      }
    };

    playVideo();
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
      >
        <source src={src} type="video/mp4" />
      </video>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
    </div>
  );
};