import React from 'react';
import { Check, Sparkles, ShieldAlert } from 'lucide-react';

export interface Package {
  id: string;
  name: string;
  price: number;
  tagline: string;
  features: string[];
  isPopular?: boolean;
  addOnsAvailable: boolean;
}

interface PackageCardProps {
  pkg: Package;
  isSelected: boolean;
  onSelect: () => void;
}

export default function PackageCard({ pkg, isSelected, onSelect }: PackageCardProps) {
  return (
    <div 
      onClick={onSelect}
      className={`relative rounded-2xl p-6 cursor-pointer transition-all duration-300 border flex flex-col justify-between h-full ${
        isSelected 
          ? 'bg-gradient-to-b from-blue-950/35 to-black border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.2)] scale-[1.02]'
          : 'bg-zinc-950/80 border-zinc-800 hover:border-zinc-700 hover:scale-[1.01]'
      }`}
    >
      {pkg.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs px-4 py-1 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> Most Popular
        </div>
      )}

      <div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-display font-bold text-white">{pkg.name}</h3>
            <p className="text-xs text-gray-400 mt-1">{pkg.tagline}</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-display font-black text-yellow-400">{pkg.price}</span>
            <span className="text-xs text-gray-400 block">QAR</span>
          </div>
        </div>

        <div className="border-t border-zinc-800/80 my-4"></div>

        <ul className="space-y-3 mb-6">
          {pkg.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
              <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))} 
        </ul>
      </div>

      <div>
        {!pkg.addOnsAvailable && (
          <div className="flex items-center gap-1.5 text-xs text-blue-300/80 bg-blue-500/5 border border-blue-500/15 p-2.5 rounded-lg mb-4">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>Add-ons locked for this tier. Upgrade to unlock premium add-ons.</span>
          </div>
        )}

        <button 
          className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
            isSelected 
              ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/20'
              : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800'
          }`}
        >
          {isSelected ? 'Selected Package' : 'Select Package'}
        </button>
      </div>
    </div>
  );
}
