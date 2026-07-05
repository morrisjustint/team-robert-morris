'use client';

import { Home, TrendingUp, DollarSign, MapPin, BookOpen, Users } from 'lucide-react';

const journeys = [
  {
    icon: Home,
    label: 'First-Time Home Buyer',
    description: 'We make your first purchase simple, stress-free, and exciting.',
    color: 'bg-[#2E5A3E]',
    href: '#first-time-buyers',
  },
  {
    icon: TrendingUp,
    label: 'Buying a Home',
    description: 'Expert guidance from search to keys in your hand.',
    color: 'bg-[#0F1C2E]',
    href: '#contact',
  },
  {
    icon: DollarSign,
    label: 'Selling Your Home',
    description: 'Smart pricing, marketing, and negotiation to maximize your return.',
    color: 'bg-[#C5A46E]',
    href: '#contact',
  },
  {
    icon: MapPin,
    label: 'Explore Areas',
    description: 'Discover the best neighborhoods Middle Tennessee has to offer.',
    color: 'bg-[#2E5A3E]',
    href: '#areas',
  },
  {
    icon: BookOpen,
    label: 'Free Resources',
    description: 'Guides, checklists, and tools to help you make confident decisions.',
    color: 'bg-[#0F1C2E]',
    href: '#resources',
  },
  {
    icon: Users,
    label: 'Who We Are',
    description: 'A team of local experts who genuinely care about your family.',
    color: 'bg-[#C5A46E]',
    href: '#about',
  },
];

export default function JourneyButtons() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="journey" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#C5A46E] font-semibold text-sm tracking-widest uppercase mb-3">
            Where Do You Start?
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0F1C2E] mb-4">
            Choose Your Journey
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto leading-relaxed">
            Every family&apos;s path is unique. Tell us where you are and we&apos;ll meet
            you there with the right guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {journeys.map((item) => {
            const Icon = item.icon;
            const isGold = item.color === 'bg-[#C5A46E]';
            return (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="group text-left p-7 rounded-2xl border border-[#E4E1DC] hover:border-transparent bg-[#F8F7F4] hover:bg-[#0F1C2E] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon
                    size={22}
                    className={isGold ? 'text-[#0F1C2E]' : 'text-white'}
                  />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-[#0F1C2E] group-hover:text-white mb-2 transition-colors">
                  {item.label}
                </h3>
                <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                  {item.description}
                </p>
                <div className="mt-4 text-[#C5A46E] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more
                  <span className="text-lg leading-none">&rarr;</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
