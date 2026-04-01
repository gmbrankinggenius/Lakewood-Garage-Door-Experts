import { Shield, Clock, ThumbsUp, Wrench } from 'lucide-react';

export function TrustBar() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Same Day Service",
      description: "Available 24/7 for emergencies"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Certified Experts",
      description: "Fully trained & insured professionals"
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-orange-500" />,
      title: "100% Satisfaction",
      description: "Guaranteed workmanship"
    },
    {
      icon: <Wrench className="w-8 h-8 text-orange-500" />,
      title: "Upfront Pricing",
      description: "No hidden fees or surprises"
    }
  ];

  return (
    <section className="bg-white py-12 border-b border-zinc-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="p-4 bg-zinc-50 rounded-2xl group-hover:bg-orange-50 transition-colors">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 text-lg">{feature.title}</h3>
                <p className="text-zinc-500 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
