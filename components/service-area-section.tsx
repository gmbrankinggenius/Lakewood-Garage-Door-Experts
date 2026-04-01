"use client";

import * as motion from 'motion/react-client';
import { ServiceMap } from './service-map';

export function ServiceAreaSection() {
  return (
    <section className="py-24 bg-white border-t border-zinc-200 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2">Service Areas</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">
            Proudly Serving Lakewood & Beyond
          </h3>
          <p className="text-lg text-zinc-600">
            We provide fast, reliable garage door repair services to Lakewood, Denver, Golden, Wheat Ridge, Arvada, and Edgewater. Our local technicians are always nearby when you need them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ServiceMap />
        </motion.div>
      </div>
    </section>
  );
}
