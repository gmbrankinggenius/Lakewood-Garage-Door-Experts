"use client";

import { ArrowRight, Settings, Wrench, ShieldAlert, DoorOpen } from 'lucide-react';
import Link from 'next/link';
import * as motion from 'motion/react-client';

export function Services() {
  const services = [
    {
      icon: <Wrench className="w-10 h-10 text-orange-500" />,
      title: "Broken Garage Door Spring Repair",
      description: "Fast, safe replacement of torsion and extension springs in Lakewood. Don&apos;t try this yourself—let our local experts handle the high tension safely.",
      link: "#spring-repair"
    },
    {
      icon: <Settings className="w-10 h-10 text-orange-500" />,
      title: "Garage Door Opener Repair & Install",
      description: "Fixing unresponsive remotes, grinding noises, or installing modern, smart garage door openers from top brands like LiftMaster and Chamberlain.",
      link: "#opener-repair"
    },
    {
      icon: <DoorOpen className="w-10 h-10 text-orange-500" />,
      title: "New Garage Door Installation",
      description: "Upgrade your home&apos;s curb appeal with a beautiful, durable new garage door. We offer steel, wood, and custom options tailored to Colorado weather.",
      link: "#new-doors"
    },
    {
      icon: <ShieldAlert className="w-10 h-10 text-orange-500" />,
      title: "24/7 Emergency Service",
      description: "Stuck in or out? Our 24/7 emergency repair team is ready to respond quickly to get your door functioning again anywhere in Jefferson County.",
      link: "#emergency"
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-2">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight">
            Comprehensive Garage Door Solutions
          </h3>
          <p className="text-lg text-zinc-600">
            From minor repairs to complete installations, our certified technicians have the experience to handle any garage door issue quickly and professionally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 bg-zinc-50 rounded-2xl inline-block group-hover:bg-orange-50 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">{service.title}</h4>
              <p className="text-zinc-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link 
                href={service.link} 
                className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
