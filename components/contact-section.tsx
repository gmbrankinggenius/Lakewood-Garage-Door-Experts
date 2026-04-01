"use client";

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import * as motion from 'motion/react-client';

export function ContactSection() {
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
    <section id="contact" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://picsum.photos/seed/map/1920/1080?blur=4')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Request Your Free Estimate
          </h3>
          <p className="text-lg text-zinc-400">
            Need immediate assistance or looking for a quote on a new door? Fill out the form below or call us directly. We respond to all inquiries within 15 minutes during business hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-zinc-300 text-sm mb-1">Call Us 24/7</div>
                    <a href="tel:5627844156" className="text-xl font-bold text-white hover:text-orange-500 transition-colors">(562) 784-4156</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-zinc-300 text-sm mb-1">Email Us</div>
                    <a href="mailto:service@lakewoodgaragedoors.com" className="text-lg font-medium text-white hover:text-orange-500 transition-colors">service@lakewoodgaragedoors.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-zinc-300 text-sm mb-1">Service Area</div>
                    <div className="text-lg font-medium text-white">Lakewood, CO & Surrounding Areas</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-zinc-300 text-sm mb-1">Business Hours</div>
                    <div className="text-lg font-medium text-white">24/7 Emergency Service</div>
                    <div className="text-zinc-400 text-sm mt-1">Regular: Mon-Sat 7am-7pm</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-10 rounded-2xl shadow-2xl min-h-[600px] flex flex-col justify-center">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 h-full"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4">Request Received!</h4>
                  <p className="text-zinc-400 text-lg mb-8 max-w-md">
                    Thank you for reaching out. One of our local experts will contact you shortly to confirm your service.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl font-medium transition-colors"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">First Name *</label>
                    <input type="text" required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Last Name *</label>
                    <input type="text" required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Phone Number *</label>
                    <input type="tel" required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="(562) 784-4156" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Email Address</label>
                    <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Service Needed *</label>
                  <select required defaultValue="" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors appearance-none">
                    <option value="" disabled>Select a service...</option>
                    <option>Broken Spring Repair</option>
                    <option>Opener Repair/Install</option>
                    <option>New Garage Door</option>
                    <option>General Maintenance</option>
                    <option>Emergency Service</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Message / Details</label>
                  <textarea rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none" placeholder="Please describe your issue..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-500 disabled:bg-orange-600/50 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl transition-colors shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Request'
                  )}
                </button>
                <p className="text-center text-zinc-500 text-sm mt-4">
                  By submitting this form, you agree to be contacted regarding your service request.
                </p>
              </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
