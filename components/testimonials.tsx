import { Star } from 'lucide-react';
import * as motion from 'motion/react-client';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "Lakewood, CO",
    text: "My garage door spring snapped on a Sunday morning. They were here within 2 hours and had it fixed quickly. The technician was polite and explained everything clearly. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael T.",
    location: "Golden, CO",
    text: "Great service! I thought I needed a whole new opener, but they honestly told me it just needed a minor repair. Saved me hundreds of dollars. Very trustworthy company.",
    rating: 5,
  },
  {
    id: 3,
    name: "David R.",
    location: "Lakewood, CO",
    text: "We had a new insulated garage door installed. The team was professional, cleaned up after themselves, and the new door looks amazing and is so quiet. 10/10 experience.",
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black tracking-tight text-zinc-900 mb-4">
            What Our Neighbors Say
          </h2>
          <p className="text-lg text-zinc-600">
            Don&apos;t just take our word for it. See why Lakewood homeowners trust us with their garage door needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-50 p-8 rounded-2xl border border-zinc-100 shadow-sm"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-zinc-700 mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <p className="font-bold text-zinc-900">{testimonial.name}</p>
                <p className="text-sm text-zinc-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
