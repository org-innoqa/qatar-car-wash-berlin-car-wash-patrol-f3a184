import React from 'react';
import { ShieldCheck, Award, Sparkles, HelpCircle } from 'lucide-react';

export default function GermanQualityBadge() {
  return (
    <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border border-amber-500/30 rounded-2xl p-8 max-w-5xl mx-auto my-12 relative overflow-hidden">
      {/* German Flag Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        <div className="w-1/3 h-full bg-black"></div>
        <div className="w-1/3 h-full bg-red-600"></div>
        <div className="w-1/3 h-full bg-amber-500"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
        <div className="text-center md:text-left space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            🇩🇪 Certified Standards
          </div>
          <h3 className="text-2xl font-display font-bold text-white">
            The German Detailing <span className="text-amber-400">Difference</span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Moving Qatar away from cheap 20 QAR non-expert washes to premium, certified luxury car care.
          </p>
        </div>

        <div className="col-span-2 grid sm:grid-cols-2 gap-6">
          <div className="flex gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 h-fit">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">German Education Certificate</h4>
              <p className="text-xs text-gray-400 mt-1">
                Our detailers are certified in Germany, trained specifically to handle high-end German & luxury paintwork.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 h-fit">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">100% German Products</h4>
              <p className="text-xs text-gray-400 mt-1">
                We exclusively use premium German brands like Koch-Chemie, Sonax, and Menzerna for unmatched results.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 h-fit">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Scratch-Free Guarantee</h4>
              <p className="text-xs text-gray-400 mt-1">
                Using the multi-bucket grit-guard system and ultra-plush microfibers. No swirls, no scratches.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 h-fit">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Before/After Proof</h4>
              <p className="text-xs text-gray-400 mt-1">
                Receive high-resolution before & after photos directly to your phone after every single session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}