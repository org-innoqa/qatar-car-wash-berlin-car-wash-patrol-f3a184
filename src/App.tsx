import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, Languages } from 'lucide-react';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import PackageCard, { Package } from './components/PackageCard';
import BookingForm from './components/BookingForm';
import AppSubscription from './components/AppSubscription';
import GermanQualityBadge from './components/GermanQualityBadge';
import PatrolGallery from './components/PatrolGallery';
import PriceCountdown from './components/PriceCountdown';
import heroCarWash from './assets/hero/luxury-car-wash.webp';
import brandLogo from './assets/brand/berlin-wash-patrol-logo.webp';
import { useI18n } from './i18n';

// Package names are brand names and stay untranslated; taglines/features live in src/i18n.
const PACKAGES: Package[] = [
  {
    id: 'klassik',
    name: 'Klassik Autowäsche',
    price: 40,
    originalPrice: 50,
    addOnsAvailable: false
  },
  {
    id: 'berlin-premium',
    name: 'Berlin Premium',
    price: 130,
    originalPrice: 150,
    isPopular: true,
    addOnsAvailable: true
  },
  {
    id: 'deutscher-standard',
    name: 'Deutscher Standart',
    price: 270,
    originalPrice: 300,
    addOnsAvailable: true
  },
  {
    id: 'meisterklasse',
    name: 'Meister Klasse',
    price: 520,
    originalPrice: 600,
    addOnsAvailable: true
  }
];

export default function App() {
  const { t, lang, toggleLang } = useI18n();
  const [selectedPackage, setSelectedPackage] = useState<Package>(PACKAGES[1]); // Default to Berlin Premium

  const handlePackageSelect = (pkg: Package) => {
    setSelectedPackage(pkg);
    // Smooth scroll to booking form
    const element = document.getElementById('booking-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-gray-100 selection:bg-red-600 selection:text-white">

      {/* Premium Header / Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm border-b border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3" aria-label={t.nav.home}>
            <img
              src={brandLogo}
              alt="Berlin Wash Patrol"
              data-critical-asset="true"
              className="h-14 w-14 rounded-xl object-contain"
            />
            <div className="hidden flex-col sm:flex">
              <span dir="ltr" className="font-display font-black text-lg sm:text-xl tracking-wider text-white flex items-center gap-2">
                <span className="text-red-500">BERLIN</span> WASH <span className="text-yellow-400">PATROL</span>
              </span>
              <span className="text-[9px] text-gray-400 tracking-[0.25em] uppercase font-bold">
                {t.common.brandTagline}
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-wider text-gray-300 lg:flex">
            <a href="#why-us" className="transition-colors hover:text-yellow-400">{t.nav.germanQuality}</a>
            <a href="#patrol" className="transition-colors hover:text-blue-400">{t.nav.patrol}</a>
            <a href="#packages" className="transition-colors hover:text-red-400">{t.nav.packages}</a>
            <a href="#app" className="transition-colors hover:text-yellow-400">{t.nav.app}</a>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLang}
              aria-label={t.common.languageSwitchLabel}
              lang={lang === 'ar' ? 'en' : 'ar'}
              className="flex items-center gap-1.5 rounded-xl border border-zinc-700 bg-black/50 px-3 py-2.5 text-xs font-bold text-white transition-colors hover:border-yellow-400 hover:text-yellow-400"
            >
              <Languages className="h-4 w-4" />
              <span style={{ fontFamily: lang === 'ar' ? 'Montserrat, sans-serif' : 'Cairo, sans-serif' }}>
                {t.common.languageSwitch}
              </span>
            </button>
            <a
              href="#booking-section"
              className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:from-red-500 hover:to-red-600 sm:px-5"
            >
              {t.nav.bookNow}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-black/50 z-10"></div>

        {/* Premium detailing image stored locally for a reliable, relevant hero */}
        <img
          src={heroCarWash}
          alt={t.hero.imageAlt}
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-50 contrast-125"
        />

        {/* German Flag Accent Line at bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 h-1 flex z-20">
          <div className="w-1/3 h-full bg-blue-600"></div>
          <div className="w-1/3 h-full bg-red-600"></div>
          <div className="w-1/3 h-full bg-amber-500"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 space-y-8 py-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-black/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-yellow-400 backdrop-blur-md">
            {t.hero.badge}
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-none rtl:leading-tight">
            {t.hero.titleLine1} <br />
            <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
              {t.hero.titleLine2}
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#packages"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-red-600/20 transition-all duration-300 hover:scale-[1.02] hover:from-red-500 hover:to-red-600 sm:w-auto"
            >
              {t.hero.explorePackages} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
            <a
              href="#booking-section"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-500/50 bg-zinc-900/80 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-blue-950/70 sm:w-auto"
            >
              {t.hero.configureAndBook}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-12 border-t border-zinc-800/50">
            {t.hero.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl sm:text-3xl font-display font-black ${index === 1 ? 'text-yellow-400' : 'text-white'}`}>
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden sm:block">
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </div>
      </section>

      {/* German Quality Badge Section */}
      <section id="why-us" className="py-12 bg-[#08080a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GermanQualityBadge />
        </div>
      </section>

      {/* Our mobile patrol gallery */}
      <PatrolGallery />

      {/* Before/After Interactive Slider */}
      <BeforeAfterSlider />

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PriceCountdown />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">{t.packages.eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">
              {t.packages.titleStart} <span className="text-red-500">{t.packages.titleHighlight}</span> {t.packages.titleEnd}
            </h2>
            <p className="text-gray-400 mt-4">
              {t.packages.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PACKAGES.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                isSelected={selectedPackage.id === pkg.id}
                onSelect={() => handlePackageSelect(pkg)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Booking Configurator Section */}
      <section className="py-20 bg-[#08080a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm
            packages={PACKAGES}
            selectedPackage={selectedPackage}
            onPackageChange={setSelectedPackage}
          />
        </div>
      </section>

      {/* Token Pack Promotion Section */}
      <section id="tokens" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12">
            <div className="grid md:grid-cols-12 gap-8 items-center">

              <div className="md:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
                  {t.tokens.badge}
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
                  {t.tokens.titleStart} <span className="text-amber-400">{t.tokens.titleHighlight}</span>
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {t.tokens.description}
                </p>
                <ul className="space-y-3">
                  {t.tokens.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center space-y-6">
                <div className="space-y-1">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">{t.tokens.cardLabel}</span>
                  <div className="text-4xl font-display font-black text-white">{t.tokens.cardValue}</div>
                  <p className="text-xs text-amber-400 font-medium">{t.tokens.cardNote}</p>
                </div>

                <div className="border-t border-zinc-800 my-4"></div>

                <div className="space-y-2">
                  <a
                    href="#booking-section"
                    className="block w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/10"
                  >
                    {t.tokens.cta}
                  </a>
                  <p className="text-[10px] text-gray-500">{t.tokens.footnote}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Launch Section */}
      <section id="app">
        <AppSubscription />
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-900 py-12 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <img
                src={brandLogo}
                alt="Berlin Wash Patrol"
                data-critical-asset="true"
                className="h-24 w-24 rounded-xl object-contain"
              />
              <span dir="ltr" className="block font-display font-black text-base tracking-wider text-white">
                <span className="text-red-500">BERLIN</span> WASH <span className="text-yellow-400">PATROL</span>
              </span>
              <p className="text-gray-400 leading-relaxed">
                {t.footer.about}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-3">{t.footer.services}</h4>
              <ul className="space-y-2">
                {PACKAGES.map((pkg) => (
                  <li key={pkg.id}><a href="#packages" className="hover:text-amber-400 transition-colors">{pkg.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-3">{t.footer.addOns}</h4>
              <ul className="space-y-2">
                {t.footer.addOnList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-3">{t.footer.contact}</h4>
              <p className="text-gray-400 leading-relaxed">
                {t.footer.city}<br />
                {t.footer.hours}<br />
                {t.footer.whatsapp}: <span dir="ltr">+974 5123 4443</span>
              </p>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} {t.footer.rights}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-400 transition-colors">{t.footer.terms}</a>
              <a href="#" className="hover:text-amber-400 transition-colors">{t.footer.privacy}</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
