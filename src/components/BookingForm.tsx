import React, { useState, useEffect } from 'react';
import { Package } from './PackageCard';
import { Calendar, MapPin, Car, User, Phone, CheckSquare, Square, Send } from 'lucide-react';
import { db } from '../lib/db';

interface BookingFormProps {
  packages: Package[];
  selectedPackage: Package;
  onPackageChange: (pkg: Package) => void;
}

interface AddOn {
  id: string;
  name: string;
  price: number;
  description: string;
}

const ADD_ONS: AddOn[] = [
  { id: 'clinical', name: 'Interior & AC Clinical Disinfection', price: 50, description: 'German technology for 99% bacteria, virus, and odor elimination.' },
  { id: 'leather', name: 'Leather Deep Nourishment & Protection', price: 50, description: 'Warm leather balm treatment for softness, protection, and crack prevention.' },
  { id: 'glass', name: 'Glass Rain & Dust Repellent', price: 10, description: 'Nano coating for water beading and protection against dust scratches.' },
  { id: 'carpet', name: 'Carpet Deep Clean', price: 20, description: 'Carpet hand wash with German carpet-care shampoo.' },
  { id: 'engine', name: 'Engine Clean', price: 30, description: 'Low-pressure or steam cleaning with a Canadian specialist engine cleaner.' },
];

export default function BookingForm({ packages, selectedPackage, onPackageChange }: BookingFormProps) {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carDetails, setCarDetails] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    if (!selectedPackage.addOnsAvailable) {
      setSelectedAddOns([]);
    }
  }, [selectedPackage]);

  const toggleAddOn = (id: string) => {
    if (!selectedPackage.addOnsAvailable) return;
    if (selectedAddOns.includes(id)) {
      setSelectedAddOns(selectedAddOns.filter(item => item !== id));
    } else {
      setSelectedAddOns([...selectedAddOns, id]);
    }
  };

  const calculateTotal = () => {
    let total = selectedPackage.price;

    if (selectedPackage.addOnsAvailable) {
      selectedAddOns.forEach(id => {
        const addOn = ADD_ONS.find(a => a.id === id);
        if (addOn) total += addOn.price;
      });
    }

    return total;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !carDetails || !location || !date) {
      alert('Please fill in all details to complete your booking.');
      return;
    }

    setIsSubmitting(true);

    const activeAddOns = selectedPackage.addOnsAvailable
      ? ADD_ONS.filter(a => selectedAddOns.includes(a.id)).map(a => a.name)
      : [];

    const totalPrice = calculateTotal();

    try {
      if (db) {
        await db.insert('orders', {
          customer_name: name,
          phone: phone,
          car_details: carDetails,
          package_name: selectedPackage.name,
          add_ons: activeAddOns,
          total_price: totalPrice,
          preferred_date: date,
          location: location,
          status: 'pending'
        });
      }
    } catch (err) {
      console.error('Database save error, proceeding with WhatsApp redirect:', err);
    }

    const addOnsText = activeAddOns.length > 0
      ? activeAddOns.map(a => `• ${a}`).join('\n')
      : 'None';

    const message = `🇩🇪 *BERLIN CAR WASH PATROL - BOOKING* 🇩🇪\n` +
      `----------------------------------------\n` +
      `👤 *Customer:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🚗 *Car:* ${carDetails}\n` +
      `📍 *Location:* ${location}\n` +
      `📅 *Preferred Date:* ${date}\n\n` +
      `📦 *Selected Package:* ${selectedPackage.name} (${selectedPackage.price} QAR)\n` +
      `✨ *Add-ons:*\n${addOnsText}\n\n` +
      `💰 *Total Price:* ${totalPrice} QAR\n` +
      `----------------------------------------\n` +
      `_Sent from Berlin Car Wash Patrol Web App_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '97433334444';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    setIsSubmitting(false);
    setSuccessMessage(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  return (
    <div id="booking-section" className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-amber-500 font-semibold tracking-wider uppercase text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
          Instant Booking
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-3">
          Configure Your <span className="text-amber-400">German Wash</span>
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Select your package, customize with premium add-ons, and instantly send your booking details to our WhatsApp patrol team.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-amber-400 uppercase tracking-wider">
            Step 1: Confirm Package
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                type="button"
                onClick={() => onPackageChange(pkg)}
                className={`p-3 rounded-xl border text-left transition-all duration-200 ${
                  selectedPackage.id === pkg.id
                    ? 'bg-amber-500/10 border-amber-500 text-white'
                    : 'bg-zinc-900/50 border-zinc-800 text-gray-400 hover:border-zinc-700'
                }`}
              >
                <div className="font-bold text-xs sm:text-sm truncate">{pkg.name}</div>
                <div className="text-amber-400 font-bold text-xs mt-1">{pkg.price} QAR</div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-semibold text-amber-400 uppercase tracking-wider">
              Step 2: Premium Add-ons
            </label>
            {!selectedPackage.addOnsAvailable && (
              <span className="text-xs text-red-500 font-medium bg-red-500/10 px-2 py-0.5 rounded">
                Not available for {selectedPackage.name}
              </span>
            )}
          </div>

          <div className={`grid md:grid-cols-2 gap-4 transition-opacity duration-300 ${
            selectedPackage.addOnsAvailable ? 'opacity-100' : 'opacity-40 pointer-events-none'
          }`}>
            {ADD_ONS.map((addOn) => {
              const isChecked = selectedAddOns.includes(addOn.id);
              return (
                <div
                  key={addOn.id}
                  onClick={() => toggleAddOn(addOn.id)}
                  className={`p-4 rounded-xl border cursor-pointer flex items-start gap-3 transition-all duration-200 ${
                    isChecked
                      ? 'bg-zinc-900 border-amber-500/60 text-white'
                      : 'bg-zinc-900/30 border-zinc-800 text-gray-400 hover:border-zinc-700'
                  }`}
                >
                  <div className="mt-1 text-amber-500">
                    {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-sm text-white">{addOn.name}</span>
                      <span className="text-xs font-bold text-amber-400 shrink-0 ml-2">+{addOn.price} QAR</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{addOn.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-semibold text-amber-400 uppercase tracking-wider">
            Step 3: Your Details
          </label>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-500" />
              <input
                type="tel"
                placeholder="WhatsApp Phone Number (e.g. +974...)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div className="relative">
              <Car className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Car Brand & Model (e.g. Porsche Cayenne)"
                value={carDetails}
                onChange={(e) => setCarDetails(e.target.value)}
                required
                className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div className="relative">
              <MapPin className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Your Location in Qatar (e.g. The Pearl, West Bay)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <div className="relative sm:col-span-2">
              <Calendar className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-500" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full bg-zinc-900/80 border border-zinc-800 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <span className="text-xs text-gray-400 uppercase tracking-wider block">Estimated Total Price</span>
            <div className="flex items-baseline gap-2 justify-center sm:justify-start">
              <span className="text-3xl sm:text-4xl font-display font-black text-amber-400">
                {calculateTotal()}
              </span>
              <span className="text-sm font-bold text-gray-400">QAR</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 py-4 rounded-xl shadow-xl shadow-amber-500/10 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Connecting to WhatsApp...</span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Book via WhatsApp Patrol</span>
              </>
            )}
          </button>
        </div>
      </form>

      {successMessage && (
        <div className="absolute inset-0 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 z-50">
          <div className="w-16 h-16 bg-amber-500/10 border border-amber-500 rounded-full flex items-center justify-center text-amber-400 mb-4 animate-bounce">
            🇩🇪
          </div>
          <h3 className="text-2xl font-display font-bold text-white">Redirecting to WhatsApp...</h3>
          <p className="text-gray-400 text-sm max-w-md mt-2">
            We are preparing your premium German detailing request. Please complete the message send in WhatsApp to secure your slot.
          </p>
        </div>
      )}
    </div>
  );
}
