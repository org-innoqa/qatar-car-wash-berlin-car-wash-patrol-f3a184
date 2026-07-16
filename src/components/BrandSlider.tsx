import React from 'react';

const BRANDS = [
  {
    name: 'SONAX',
    subtitle: 'German Car Care',
    mark: 'S',
    className: 'text-red-500',
    markClassName: 'bg-red-500 text-white'
  },
  {
    name: 'KARCHER',
    subtitle: 'Professional Equipment',
    mark: 'K',
    className: 'text-yellow-400',
    markClassName: 'bg-yellow-400 text-black'
  },
  {
    name: 'BRILLER',
    subtitle: 'Detailing Solutions',
    mark: 'B',
    className: 'text-cyan-300',
    markClassName: 'bg-cyan-300 text-black'
  },
  {
    name: 'BOSCH',
    subtitle: 'German Engineering',
    mark: 'B',
    className: 'text-red-500',
    markClassName: 'bg-red-500 text-white'
  }
];

export default function BrandSlider() {
  const slides = [...BRANDS, ...BRANDS];

  return (
    <section className="mt-10 pt-8 border-t border-zinc-800/80" aria-label="Product brands">
      <div className="text-center mb-6">
        <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">
          Our trusted product & equipment references
        </span>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-brand-slider gap-4 hover:[animation-play-state:paused]">
          {slides.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="w-56 sm:w-64 h-24 shrink-0 bg-black/60 border border-zinc-800 rounded-xl px-5 flex items-center gap-4 transition-colors hover:border-amber-500/50"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-black text-xl ${brand.markClassName}`}>
                {brand.mark}
              </div>
              <div>
                <div className={`font-display font-black text-xl tracking-[0.12em] ${brand.className}`}>
                  {brand.name}
                </div>
                <div className="text-[9px] text-gray-500 uppercase tracking-wider mt-1">
                  {brand.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-[10px] text-gray-600 mt-5">
        Selected for professional German-standard cleaning, polishing and workshop care.
      </p>
    </section>
  );
}
