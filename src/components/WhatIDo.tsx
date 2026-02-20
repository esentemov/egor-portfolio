import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ServiceItem {
  title: string;
  items: string[];
}

const services: ServiceItem[] = [
  {
    title: 'PRODUCT ANALYTICS',
    items: [
      'KPI frameworks & metric trees',
      'Funnel & retention analysis',
      'Monetization optimization'
    ]
  },
  {
    title: 'EXPERIMENTATION',
    items: [
      'Hypothesis prioritization',
      'A/B testing end-to-end',
      'Statistical validation'
    ]
  },
  {
    title: 'DATA INFRASTRUCTURE',
    items: [
      'Event tracking design',
      'SQL-heavy analytics',
      'Scalable data models'
    ]
  },
  {
    title: 'PRODUCT BUILDING',
    items: [
      'Full-stack development (Next.js, Supabase)',
      'Analytics architecture from scratch',
      'Data-first product strategy'
    ]
  }
];

export default function WhatIDo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl lg:text-7xl font-bold mb-16">WHAT I DO</h2>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-2xl font-bold">{service.title}</span>
                <ChevronDown
                  className={`w-6 h-6 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6 space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[#B7F34D] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-400 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
