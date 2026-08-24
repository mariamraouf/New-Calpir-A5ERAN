"use client";

import React from 'react';

interface VideoBackgroundProps {
  src: string;
  children: React.ReactNode;
  overlayClassName?: string;
  className?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  src, 
  children, 
  overlayClassName = 'bg-white/80 backdrop-blur-sm',
  className = ''
}) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <video
        key={src}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 z-10 ${overlayClassName}`} />
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;