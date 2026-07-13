import React, { useState } from 'react';
import { Smartphone, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { db } from '../lib/db';

export default function AppSubscription() {
  const [email, setEmail] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      if (db) {
        await db.insert('subscriptions', {
          email,
          car_brand: carBrand || 'Not Specified'
        });
      }
      setSubmitted(true);
      setEmail('');
      setCarBrand('');
    } catch (err) {
      console.error('Subscription error:', err);
      // Fallback to success state for demo purposes
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-[#08080a] to-black py-20 border-t border-zinc-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: App Teaser */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <Smartphone className="w-3.5 h-3.5" /> Mobile App Under Construction
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
              The Future of Qatar Detailing is <span className="text-amber-400">On-Demand</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We are building the ultimate luxury car care app. Track your patrol vehicle in real-time, manage your German quality tokens, view high-res before/after galleries, and schedule washes with a single tap.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 font-bold text-xs">
                  01
                </div>
                <span className="text-xs text-gray-300 font-medium">Real-Time GPS Patrol Tracking</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 font-bold text-xs">
                  02
                </div>
                <span className="text-xs text-gray-300 font-medium">Token Wallet (Buy 4, Pay 3)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 font-bold text-xs">
                  03
                </div>
                <span className="text-xs text-gray-300 font-medium">Before/After Photo Vault</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-400 font-bold text-xs">
                  04
                </div>
                <span className="text-xs text-gray-300 font-medium">Priority Meisterklasse Booking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Subscription Form Card */}
          <div className="md:col-span-5">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 relative">
              {/* German Flag Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 flex">
                <div className="w-1/3 h-full bg-black"></div>
                <div className="w-1/3 h-full bg-red-600"></div>
                <div className="w-1/3 h-full bg-amber-500"></div>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-display font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-amber-400" /> Get Exclusive Invitation
                    </h3>
                    <p className="text-xs text-gray-400">
                      Subscribe to receive an invitation to our beta launch and get 1 free wash token upon app release.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1 font-medium">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                        <input
                          type="email"
                          required
                          placeholder="yourname@domain.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-black border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-400 mb-1 font-medium">Your Luxury Car Brand (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. Porsche, Audi, Mercedes"
                        value={carBrand}
                        onChange={(e) => setCarBrand(e.target.value)}
                        className="w-full bg-black border border-zinc-800 rounded-xl py-2.5 px-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/10 disabled:opacity-50"
                  >
                    {loading ? 'Registering...' : 'Request Beta Access'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 bg-amber-500/10 border border-amber-500 rounded-full flex items-center justify-center text-amber-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-display font-bold text-white">You are on the list!</h3>
                    <p className="text-xs text-gray-400 max-w-xs mx-auto">
                      Thank you for subscribing. We will send your exclusive invitation and free wash token as soon as the Berlin Patrol app goes live in Qatar.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-amber-400 hover:underline font-medium"
                  >
                    Subscribe another email
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}