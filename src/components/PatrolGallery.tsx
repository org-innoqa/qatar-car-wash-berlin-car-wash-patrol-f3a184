import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import patrol01 from '../assets/patrol/patrol-01.webp';
import patrol02 from '../assets/patrol/patrol-02.webp';
import patrol03 from '../assets/patrol/patrol-03.webp';
import patrol04 from '../assets/patrol/patrol-04.webp';
import patrol05 from '../assets/patrol/patrol-05.webp';

const PATROL_PHOTOS = [
  { src: patrol01, alt: 'Berlin Wash Patrol mobile detailing van parked in Qatar' },
  { src: patrol02, alt: 'Berlin Wash Patrol van in a Doha neighborhood' },
  { src: patrol03, alt: 'Side view of the Berlin Wash Patrol service van' },
  { src: patrol04, alt: 'Berlin Wash Patrol mobile car care unit in Doha' },
  { src: patrol05, alt: 'Rear view of the Berlin Wash Patrol detailing van' }
];

export default function PatrolGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % PATROL_PHOTOS.length);
    }, 5_000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + PATROL_PHOTOS.length) % PATROL_PHOTOS.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % PATROL_PHOTOS.length);
  };

  return (
    <section id="patrol" className="relative overflow-hidden bg-[#05070d] py-20">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-red-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
            <MapPin className="h-3.5 w-3.5" /> Mobile Car Care · Qatar
          </span>
          <h2 className="mt-4 font-display text-3xl font-black text-white sm:text-5xl">
            Meet the <span className="text-red-500">Berlin Wash Patrol</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Our fully equipped mobile detailing unit brings certified German-quality car care directly to your location.
          </p>
        </div>

        <div
          className="group relative mx-auto overflow-hidden rounded-3xl border border-blue-500/30 bg-black shadow-[0_0_60px_rgba(29,78,216,0.16)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute left-0 right-0 top-0 z-20 flex h-1.5">
            <div className="w-1/3 bg-blue-600" />
            <div className="w-1/3 bg-red-600" />
            <div className="w-1/3 bg-yellow-400" />
          </div>

          <div className="relative h-[440px] sm:h-[560px] lg:h-[640px]">
            {PATROL_PHOTOS.map((photo, index) => (
              <div
                key={photo.src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === activeIndex ? 'z-10 opacity-100' : 'pointer-events-none opacity-0'
                }`}
                aria-hidden={index !== activeIndex}
              >
                <img
                  src={photo.src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl"
                />
                <div className="absolute inset-0 bg-black/35" />
                <img src={photo.src} alt={photo.alt} className="relative h-full w-full object-contain p-2 sm:p-4" />
              </div>
            ))}

            <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black via-black/55 to-transparent px-6 pb-6 pt-24 sm:px-10">
              <p className="font-display text-xl font-black uppercase tracking-wider text-white sm:text-2xl">
                Mobile car care — we come to you
              </p>
              <p className="mt-1 text-sm font-semibold text-yellow-400">Doha · Qatar · +974 5123 4443</p>
            </div>

            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/15 bg-black/65 p-3 text-white backdrop-blur-md transition hover:border-blue-400 hover:bg-blue-600 sm:left-6"
              aria-label="Previous patrol photo"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/15 bg-black/65 p-3 text-white backdrop-blur-md transition hover:border-red-400 hover:bg-red-600 sm:right-6"
              aria-label="Next patrol photo"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          <div className="relative z-30 flex gap-2 overflow-x-auto border-t border-zinc-800 bg-[#090b12] p-3 sm:justify-center sm:p-4">
            {PATROL_PHOTOS.map((photo, index) => (
              <button
                type="button"
                key={`thumbnail-${photo.src}`}
                onClick={() => setActiveIndex(index)}
                className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-24 ${
                  index === activeIndex
                    ? 'border-yellow-400 opacity-100 shadow-[0_0_16px_rgba(250,204,21,0.3)]'
                    : 'border-transparent opacity-45 hover:opacity-80'
                }`}
                aria-label={`Show patrol photo ${index + 1}`}
                aria-current={index === activeIndex}
              >
                <img src={photo.src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
