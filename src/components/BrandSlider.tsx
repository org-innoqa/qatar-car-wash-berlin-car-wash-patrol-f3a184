import React from 'react';

const BRANDS = [
  {
    name: 'BOSCH',
    subtitle: 'Invented for life',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg',
    alt: 'Bosch logo'
  },
  {
    name: 'SONAX',
    subtitle: 'German Car Care',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/SONAX-Logo.svg',
    alt: 'SONAX logo'
  },
  {
    name: 'KÄRCHER',
    subtitle: 'Professional Cleaning Equipment',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Karcher_logo.svg',
    alt: 'Kärcher logo'
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
              className="w-56 sm:w-64 h-24 shrink-0 bg-white border border-zinc-700 rounded-xl px-5 py-3 flex flex-col items-center justify-center gap-1 transition-all hover:border-amber-500/70 hover:shadow-[0_0_20px_rgba(212,175,55,0.12)]"
            >
              <div className="h-14 w-full flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.alt}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="text-[9px] text-zinc-500 uppercase tracking-wider font-semibold">
                {brand.subtitle}
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
