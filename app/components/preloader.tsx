import React from 'react';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        {/* Loading animation */}
        <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        {/* Optional loading text */}
        <div className="mt-4 text-center text-gray-600 font-medium">Loading...</div>
      </div>
    </div>
  );
}; 