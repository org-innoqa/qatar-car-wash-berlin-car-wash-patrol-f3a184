import React from 'react';
import { ShieldCheck, Award, Sparkles, HelpCircle } from 'lucide-react';
import BrandSlider from './BrandSlider';
import { useI18n } from '../i18n';

const ICONS = [Award, ShieldCheck, Sparkles, HelpCircle];

export default function GermanQualityBadge() {
  const { t } = useI18n();
  return (
    <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 border border-amber-500/30 rounded-2xl p-8 max-w-5xl mx-auto my-12 relative overflow-hidden">
      {/* German Flag Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex">
        <div className="w-1/3 h-full bg-blue-600"></div>
        <div className="w-1/3 h-full bg-red-600"></div>
        <div className="w-1/3 h-full bg-amber-500"></div>
      </div>

      <div className="relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-start space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              {t.quality.badge}
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              {t.quality.titleStart} <span className="text-amber-400">{t.quality.titleHighlight}</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.quality.description}
            </p>
          </div>

          <div className="col-span-2 grid sm:grid-cols-2 gap-6">
            {t.quality.items.map((item, index) => {
              const Icon = ICONS[index];
              return (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                  <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 h-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <BrandSlider />
      </div>
    </div>
  );
}
