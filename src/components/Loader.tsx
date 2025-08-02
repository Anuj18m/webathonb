import React, { useState, useEffect } from 'react';
import { Camera, ArrowRight } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center transition-opacity duration-500 ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 border-4 border-white/20 rounded-full animate-spin border-t-white"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Camera className="w-8 h-8 text-white animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">
          FrameCraft Studio
        </h1>
        
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-white/80 text-sm mb-2">
          {progress < 30 ? 'Initializing components...' :
           progress < 60 ? 'Loading assets...' :
           progress < 90 ? 'Optimizing experience...' :
           'Ready to capture!'}
        </p>
        
        <div className="flex items-center justify-center text-white/60 text-xs">
          <span>{Math.round(progress)}%</span>
          <ArrowRight className="w-3 h-3 ml-2 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Loader;