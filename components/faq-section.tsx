"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much does garage door repair cost in Lakewood, CO?",
      answer: "The cost of garage door repair in Lakewood depends on the issue. Minor fixes like sensor alignment may cost around $75-$150, while broken spring replacement typically ranges from $150 to $350 including parts and labor. We always provide a transparent, upfront quote before starting any work."
    },
    {
      question: "Do you offer same-day emergency garage door repair?",
      answer: "Yes! We understand that a stuck garage door is a major security and convenience issue. We offer 24/7 emergency garage door repair services throughout Lakewood and surrounding areas. In most cases, we can dispatch a certified technician to your home within a few hours."
    },
    {
      question: "Why won&apos;t my garage door open or close?",
      answer: "The most common reasons a garage door won&apos;t open include a broken torsion spring, snapped cables, misaligned photo-eye sensors, or a malfunctioning garage door opener. If the door feels extremely heavy or won&apos;t budge, do not force it—call a professional to avoid injury or further damage."
    },
    {
      question: "How long do garage door springs last?",
      answer: "Standard garage door springs are rated for about 10,000 cycles (one cycle is opening and closing the door once). For an average family, this translates to about 7-10 years of use. We also offer high-cycle springs that can last up to 20,000 cycles for heavy-use households."
    },
    {
      question: "What areas do you service besides Lakewood?",
      answer: "While we are headquartered in Lakewood, CO, our service area extends to Denver, Golden, Wheat Ridge, Arvada, Edgewater, and surrounding communities in Jefferson County. Contact us to see if we service your specific zip code."
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2">Common Questions</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-lg text-zinc-600">
            Find quick answers to the most common questions about our garage door repair and installation services in Lakewood.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-zinc-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-orange-500/50 shadow-sm"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-zinc-900 pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-orange-500 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-zinc-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
