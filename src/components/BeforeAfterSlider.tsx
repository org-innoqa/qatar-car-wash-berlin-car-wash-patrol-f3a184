import React, { useState, useRef } from 'react';
import { MoveLeft, MoveRight } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-black to-[#08080a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">Uncompromising Results</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">
            German Precision, <span className="text-amber-400">Visible Difference</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Drag the slider to see how our certified experts restore the deep, mirror-like gloss of luxury paintwork compared to standard dusty Qatar road conditions.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative h-[450px] rounded-2xl overflow-hidden border border-zinc-800 select-none cursor-ew-resize shadow-2xl"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* Before Image (Dirty/Dusty) */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1600&q=80" 
              alt="Before Detailing"
              className="w-full h-full object-cover filter brightness-75"
            />
            <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md border border-red-600/30 text-white px-4 py-2 rounded-lg font-semibold text-sm tracking-wider uppercase">
              Before: Qatar Dust & Swirls
            </div>
          </div>

          {/* After Image (Clean/Shiny) */}
          <div 
            className="absolute inset-0 overflow-hidden transition-all duration-75 ease-out"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80" 
              alt="After Detailing"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-amber-500 text-black px-4 py-2 rounded-lg font-bold text-sm tracking-wider uppercase shadow-lg">
              After: Berlin Patrol Finish
            </div>
          </div>

          {/* Slider Bar & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-amber-500 cursor-ew-resize z-10"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-black shadow-2xl border-4 border-black">
              <div className="flex gap-0.5">
                <MoveLeft className="w-3.5 h-3.5" />
                <MoveRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-6 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-600"></span>
            Swirl & Scratch Removal
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            German Ceramic Protection
          </span>
        </div>
      </div>
    </div>
  );
}