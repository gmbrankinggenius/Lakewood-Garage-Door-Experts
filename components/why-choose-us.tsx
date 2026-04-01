"use client";

import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import * as motion from 'motion/react-client';

export function WhyChooseUs() {
  const reasons = [
    "Locally Owned & Operated in Lakewood, CO",
    "Over 15 Years of Local Industry Experience",
    "Fully Certified, Bonded, and Insured",
    "Transparent Upfront Pricing (No Surprises)",
    "High-Quality Parts & Long-Term Warranties",
    "24/7 Emergency Garage Door Repair Services"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-orange-500/10 rounded-[3rem] transform -rotate-3"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="https://picsum.photos/seed/technician/800/1000" 
                alt="Lakewood Garage Door Technician" 
                width={800} 
                height={1000} 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl border border-zinc-800 text-white">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-orange-500">15+</div>
                  <div>
                    <div className="font-bold text-lg">Years Experience</div>
                    <div className="text-sm text-zinc-400">Serving the Lakewood Community</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">
              Lakewood&apos;s Most Trusted Garage Door Experts
            </h3>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              When searching for &quot;garage door repair Lakewood&quot;, you need a team that understands local weather impacts on garage hardware. A broken garage door is a major inconvenience and a security risk. That&apos;s why we prioritize fast response times, professional service, and lasting repairs. When you call us, you&apos;re getting a team that cares about your home&apos;s safety and your peace of mind.
            </p>

            <ul className="space-y-4 mb-10">
              {reasons.map((reason, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-lg font-medium text-zinc-800">{reason}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200"
            >
              <p className="italic text-zinc-600 mb-4">
                &quot;They arrived within an hour of my call, fixed the broken spring quickly, and the price was exactly what they quoted over the phone. Highly recommend!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                  JS
                </div>
                <div>
                  <div className="font-bold text-zinc-900">John Smith</div>
                  <div className="text-sm text-zinc-500">Lakewood Resident</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
