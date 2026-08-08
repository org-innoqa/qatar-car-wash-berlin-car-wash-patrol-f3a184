import React, { useEffect, useState } from 'react';
import { Clock3, Sparkles } from 'lucide-react';

const OFFER_END = new Date('2026-09-08T19:23:12+03:00').getTime();

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function calculateTimeRemaining(): TimeRemaining {
  const difference = Math.max(0, OFFER_END - Date.now());

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
    expired: difference === 0
  };
}

const TIME_UNITS: Array<{ key: keyof Omit<TimeRemaining, 'expired'>; label: string }> = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' }
];

export default function PriceCountdown() {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1_000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative mb-14 overflow-hidden rounded-3xl border border-red-500/40 bg-gradient-to-r from-blue-950/55 via-zinc-950 to-red-950/55 p-5 shadow-[0_0_50px_rgba(220,38,38,0.12)] sm:p-8">
      <div className="absolute inset-x-0 top-0 flex h-1.5">
        <div className="w-1/3 bg-blue-600" />
        <div className="w-1/3 bg-red-600" />
        <div className="w-1/3 bg-yellow-400" />
      </div>

      <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-yellow-300">
            <Sparkles className="h-3.5 w-3.5" /> Limited-Time Launch Prices
          </span>
          <h3 className="mt-3 font-display text-2xl font-black uppercase text-white sm:text-3xl">
            Book before the <span className="text-green-400">special prices</span> end
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-400">
            Lock in the current promotional rates before the countdown ends and standard prices return.
          </p>
        </div>

        {timeRemaining.expired ? (
          <div className="rounded-2xl border border-red-500/30 bg-black/40 px-8 py-5 text-center">
            <Clock3 className="mx-auto h-6 w-6 text-red-400" />
            <p className="mt-2 font-bold uppercase tracking-wider text-white">Offer period ended</p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-3" aria-label="Promotional price countdown">
            {TIME_UNITS.map(({ key, label }) => (
              <div key={key} className="min-w-0 rounded-xl border border-white/10 bg-black/45 px-2 py-3 text-center sm:min-w-20 sm:px-4">
                <span className="block font-display text-2xl font-black tabular-nums text-white sm:text-3xl">
                  {String(timeRemaining[key]).padStart(2, '0')}
                </span>
                <span className="mt-1 block text-[8px] font-bold uppercase tracking-wider text-gray-500 sm:text-[9px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
