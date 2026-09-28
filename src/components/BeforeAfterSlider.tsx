import React, { useState, useRef } from 'react';
import { MoveLeft, MoveRight } from 'lucide-react';
import carAfter from '../assets/comparison/car-after.webp';
import carBefore from '../assets/comparison/car-before.webp';
import { useI18n } from '../i18n';

export default function BeforeAfterSlider() {
  const { t } = useI18n();
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
          <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">{t.beforeAfter.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">
            {t.beforeAfter.titleStart} <span className="text-amber-400">{t.beforeAfter.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 mt-4">
            {t.beforeAfter.description}
          </p>
        </div>

        <div 
          ref={containerRef}
          dir="ltr"
          className="relative h-[450px] rounded-2xl overflow-hidden border border-zinc-800 select-none cursor-ew-resize shadow-2xl"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* Before Image (Dirty/Dusty Luxury Car) */}
          <div className="absolute inset-0">
            <img 
              src={carBefore}
              alt={t.beforeAfter.beforeAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md border border-red-600/30 text-white px-4 py-2 rounded-lg font-semibold text-sm tracking-wider uppercase">
              {t.beforeAfter.beforeLabel}
            </div>
          </div>

          {/* After Image (Clean/Shiny Luxury Car) */}
          <div 
            className="absolute inset-0 overflow-hidden transition-all duration-75 ease-out"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              src={carAfter}
              alt={t.beforeAfter.afterAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-amber-500 text-black px-4 py-2 rounded-lg font-bold text-sm tracking-wider uppercase shadow-lg">
              {t.beforeAfter.afterLabel}
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
            {t.beforeAfter.legendSwirl}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            {t.beforeAfter.legendCeramic}
          </span>
        </div>
      </div>
    </div>
  );
}
