"use client";

import { useState } from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, Wrench, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import * as motion from 'motion/react-client';

export function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url(https://picsum.photos/seed/garage/1920/1080?blur=4)] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/90 to-zinc-900/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 font-semibold text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Lakewood&apos;s #1 Rated Garage Door Service
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
              Top-Rated Local <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Garage Door Repair
              </span>
            </h1>
            
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed max-w-lg">
              Looking for the best garage door repair in Lakewood, CO? Our certified local experts provide same-day emergency service for broken springs, faulty openers, and off-track doors with upfront pricing and guaranteed satisfaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:5627844156" 
                className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 hover:-translate-y-0.5"
              >
                <PhoneCall className="w-5 h-5" />
                Call (562) 784-4156
              </a>
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:-translate-y-0.5"
              >
                Book Online
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-orange-500" />
                Certified & Insured
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                Available 24/7 in Lakewood
              </div>
            </div>
          </motion.div>

          {/* Hero Form / Interactive Element */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-2xl blur-3xl"></div>
            <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 p-8 rounded-2xl shadow-2xl min-h-[450px] flex flex-col justify-center">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-full"
                >
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Request Received!</h4>
                  <p className="text-zinc-400 text-sm mb-6">
                    Thank you! We&apos;ll contact you within 15 minutes.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium transition-colors text-sm"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-2">Request a Free Estimate</h3>
                  <p className="text-zinc-400 mb-6">Fill out the form below and we&apos;ll contact you within 15 minutes.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">First Name</label>
                        <input type="text" required className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300">Last Name</label>
                        <input type="text" required className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-300">Phone Number</label>
                      <input type="tel" required className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="(562) 784-4156" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-300">Service Needed</label>
                      <select required defaultValue="" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors appearance-none">
                        <option value="" disabled>Select a service...</option>
                        <option>Broken Spring Repair</option>
                        <option>Opener Repair/Install</option>
                        <option>New Garage Door</option>
                        <option>General Maintenance</option>
                        <option>Emergency Service</option>
                      </select>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-orange-600 hover:bg-orange-500 disabled:bg-orange-600/50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors mt-4 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        'Get My Free Quote'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
