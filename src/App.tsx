import React, { useState } from 'react';
import { Shield, Sparkles, Star, ArrowRight, CheckCircle2, PhoneCall, Award, Zap, HelpCircle, ChevronDown } from 'lucide-react';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import PackageCard, { Package } from './components/PackageCard';
import BookingForm from './components/BookingForm';
import AppSubscription from './components/AppSubscription';
import GermanQualityBadge from './components/GermanQualityBadge';

const PACKAGES: Package[] = [
  {
    id: 'klassik',
    name: 'Klassik Wash',
    price: 150,
    tagline: 'Essential premium care for daily luxury driving.',
    features: [
      'Premium exterior hand wash with German pH-neutral shampoo',
      'Interior vacuuming & dust-off',
      'Wheel cleaning & tire dressing',
      'Streak-free window cleaning',
      'Door jambs wiped down'
    ],
    addOnsAvailable: false
  },
  {
    id: 'berlin-premium',
    name: 'Berlin Premium',
    price: 290,
    tagline: 'Deep gloss enhancement & protective wax coating.',
    features: [
      'Everything in Klassik Wash +',
      'Premium German Carnauba Wax protection',
      'Deep interior wipe-down & sanitization',
      'Exhaust tip polishing',
      'Air vents detailed & dusted',
      'Unlocks premium add-ons'
    ],
    isPopular: true,
    addOnsAvailable: true
  },
  {
    id: 'deutscher-standard',
    name: 'Deutscher Standard',
    price: 490,
    tagline: 'Full paint decontamination & leather restoration.',
    features: [
      'Everything in Berlin Premium +',
      'Paint clay bar decontamination',
      'Premium polymer sealant (up to 6 months protection)',
      'Leather cleaning & deep conditioning',
      'Matte finish dashboard UV protection',
      'Unlocks premium add-ons'
    ],
    addOnsAvailable: true
  },
  {
    id: 'meisterklasse',
    name: 'Meisterklasse Detail',
    price: 990,
    tagline: 'The ultimate German detailing experience.',
    features: [
      'The ultimate German detailing experience',
      'Multi-stage paint correction prep',
      'Premium ceramic spray coating (up to 12 months protection)',
      'Deep steam cleaning of all interior surfaces',
      'Wheel-off deep barrel cleaning',
      'Unlocks premium add-ons'
    ],
    addOnsAvailable: true
  }
];

export default function App() { 
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
    <div className="min-h-screen bg-[#08080a] text-gray-100 selection:bg-amber-500 selection:text-black">
      
      {/* Premium Header / Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm border-b border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-display font-black text-lg sm:text-xl tracking-wider text-white flex items-center gap-2">
                BERLIN <span className="text-amber-400">CAR WASH PATROL</span>
              </span>
              <span className="text-[9px] text-gray-400 tracking-[0.25em] uppercase font-bold">
                German Luxury Detailing • Qatar
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-gray-300">
            <a href="#why-us" className="hover:text-amber-400 transition-colors">Why German Quality</a>
            <a href="#packages" className="hover:text-amber-400 transition-colors">Packages</a>
            <a href="#tokens" className="hover:text-amber-400 transition-colors">Token Packs</a>
            <a href="#app" className="hover:text-amber-400 transition-colors">Mobile App</a>
          </div>

          <div>
            <a 
              href="#booking-section"
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/10 flex items-center gap-1.5"
            >
              Book Patrol Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Looping Background Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-black/50 z-10"></div>
        
        {/* Looping Detailing Video with reliable CDN sources and poster fallback */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-50 contrast-125"
          poster="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
        >
          <source 
            src="https://player.vimeo.com/external/538571802.sd.mp4?s=7a6b37f50c660500114022009336c50f31739857&profile_id=165&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          <source 
            src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054f4d9b38f1378ea166c20699ca333&profile_id=165&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

        {/* German Flag Accent Line at bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 h-1 flex z-20">
          <div className="w-1/3 h-full bg-black"></div>
          <div className="w-1/3 h-full bg-red-600"></div>
          <div className="w-1/3 h-full bg-amber-500"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 space-y-8 py-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase">
            🇩🇪 Certified German Detailing Experts
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-none">
            RESHAPING QATAR'S <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-300">
              CAR WASH INDUSTRY
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Say goodbye to cheap 20 QAR non-expert washes that scratch your paint. Experience premium German-certified luxury car care with 100% German products, engineered specifically for high-end and luxury vehicles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#packages"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-xl shadow-xl shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              Explore Packages <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#booking-section"
              className="w-full sm:w-auto bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
            >
              Configure Wash & Book
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-12 border-t border-zinc-800/50">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-black text-white">100%</div>
              <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1">German Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-black text-amber-400">Certified</div>
              <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1">Detailing Experts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-black text-white">0%</div>
              <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1">Scratch Risk</div>
            </div>
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

      {/* Before/After Interactive Slider */}
      <BeforeAfterSlider />

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">Premium Detailing Tiers</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-2">
              Select Your <span className="text-amber-400">Berlin Patrol</span> Package
            </h2>
            <p className="text-gray-400 mt-4">
              Every package is executed with meticulous German precision. Select a package below to configure your booking and add-ons.
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
                  🔥 Best Value Offer
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
                  Buy 4 Washes, <span className="text-amber-400">Pay For Only 3</span>
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Secure your luxury car care for the upcoming months. We issue 4 digital tokens that can be used whenever it suits you best. Fully transferable between your family cars, valid for 12 months.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>Save 25% on your detailing budget</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>Priority booking slots during peak times</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>High-res before/after photos sent to your phone</span>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center space-y-6">
                <div className="space-y-1">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Berlin Patrol Token Pack</span>
                  <div className="text-4xl font-display font-black text-white">Save 25%</div>
                  <p className="text-xs text-amber-400 font-medium">Valid for all luxury car models in Qatar</p>
                </div>
                
                <div className="border-t border-zinc-800 my-4"></div>

                <div className="space-y-2">
                  <a 
                    href="#booking-section"
                    className="block w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/10"
                  >
                    Configure & Buy Tokens
                  </a>
                  <p className="text-[10px] text-gray-500">Tokens are managed digitally and linked to your phone number.</p>
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
              <span className="font-display font-black text-base tracking-wider text-white">
                BERLIN <span className="text-amber-400">CAR WASH PATROL</span>
              </span>
              <p className="text-gray-400 leading-relaxed">
                Reshaping the luxury car wash industry in Qatar with certified German detailing standards and premium products.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-3">Our Services</h4>
              <ul className="space-y-2">
                <li><a href="#packages" className="hover:text-amber-400 transition-colors">Klassik Wash</a></li>
                <li><a href="#packages" className="hover:text-amber-400 transition-colors">Berlin Premium</a></li>
                <li><a href="#packages" className="hover:text-amber-400 transition-colors">Deutscher Standard</a></li>
                <li><a href="#packages" className="hover:text-amber-400 transition-colors">Meisterklasse Detail</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-3">Add-ons</h4>
              <ul className="space-y-2">
                <li>Ozon Odor Elimination</li>
                <li>Leather Deep Nourishment</li>
                <li>Engine Bay Precision Clean</li>
                <li>Glass Rain-Repellent Nano</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider mb-3">Contact & Patrol</h4>
              <p className="text-gray-400 leading-relaxed">
                Doha, Qatar<br />
                Patrol Hours: 8:00 AM - 10:00 PM<br />
                WhatsApp: +974 3333 4444
              </p>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Berlin Car Wash Patrol. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}